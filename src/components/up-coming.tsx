'use client';

import {
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
  ShoppingCart,
} from 'lucide-react';
import DashboardCard from './dashboard-card';

const UpcomingSchedules = () => {
  return (
    <DashboardCard title="Upcoming Schedules">
      <div className="space-y-4">
        <div className="space-y-2">
          {/* Timeline Item 1 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Clock className="text-primary w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">09:30 am</div>
              <div className="font-medium">
                Payment received from John Doe of $385.90
              </div>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-4"></div>
        </div>

        <div className="space-y-2">
          {/* Timeline Item 2 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <CheckCircle className="text-secondary w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">10:00 am</div>
              <div className="font-semibold">New sale recorded</div>{' '}
              <a href="/" className="text-primary underline text-sm">
                #ML-3467
              </a>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-4"></div>
        </div>

        <div className="space-y-2">
          {/* Timeline Item 3 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <DollarSign className="text-success w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">12:00 am</div>
              <div className="font-medium">
                Payment was made of $64.95 to Michael
              </div>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-4"></div>
        </div>

        <div className="space-y-2">
          {/* Timeline Item 4 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <ShoppingCart className="text-warning w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">09:30 am</div>
              <div className="font-semibold">New sale recorded</div>{' '}
              <a href="/" className="text-primary underline text-sm">
                #ML-3467
              </a>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-4"></div>
        </div>

        <div className="space-y-2">
          {/* Timeline Item 5 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <XCircle className="text-error w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">09:30 am</div>
              <div className="font-semibold">New arrival recorded</div>
            </div>
          </div>
          <div className="border-l border-gray-200 pl-4 ml-4"></div>
        </div>

        <div className="space-y-2">
          {/* Timeline Item 6 */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <CheckCircle className="text-success w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-gray-500">12:00 am</div>
              <div className="font-medium">Payment Received</div>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default UpcomingSchedules;
