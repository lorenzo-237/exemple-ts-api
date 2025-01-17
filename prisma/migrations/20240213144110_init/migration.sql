-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "reset_password_token" TEXT,
    "reset_password_expires" TIMESTAMP(3),
    "validate_account_token" TEXT,
    "validate_account_expires" TIMESTAMP(3),
    "validate" BOOLEAN NOT NULL DEFAULT false,
    "double_fa_token" TEXT,
    "double_fa_activate" BOOLEAN NOT NULL DEFAULT false,
    "double_fa_method" TEXT,
    "double_fa_sms_service" TEXT,
    "double_fa_sms_date" TIMESTAMP(3),
    "phone_number" TEXT,
    "double_fa_first_verify" BOOLEAN NOT NULL DEFAULT false,
    "magic_link_token" TEXT,
    "magic_link_token_expires" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_reset_password_token_key" ON "users"("reset_password_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_validate_account_token_key" ON "users"("validate_account_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_double_fa_token_key" ON "users"("double_fa_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_magic_link_token_key" ON "users"("magic_link_token");
