import React from 'react';
import { Card, CardContent } from './ui/card';

type Props = {
  title?: string;
  subtitle?: string;
  action?: React.ReactElement;
  footer?: React.ReactElement;
  cardheading?: string | React.ReactElement;
  headtitle?: string | React.ReactElement;
  headsubtitle?: string | React.ReactElement;
  children?: React.ReactElement;
  middlecontent?: string | React.ReactElement;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent,
}: Props) => {
  return (
    <Card className="shadow-md">
      {cardheading ? (
        <CardContent className="p-4">
          <h2 className="text-lg font-semibold">{headtitle}</h2>
          <p className="text-sm text-muted-foreground">{headsubtitle}</p>
        </CardContent>
      ) : (
        <CardContent className="p-6">
          {title && (
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                {subtitle && (
                  <p className="text-sm text-muted-foreground">{subtitle}</p>
                )}
              </div>
              {action && <div>{action}</div>}
            </div>
          )}

          {children}
        </CardContent>
      )}

      {middlecontent && <div className="px-6 pb-4 pt-0">{middlecontent}</div>}

      {footer && <div className="px-6 pb-4">{footer}</div>}
    </Card>
  );
};

export default DashboardCard;
