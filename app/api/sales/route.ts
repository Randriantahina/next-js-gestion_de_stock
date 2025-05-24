import { NextResponse } from 'next/server';
import { getSales, deleteSalesByStockId } from '@/src/lib/actions-sale';

export async function GET() {
  const sales = await getSales();
  return NextResponse.json(sales);
}

export async function DELETE(request: Request) {
  const { stockId } = await request.json();
  if (!stockId) {
    return NextResponse.json({ error: 'stockId requis' }, { status: 400 });
  }
  await deleteSalesByStockId(stockId);
  return NextResponse.json({ success: true });
}
