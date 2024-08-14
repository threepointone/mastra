-- CreateEnum
CREATE TYPE "FieldTypes" AS ENUM ('LONG_TEXT', 'SINGLE_LINE_TEXT', 'SINGLE_SELECT', 'MULTI_SELECT', 'CHECKBOX', 'DATE', 'USER', 'BADGE_LIST', 'CURRENCY', 'URL', 'PHONE', 'CONTACT', 'COMPANY', 'PERSON', 'ENRICHMENT', 'COMPOSITE');

-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('ACTIVE', 'ARCHIVED');

-- CreateEnum
CREATE TYPE "RecordEnrichmentStatus" AS ENUM ('PENDING', 'APPLIED', 'UNAPPLIED', 'FAILED');

-- CreateTable
CREATE TABLE "fields" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "config" JSONB,
    "description" TEXT,
    "type" "FieldTypes" NOT NULL,
    "order" INTEGER NOT NULL,
    "modifiable" BOOLEAN NOT NULL DEFAULT true,
    "parentId" TEXT,
    "syncTableId" TEXT,

    CONSTRAINT "fields_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" TEXT NOT NULL,
    "externalId" TEXT,
    "data" JSONB NOT NULL DEFAULT '{}',
    "source" TEXT NOT NULL DEFAULT 'MANUAL',
    "recordType" TEXT NOT NULL,
    "syncTableId" TEXT,
    "status" "RecordStatus" NOT NULL DEFAULT 'ACTIVE',
    "enrichmentStatus" "RecordEnrichmentStatus" NOT NULL DEFAULT 'UNAPPLIED',
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_integration_credentials" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "scope" TEXT[],
    "dataIntegrationId" TEXT NOT NULL,

    CONSTRAINT "data_integration_credentials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_integrations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "issues" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "syncConfig" JSONB,
    "connectionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "lastSyncAt" TIMESTAMP(3),
    "subscriptionId" TEXT,

    CONSTRAINT "data_integrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "syncTable" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "dataIntegrationId" TEXT NOT NULL,
    "lastSyncId" TEXT,

    CONSTRAINT "syncTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "records_externalId_idx" ON "records"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "data_integration_credentials_dataIntegrationId_key" ON "data_integration_credentials"("dataIntegrationId");

-- CreateIndex
CREATE INDEX "data_integrations_subscriptionId_idx" ON "data_integrations"("subscriptionId");

-- CreateIndex
CREATE UNIQUE INDEX "data_integrations_connectionId_name_key" ON "data_integrations"("connectionId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "syncTable_dataIntegrationId_type_key" ON "syncTable"("dataIntegrationId", "type");

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "fields"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fields" ADD CONSTRAINT "fields_syncTableId_fkey" FOREIGN KEY ("syncTableId") REFERENCES "syncTable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "records" ADD CONSTRAINT "records_syncTableId_fkey" FOREIGN KEY ("syncTableId") REFERENCES "syncTable"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "data_integration_credentials" ADD CONSTRAINT "data_integration_credentials_dataIntegrationId_fkey" FOREIGN KEY ("dataIntegrationId") REFERENCES "data_integrations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "syncTable" ADD CONSTRAINT "syncTable_dataIntegrationId_fkey" FOREIGN KEY ("dataIntegrationId") REFERENCES "data_integrations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
