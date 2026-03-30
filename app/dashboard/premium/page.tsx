import { DashboardLayout } from '@/components/dashboard/layout';
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function PremiumDashboard() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <DashboardContent role="admin" tier="premium" />
    </DashboardLayout>
  );
}
