import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalResidentsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Residents - Standard Plan" type="residents" tier="normal" />
    </DashboardLayout>
  );
}
