import { z } from 'zod';

export const bookSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Le nom doit contenir au moins 2 caractères' })
    .nonempty({ message: 'Le nom est requis' }),
  price: z
    .number()
    .positive({ message: 'Le prix doit être positif' })
    .min(0.01, { message: 'Le prix minimum est de 0.01' }),
  status: z
    .number()
    .int({ message: 'Le statut doit être un nombre entier' })
    .min(0, { message: 'Le statut ne peut pas être négatif' }),
});
