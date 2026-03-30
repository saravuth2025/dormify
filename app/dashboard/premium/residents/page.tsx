import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumResidentsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Residents - Premium Plan" type="residents" tier="premium" />
    </DashboardLayout>
  );
}
