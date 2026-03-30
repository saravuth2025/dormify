import { DashboardLayout } from '@/components/dashboard/layout';
import { TenantMaintenanceView } from '@/components/dashboard/tenant-views';

export default function TenantMaintenancePage() {
  return (
    <DashboardLayout role="tenant" tier="normal">
      <TenantMaintenanceView />
    </DashboardLayout>
  );
}
