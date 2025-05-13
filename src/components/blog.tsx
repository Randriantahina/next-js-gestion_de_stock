'use client';

import Link from 'next/link';

import { ShoppingCart } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const ecoCard = [
  {
    title: 'Boat Headphone',
    subheader: 'September 14, 2023',
    photo: '/images/products/s4.jpg',
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: 'MacBook Air Pro',
    subheader: 'September 14, 2023',
    photo: '/images/products/s5.jpg',
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: 'Red Valvet Dress',
    subheader: 'September 14, 2023',
    photo: '/images/products/s7.jpg',
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'September 14, 2023',
    photo: '/images/products/s11.jpg',
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
];

const Blog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {ecoCard.map((product, index) => (
        <Card key={index} className="relative">
          <Link href="/">
            <img
              src={product.photo}
              alt={product.title}
              className="w-full h-[250px] object-cover rounded-t-md"
            />
          </Link>

          {/* Floating Cart Button */}
          <Button
            size="icon"
            className="absolute bottom-20 right-4 rounded-full p-2 h-8 w-8"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>

          <CardContent className="p-4 pt-3">
            <h3 className="text-lg font-semibold">{product.title}</h3>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-2">
                <span className="text-base font-bold">${product.price}</span>
                <span className="line-through text-gray-500 text-sm">
                  ${product.salesPrice}
                </span>
              </div>

              <div className="flex space-x-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                    )}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.323 2.415a1 1 0 00-.364 1.118l1.26 3.89c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.323 2.414c-.784.57-1.838-.197-1.539-1.118l1.26-3.89a1 1 0 00-.364-1.118L2.71 9.317c-.783-.57-.38-1.81.588-1.81H7.4a1 1 0 00.95-.69l1.26-3.89z" />
                  </svg>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blog;
