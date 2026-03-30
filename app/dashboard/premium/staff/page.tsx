import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumStaffPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Staff - Premium Plan" type="staff" tier="premium" />
    </DashboardLayout>
  );
}
