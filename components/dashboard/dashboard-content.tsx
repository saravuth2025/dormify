'use client';

import {
  Users,
  Building2,
  Wallet,
  AlertCircle,
  Plus,
  ArrowRight,
  TrendingUp,
  Calendar,
  Zap,
  Globe,
  ArrowUpRight,
  Sparkles,
  PieChart,
  Activity,
  FileText,
  ShieldCheck,
  Target,
  Cpu,
  Layers,
  Search,
  Settings,
  UtensilsCrossed,
  LayoutDashboard,
  Wrench,
  Bell,
  CreditCard,
  Phone,
  Shield,
  Mail,
  MessageSquare,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { StatCard } from './stat-card';

interface DashboardContentProps {
  role: 'admin' | 'tenant' | 'chef';
  tier?: 'normal' | 'pro' | 'premium';
}

export function DashboardContent({ role, tier = 'normal' }: DashboardContentProps) {
  const isPremium = tier === 'premium' && role === 'admin';
  const isPro = tier === 'pro' && role === 'admin';
  const isNormal = tier === 'normal' && role === 'admin';
  const isChef = role === 'chef';
  const isTenant = role === 'tenant';

  if (isPremium) {
    return (
      <div className="space-y-6 animate-in fade-in duration-700">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2 mb-1">
               <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
               <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Intelligence Active</span>
            </div>
            <h1 className="text-2xl font-black tracking-tight text-foreground">Global <span className="text-muted-foreground/30 font-medium">Portfolio</span></h1>
            <p className="text-[11px] text-muted-foreground font-medium max-w-xl leading-snug">Strategic oversight and predictive performance metrics.</p>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm" className="rounded-xl font-bold border-border bg-card shadow-sm h-10 px-4">
                Market Brief
             </Button>
             <Button size="sm" className="rounded-xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/20 h-10 px-4">
                Expand Assets
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Portfolio Yield", value: "8.42%", trend: "+1.2%", sub: "Target 9.1%" },
            { label: "Asset Saturation", value: "98.6%", trend: "Optimal", sub: "Global Average" },
            { label: "Revenue Velocity", value: "£1.2M", trend: "+18%", sub: "Last 30 Days" },
            { label: "Risk Profile", value: "Low", trend: "Stable", sub: "System Monitored" },
          ].map((stat, i) => (
            <Card key={i} className="p-6 border-border/40 bg-card rounded-2xl shadow-sm hover:shadow-md transition-all">
               <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-2">{stat.label}</p>
               <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-black tracking-tight text-foreground">{stat.value}</h3>
                  <span className="text-[9px] font-bold text-emerald-500">{stat.trend}</span>
               </div>
               <p className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/30 border-t border-border/40 pt-2">{stat.sub}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-6">

           <Card className="lg:col-span-8 p-8 border-border/40 bg-card rounded-[1.5rem] shadow-sm relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex items-center justify-between">
                   <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Predictive Engine v5.0</h3>
                   <div className="flex -space-x-2">
                      {[1,2,3,4].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-card bg-muted" />
                      ))}
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="text-3xl font-black tracking-tight text-foreground max-w-lg leading-tight">
                      Anticipated <span className="text-primary">Yield Surge</span> in the London SE1 Cluster.
                   </h4>
                   <p className="text-muted-foreground font-medium leading-relaxed max-w-xl">
                      Market data indicates a 22% demand increase in Shoreditch. We recommend a strategic capital allocation for Q3.
                   </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/40">
                   {[
                     { l: 'Volatility', v: '0.2%' },
                     { l: 'Liquidity', v: '£4.2M' },
                     { l: 'Saturation', v: '94%' },
                     { l: 'Market Cap', v: '£142M' },
                   ].map((item, i) => (
                     <div key={i} className="space-y-1">
                        <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40">{item.l}</p>
                        <p className="text-xl font-black text-foreground">{item.v}</p>
                     </div>
                   ))}
                </div>
              </div>
           </Card>

           <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center justify-between px-2">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Global Pulse</h3>
                 <span className="text-[9px] font-bold text-primary uppercase tracking-widest">Real-time</span>
              </div>

              <div className="space-y-4">
                {[
                  { t: 'Singapore Hub', d: '99% Occupancy', icon: Globe },
                  { t: 'London Central', d: 'New Acquisition', icon: ShieldCheck },
                  { t: 'Revenue Node', d: '£240k Processed', icon: Wallet },
                ].map((item, i) => (
                  <Card key={i} className="p-6 border-border/40 bg-card/50 rounded-2xl hover:bg-card transition-all cursor-pointer">
                     <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                           <item.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                           <p className="text-[11px] font-black uppercase tracking-tight text-foreground">{item.t}</p>
                           <p className="text-xs text-muted-foreground font-medium">{item.d}</p>
                        </div>
                     </div>
                  </Card>
                ))}
              </div>

              <Button className="w-full h-16 rounded-2xl bg-foreground text-background font-black text-[10px] uppercase tracking-widest hover:bg-foreground/90 transition-all">
                 Open Full Intelligence Suite
              </Button>
           </div>
        </div>
      </div>
    );
  }

  if (isPro) {
    return (
      <div className="space-y-6 animate-in fade-in duration-700">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-border/40">
           <div className="space-y-2">
             <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/5 border border-primary/10">
               <Badge className="bg-primary text-primary-foreground border-none text-[9px] font-bold uppercase tracking-widest px-2 py-0 rounded-md h-4 flex items-center">Pro Hub</Badge>
               <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Operations Command</span>
             </div>
             <h1 className="text-4xl font-black tracking-tight text-foreground">Property <span className="text-primary">Control</span></h1>
             <p className="text-muted-foreground font-medium text-base max-w-xl leading-snug">Efficient management of your residential infrastructure.</p>
           </div>
           <div className="flex items-center gap-2">
             <Button variant="outline" className="rounded-xl h-10 px-4 font-bold border-border bg-card text-xs">
               Daily Report
             </Button>
             <Button className="rounded-xl h-10 px-6 font-black bg-primary text-primary-foreground shadow-lg shadow-primary/10 text-xs text-primary-foreground">
               Add Tenant
             </Button>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard tier="pro" label="Occupancy" value="94.2%" icon={Zap} trend="up" />
          <StatCard tier="pro" label="Tickets" value="4 Active" icon={Activity} trend="neutral" />
          <StatCard tier="pro" label="Revenue" value="£68,420" icon={TrendingUp} trend="up" />
          <StatCard tier="pro" label="Efficiency" value="98.5%" icon={Users} trend="up" />
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
           <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between px-1">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Recent Operations</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] font-bold text-primary uppercase">Ready</span>
                </div>
              </div>
              <Card className="overflow-hidden border-border/40 shadow-sm rounded-2xl bg-card">
                 <div className="divide-y divide-border/40">
                    {[
                      { title: 'Check-in', info: 'North Hall Room 402', status: 'Done' },
                      { title: 'Maintenance', info: 'Block B Electrical Resolve', status: 'Fixed' },
                      { title: 'Payment', info: 'Rent Verified: Sarah J.', status: 'Paid' },
                      { title: 'Audit', info: 'Main Entrance Lock Sync', status: 'Secure' },
                    ].map((log, i) => (
                      <div key={i} className="p-4 flex items-center justify-between hover:bg-muted/30 transition-all cursor-pointer group">
                         <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center font-bold text-[10px] text-muted-foreground group-hover:border-primary group-hover:text-primary transition-all">
                              {i+1}
                            </div>
                            <div>
                               <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{log.title}</p>
                               <p className="text-[11px] text-muted-foreground font-medium mt-0.5">{log.info}</p>
                            </div>
                         </div>
                         <Badge variant="outline" className="text-[8px] font-bold uppercase tracking-widest border-border text-muted-foreground px-2">{log.status}</Badge>
                      </div>
                    ))}
                 </div>
              </Card>
           </div>

           <div className="lg:col-span-4 space-y-6">
              <Card className="p-6 border-border/40 bg-card rounded-2xl shadow-sm">
                 <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6 border-b border-border/40 pb-3 flex items-center justify-between">
                   Portfolio Health
                   <Activity className="w-3.5 h-3.5 text-primary" />
                 </h4>
                 <div className="space-y-6">
                    {[
                      { label: 'Room Readiness', value: 98, color: 'bg-primary' },
                      { label: 'Payment Velocity', value: 85, color: 'bg-muted-foreground' },
                      { label: 'Satisfaction', value: 92, color: 'bg-emerald-500' },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                         <div className="flex justify-between items-end">
                           <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{item.label}</span>
                           <span className="text-xs font-black text-foreground">{item.value}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden p-0.5">
                            <div className={cn("h-full rounded-full transition-all duration-1000", item.color)} style={{ width: `${item.value}%` }} />
                         </div>
                      </div>
                    ))}
                 </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground rounded-2xl border-none shadow-xl shadow-primary/10 relative overflow-hidden group">
                 <div className="space-y-4 relative z-10">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <Badge className="bg-white/10 text-white border-white/20 text-[8px] uppercase">Live Sync</Badge>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-black tracking-tight">Smart Ops</h3>
                      <p className="text-[11px] opacity-80 font-medium">Auto-billing is optimized.</p>
                    </div>
                    <Button className="w-full text-[9px] font-black uppercase tracking-widest h-10 rounded-xl bg-white text-primary hover:bg-white/90 transition-all">
                      Configure System
                    </Button>
                 </div>
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              </Card>
           </div>
        </div>
      </div>
    );
  }

  if (isNormal) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-border/40">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 border border-border/40">
               <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
               <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{today}</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-foreground">Management Overview</h1>
            <p className="text-muted-foreground font-medium text-base max-w-xl leading-snug">Centralized control for your daily residential operations.</p>
          </div>
          <div className="flex items-center gap-2">
             <Button variant="outline" size="sm" className="rounded-xl font-bold border-border bg-card shadow-sm h-10 px-4">
               Download Report
             </Button>
             <Button size="sm" className="rounded-xl font-black bg-primary text-primary-foreground shadow-lg shadow-primary/10 h-10 px-4">
               <Plus className="w-4 h-4 mr-2" /> Add Resident
             </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard tier="normal" label="Total Residents" value="142" icon={Users} trend="neutral" change="Stable" />
          <StatCard tier="normal" label="Available Units" value="12" icon={Building2} trend="down" change="-2" />
          <StatCard tier="normal" label="Active Invoices" value="45" icon={FileText} trend="up" change="+8" />
          <StatCard tier="normal" label="Open Tickets" value="6" icon={AlertCircle} trend="up" change="+1" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 space-y-4">
            <Card className="border-border/40 bg-card rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-border/40 flex items-center justify-between bg-muted/20">
                <h3 className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" /> Active Operations
                </h3>
                <Badge variant="outline" className="text-[9px] font-bold">Live Status</Badge>
              </div>
              <div className="p-0">
                {[
                  { title: 'B-Block Maintenance', desc: 'Plumbing repair in progress - Room 204', status: 'In Progress', time: 'Started 2h ago', icon: Settings },
                  { title: 'Bulk Check-in', desc: '12 new residents arriving for Autumn semester', status: 'Scheduled', time: 'Starts at 2:00 PM', icon: Users },
                  { title: 'Kitchen Audit', desc: 'Weekly hygiene and inventory verification', status: 'Completed', time: 'Finished 10:00 AM', icon: UtensilsCrossed },
                ].map((op, i) => (
                  <div key={i} className="p-4 flex items-start gap-3 hover:bg-muted/30 transition-all border-b border-border/10 last:border-none group">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <op.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <p className="text-xs font-bold text-foreground">{op.title}</p>
                        <span className="text-[9px] font-bold text-muted-foreground/40">{op.time}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-medium mb-2">{op.desc}</p>
                      <Badge className={cn(
                        "text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md border-none",
                        op.status === 'Completed' ? "bg-emerald-500/10 text-emerald-600" :
                        op.status === 'In Progress' ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                      )}>{op.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-muted/10 border-t border-border/40">
                <Button variant="ghost" className="w-full text-xs font-bold text-muted-foreground hover:text-primary">
                  View Full Operational Log <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </div>
            </Card>
          </div>

          <div className="space-y-6">

            <div className="space-y-3">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground px-2">Quick Commands</h3>
              <div className="grid grid-cols-1 gap-2">
                <Button variant="outline" className="h-12 justify-start gap-3 px-4 rounded-xl border-border bg-card hover:bg-muted transition-all group border-dashed">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Plus className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest">Assign Room</span>
                </Button>
                <Button variant="outline" className="h-12 justify-start gap-3 px-4 rounded-xl border-border bg-card hover:bg-muted transition-all group border-dashed">
                  <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-xs uppercase tracking-widest">Post Invoice</span>
                </Button>
              </div>
            </div>

            <Card className="p-6 border-border/40 bg-card rounded-[1.5rem] shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Recent Events</h3>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-5">
                 {[
                   { text: 'Room A-102 check-in', time: '2h ago', color: 'bg-blue-500' },
                   { text: 'Meal plan: North Hall', time: '4h ago', color: 'bg-orange-500' },
                   { text: 'Oct Revenue Report', time: '1d ago', color: 'bg-emerald-500' },
                   { text: 'Staff shift: Night', time: '1d ago', color: 'bg-purple-500' },
                 ].map((act, i) => (
                   <div key={i} className="flex items-start gap-3">
                      <div className={cn("w-1.5 h-1.5 rounded-full mt-1.5 shrink-0", act.color)} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-foreground truncate">{act.text}</p>
                        <p className="text-[10px] font-medium text-muted-foreground/60">{act.time}</p>
                      </div>
                   </div>
                 ))}
              </div>
              <Button variant="ghost" className="w-full mt-6 text-[10px] font-black uppercase tracking-widest h-10 border border-border/40 rounded-xl">
                System History
              </Button>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  // ─── Chef Dashboard ──────────────────────────────────────────────────────
  if (isChef) {
    const today = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Chef Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-orange-500/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/10">
              <UtensilsCrossed className="w-3.5 h-3.5 text-orange-600" />
              <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.2em]">Kitchen Command</span>
            </div>
            <h1 className="text-5xl font-black tracking-tight text-foreground">
              Welcome back, <span className="text-orange-500">Chef.</span>
            </h1>
            <p className="text-muted-foreground font-medium text-lg max-w-xl">
              {today} · Kitchen is currently <span className="text-orange-600 font-bold uppercase">Active</span> for dinner prep.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right mr-4 hidden sm:block">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Next Service</p>
              <p className="text-sm font-black text-foreground">Dinner (18:30)</p>
            </div>
            <Button className="rounded-2xl h-12 px-6 font-black bg-orange-600 text-white shadow-xl shadow-orange-500/20 hover:bg-orange-700 transition-all uppercase text-[10px] tracking-widest">
              <Plus className="w-4 h-4 mr-2" /> Create Menu
            </Button>
          </div>
        </div>

        {/* Chef Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Expected Portions', value: '482', icon: Users, sub: '82% Confirmed', color: 'orange' },
            { label: 'Hygiene Score', value: '98/100', icon: ShieldCheck, sub: 'Last Audit: 2d ago', color: 'emerald' },
            { label: 'Inventory Level', value: '84%', icon: Layers, sub: '3 items low', color: 'blue' },
            { label: 'Active Staff', value: '12', icon: Activity, sub: 'Shift: Afternoon', color: 'indigo' },
          ].map((stat, i) => (
            <Card key={i} className="p-6 border-border/40 bg-card rounded-[2rem] shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
              <div className="relative z-10">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors",
                  stat.color === 'orange' ? "bg-orange-500/10 text-orange-600 group-hover:bg-orange-600 group-hover:text-white" :
                  stat.color === 'emerald' ? "bg-emerald-500/10 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white" :
                  stat.color === 'blue' ? "bg-blue-500/10 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" :
                  "bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                )}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-black tracking-tight text-foreground">{stat.value}</h3>
                <p className="text-[10px] font-bold text-muted-foreground/40 mt-1">{stat.sub}</p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-muted/20 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Today's Menu Section */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground">Today's Menu Selection</h3>
              <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-orange-700 hover:bg-orange-500/5">
                Full Weekly Plan <ArrowRight className="w-3 h-3 ml-2" />
              </Button>
            </div>

            <div className="grid gap-4">
              {[
                { time: '07:00 - 09:30', meal: 'Breakfast Buffet', type: 'Morning', status: 'Completed', menu: 'Fresh pastries, organic yogurt, seasonal fruits, and eggs to order.' },
                { time: '12:00 - 14:00', meal: 'Mediterranean Deli', type: 'Lunch', status: 'In Progress', menu: 'Grilled chicken souvlaki, Greek salad, handmade pita, and roasted vegetables.' },
                { time: '18:30 - 20:30', meal: 'Slow-cooked Beef Bourguignon', type: 'Dinner', status: 'Upcoming', menu: 'Tender beef in red wine sauce with pearl onions, mushrooms, and buttered mash.' },
              ].map((m, i) => (
                <Card key={i} className={cn(
                  "p-8 border-border/40 rounded-[2.5rem] shadow-sm relative overflow-hidden group hover:border-orange-500/20 transition-all",
                  m.status === 'In Progress' ? "border-orange-500/30 bg-orange-500/[0.02]" : "bg-card"
                )}>
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center gap-3">
                        <Badge className={cn(
                          "text-[9px] font-black uppercase px-3 py-1 rounded-full border-none",
                          m.status === 'Completed' ? "bg-emerald-500/10 text-emerald-600" :
                          m.status === 'In Progress' ? "bg-orange-500 text-white animate-pulse" :
                          "bg-muted text-muted-foreground"
                        )}>
                          {m.status}
                        </Badge>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{m.time}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-foreground">{m.meal}</h4>
                        <p className="text-sm text-muted-foreground font-medium mt-2 leading-relaxed max-w-lg">
                          {m.menu}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['Dairy Free', 'Gluten Free Option', 'High Protein'].map((tag, j) => (
                          <span key={j} className="text-[8px] font-bold uppercase tracking-widest px-2 py-1 bg-muted/50 text-muted-foreground rounded-md border border-border/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4 shrink-0">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(j => (
                          <div key={j} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                            <img src={`/avatar-${j}.jpg`} alt="" className="w-full h-full object-cover" />
                          </div>
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-background bg-orange-500 text-[10px] font-black text-white flex items-center justify-center">
                          +12
                        </div>
                      </div>
                      <Button variant="outline" className="rounded-xl font-black text-[9px] uppercase tracking-widest px-6 h-10 border-border group-hover:border-orange-500/30 transition-all">
                        Update Menu
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar Section: Feedback & Stock */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Resident Feedback */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground px-2">Resident Sentiment</h3>
              <Card className="p-6 border-border/40 bg-card rounded-[2rem] shadow-sm space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-foreground">4.8</span>
                    <span className="text-xs font-bold text-muted-foreground">/ 5.0</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Sparkles key={star} className={cn("w-3 h-3", star <= 4 ? "text-orange-500 fill-orange-500" : "text-muted")} />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { user: 'Sarah J.', comment: 'The salmon was perfectly cooked!', rating: 5 },
                    { user: 'Alex M.', comment: 'Loved the vegan options today.', rating: 5 },
                    { user: 'Jamie L.', comment: 'A bit more spice in the curry please.', rating: 4 },
                  ].map((f, i) => (
                    <div key={i} className="space-y-1.5 p-3 rounded-2xl hover:bg-muted/30 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-foreground">{f.user}</span>
                        <span className="text-[9px] font-bold text-orange-500">★ {f.rating}.0</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-medium leading-tight">"{f.comment}"</p>
                    </div>
                  ))}
                </div>
                
                <Button variant="ghost" className="w-full text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-orange-600 h-10 border border-dashed border-border rounded-xl mt-2">
                  View All Feedback
                </Button>
              </Card>
            </div>

            {/* Stock Alerts */}
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-foreground px-2">Stock Alerts</h3>
              <Card className="p-6 border-border/40 bg-card rounded-[2rem] shadow-sm space-y-4">
                {[
                  { item: 'Organic Whole Milk', level: '12%', status: 'Critical' },
                  { item: 'Unsalted Butter', level: '18%', status: 'Low' },
                  { item: 'Prime Ribeye', level: '24%', status: 'Low' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={cn(
                      "w-1.5 h-8 rounded-full",
                      s.status === 'Critical' ? "bg-rose-500" : "bg-orange-500"
                    )} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-black text-foreground truncate">{s.item}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">{s.level} remaining</p>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-lg h-8 w-8 text-orange-600 hover:bg-orange-500/10">
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
                <div className="pt-2">
                  <Button className="w-full h-12 rounded-2xl bg-foreground text-background font-black text-[10px] uppercase tracking-widest hover:bg-foreground/90 transition-all">
                    Generate Purchase Order
                  </Button>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // ─── Tenant Home Dashboard ────────────────────────────────────────────────
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">

      {/* Welcome hero - More sophisticated */}
      <div className="relative rounded-[3.5rem] overflow-hidden bg-slate-950 p-12 shadow-2xl border border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-indigo-500/20 opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-white/70 uppercase tracking-widest">Bloomsbury Hall · A-402</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-6xl font-black text-white tracking-tight leading-tight">
                Welcome home, <br /><span className="text-primary">Sarah.</span>
              </h1>
              <p className="text-white/40 font-medium text-lg max-w-md leading-relaxed">
                Your sanctuary is ready. You have <span className="text-white/80 font-bold">2 notifications</span> requiring attention today.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm" className="bg-primary text-white font-black text-[10px] uppercase tracking-widest h-10 px-6 rounded-xl shadow-lg shadow-primary/20">
                View My Keycard
              </Button>
              <Button variant="outline" size="sm" className="bg-white/5 border-white/10 text-white font-black text-[10px] uppercase tracking-widest h-10 px-6 rounded-xl hover:bg-white/10 transition-all">
                Quick Support
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-48 bg-white/10 mx-8" />
          
          <div className="grid grid-cols-2 gap-4 md:w-80">
            {[
              { label: 'Rent Balance', val: '£1,240', sub: 'Due Apr 01', color: 'text-primary' },
              { label: 'Meal Credits', val: '12', sub: 'Refills in 2d', color: 'text-emerald-400' },
              { label: 'Active Tasks', val: '0', sub: 'All clear', color: 'text-white/40' },
              { label: 'Energy Usage', val: 'Low', sub: 'Top 10%', color: 'text-amber-400' },
            ].map((box, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-sm">
                <p className="text-[9px] font-black uppercase tracking-widest text-white/30 mb-1">{box.label}</p>
                <p className={cn("text-xl font-black", box.color)}>{box.val}</p>
                <p className="text-[9px] font-bold text-white/20 uppercase mt-1">{box.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick access services - Refined cards */}
      <div className="space-y-6">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">Essential Services</h2>
          <span className="text-[10px] font-bold text-primary uppercase tracking-widest">View All Services</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Dining Hall', sub: 'Today\'s Special: Beef Bourguignon', icon: UtensilsCrossed, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'hover:border-orange-500/20' },
            { label: 'Smart Laundry', sub: '3 machines available now', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'hover:border-blue-500/20' },
            { label: 'Finance Hub', sub: 'Next payment due in 5 days', icon: Wallet, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'hover:border-emerald-500/20' },
            { label: 'Maintenance', sub: 'Report a new issue', icon: Settings, color: 'text-indigo-500', bg: 'bg-indigo-500/10', border: 'hover:border-indigo-500/20' },
          ].map((s, i) => (
            <Card key={i} className={cn(
              "p-8 rounded-[2.5rem] border border-border/40 bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group flex flex-col gap-6",
              s.border
            )}>
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-500", s.bg, s.color)}>
                <s.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-lg text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground font-medium leading-snug">{s.sub}</p>
              </div>
              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all">Open Service</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Feed */}
        <div className="lg:col-span-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Dynamic Notice Board */}
            <Card className="p-8 border-border/40 bg-card rounded-[2.5rem] shadow-sm space-y-6 overflow-hidden relative group">
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Bell className="w-5 h-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-foreground">Hall Notices</span>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/40 space-y-1">
                  <p className="text-xs font-black text-foreground">Summer Ball Tickets</p>
                  <p className="text-[11px] text-muted-foreground font-medium">Early bird tickets available from Monday at reception.</p>
                </div>
                <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 space-y-1">
                  <p className="text-xs font-black text-primary">Wellness Week</p>
                  <p className="text-[11px] text-muted-foreground font-medium">Free yoga sessions in the common room every 8AM.</p>
                </div>
              </div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000" />
            </Card>

            {/* Today's Special Card */}
            <Card className="p-8 border-border/40 bg-card rounded-[2.5rem] shadow-sm space-y-6 group hover:border-orange-500/20 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-foreground">Chef's Selection</span>
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-black leading-tight text-foreground">Slow-cooked Beef Bourguignon</p>
                <p className="text-xs font-bold text-muted-foreground uppercase">Served with buttered mash · 18:30</p>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-2xl font-black text-[10px] uppercase tracking-widest border-border group-hover:border-orange-500/30 transition-all">
                Book My Portion
              </Button>
            </Card>
          </div>

          {/* Upcoming Schedule */}
          <Card className="border-border/40 bg-card rounded-[3rem] overflow-hidden shadow-sm">
            <div className="px-10 py-8 flex items-center justify-between border-b border-border/20 bg-muted/10">
              <h3 className="font-black text-lg flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" /> Weekly Schedule
              </h3>
              <Badge className="bg-primary/10 text-primary border-none font-black text-[10px] uppercase px-4 py-1.5 rounded-full">Oct 27 – Nov 02</Badge>
            </div>
            <div className="divide-y divide-border/10">
              {[
                { day: 'Monday',  event: 'Rent payment window opens',     icon: Wallet,        color: 'text-emerald-500', bg: 'bg-emerald-500/10', time: '09:00' },
                { day: 'Tuesday', event: 'HVAC Maintenance Check',       icon: Wrench,        color: 'text-indigo-500',  bg: 'bg-indigo-500/10',  time: '10:00' },
                { day: 'Tuesday', event: 'Hall Social: Movie Night',      icon: Zap,           color: 'text-orange-500',  bg: 'bg-orange-500/10',  time: '20:00' },
                { day: 'Friday',  event: 'Laundry booking slot open',     icon: Layers,        color: 'text-blue-500',    bg: 'bg-blue-500/10',    time: '08:00' },
                { day: 'Sunday',  event: 'Monthly rent deadline',         icon: CreditCard,    color: 'text-rose-500',    bg: 'bg-rose-500/10',    time: '23:59' },
              ].map((e, i) => (
                <div key={i} className="flex items-center gap-6 px-10 py-6 hover:bg-muted/30 transition-colors group cursor-pointer">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${e.bg} ${e.color}`}>
                    <e.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-black text-base text-foreground truncate">{e.event}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">{e.day} · {e.time}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground/20 group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Quick Stats/Room Info */}
          <Card className="p-8 border-border/40 bg-card rounded-[3rem] space-y-8 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between relative z-10">
              <h3 className="font-black text-sm uppercase tracking-widest text-muted-foreground">My Room</h3>
              <Badge className="bg-primary text-white border-none font-black text-[9px] px-3 py-1 rounded-lg">Floor 4</Badge>
            </div>
            <div className="space-y-2 relative z-10">
              <p className="text-6xl font-black text-foreground tracking-tighter">A-402</p>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">En-suite · Private Balcony</p>
            </div>
            
            <div className="space-y-3 pt-4 relative z-10">
               {[
                { label: 'Temp', val: '22°C', icon: Zap },
                { label: 'Wi-Fi', val: 'Connected', icon: Activity },
                { label: 'Lock', val: 'Secured', icon: ShieldCheck },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-muted/30 border border-border/40">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-black uppercase text-muted-foreground">{item.label}</span>
                  </div>
                  <span className="text-xs font-black text-foreground">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          </Card>

          {/* Quick Actions/Contacts */}
          <div className="space-y-4">
             <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground px-2">Instant Help</h3>
             <div className="grid grid-cols-1 gap-3">
                {[
                  { label: 'Call Reception', icon: Phone },
                  { label: 'Emergency Security', icon: Shield },
                  { label: 'Live Support Chat', icon: MessageSquare },
                ].map((act, i) => (
                  <Button key={i} variant="outline" className="h-16 justify-start gap-4 px-6 rounded-[1.5rem] border-border bg-card hover:bg-primary/5 hover:border-primary/20 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                      <act.icon className="w-5 h-5" />
                    </div>
                    <span className="font-black text-xs uppercase tracking-widest">{act.label}</span>
                  </Button>
                ))}
             </div>
          </div>

          {/* Documents/Links */}
          <Card className="p-8 border-border/40 bg-card rounded-[3rem] shadow-sm space-y-6">
            <h3 className="font-black text-sm uppercase tracking-widest text-muted-foreground">Documents</h3>
            <div className="space-y-3">
              {[
                'Tenancy Agreement.pdf',
                'Hall Rules & Safety.pdf',
                'Insurance Policy.pdf',
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-xs font-bold text-foreground group-hover:underline">{doc}</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-primary transition-all" />
                </div>
              ))}
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
