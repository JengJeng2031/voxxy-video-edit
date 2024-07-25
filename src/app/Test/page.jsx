import { PrismaClient } from '@prisma/client';
import React from 'react';
const prisma = new PrismaClient();

async function testConnection() {
  try {
    await prisma.$connect();
    console.log('เชื่อมต่อกับฐานข้อมูลสำเร็จ!');
  } catch (err) {
    console.error('ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้', err);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
