import { getStockAndSales } from '@/src/lib/graph';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getStockAndSales();
  return NextResponse.json(data);
}
