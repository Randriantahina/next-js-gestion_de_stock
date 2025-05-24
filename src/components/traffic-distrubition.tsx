'use client';

import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ArrowUpRight } from 'lucide-react';
import DashboardCard from './dashboard-card';
import { useEffect, useState } from 'react';

const TrafficDistribution = () => {
  // chart options
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 170,
    },
    colors: ['#F1C40F', '#E74C3C', '#2980B9'], // Simulé via Tailwind colors
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: 'light', // Pas de thème dynamique ici, simplifié pour Tailwind
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };
  const seriescolumnchart: any = [5368, 3500, 4106];
  const [totalStock, setTotalStock] = useState(0);

  useEffect(() => {
    fetch('/api/stock')
      .then((res) => res.json())
      .then((stocks) => {
        setTotalStock(stocks.length); // Affiche le nombre de stocks distincts
      });
  }, []);

  return (
    <DashboardCard title="Stocks">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Left Column */}
        <div>
          <div className="text-3xl font-semibold">{totalStock}</div>
          <div className="flex flex-col sm:flex-row mt-2 items-center">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <ArrowUpRight width={18} color="#39B69A" />
              </div>
              <div className="font-semibold text-sm">+9%</div>
            </div>
            <div className="text-sm text-gray-500 ml-2">last year</div>
          </div>
          <div className="flex flex-row space-x-3 mt-6">
            <div className="flex items-center space-x-1">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
              <div className="text-sm text-gray-500">Organic</div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              <div className="text-sm text-gray-500">Referral</div>
            </div>
          </div>
        </div>

        {/* Right Column with Chart */}
        <div>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            width="100%"
            height="150px"
          />
        </div>
      </div>
    </DashboardCard>
  );
};

export default TrafficDistribution;
