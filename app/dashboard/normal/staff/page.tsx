import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalStaffPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Staff - Standard Plan" type="staff" tier="normal" />
    </DashboardLayout>
  );
}
