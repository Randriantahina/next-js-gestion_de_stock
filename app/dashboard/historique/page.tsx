'use client';

import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { useEffect, useState } from 'react';

export default function SalesPage() {
  const [sales, setSales] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/sales');
      const data = await res.json();
      setSales(data);
    };
    fetchData();
  }, []);

  // Fonction pour supprimer une vente par stockId
  const handleDelete = async (stockId: number) => {
    await fetch('/api/sales', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stockId }),
    });
    setSales((prev) => prev.filter((sale) => sale.stockId !== stockId));
  };

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
            <div className="flex flex-col items-end">
              <p className="text-sm text-muted-foreground">
                {new Date(sale.createdAt).toLocaleString()}
              </p>
              <Button
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(sale.stockId)}
              >
                Supprimer
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
