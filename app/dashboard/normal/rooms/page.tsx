import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalRoomsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Rooms - Standard Plan" type="rooms" tier="normal" />
    </DashboardLayout>
  );
}
