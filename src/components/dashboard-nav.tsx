'use client';

import { NotebookPen, History, PackagePlus, Boxes } from 'lucide-react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function DasboardNav() {
  const pathname = usePathname();

  const menuDashboard = [
    { name: 'dashboard', icon: NotebookPen, path: '/dashboard/acceuil' },
    { name: 'new stock', icon: PackagePlus, path: '/dashboard/new_stock' },
    { name: 'stocks', icon: Boxes, path: '/dashboard/stock' },
    {
      name: 'Historique de Vente',
      icon: History,
      path: '/dashboard/historique',
    },
  ];
  return (
    <nav className="flex md:flex-col md:h-full md:w-16 w-full lg:w-60 gap-2 flex-wrap border rounded-xl p-4">
      {menuDashboard.map((link, index) => {
        const isActive = pathname.startsWith(link.path);
        return (
          <Link href={link.path} key={index} passHref>
            <div
              className={`flex items-center justify-center lg:justify-start gap-2 cursor-pointer lg:p-3 p-3 hover:bg-orange-500  hover:bg-opacity-50 hover:text-white text-sm font-bold rounded-md ${
                isActive && 'bg-orange-500 text-white'
              }`}
            >
              <link.icon className="w-4" />
              <span className="hidden lg:block">{link.name}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
