import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProLaundryPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Laundry Intelligence" type="laundry" tier="pro" />
    </DashboardLayout>
  );
}
