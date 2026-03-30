import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProReportsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Reports - Pro Plan" type="reports" tier="pro" />
    </DashboardLayout>
  );
}
