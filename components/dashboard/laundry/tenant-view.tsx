'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Droplets, 
  Wind, 
  AlertTriangle,
  Clock,
  Wallet,
  BellRing
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// ─── Shared animation variants ───────────────────────────────────────────────

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

// ═══════════════════════════════════════════════════════════════════════════════
//  TENANT LAUNDRY VIEW
//  Shows: machine availability, active washes, balance, recent transactions
// ═══════════════════════════════════════════════════════════════════════════════

export function TenantLaundryView() {
  const [tab, setTab] = useState<'washers' | 'dryers'>('washers');

  const machines = {
    washers: [
      { id: 'W-01', status: 'Available' },
      { id: 'W-02', status: 'Busy', time: '12m left' },
      { id: 'W-03', status: 'Available' },
      { id: 'W-04', status: 'Active', isMine: true, time: '18m left', progress: 60 },
    ],
    dryers: [
      { id: 'D-01', status: 'Available' },
      { id: 'D-02', status: 'Busy', time: '45m left' },
      { id: 'D-03', status: 'Available' },
    ]
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <div 
        className="space-y-10 pb-20">
      {/* Header */}
      <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border/40">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight">Laundry <span className="text-muted-foreground/30">Room</span></h1>
          <p className="text-sm font-medium text-muted-foreground">Floor 4 • North Hall.</p>
        </div>
        <Button variant="outline" className="h-11 px-6 rounded-2xl font-bold border-border/40 gap-2">
          <Wallet className="w-4 h-4" /> Top up Balance
        </Button>
      </motion.div>

      {/* Top Stats */}
      <motion.div variants={item} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-5 border-border/40 bg-card rounded-2xl shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-emerald-500/10 text-emerald-500">
            <Wallet className="w-4 h-4" />
          </div>
          <div>
             <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Balance</p>
             <p className="text-2xl font-black">£12.50</p>
          </div>
        </Card>
        <Card className="p-5 border-border/40 bg-card rounded-2xl shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 text-primary">
            <Droplets className="w-4 h-4" />
          </div>
          <div>
             <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Washers</p>
             <p className="text-xl font-black">2<span className="text-sm text-muted-foreground font-medium ml-1">avail</span></p>
          </div>
        </Card>
        <Card className="p-5 border-border/40 bg-card rounded-2xl shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/10 text-blue-500">
            <Wind className="w-4 h-4" />
          </div>
          <div>
             <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Dryers</p>
             <p className="text-xl font-black">2<span className="text-sm text-muted-foreground font-medium ml-1">avail</span></p>
          </div>
        </Card>
        <Card className="p-5 border-border/40 bg-card rounded-2xl shadow-sm flex items-center gap-3 cursor-pointer hover:bg-muted/30 transition-colors">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-amber-500/10 text-amber-500">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
             <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/60">Report</p>
             <p className="text-sm font-black mt-1">Issue</p>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Wash */}
          <motion.div variants={item}>
            <h2 className="text-sm font-black uppercase tracking-widest text-primary flex items-center gap-2 px-1 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> My Active Cycles
            </h2>
            <Card className="relative overflow-hidden p-6 sm:p-8 border-none bg-primary text-primary-foreground rounded-[2.5rem] shadow-xl shadow-primary/20">
               <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                 <Droplets className="w-40 h-40" />
               </div>
               <div className="relative z-10">
                 <div className="flex justify-between items-start mb-8">
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Rinsing Cycle</p>
                     <h2 className="text-3xl sm:text-4xl font-black">Washer W-04</h2>
                   </div>
                   <Badge className="bg-white/20 text-white border-none font-bold backdrop-blur-md px-3 py-1">18 mins</Badge>
                 </div>
                 <div className="space-y-3">
                   <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest opacity-80">
                     <span>Progress</span>
                     <span>60%</span>
                   </div>
                   <div className="h-2 w-full bg-black/20 rounded-full overflow-hidden">
                     <motion.div 
                       className="h-full bg-white rounded-full" 
                       initial={{ width: 0 }} 
                       animate={{ width: '60%' }} 
                       transition={{ duration: 1, ease: "easeOut" }}
                     />
                   </div>
                 </div>
                 <div className="mt-8 flex flex-wrap gap-3">
                   <Button size="sm" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none font-bold rounded-xl h-10 px-5">
                     <BellRing className="w-4 h-4 mr-2" /> Notify when done
                   </Button>
                 </div>
               </div>
            </Card>
          </motion.div>

          {/* Machine List */}
          <motion.div variants={item} className="space-y-4">
             <div className="flex p-1 bg-muted/30 rounded-2xl w-fit">
              <button 
                onClick={() => setTab('washers')}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  tab === 'washers' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground/60 hover:text-foreground"
                )}
              >Washers</button>
              <button 
                onClick={() => setTab('dryers')}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all",
                  tab === 'dryers' ? "bg-background shadow-sm text-foreground" : "text-muted-foreground/60 hover:text-foreground"
                )}
              >Dryers</button>
            </div>

            <Card className="border-border/40 bg-card rounded-[2.5rem] overflow-hidden shadow-sm">
              <div className="divide-y divide-border/20">
                <AnimatePresence mode="popLayout">
                  {machines[tab].map((m, i) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-5 sm:p-6 hover:bg-muted/5 transition-colors gap-4 group"
                    >
                      <div className="flex items-center gap-4">
                         <div className={cn(
                           "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                           m.status === 'Available' ? "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500/20" : 
                           m.isMine ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                         )}>
                           {tab === 'washers' ? <Droplets className="w-6 h-6" /> : <Wind className="w-6 h-6" />}
                         </div>
                         <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-base">{m.id}</h4>
                              {m.status === 'Available' && <Badge className="bg-emerald-500/10 text-emerald-600 border-none font-bold text-[9px] px-2">Available</Badge>}
                              {m.status === 'Busy' && <Badge className="bg-amber-500/10 text-amber-600 border-none font-bold text-[9px] px-2">In Use</Badge>}
                              {m.isMine && <Badge className="bg-primary/10 text-primary border-none font-bold text-[9px] px-2">Your Cycle</Badge>}
                            </div>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase mt-1">
                              {tab === 'washers' ? 'Standard Washer' : 'Tumble Dryer'}
                            </p>
                         </div>
                      </div>
                      <div className="flex items-center sm:justify-end gap-4 w-full sm:w-auto mt-2 sm:mt-0 ml-16 sm:ml-0">
                        {m.status === 'Available' ? (
                          <div className="flex items-center gap-4 w-full justify-between sm:justify-end">
                             <p className="font-black text-sm">£2.50</p>
                             <Button size="sm" className="h-9 rounded-xl font-bold bg-primary text-white shadow-md shadow-primary/20 text-xs px-6">
                               Start
                             </Button>
                          </div>
                        ) : m.isMine ? (
                          <div className="text-right w-full sm:w-auto">
                             <p className="text-2xl font-black text-primary">{m.time?.split(' ')[0]}</p>
                             <p className="text-[10px] font-bold text-muted-foreground uppercase">Remaining</p>
                          </div>
                        ) : (
                          <div className="text-right w-full sm:w-auto">
                             <div className="flex items-center sm:justify-end gap-1.5 text-muted-foreground">
                               <Clock className="w-3.5 h-3.5" />
                               <span className="font-black text-sm">{m.time}</span>
                             </div>
                             <p className="text-[10px] font-bold text-muted-foreground/60 uppercase mt-0.5">Est. Wait</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Sidebar */}
        <motion.div variants={item} className="space-y-6">
          <Card className="p-6 border-border/40 bg-card rounded-[2rem] space-y-4 shadow-sm">
            <h3 className="text-sm font-black tracking-tight">Recent <span className="text-muted-foreground/30">Activity</span></h3>
            <div className="space-y-2">
               {[
                 { action: 'Top up', amount: '+£10.00', date: 'Today, 10:00 AM', ok: true },
                 { action: 'Washer W-04', amount: '-£2.50', date: 'Today, 9:30 AM', ok: false },
                 { action: 'Dryer D-02', amount: '-£1.50', date: 'Yesterday', ok: false },
               ].map((a, i) => (
                 <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-muted/30 border border-transparent hover:border-border/40 transition-colors">
                   <div>
                     <p className="font-bold text-sm">{a.action}</p>
                     <p className="text-[10px] font-bold text-muted-foreground uppercase">{a.date}</p>
                   </div>
                   <span className={cn("font-black text-sm", a.ok ? "text-emerald-500" : "")}>{a.amount}</span>
                 </div>
               ))}
            </div>
            <Button variant="ghost" className="w-full text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-[-8px]">
              View All History
            </Button>
          </Card>

          <Card className="p-6 border-border/40 bg-muted/30 rounded-[2rem] space-y-3">
             <h3 className="text-sm font-black tracking-tight">Laundry <span className="text-muted-foreground/30">Tips</span></h3>
             <ul className="space-y-4 pt-2">
                <li className="flex gap-3">
                   <div className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                     <span className="text-xs font-black">1</span>
                   </div>
                   <p className="text-xs font-medium text-muted-foreground leading-relaxed">Empty all pockets to prevent damage to machines and your clothes.</p>
                </li>
                <li className="flex gap-3">
                   <div className="w-6 h-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                     <span className="text-xs font-black">2</span>
                   </div>
                   <p className="text-xs font-medium text-muted-foreground leading-relaxed">Don't overload machines. Leave about a hand's width of space at the top.</p>
                </li>
             </ul>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
