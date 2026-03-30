import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ChefPlanPage() {
  return (
    <DashboardLayout role="chef" tier="normal">
      <ModuleContent title="Meal Planning - Chef Portal" type="meals" tier="normal" />
    </DashboardLayout>
  );
}
