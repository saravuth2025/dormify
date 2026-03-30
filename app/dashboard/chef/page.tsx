import { DashboardLayout } from '@/components/dashboard/layout';
import { DashboardContent } from '@/components/dashboard/dashboard-content';

export default function ChefDashboard() {
  return (
    <DashboardLayout role="chef" tier="normal">
      <DashboardContent role="chef" tier="normal" />
    </DashboardLayout>
  );
}
