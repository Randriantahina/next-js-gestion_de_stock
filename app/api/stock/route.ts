import { NextResponse } from 'next/server';
import { getStocks } from '@/src/lib/actions-stock';

export async function GET() {
  const stocks = await getStocks();
  return NextResponse.json(stocks);
}
