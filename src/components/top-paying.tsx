'use client';

import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import DashboardCard from './dashboard-card';
import { cn } from '../lib/utils';

const products = [
  {
    id: '1',
    name: 'Sunil Joshi',
    post: 'Web Designer',
    pname: 'Elite Admin',
    priority: 'Low',
    pbg: 'bg-blue-500',
    budget: '3.9',
  },
  {
    id: '2',
    name: 'Andrew McDownland',
    post: 'Project Manager',
    pname: 'Real Homes WP Theme',
    priority: 'Medium',
    pbg: 'bg-yellow-500',
    budget: '24.5',
  },
  {
    id: '3',
    name: 'Christopher Jamil',
    post: 'Project Manager',
    pname: 'MedicalPro WP Theme',
    priority: 'High',
    pbg: 'bg-red-500',
    budget: '12.8',
  },
  {
    id: '4',
    name: 'Nirav Joshi',
    post: 'Frontend Engineer',
    pname: 'Hosting Press HTML',
    priority: 'Critical',
    pbg: 'bg-green-500',
    budget: '2.4',
  },
];

const TopPayingClients = () => {
  return (
    <DashboardCard title="Top Paying Clients">
      <div className="overflow-x-auto mt-4">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-sm">Id</TableHead>
              <TableHead className="font-semibold text-sm">Assigned</TableHead>
              <TableHead className="font-semibold text-sm">Name</TableHead>
              <TableHead className="font-semibold text-sm">Priority</TableHead>
              <TableHead className="font-semibold text-sm text-right">
                Budget
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="text-sm font-medium">
                  {product.id}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-semibold text-sm">{product.name}</p>
                    <p className="text-xs text-gray-500">{product.post}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-sm text-gray-600">{product.pname}</p>
                </TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'text-xs text-white px-2 py-1 rounded',
                      product.pbg
                    )}
                  >
                    {product.priority}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <p className="text-sm font-semibold">${product.budget}k</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardCard>
  );
};

export default TopPayingClients;
