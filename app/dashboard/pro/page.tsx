import { DashboardLayout } from '@/components/dashboard/layout';
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function ProDashboard() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <DashboardContent role="admin" tier="pro" />
    </DashboardLayout>
  );
}
