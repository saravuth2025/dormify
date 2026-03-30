import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function ProSettingsPage() {
  return (
    <DashboardLayout role="admin" tier="pro">
      <ModuleContent title="Settings - Pro Plan" type="settings" tier="pro" />
    </DashboardLayout>
  );
}
