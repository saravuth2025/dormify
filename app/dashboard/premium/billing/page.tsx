import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumBillingPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Billing - Premium Plan" type="billing" tier="premium" />
    </DashboardLayout>
  );
}
