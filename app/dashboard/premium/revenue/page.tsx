import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumRevenuePage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Revenue - Premium Plan" type="revenue" tier="premium" />
    </DashboardLayout>
  );
}
