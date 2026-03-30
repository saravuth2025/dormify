import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProMaintenancePage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Maintenance - Pro Plan" type="maintenance" tier="pro" />
    </DashboardLayout>
  );
}
