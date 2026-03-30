import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProResidentsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Residents - Pro Plan" type="residents" tier="pro" />
    </DashboardLayout>
  );
}
