/*
  Warnings:

  - You are about to drop the `permissions` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('CREATE', 'READ', 'UPDATE', 'DELETE', 'ALL');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('FREE', 'BASIC', 'PREMIUM', 'ENTERPRISE', 'TRIAL', 'DEMO', 'TEST');

-- DropForeignKey
ALTER TABLE "permissions" DROP CONSTRAINT "permissions_userId_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "accountType" "AccountType" NOT NULL DEFAULT 'TRIAL',
ADD COLUMN     "permissions" "Permissions"[] DEFAULT ARRAY['READ']::"Permissions"[];

-- DropTable
DROP TABLE "permissions";
