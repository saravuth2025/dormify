'use client';

import {
  Plus,
  Search,
  ShieldCheck,
  Wrench,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Filter,
  MoreVertical,
  ChevronRight,
  MapPin,
  Calendar,
  MessageSquare,
  ArrowUpRight,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface MaintenanceTicket {
  id: string;
  title: string;
  location: string;
  priority: 'High' | 'Medium' | 'Low' | 'Critical';
  status: 'Pending' | 'In Progress' | 'Scheduled' | 'Resolved';
  date: string;
  category: string;
  assignee?: { name: string };
}

const tickets: MaintenanceTicket[] = [
  { id: '#MNT-4421', title: 'Leaking Faucet', location: 'Room A-402', priority: 'Medium', status: 'In Progress', date: 'Oct 24', category: 'Plumbing', assignee: { name: 'JD' } },
  { id: '#MNT-4425', title: 'WiFi Connectivity Issue', location: 'North Hall', priority: 'Critical', status: 'Pending', date: 'Oct 25', category: 'IT/Network' },
  { id: '#MNT-4430', title: 'HVAC Unit Noise', location: 'Room C-305', priority: 'High', status: 'Scheduled', date: 'Oct 26', category: 'Electrical', assignee: { name: 'MR' } },
  { id: '#MNT-4418', title: 'Window Seal', location: 'Room B-102', priority: 'Low', status: 'Resolved', date: 'Oct 22', category: 'Carpentry' },
];

export function MaintenanceContent({ title, tier }: { title: string, tier: 'normal' | 'pro' | 'premium' }) {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/40 pb-4">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-foreground mb-0.5">{title}</h2>
          <div className="flex items-center gap-3 text-[11px] font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5"><Activity className={cn("w-3.5 h-3.5", tier === 'premium' ? "text-cyan-500" : "text-emerald-500")} /> 94% System Health</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>28 active tickets</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden sm:block group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
              <Search className={cn(
                "w-3.5 h-3.5 transition-all duration-300",
                tier === 'premium' ? "text-cyan-400 group-focus-within:scale-110" : "text-muted-foreground group-focus-within:text-primary"
              )} />
            </div>
            <Input
              placeholder="Search..."
              className={cn(
                "pl-10 w-48 h-9 transition-all duration-300 text-[11px] font-medium shadow-sm",
                tier === 'premium'
                  ? "bg-foreground/5 border-foreground/10 hover:bg-foreground/10 focus:bg-foreground/15 backdrop-blur-2xl rounded-xl"
                  : tier === 'pro'
                  ? "bg-foreground/5 border-foreground/5 hover:bg-foreground/10 focus:bg-foreground/15 backdrop-blur-2xl rounded-xl"
                  : "bg-muted border-border rounded-xl focus:bg-background"
              )}
            />
          </div>
          <Button className={cn(
            "h-9 px-4 rounded-xl font-bold text-[11px] shadow-lg active:scale-95 transition-all text-white",
            tier === 'premium' ? "bg-cyan-600 hover:bg-cyan-500 shadow-cyan-600/20" :
            tier === 'pro' ? "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20" :
            "bg-primary text-primary-foreground shadow-primary/10"
          )}>
            <Plus className="w-3.5 h-3.5 mr-1.5" /> New Ticket
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6">

        <div className="lg:col-span-8 space-y-4">

          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              {['All Tickets', 'Active', 'Resolved'].map((tab, i) => (
                <button key={i} className={cn(
                  "pb-1.5 text-xs font-bold transition-all border-b-2",
                  i === 0 ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:text-foreground"
                )}>
                  {tab}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="sm" className="text-slate-500 font-bold hover:bg-slate-50 h-8 text-[11px]">
              <Filter className="w-3.5 h-3.5 mr-1.5" /> Filter
            </Button>
          </div>

          <div className="divide-y divide-border/40 border-t border-border/40 overflow-auto max-h-[calc(100vh-280px)] scrollbar-thin">
            {tickets.map((ticket, i) => (
              <div key={i} className="group py-3 flex items-center justify-between gap-4 hover:bg-muted/30 px-3 -mx-2 rounded-xl transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                    ticket.priority === 'Critical' ? "bg-rose-500/10 text-rose-500" : "bg-muted text-muted-foreground group-hover:bg-card group-hover:shadow-sm"
                  )}>
                    <Wrench className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className={cn(
                        "font-bold text-xs text-foreground transition-colors",
                        tier === 'premium' ? "group-hover:text-cyan-500" : "group-hover:text-primary"
                      )}>{ticket.title}</h4>
                      <Badge variant="outline" className={cn(
                        "text-[8px] uppercase tracking-tighter px-1.5 py-0 h-3.5 border-none font-black",
                        ticket.priority === 'Critical' ? "bg-rose-500 text-white" : "bg-muted text-muted-foreground"
                      )}>{ticket.priority}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-medium text-muted-foreground/60">
                      <span>{ticket.id}</span>
                      <span className="w-0.5 h-0.5 rounded-full bg-border" />
                      <span className="flex items-center gap-1"><MapPin className="w-2.5 h-2.5" /> {ticket.location}</span>
                      <span className="w-0.5 h-0.5 rounded-full bg-border" />
                      <span>{ticket.category}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="hidden md:block text-right">
                    <p className="text-[9px] font-bold text-muted-foreground/40 uppercase tracking-widest mb-0.5">Status</p>
                    <div className="flex items-center gap-1.5 justify-end">
                      <div className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        ticket.status === 'Resolved' ? "bg-emerald-500" : ticket.status === 'In Progress' ? "bg-blue-500" : "bg-amber-500"
                      )} />
                      <span className="text-[11px] font-bold text-foreground">{ticket.status}</span>
                    </div>
                  </div>

                  {ticket.assignee ? (
                    <Avatar className="h-7 w-7 border-2 border-background shadow-sm">
                      <AvatarFallback className="text-[9px] font-bold bg-muted text-muted-foreground">{ticket.assignee.name}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <div className="h-7 w-7 rounded-full border-2 border-dashed border-border flex items-center justify-center">
                      <Plus className="w-3 h-3 text-muted-foreground/30" />
                    </div>
                  )}

                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <Button variant="outline" className="w-full h-10 rounded-xl border-slate-100 text-slate-400 font-bold hover:text-slate-900 hover:bg-slate-50 transition-all text-[11px]">
            Load More History
          </Button>
        </div>

        <div className="lg:col-span-4 space-y-6">

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-foreground">Active Team</h3>
              <Button variant="link" size="sm" className="text-xs font-bold text-primary h-auto p-0">Directory</Button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'David B.', role: 'Lead', status: 'Online' },
                { name: 'Sarah M.', role: 'HVAC', status: 'On Site' },
                { name: 'John D.', role: 'Plumbing', status: 'Offline' },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-border">
                      <AvatarFallback className="text-[10px] font-bold bg-muted">{m.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-bold text-foreground/80">{m.name}</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tight">{m.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-slate-400 hover:text-indigo-600"><MessageSquare className="w-4 h-4" /></button>
                    <button className="text-slate-400 hover:text-indigo-600"><ArrowUpRight className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 bg-primary rounded-[2rem] text-primary-foreground space-y-6 shadow-xl shadow-primary/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/50">Weekly Sync</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-3xl font-black">12</p>
                  <p className="text-[10px] font-bold text-primary-foreground/40 uppercase tracking-widest">In Progress</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-emerald-300">45</p>
                  <p className="text-[10px] font-bold text-primary-foreground/40 uppercase tracking-widest">Resolved</p>
                </div>
              </div>
              <div className="h-2 w-full bg-primary-foreground/10 rounded-full overflow-hidden p-0.5">
                <div className="h-full bg-emerald-400 w-[78%] rounded-full shadow-[0_0_10px_rgba(52,211,153,0.3)]" />
              </div>
            </div>
            <Button className="w-full h-11 bg-primary-foreground text-primary rounded-xl font-bold hover:bg-muted transition-all text-xs">
              View Analytics
            </Button>
          </section>

          <div className="p-5 border border-amber-100 bg-amber-50/50 rounded-2xl flex gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="space-y-1">
              <p className="text-xs font-bold text-amber-900">Scheduled Water Shutoff</p>
              <p className="text-[11px] font-medium text-amber-700/80 leading-snug">Oct 28, 10:00 AM - 02:00 PM. North Hall only.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
