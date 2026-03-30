import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProRoomsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Rooms - Pro Plan" type="rooms" tier="pro" />
    </DashboardLayout>
  );
}
