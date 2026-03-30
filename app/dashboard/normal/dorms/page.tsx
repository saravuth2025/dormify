import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalDormsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Dorms - Standard Plan" type="dorms" tier="normal" />
    </DashboardLayout>
  );
}
