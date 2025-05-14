'use client';

import { Card, CardContent } from '@/src/components/ui/card';
import { getSales } from '@/src/lib/actions-sale';
import { useEffect, useState } from 'react';

export default function SalesPage() {
  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSales();
      setSales(data);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Historique des ventes</h1>

      {sales.map((sale) => (
        <Card key={sale.id}>
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">{sale.stock.name}</p>
              <p className="text-sm text-gray-500">
                Quantité : {sale.quantity}
              </p>
              <p className="text-sm text-gray-500">
                Utilisateur : {sale.user.email}
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {new Date(sale.createdAt).toLocaleString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
