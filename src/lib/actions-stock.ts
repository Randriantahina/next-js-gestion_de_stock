'use server';

import { prisma } from './prisma';

export async function addStock(data: {
  name: string;
  description: string;
  price: number;
  status: number;
}) {
  return await prisma.stock.create({
    data,
  });
}

export async function editStock(
  id: number,
  data: { name: string; description: string; price: number; status: number }
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
export async function updateStock(stockId: number, newStatus: number) {
  return await prisma.stock.update({
    where: { id: stockId },
    data: { status: newStatus },
  });
}
