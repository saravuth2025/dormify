import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumPaymentsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Payments - Premium Plan" type="payments" tier="premium" />
    </DashboardLayout>
  );
}
