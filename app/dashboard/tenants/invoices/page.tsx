import { DashboardLayout } from '@/components/dashboard/layout';
import { TenantInvoicesView } from '@/components/dashboard/tenant-views';

export default function TenantInvoicesPage() {
  return (
    <DashboardLayout role="tenant" tier="normal">
      <TenantInvoicesView />
    </DashboardLayout>
  );
}
