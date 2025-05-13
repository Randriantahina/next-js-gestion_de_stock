'use client';

import React from 'react';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import dynamic from 'next/dynamic';
import DashboardCard from './dashboard-card';
import { Button } from './ui/button';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = ['Action', 'Another Action', 'Something else here'];

const ProfitExpenses = () => {
  // Chart options
  const primary = '#6366f1'; // Indigo-500 (Tailwind)
  const secondary = '#ef4444'; // Red-500 (Tailwind)

  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: { show: true },
      height: 350,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '42%',
        borderRadius: 6,
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: 'butt',
      colors: ['transparent'],
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: { lines: { show: false } },
    },
    yaxis: { tickAmount: 4 },
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisBorder: { show: false },
    },
    tooltip: {
      theme: 'light',
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart: any = [
    {
      name: 'Pixel',
      data: [9, 5, 3, 7, 5, 10, 3],
    },
    {
      name: 'Ample',
      data: [6, 3, 9, 5, 4, 6, 4],
    },
  ];

  return (
    <DashboardCard
      title="Profit & Expenses"
      action={
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {options.map((option) => (
              <DropdownMenuItem key={option}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      }
    >
      <div className="rounded-md overflow-hidden">
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="bar"
          width={'100%'}
          height="350px"
        />
      </div>
    </DashboardCard>
  );
};

export default ProfitExpenses;
