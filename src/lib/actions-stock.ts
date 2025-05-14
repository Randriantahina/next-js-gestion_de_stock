'use server';

import { prisma } from './prisma';

export async function addStock(data: {
  name: string;
  price: number;
  status: number;
}) {
  return await prisma.stock.create({
    data,
  });
}

export async function editStock(
  id: number,
  data: { name: string; price: number; status: number }
) {
  return await prisma.stock.update({
    where: { id },
    data,
  });
}

export async function deleteStock(id: number) {
  return await prisma.stock.delete({
    where: { id },
  });
}

export async function getStocks() {
  return await prisma.stock.findMany();
}

//buy

export async function buyStock(stockId: string, quantity: number) {
  if (quantity <= 0) {
    throw new Error('Quantité invalide');
  }

  const stock = await prisma.stock.findUnique({
    where: { id: stockId },
  });

  if (!stock) {
    throw new Error('Stock introuvable');
  }

  if (stock.status < quantity) {
    throw new Error('Quantité demandée supérieure au stock disponible');
  }

  await prisma.stock.update({
    where: { id: stockId },
    data: {
      status: stock.status - quantity,
    },
  });
}
