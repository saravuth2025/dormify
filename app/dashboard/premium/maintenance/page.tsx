import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumMaintenancePage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Maintenance - Premium Plan" type="maintenance" tier="premium" />
    </DashboardLayout>
  );
}
