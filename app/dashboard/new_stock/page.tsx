'use client';

import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { addStock } from '@/src/lib/actions-stock';
import Link from 'next/link';
import { useState } from 'react';

export interface FormDataType {
  id?: string;
  name: string;
  description: string;
  price: number;
  status?: string;
}
const PageSetting = () => {
  // Déclaration des états
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    description: '',
    price: 0,
    status: '',
  });

  // Gestion du changement des champs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addStock({
      ...formData,
      price: Number(formData.price), // conversion ici
      status: Number(formData.status), // conversion ici
    });
    // Optionnel : reset le formulaire ou afficher un message
    console.log('Produit créé:', formData);
  };

  return (
    <div className="px-4 py-6 w-[50rem] ">
      <form onSubmit={handleSubmit}>
        <Card className="flex justify-center items-center h-96 ">
          <div>
            <CardHeader>
              <CardTitle>
                <h1 className="text-2xl font-bold  mb-4">Ajouter un stock</h1>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex  flex-col">
              <div className="space-y-4 md:w-[450px]">
                <Input
                  type="text"
                  name="name"
                  placeholder="Nom"
                  className="input input-bordered w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
                <Textarea
                  name="description"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  value={formData.description}
                  onChange={handleChange}
                ></Textarea>

                <Input
                  type="number"
                  name="price"
                  placeholder="Prix"
                  className="input input-bordered w-full"
                  value={formData.price}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="status"
                  placeholder="status"
                  className="input input-bordered w-full"
                  value={formData.status}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <Button
                type="button"
                className="bg-red-500 mx-1 my-2 hover:bg-red-600 text-white"
              >
                <Link href="/dashboard/payment">Annuler</Link>
              </Button>
              <Button
                type="submit"
                className="bg-orange-500 mx-1 my-2 hover:bg-orange-600 text-white"
              >
                Créer note
              </Button>
            </CardFooter>
          </div>
        </Card>
      </form>
    </div>
  );
};

export default PageSetting;
