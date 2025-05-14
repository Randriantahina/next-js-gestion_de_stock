'use client';

import { useState } from 'react';
import { Stock } from '../lib/type';
import { buyStock } from '../lib/actions-stock';

interface BuyStockModalProps {
  isOpen: boolean;
  onClose: () => void;
  stock: Stock | null;
  onBuy: () => void;
}

export default function BuyStockModal({
  isOpen,
  onClose,
  stock,
  onBuy,
}: BuyStockModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  if (!isOpen || !stock) return null;

  const handleBuy = async () => {
    try {
      await buyStock(stock.id, quantity);
      setError('');
      onBuy(); // recharge le tableau
      onClose();
    } catch (err: any) {
      setError(err.message || "Erreur lors de l'achat");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Acheter: {stock.name}
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Quantité à acheter
          </label>
          <input
            type="number"
            min="1"
            className="w-full px-4 py-2 border rounded-lg"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            Annuler
          </button>
          <button
            onClick={handleBuy}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
          >
            Confirmer l’achat
          </button>
        </div>
      </div>
    </div>
  );
}
