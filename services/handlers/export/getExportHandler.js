import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import abilityValidator from "@/services/validator/abilityValidator";
const { createObjectCsvStringifier } = require("csv-writer");
const archiver = require("archiver");

export default async function getExportHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      // Create a new Prisma client instance
      const prisma = PRISMA_CLIENT;

      // Retrieve all model names from the Prisma schema
      const modelNames = Object.keys(prisma).filter((modelName) => {
        return !modelName.startsWith("_") && !modelName.startsWith("$");
      });

      // Create a writable stream for the zip file
      res.setHeader("Content-Type", "application/zip");
      const output = res;
      const archive = archiver("zip", { zlib: { level: 9 } });

      // Pipe the archive stream to the zip file
      archive.pipe(output);

      // Iterate over each model and export its data
      for (const modelName of modelNames) {
        // Retrieve the data for the current model
        const data = await prisma[modelName].findMany();

        if (data && data.length > 0) {
          // Create a CSV writer for the current model
          const csvStringifier = createObjectCsvStringifier({
            header: Object.keys(data[0]).map((field) => ({
              id: field,
              title: field,
            })),
          });

          // Generate the CSV content
          const csvContent =
            csvStringifier.getHeaderString() +
            csvStringifier.stringifyRecords(data);

          // Append the CSV content to the zip archive
          archive.append(csvContent, { name: `${modelName}.csv` });
        }
      }

      // Finalize the archive
      archive.finalize();
    },
    action: "export",
    subject: "all",
    fields: undefined,
    type: "all",
  });
}
