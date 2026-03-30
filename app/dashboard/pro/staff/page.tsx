import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProStaffPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Staff - Pro Plan" type="staff" tier="pro" />
    </DashboardLayout>
  );
}
