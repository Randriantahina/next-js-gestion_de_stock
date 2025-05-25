'use client';

import ProductSales from '@/src/components/product-sale';
import TrafficDistribution from '@/src/components/traffic-distrubition';

import ProfitExpenses from '@/src/components/profit-expense';
import PageContainer from '@/src/components/container';
import StockReadonlyTable from '@/src/components/stockReadonlyTable';

const PageNote = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <div className="px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ProfitExpenses */}
          <div className="col-span-1 lg:col-span-2">
            <ProfitExpenses />
          </div>
          {/* TrafficDistribution and ProductSales */}
          <div className="col-span-1 lg:col-span-1">
            <div className="grid grid-cols-1 gap-6">
              <div className="col-span-1">
                <TrafficDistribution />
              </div>
              <div className="col-span-1">
                <ProductSales />
              </div>
            </div>
          </div>
          {/* UpcomingSchedules */}
          {/* <div className="col-span-1 lg:col-span-1">
            <UpcomingSchedules />
          </div> */}
          {/* TopPayingClients */}
          <div className="col-span-1 lg:col-span-2">
            <StockReadonlyTable />
          </div>
          {/* Blog */}
          {/* <div className="col-span-1 lg:col-span-3">
            <Blog />
          </div> */}
        </div>
      </div>
    </PageContainer>
  );
};

export default PageNote;
