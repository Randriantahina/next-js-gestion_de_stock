'use server';

import { prisma } from './prisma';

export async function getSales() {
  return await prisma.sale.findMany({
    include: {
      stock: true,
      user: true, // Inclure les informations sur l'utilisateur
    },
    orderBy: { createdAt: 'desc' },
  });
}
export async function createSale(
  stockId: number,
  userId: number,
  quantity: number
) {
  return await prisma.sale.create({
    data: {
      stockId,
      userId,
      quantity,
    },
  });
}
