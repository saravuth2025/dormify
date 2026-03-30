import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProMealsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Meals - Pro Plan" type="meals" tier="pro" />
    </DashboardLayout>
  );
}
