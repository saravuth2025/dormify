import { DashboardLayout } from '@/components/dashboard/layout';
import { TenantProfileView } from '@/components/dashboard/tenant-views';

export default function TenantProfilePage() {
  return (
    <DashboardLayout role="tenant" tier="normal">
      <TenantProfileView />
    </DashboardLayout>
  );
}
