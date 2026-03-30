import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumPropertiesPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="dorms - Premium Plan" type="dorms" tier="premium" />
    </DashboardLayout>
  );
}
