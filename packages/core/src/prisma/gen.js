const { writeFileSync } = require('fs');

const tmpl = `
enum FieldTypes {
  LONG_TEXT
  SINGLE_LINE_TEXT
  SINGLE_SELECT
  MULTI_SELECT
  CHECKBOX
  DATE
  USER
  BADGE_LIST
  CURRENCY
  URL
  PHONE
  CONTACT
  COMPANY
  PERSON
  ENRICHMENT
  COMPOSITE
}

model Field {
  id           String      @id @default(cuid())
  name         String
  displayName  String
  visible      Boolean     @default(true)
  recordType   String
  config       Json?
  description  String?
  type         FieldTypes
  order        Int
  modifiable   Boolean     @default(true)

  parentId        String? @map("parentId")
  parent          Field?  @relation("FieldToField", fields: [parentId], references: [id])
  compositeFields Field[] @relation("FieldToField")

  @@map("fields")
}

enum RecordStatus {
  ACTIVE
  ARCHIVED
}

enum RecordEnrichmentStatus {
  PENDING
  APPLIED
  UNAPPLIED
  FAILED
}

model Record {
  id         String  @id @default(cuid())
  externalId String?
  data          Json      @default("{}")
  source        String    @default("MANUAL")
  recordType   String

  status           RecordStatus           @default(ACTIVE)
  enrichmentStatus RecordEnrichmentStatus @default(UNAPPLIED)

  deletedAt   DateTime?
  createdAt   DateTime   @default(now())
  updatedAt   DateTime?  @default(now())
  
  @@index([externalId])
  @@map("records")
}
`

function main() {
  const schema = `
        datasource db {
            provider = "postgresql"
            url      = "yo"
        }
        generator client {
            provider = "prisma-client-js"
          }
        ${tmpl}
    `;

  writeFileSync(__dirname + '/schema.prisma', schema);
}

main();