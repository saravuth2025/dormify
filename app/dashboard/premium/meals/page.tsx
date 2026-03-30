import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumMealsPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Meals - Premium Plan" type="meals" tier="premium" />
    </DashboardLayout>
  );
}
