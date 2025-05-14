'use client';

import { useState } from 'react';
import { Stock } from '../lib/type';
import { updateStock } from '../lib/actions-stock';
import { createSale } from '../lib/actions-sale';
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
      if (!stock) return;

      // Enregistrez la vente dans la table Sale
      await createSale(stock.id, 1, quantity); // Remplacez "1" par l'ID de l'utilisateur connecté

      // Mettez à jour le stock en réduisant la quantité disponible
      const newStatus = stock.status - quantity;
      if (newStatus < 0) {
        throw new Error('La quantité demandée dépasse le stock disponible.');
      }
      await updateStock(stock.id, newStatus);

      setError('');
      onBuy(); // Recharge le tableau des stocks
      onClose(); // Ferme le modal
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
