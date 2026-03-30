import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProIntegrationsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="System Hub" type="integrations" tier="pro" />
    </DashboardLayout>
  );
}
