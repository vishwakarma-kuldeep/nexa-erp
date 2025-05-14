/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Roles` will be added. If there are existing duplicate values, this will fail.
  - Made the column `name` on table `Roles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Roles" ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");
