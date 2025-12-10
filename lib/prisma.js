import { PrismaClient } from '@prisma/client'

export const db = globalThis.prisma || new PrismaClient();


if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}


// Ye code PrismaClient ko import karta hai aur ek instance banata hai.
// Agar environment production nahi hai, toh globalThis.prisma ko is instance se set karta hai.
// Isse development mode mein baar-baar naye instances create nahi hote.
// Ye code database ke saath connection manage karta hai aur performance ko optimize karta hai.
// Ye file lib/prisma.js mein rakhi gayi hai, jahan se database operations ke liye use hoti hai.  