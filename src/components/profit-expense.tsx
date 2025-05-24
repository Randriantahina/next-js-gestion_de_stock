'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import DashboardCard from './dashboard-card';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ProfitExpenses() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/stock-sales')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const categories = data.map((item) => item.name);
  const stockData = data.map((item) => item.stock);
  const soldData = data.map((item) => item.sold);

  const optionscolumnchart = {
    chart: { type: 'bar', height: 350 },
    colors: ['#6366f1', '#ef4444'],
    xaxis: { categories },
    legend: { show: true },
  };

  const seriescolumnchart = [
    { name: 'Stock', data: stockData },
    { name: 'Vendus', data: soldData },
  ];

  return (
    <DashboardCard title="Stock & Ventes">
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
}
