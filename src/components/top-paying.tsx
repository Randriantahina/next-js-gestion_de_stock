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
import { Button } from './ui/button';
import { Edit, Trash } from 'lucide-react';
import {
  addStock,
  editStock,
  deleteStock,
  getStocks,
} from '../lib/actions-stock';
import { Stock } from '../lib/type';
import StockModal from './stock-modal';
import BuyStockModal from './buy-modal';

const TopPayingClients = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stockToEdit, setStockToEdit] = useState<Stock | undefined>(undefined);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedStockToBuy, setSelectedStockToBuy] = useState<Stock | null>(
    null
  );

  useEffect(() => {
    const fetchStocks = async () => {
      setIsLoading(true);
      const data = await getStocks();
      setStocks(data);
      setIsLoading(false);
    };

    fetchStocks();
  }, []);

  const handleAddStock = async (formData: Stock) => {
    setIsLoading(true);
    await addStock(formData);
    const updatedStocks = await getStocks();
    setStocks(updatedStocks);
    setIsLoading(false);
  };

  const handleEditStock = async (formData: Stock) => {
    setIsLoading(true);
    if (stockToEdit) {
      await editStock(stockToEdit.id, formData);
      const updatedStocks = await getStocks();
      setStocks(updatedStocks);
    }
    setIsLoading(false);
  };

  const handleDeleteStock = async (id: number) => {
    setIsLoading(true);
    await deleteStock(id);
    const updatedStocks = await getStocks();
    setStocks(updatedStocks);
    setIsLoading(false);
  };

  return (
    <DashboardCard title="">
      <div className="overflow-x-auto mt-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Stocks</h1>
          <Button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg disabled:opacity-50"
            disabled={isLoading}
          >
            Ajouter un stock
          </Button>
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
              <TableHead className="font-semibold text-sm text-center">
                Actions
              </TableHead>
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
                <TableCell className="text-right">
                  <div className="flex justify-center space-x-2">
                    <Button
                      onClick={() => {
                        setStockToEdit(stock);
                        setIsModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-blue-600 text-white text-xs font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <button
                      onClick={() => handleDeleteStock(stock.id)}
                      className="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-lg hover:bg-red-700 transition-colors duration-200 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                    <Button
                      onClick={() => {
                        setSelectedStockToBuy(stock); // on va créer ce state juste après
                        setIsBuyModalOpen(true); // on ouvre le modal d'achat
                      }}
                      className="px-3 py-1.5 bg-green-600 text-white text-xs font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 disabled:opacity-50"
                      disabled={isLoading}
                    >
                      Acheter
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <StockModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setStockToEdit(undefined);
          }}
          onSubmit={stockToEdit ? handleEditStock : handleAddStock}
          stockToEdit={stockToEdit}
        />
      </div>
      <BuyStockModal
        isOpen={isBuyModalOpen}
        onClose={() => {
          setIsBuyModalOpen(false);
          setSelectedStockToBuy(null);
        }}
        stock={selectedStockToBuy}
        onBuy={async () => {
          setIsLoading(true);
          const updatedStocks = await getStocks();
          setStocks(updatedStocks);
          setIsLoading(false);
        }}
      />
    </DashboardCard>
  );
};

export default TopPayingClients;
