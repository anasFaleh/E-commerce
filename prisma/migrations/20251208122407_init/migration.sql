-- CreateTable
CREATE TABLE "public"."Form" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "step1Data" JSONB,
    "step2Data" JSONB,
    "step3Data" JSONB,
    "currentStep" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
