import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProPaymentsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Payments - Pro Plan" type="payments" tier="pro" />
    </DashboardLayout>
  );
}
