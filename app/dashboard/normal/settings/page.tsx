import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function NormalSettingsPage() {
  return (
    <DashboardLayout role="admin" tier="normal">
      <ModuleContent title="Settings - Standard Plan" type="settings" tier="normal" />
    </DashboardLayout>
  );
}
