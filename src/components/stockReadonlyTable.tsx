'use client';

import React, { useState, useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import DashboardCard from './dashboard-card';
import { getStocks } from '../lib/actions-stock';
import { Stock } from '../lib/type';

const StockReadonlyTable = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchStocks = async () => {
      setIsLoading(true);
      const data = await getStocks();
      setStocks(data);
      setIsLoading(false);
    };

    fetchStocks();
  }, []);

  return (
    <DashboardCard title="">
      <div className="overflow-x-auto mt-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Stocks</h1>
        </div>
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-sm">Id</TableHead>
              <TableHead className="font-semibold text-sm">Nom</TableHead>
              <TableHead className="font-semibold text-sm">
                Description
              </TableHead>
              <TableHead className="font-semibold text-sm">
                Prix unitaire
              </TableHead>
              <TableHead className="font-semibold text-sm">Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stocks.map((stock) => (
              <TableRow key={stock.id}>
                <TableCell className="text-sm font-medium">
                  {stock.id}
                </TableCell>
                <TableCell>
                  <p className="font-semibold text-sm">{stock.name}</p>
                </TableCell>
                <TableCell>
                  <p className="font-semibold text-sm">{stock.description}</p>
                </TableCell>
                <TableCell>
                  <p className="text-xs text-gray-500">{stock.price}</p>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      stock.status <= 5
                        ? 'bg-red-100 text-red-800'
                        : stock.status <= 10
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {stock.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardCard>
  );
};

export default StockReadonlyTable;
