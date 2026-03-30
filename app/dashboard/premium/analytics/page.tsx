import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumAnalyticsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Analytics - Premium Plan" type="analytics" tier="premium" />
    </DashboardLayout>
  );
}
