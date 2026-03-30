import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProRevenuePage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Revenue - Pro Plan" type="revenue" tier="pro" />
    </DashboardLayout>
  );
}
