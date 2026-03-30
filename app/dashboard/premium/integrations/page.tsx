import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumIntegrationsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="System Hub" type="integrations" tier="premium" />
    </DashboardLayout>
  );
}
