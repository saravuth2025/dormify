import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalLaundryPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Laundry Management" type="laundry" tier="normal" />
    </DashboardLayout>
  );
}
