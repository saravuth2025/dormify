'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  UtensilsCrossed,
  BarChart3,
  Settings,
  LogOut,
  Building2,
  Wallet,
  FileText,
  PieChart,
  ShieldCheck,
  Zap,
  Globe,
  CreditCard,
  History,
  Activity,
  UserCircle,
  ChevronRight,
  Waves
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  role: 'admin' | 'tenant' | 'chef';
  tier?: 'normal' | 'pro' | 'premium';
}

export function Sidebar({ role, tier = 'normal' }: SidebarProps) {
  const pathname = usePathname();
  const isPremium = tier === 'premium' && role === 'admin';
  const isPro = tier === 'pro' && role === 'admin';
  const isNormal = tier === 'normal' && role === 'admin';

  const getMenuGroups = () => {
    if (role === 'tenant') {
      return [
        {
          label: 'My Portal',
          items: [
            { label: 'Home', href: '/dashboard/tenants', icon: LayoutDashboard },
            { label: 'Meals', href: '/dashboard/tenants/meals', icon: UtensilsCrossed },
            { label: 'Laundry', href: '/dashboard/tenants/laundry', icon: Waves },
            { label: 'Invoices', href: '/dashboard/tenants/invoices', icon: CreditCard },
          ]
        },
        {
          label: 'Support',
          items: [
            { label: 'Maintenance', href: '/dashboard/tenants/maintenance', icon: Settings },
            { label: 'My Profile', href: '/dashboard/tenants/profile', icon: Users },
          ]
        }
      ];
    }

    if (role === 'chef') {
      return [
        {
          label: 'Kitchen Ops',
          items: [
            { label: 'Overview', href: '/dashboard/chef', icon: LayoutDashboard },
            { label: 'Meal Plan', href: '/dashboard/chef/plan', icon: UtensilsCrossed },
            { label: 'Meal Counts', href: '/dashboard/chef/counts', icon: BarChart3 },
          ]
        }
      ];
    }

    const base = `/dashboard/${tier}`;
    if (isNormal) {
      return [
        {
          label: '',
          items: [
            { label: 'Overview', href: base, icon: LayoutDashboard },
            { label: 'Rooms', href: `${base}/rooms`, icon: Users },
            { label: 'Residents', href: `${base}/residents`, icon: Building2 },
            { label: 'Meals', href: `${base}/meals`, icon: UtensilsCrossed },
            { label: 'Staff', href: `${base}/staff`, icon: ShieldCheck },
            { label: 'Payments', href: `${base}/payments`, icon: Wallet },
            { label: 'Reports', href: `${base}/reports`, icon: FileText },
            { label: 'Settings', href: `${base}/settings`, icon: Settings },
          ]
        }
      ];
    }

    return [
      {
        label: 'platform',
        items: [
          { label: 'Overview', href: base, icon: LayoutDashboard },
          ...(tier !== 'normal' ? [{ label: 'Analytics', href: `${base}/analytics`, icon: PieChart }] : []),
        ]
      },
      {
        label: 'Management',
        items: [
          { label: 'Residents', href: `${base}/residents`, icon: Users },
          { label: 'Rooms', href: `${base}/rooms`, icon: Building2 },
          ...(tier === 'pro' ? [{ label: 'Dorms', href: `${base}/dorms`, icon: Building2 }] : []),
          ...(tier === 'premium' ? [{ label: 'Dorms', href: `${base}/dorms`, icon: Building2 }] : []),
          { label: 'Meals', href: `${base}/meals`, icon: UtensilsCrossed },
          { label: 'Staff', href: `${base}/staff`, icon: ShieldCheck },
          ...(tier !== 'normal' ? [{ label: 'Laundry', href: `${base}/laundry`, icon: Waves }] : []),
          ...(tier !== 'normal' ? [{ label: 'Maintenance', href: `${base}/maintenance`, icon: Settings }] : []),
        ]
      },
      {
        label: 'Finance',
        items: [
          { label: 'Payments', href: `${base}/payments`, icon: Wallet },
          ...(tier !== 'normal' ? [{ label: 'Billing', href: `${base}/billing`, icon: CreditCard }] : []),
          ...(tier !== 'normal' ? [{ label: 'Revenue', href: `${base}/revenue`, icon: Activity }] : []),
          { label: 'Reports', href: `${base}/reports`, icon: FileText },
        ]
      },
      {
        label: 'System',
        items: [
          ...(tier === 'premium' ? [{ label: 'Audit Log', href: `${base}/audit-log`, icon: History }] : []),
          { label: 'Integrations', href: `${base}/integrations`, icon: Zap },
          { label: 'Settings', href: `${base}/settings`, icon: Settings },
        ]
      }
    ];
  };

  const isActive = (href: string) => pathname === href;

  const sidebarStyles = cn(
    "hidden lg:flex flex-col w-72 h-screen sticky top-0 transition-all duration-500 z-50",
    "bg-sidebar border-r border-sidebar-border shadow-xl",
    isPremium && "shadow-[4px_0_24px_rgba(0,0,0,0.1)] dark:shadow-[4px_0_24px_rgba(0,0,0,0.5)]"
  );

  const logoStyles = cn(
    "w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg",
    isPremium ? "bg-primary text-white shadow-primary/30" :
    isPro ? "bg-primary/80 text-white shadow-primary/20" :
    "bg-primary/60 text-white shadow-primary/10"
  );

  const groupLabelStyles = cn(
    "px-4 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 transition-colors",
    isPremium ? "text-primary/60 group-hover:text-primary" : isPro ? "text-muted-foreground/80" : "text-muted-foreground/60"
  );

  const itemStyles = (active: boolean) => cn(
    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 group relative overflow-hidden",
    active
      ? (isPremium
          ? "bg-primary text-primary-foreground shadow-xl shadow-primary/20"
          : isPro
          ? "bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10"
          : "bg-primary/80 text-primary-foreground")
      : "text-muted-foreground hover:bg-accent hover:text-foreground"
  );

  return (
    <aside className={sidebarStyles}>
      <div className="p-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className={logoStyles}>
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-none tracking-tight text-foreground")}>Dormify</span>
            <span className={cn("text-[9px] font-bold uppercase tracking-widest mt-1.5", isPremium ? "text-primary font-black" : isPro ? "text-primary/70" : "text-muted-foreground")}>
                  System
            </span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-8 scrollbar-none">
        {getMenuGroups().map((group, i) => (
          <div key={i} className="space-y-1">
            {group.label && (
              <h3 className={groupLabelStyles}>
                {group.label}
              </h3>
            )}
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={itemStyles(active)}
                  >
                    <item.icon className={cn(
                      "w-[18px] h-[18px] transition-all duration-300",
                      active
                        ? (isPremium ? "text-white scale-110" : "text-primary-foreground")
                        : "text-muted-foreground group-hover:text-foreground group-hover:scale-110"
                    )} />
                    <span className="flex-1">{item.label}</span>
                    {active && (
                      <div className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full transition-all duration-500",
                        isPremium ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]" :
                        isPro ? "bg-white/80" : "bg-primary-foreground/50"
                      )} />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className={cn("p-6 mt-auto border-t border-sidebar-border")}>
        <Button variant="ghost" className={cn(
          "w-full justify-start rounded-xl transition-all font-bold text-sm h-12 px-4 group",
          "text-muted-foreground hover:text-destructive hover:bg-destructive/10"
        )}>
          <LogOut className="w-4 h-4 mr-3 group-hover:rotate-180 transition-transform duration-500" />
          Sign out
        </Button>
      </div>
    </aside>
  );
}
