import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalPaymentsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Payments - Standard Plan" type="payments" tier="normal" />
    </DashboardLayout>
  );
}
