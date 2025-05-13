import { useEffect, useState } from 'react';
import { StockFormData, StockModalProps } from '../lib/type';
import { bookSchema as stockSchema } from '../lib/schema'; // Renommez si nécessaire

const initialFormData: StockFormData = {
  name: '',
  price: 0,
  status: 0,
};

export default function StockModal({
  isOpen,
  onClose,
  onSubmit,
  stockToEdit,
}: StockModalProps) {
  const [formData, setFormData] = useState<StockFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof StockFormData, string>>
  >({});
  // Partial : Rend toutes les propriétés d'un type optionnelles.
  // Record : Crée un objet où chaque clé est d'un certain type, et chaque valeur d'un autre type.

  useEffect(() => {
    if (stockToEdit) {
      setFormData({
        name: stockToEdit.name,
        price: stockToEdit.price,
        status: stockToEdit.status,
      });
    } else {
      setFormData(initialFormData);
    }
  }, [stockToEdit, isOpen]);

  const handleClose = () => {
    setFormData(initialFormData);
    setErrors({});
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = stockSchema.parse(formData); // Utilisation de Zod pour valider les données
      onSubmit(validatedData);
      handleClose();
    } catch (error) {
      if (error instanceof stockSchema._def.typeName) {
        const newErrors: Partial<Record<keyof StockFormData, string>> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            newErrors[err.path[0] as keyof StockFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          {stockToEdit ? 'Modifier le stock' : 'Ajouter un nouveau stock'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Prix unitaire (€)
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={formData.price}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  price: e.target.value === '' ? 0 : parseFloat(e.target.value),
                })
              }
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Statut
            </label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value === '' ? 0 : parseInt(e.target.value),
                })
              }
            />
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status}</p>
            )}
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <button
              type="button"
              className="px-6 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
              onClick={handleClose}
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              {stockToEdit ? 'Modifier' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
