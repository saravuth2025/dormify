import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProBillingPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Billing - Pro Plan" type="billing" tier="pro" />
    </DashboardLayout>
  );
}
