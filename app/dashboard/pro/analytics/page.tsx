import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProAnalyticsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Analytics - Pro Plan" type="analytics" tier="pro" />
    </DashboardLayout>
  );
}
