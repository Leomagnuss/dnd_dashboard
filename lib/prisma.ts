// lib/prisma.ts
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

// Создаём пул подключений
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

// Создаём адаптер
const adapter = new PrismaPg(pool)

// Создаём клиент с адаптером
export const prisma = new PrismaClient({ adapter })