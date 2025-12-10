/*
  Warnings:

  - You are about to drop the column `industry` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_industry_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "industry",
ADD COLUMN     "industryId" TEXT;

-- CreateIndex
CREATE INDEX "User_industryId_idx" ON "User"("industryId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "IndustryInsight"("industry") ON DELETE SET NULL ON UPDATE CASCADE;
