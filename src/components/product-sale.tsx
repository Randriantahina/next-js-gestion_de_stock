'use client';

import dynamic from 'next/dynamic';
import { CheckCircle, ArrowDownRight, DollarSign } from 'lucide-react'; // Icônes Lucide
import DashboardCard from './dashboard-card';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ProductSales = () => {
  // Chart color
  const primary = '#34d399'; // Example primary color, replace with your color
  const secondary = '#f59e0b'; // Example secondary color
  const errorlight = '#fdede8';

  // Chart configuration
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    fill: {
      colors: [primary],
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'light',
    },
  };

  const seriescolumnchart: any = [
    {
      name: '',
      color: primary,
      data: [25, 66, 20, 40, 12, 58, 20],
    },
  ];

  return (
    <DashboardCard
      title="Product Sales"
      action={
        <button className="bg-red-600 p-2 rounded-full shadow-none">
          <DollarSign width={24} color="#ffffff" />
        </button>
      }
      footer={
        <Chart
          options={optionscolumnchart}
          series={seriescolumnchart}
          type="area"
          width={'100%'}
          height="60px"
        />
      }
    >
      <>
        <div className="text-3xl font-bold mt-[-20px]">$6,820</div>
        <div className="flex items-center space-x-2 my-1">
          <div className="bg-[#fdede8] rounded-full w-5 h-5 flex items-center justify-center">
            <ArrowDownRight width={18} color="#FA896B" />
          </div>
          <div className="font-semibold text-sm">+9%</div>
          <div className="text-sm text-gray-500">last year</div>
        </div>
      </>
    </DashboardCard>
  );
};

export default ProductSales;
