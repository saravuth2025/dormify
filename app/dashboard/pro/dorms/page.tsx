import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProDormsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Dorms - Pro Plan" type="dorms" tier="pro" />
    </DashboardLayout>
  );
}
