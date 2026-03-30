import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalReportsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Reports - Standard Plan" type="reports" tier="normal" />
    </DashboardLayout>
  );
}
