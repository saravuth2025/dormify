import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function TenantMealsPage() {
  return (
    <DashboardLayout role="tenant" tier="normal">
      <ModuleContent title="Meal Selection - Resident Portal" type="meals" tier="normal" role="tenant" />
    </DashboardLayout>
  );
}
