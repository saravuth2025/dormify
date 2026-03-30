import { DashboardLayout } from '@/components/dashboard/layout';
import { ModuleContent } from '@/components/dashboard/module-content';

export default function PremiumAuditLogPage() {
  return (
    <DashboardLayout role="admin" tier="premium">
      <ModuleContent title="Audit Log - Premium Plan" type="reports" tier="premium" />
    </DashboardLayout>
  );
}
