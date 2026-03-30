import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumReportsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Reports - Premium Plan" type="reports" tier="premium" />
    </DashboardLayout>
  );
}
