import { DashboardLayout } from '@/components/dashboard/layout';
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function NormalDashboard() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <DashboardContent role="admin" tier="normal" />
    </DashboardLayout>
  );
}
