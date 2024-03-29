import axios from "axios";

export default async function frontendReadCITLDirectors({
  limit,
  page,
  name,
  email,
  active,
  sortColumn,
  sortOrder,
}) {
  try {
    const cITLDirectors = await axios.get("/api/citl_director", {
      params: {
        limit,
        page,
        name,
        email,
        active,
        sortColumn,
        sortOrder,
      },
    });
    return cITLDirectors.data;
  } catch (error) {
    throw error;
  }
}
