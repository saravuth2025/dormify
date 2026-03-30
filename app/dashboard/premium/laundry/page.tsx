import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumLaundryPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Laundry Command Center" type="laundry" tier="premium" />
    </DashboardLayout>
  );
}
