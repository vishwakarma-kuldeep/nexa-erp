/*
  Warnings:

  - Added the required column `method` to the `user_api_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `user_api_logs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_api_logs" ADD COLUMN     "method" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
