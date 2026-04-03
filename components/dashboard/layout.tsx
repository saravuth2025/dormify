'use client';

import { ReactNode } from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';

interface DashboardLayoutProps {
  children: ReactNode;
  role: 'admin' | 'tenant' | 'chef';
  tier?: 'normal' | 'pro' | 'premium';
}

export function DashboardLayout({ children, role, tier = 'normal' }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-[#FDFDFD] overflow-hidden selection:bg-primary/10">
      <Sidebar role={role} tier={tier} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header role={role} tier={tier} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6 w-full animate-in fade-in slide-in-from-bottom-2 duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
