import { DashboardLayout } from '@/components/dashboard/layout';
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function TenantDashboard() {
  return (
    <DashboardLayout role="tenant" tier="normal">
      <DashboardContent role="tenant" tier="normal" />
    </DashboardLayout>
  );
}
