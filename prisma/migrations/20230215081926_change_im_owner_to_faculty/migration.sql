-- DropForeignKey
ALTER TABLE "IM" DROP CONSTRAINT "IM_ownerId_fkey";

-- AlterTable
ALTER TABLE "IM" ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "IM" ADD CONSTRAINT "IM_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IM" ADD CONSTRAINT "IM_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
