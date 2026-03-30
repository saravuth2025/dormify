'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Clock, CheckCircle2, AlertTriangle, Zap, Plus,
  ChevronRight, Bell, Info, RefreshCcw, CalendarCheck,
  Droplets, Wind, Thermometer, Star, Ticket, WifiOff,
  Timer, MapPin, Users, ArrowRight, Sparkles, ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// ─── Static mock data ────────────────────────────────────────────────────────

const MACHINES = [
  { id: 'W-01', type: 'Washer', status: 'available', timeLeft: null,  floor: 4 },
  { id: 'W-02', type: 'Washer', status: 'busy',      timeLeft: 18,    floor: 4 },
  { id: 'W-03', type: 'Washer', status: 'busy',      timeLeft: 34,    floor: 4 },
  { id: 'W-04', type: 'Washer', status: 'available', timeLeft: null,  floor: 4 },
  { id: 'W-05', type: 'Washer', status: 'offline',   timeLeft: null,  floor: 5 },
  { id: 'W-06', type: 'Washer', status: 'available', timeLeft: null,  floor: 5 },
  { id: 'D-01', type: 'Dryer',  status: 'busy',      timeLeft: 42,    floor: 4 },
  { id: 'D-02', type: 'Dryer',  status: 'available', timeLeft: null,  floor: 4 },
  { id: 'D-03', type: 'Dryer',  status: 'busy',      timeLeft: 9,     floor: 5 },
  { id: 'D-04', type: 'Dryer',  status: 'available', timeLeft: null,  floor: 5 },
];

const MY_ACTIVE_SESSION = {
  machine: 'W-02',
  type: 'Wash & Fold',
  progress: 47,
  timeLeft: 18,
  temp: '30°C',
  spin: '1400 RPM',
  water: 'Eco-Save',
  startedAt: '10:30 AM',
  estFinish: '10:48 AM',
};

const QUEUE = [
  { position: 1, name: 'You',           machine: 'W-01', eta: 'Ready Now', isMe: true },
  { position: 2, name: 'Room A-208',    machine: 'W-03', eta: '~34 min',   isMe: false },
  { position: 3, name: 'Room B-105',    machine: 'W-02', eta: '~52 min',   isMe: false },
];

const HISTORY = [
  { id: 'LND-098', date: 'Mar 22, 2026', type: 'Wash & Fold',  machine: 'W-03', duration: '45 min', status: 'Completed' },
  { id: 'LND-091', date: 'Mar 15, 2026', type: 'Express Wash', machine: 'W-01', duration: '25 min', status: 'Completed' },
  { id: 'LND-085', date: 'Mar 07, 2026', type: 'Full Cycle',   machine: 'W-04', duration: '60 min', status: 'Completed' },
];

const WEEKLY_USED = 1;
const WEEKLY_LIMIT = 1;
const DAYS_UNTIL_RESET = 4;

// ─── Animation Variants ───────────────────────────────────────────────────────

const container = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden:  { opacity: 0, y: 20 },
  show:    { opacity: 1, y:  0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function MachineCard({ m }: { m: typeof MACHINES[0] }) {
  const isAvailable = m.status === 'available';
  const isBusy      = m.status === 'busy';
  const isOffline   = m.status === 'offline';

  return (
    <div
      className={cn(
        'relative aspect-square rounded-3xl border-2 flex flex-col items-center justify-center p-3 cursor-pointer transition-all duration-300',
        isAvailable && 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/10',
        isBusy      && 'bg-primary/5 border-primary/20 hover:bg-primary/10',
        isOffline   && 'bg-muted/20 border-dashed border-border/30 grayscale opacity-50',
      )}
    >
      {/* Status dot */}
      <div className={cn(
        'w-2 h-2 rounded-full mb-2',
        isAvailable && 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse',
        isBusy      && 'bg-primary animate-pulse',
        isOffline   && 'bg-muted-foreground',
      )} />

      <span className={cn(
        'text-[9px] font-black uppercase tracking-widest',
        isAvailable ? 'text-emerald-600 dark:text-emerald-400' : isBusy ? 'text-primary' : 'text-muted-foreground/40',
      )}>
        {m.id}
      </span>

      {isBusy && m.timeLeft !== null && (
        <span className='text-[8px] font-bold text-primary/60 mt-0.5'>{m.timeLeft}m left</span>
      )}
      {isOffline && (
        <WifiOff className='w-3 h-3 text-muted-foreground/30 mt-0.5' />
      )}
      {isAvailable && (
        <span className='text-[8px] font-bold text-emerald-500 mt-0.5'>Free</span>
      )}
    </div>
  );
}

function CountdownTimer({ seconds: initialSeconds }: { seconds: number }) {
  const [secs, setSecs] = useState(initialSeconds * 60);

  useEffect(() => {
    const t = setInterval(() => setSecs(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, []);

  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return <span>{m}m {String(s).padStart(2, '0')}s</span>;
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function TenantLaundryView() {
  const [activeTab, setActiveTab] = useState<'washers' | 'dryers'>('washers');
  const [bookingOpen, setBookingOpen] = useState(false);

  const availWashers = MACHINES.filter(m => m.type === 'Washer' && m.status === 'available').length;
  const availDryers  = MACHINES.filter(m => m.type === 'Dryer'  && m.status === 'available').length;
  const filtered     = MACHINES.filter(m => m.type === (activeTab === 'washers' ? 'Washer' : 'Dryer'));
  const hasActiveSession = true; // MY_ACTIVE_SESSION exists

  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='max-w-[1300px] mx-auto space-y-10 pb-20'
    >

      {/* ─── Hero Header ───────────────────────────────────────────────── */}
      <motion.section variants={item} className='relative h-[260px] rounded-[2.5rem] overflow-hidden group shadow-2xl'>
        <img
          src='https://images.unsplash.com/photo-1545173168-9f1947eebd01?q=80&w=2000'
          className='w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105'
          alt='Laundry Facility'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/60 to-transparent' />
        <div className='absolute inset-0 flex flex-col justify-end p-10 space-y-5'>
          <div className='space-y-2'>
            <Badge className='bg-emerald-500/20 text-emerald-100 backdrop-blur-sm border-emerald-500/30 px-4 py-1 text-[10px] font-black tracking-widest uppercase'>
              <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse inline-block' />
              Facility Open · Floor 4 & 5
            </Badge>
            <h1 className='text-5xl font-black text-white tracking-tight'>
              My Laundry
            </h1>
            <p className='text-white/60 font-medium text-sm'>
              Check machine availability, track your session, and book your next slot.
            </p>
          </div>
          <div className='flex gap-3'>
            <Button
              onClick={() => setBookingOpen(true)}
              className='h-12 px-8 rounded-2xl bg-primary text-white font-black text-sm shadow-xl shadow-primary/30 hover:scale-[1.02] transition-transform'
            >
              <Plus className='w-4 h-4 mr-2' /> Book a Machine
            </Button>
            <Button variant='outline' className='h-12 px-6 rounded-2xl font-bold text-sm border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm'>
              <Info className='w-4 h-4 mr-2' /> How it works
            </Button>
          </div>
        </div>
      </motion.section>

      {/* ─── Summary Stats Row ─────────────────────────────────────────── */}
      <motion.div variants={item} className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {[
          { label: 'Washers Free',   value: `${availWashers} / 6`, icon: Droplets,    color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
          { label: 'Dryers Free',    value: `${availDryers} / 4`,  icon: Wind,         color: 'text-indigo-500',  bg: 'bg-indigo-500/10' },
          { label: 'Queue Position', value: '#1',                   icon: Ticket,       color: 'text-primary',     bg: 'bg-primary/10' },
          { label: 'Weekly Washes',  value: `${WEEKLY_USED} / ${WEEKLY_LIMIT}`, icon: CalendarCheck, color: WEEKLY_USED < WEEKLY_LIMIT ? 'text-emerald-500' : 'text-amber-500', bg: WEEKLY_USED < WEEKLY_LIMIT ? 'bg-emerald-500/10' : 'bg-amber-500/10' },
        ].map((stat, i) => (
          <Card key={i} className='p-5 border-border/40 bg-card rounded-2xl shadow-sm flex items-center gap-4 hover:shadow-md transition-all'>
            <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center shrink-0', stat.bg, stat.color)}>
              <stat.icon className='w-5 h-5' />
            </div>
            <div>
              <p className='text-[9px] font-black uppercase tracking-widest text-muted-foreground/60'>{stat.label}</p>
              <p className='text-xl font-black tracking-tight'>{stat.value}</p>
            </div>
          </Card>
        ))}
      </motion.div>

      {/* ─── Main Grid ────────────────────────────────────────────────── */}
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>

        {/* ── Left Column ── */}
        <div className='lg:col-span-8 space-y-8'>

          {/* ── Active Session Card ── */}
          <AnimatePresence>
            {hasActiveSession && (
              <motion.div variants={item} key='active-session'>
                <Card className='p-8 border-primary/20 bg-primary/5 rounded-[2.5rem] relative overflow-hidden shadow-lg'>
                  {/* Decorative BG */}
                  <div className='absolute top-0 right-0 p-8 opacity-[0.04] pointer-events-none'>
                    <RefreshCcw className='w-56 h-56 animate-spin' style={{ animationDuration: '8s' }} />
                  </div>

                  <div className='relative z-10 space-y-8'>
                    {/* Header */}
                    <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
                      <div className='flex items-center gap-4'>
                        <div className='w-14 h-14 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/30'>
                          <RefreshCcw className='w-7 h-7 text-white animate-spin' style={{ animationDuration: '3s' }} />
                        </div>
                        <div>
                          <div className='flex items-center gap-2 mb-1'>
                            <span className='text-[10px] font-black uppercase tracking-[0.2em] text-primary'>Active · {MY_ACTIVE_SESSION.machine}</span>
                            <span className='flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse' />
                          </div>
                          <h3 className='text-2xl font-black'>{MY_ACTIVE_SESSION.type}</h3>
                        </div>
                      </div>
                      <div className='flex flex-col items-end gap-1'>
                        <p className='text-3xl font-black text-primary tabular-nums'>
                          <CountdownTimer seconds={MY_ACTIVE_SESSION.timeLeft * 60} />
                        </p>
                        <p className='text-[10px] font-black text-muted-foreground uppercase tracking-widest'>Remaining</p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                      {[
                        { label: 'Temperature', value: MY_ACTIVE_SESSION.temp,      icon: Thermometer, color: 'text-orange-500' },
                        { label: 'Spin Speed',  value: MY_ACTIVE_SESSION.spin,      icon: Wind,        color: 'text-indigo-500' },
                        { label: 'Water Mode',  value: MY_ACTIVE_SESSION.water,     icon: Droplets,    color: 'text-cyan-500' },
                        { label: 'Est. Finish', value: MY_ACTIVE_SESSION.estFinish, icon: Clock,       color: 'text-primary' },
                      ].map((m, i) => (
                        <div key={i} className='p-4 rounded-2xl bg-white/70 dark:bg-black/30 border border-primary/5 shadow-sm flex flex-col gap-1.5'>
                          <m.icon className={cn('w-4 h-4', m.color)} />
                          <p className='text-[9px] font-bold text-muted-foreground uppercase'>{m.label}</p>
                          <p className='text-sm font-black'>{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className='space-y-2'>
                      <div className='flex justify-between text-[10px] font-black uppercase tracking-widest'>
                        <span className='text-muted-foreground'>Cycle Progress</span>
                        <span className='text-primary'>{MY_ACTIVE_SESSION.progress}%</span>
                      </div>
                      <div className='h-3 w-full bg-primary/10 rounded-full overflow-hidden border border-primary/5 p-0.5'>
                        <motion.div
                          className='h-full bg-primary rounded-full shadow-[0_0_12px_rgba(var(--primary),0.4)]'
                          initial={{ width: 0 }}
                          animate={{ width: `${MY_ACTIVE_SESSION.progress}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                        />
                      </div>
                      <p className='text-[10px] font-medium text-muted-foreground italic'>
                        Currently rinsing — hang tight, almost done! 🎉
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Machine Availability Map ── */}
          <motion.div variants={item} className='space-y-4'>
            <div className='flex items-center justify-between px-1'>
              <h2 className='text-xl font-black tracking-tight flex items-center gap-2'>
                <MapPin className='w-5 h-5 text-primary' />
                Machine <span className='text-muted-foreground/30'>Availability</span>
              </h2>
              <div className='flex items-center gap-4 text-[10px] font-black uppercase'>
                <span className='flex items-center gap-1.5'><span className='w-2 h-2 rounded-full bg-emerald-500' />Free</span>
                <span className='flex items-center gap-1.5'><span className='w-2 h-2 rounded-full bg-primary' />Busy</span>
                <span className='flex items-center gap-1.5'><span className='w-2 h-2 rounded-full bg-muted-foreground/30' />Offline</span>
              </div>
            </div>

            {/* Tabs */}
            <div className='flex gap-2 p-1 bg-muted/30 rounded-2xl w-fit border border-border/40'>
              {(['washers', 'dryers'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all',
                    activeTab === tab ? 'bg-background shadow-md text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {tab} {tab === 'washers' ? `(${availWashers} free)` : `(${availDryers} free)`}
                </button>
              ))}
            </div>

            <Card className='p-8 border-border/40 bg-card rounded-[2.5rem] shadow-sm'>
              <div className='grid grid-cols-3 md:grid-cols-5 gap-4'>
                {filtered.map(m => <MachineCard key={m.id} m={m} />)}
              </div>
              {/* Next available hint */}
              <div className='mt-6 p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <Sparkles className='w-4 h-4 text-emerald-500' />
                  <p className='text-xs font-bold text-foreground/80'>
                    {activeTab === 'washers'
                      ? `${availWashers} washer${availWashers !== 1 ? 's' : ''} available right now`
                      : `${availDryers} dryer${availDryers !== 1 ? 's' : ''} available right now`}
                  </p>
                </div>
                <Button size='sm' className='rounded-xl text-[10px] font-black uppercase bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'>
                  Book Now
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* ── Queue Position ── */}
          <motion.div variants={item} className='space-y-4'>
            <h2 className='text-xl font-black tracking-tight px-1 flex items-center gap-2'>
              <Users className='w-5 h-5 text-primary' />
              Your <span className='text-muted-foreground/30'>Queue</span>
            </h2>
            <Card className='border-border/40 bg-card rounded-[2.5rem] overflow-hidden shadow-sm'>
              <div className='divide-y divide-border/20'>
                {QUEUE.map((q, i) => (
                  <div
                    key={i}
                    className={cn(
                      'flex items-center justify-between px-8 py-5 transition-colors',
                      q.isMe ? 'bg-primary/5' : 'hover:bg-muted/5',
                    )}
                  >
                    <div className='flex items-center gap-5'>
                      <div className={cn(
                        'w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm shadow-sm',
                        q.isMe ? 'bg-primary text-white shadow-primary/30' : 'bg-muted/30 text-muted-foreground',
                      )}>
                        #{q.position}
                      </div>
                      <div>
                        <p className={cn('font-bold text-sm', q.isMe && 'text-primary')}>
                          {q.name} {q.isMe && <span className='text-[9px] font-black uppercase tracking-widest ml-1 bg-primary/10 text-primary px-2 py-0.5 rounded-full'>You</span>}
                        </p>
                        <p className='text-[10px] font-bold text-muted-foreground uppercase'>Machine {q.machine}</p>
                      </div>
                    </div>
                    <div className='text-right'>
                      <p className={cn('text-sm font-black', q.isMe ? 'text-primary' : 'text-foreground')}>{q.eta}</p>
                      {q.isMe && (
                        <p className='text-[10px] font-bold text-muted-foreground uppercase'>Next up ✓</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* ── Order History ── */}
          <motion.div variants={item} className='space-y-4'>
            <h2 className='text-xl font-black tracking-tight px-1 flex items-center gap-2'>
              <Timer className='w-5 h-5 text-primary' />
              Wash <span className='text-muted-foreground/30'>History</span>
            </h2>
            <div className='space-y-3'>
              {HISTORY.map((h, i) => (
                <Card
                  key={i}
                  className='p-5 border-border/40 bg-card rounded-2xl flex items-center justify-between hover:bg-muted/5 transition-all group cursor-pointer shadow-sm'
                >
                  <div className='flex items-center gap-4'>
                    <div className='w-12 h-12 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-500 transition-colors'>
                      <CheckCircle2 className='w-6 h-6' />
                    </div>
                    <div>
                      <h4 className='font-bold text-sm'>{h.type}</h4>
                      <p className='text-[10px] font-bold text-muted-foreground uppercase'>
                        {h.date} · {h.machine} · {h.duration}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center gap-4'>
                    <Badge variant='outline' className='border-none bg-emerald-500/10 text-emerald-500 text-[9px] font-bold px-2 uppercase hidden sm:flex'>
                      {h.status}
                    </Badge>
                    <ChevronRight className='w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors' />
                  </div>
                </Card>
              ))}
              <Button variant='ghost' className='w-full h-12 rounded-xl font-black text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary'>
                View All History <ArrowRight className='w-3 h-3 ml-2' />
              </Button>
            </div>
          </motion.div>

        </div>

        {/* ── Right Sidebar ── */}
        <div className='lg:col-span-4 space-y-6'>

          {/* Weekly Allowance Card */}
          <motion.div variants={item}>
            <Card className='p-8 border-none bg-slate-900 rounded-[2.5rem] text-white space-y-8 relative overflow-hidden shadow-2xl'>
              <div className='absolute top-0 right-0 p-10 opacity-[0.04] pointer-events-none'>
                <CalendarCheck className='w-48 h-48' />
              </div>
              <div className='relative z-10 space-y-7'>
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-[10px] font-black uppercase tracking-[0.25em] text-white/40 mb-2'>Your Weekly Allowance</p>
                    <h3 className='text-5xl font-black tracking-tight'>
                      {WEEKLY_USED} <span className='text-white/30 text-3xl'>/ {WEEKLY_LIMIT}</span>
                    </h3>
                  </div>
                  <div className={cn(
                    'w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-colors',
                    WEEKLY_USED < WEEKLY_LIMIT ? 'bg-emerald-500 shadow-emerald-500/30' : 'bg-amber-500 shadow-amber-500/30',
                  )}>
                    {WEEKLY_USED < WEEKLY_LIMIT
                      ? <CheckCircle2 className='w-6 h-6 text-white' />
                      : <AlertTriangle className='w-6 h-6 text-white' />
                    }
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3'>
                    <div className='flex justify-between text-[10px] font-bold uppercase'>
                      <span className='text-white/40'>Resets In</span>
                      <span>{DAYS_UNTIL_RESET} Days</span>
                    </div>
                    <div className='h-1.5 w-full bg-white/10 rounded-full overflow-hidden'>
                      <div
                        className={cn('h-full rounded-full', WEEKLY_USED >= WEEKLY_LIMIT ? 'bg-amber-500' : 'bg-emerald-500')}
                        style={{ width: `${(WEEKLY_USED / WEEKLY_LIMIT) * 100}%` }}
                      />
                    </div>
                  </div>
                  <p className='text-[10px] text-white/40 text-center leading-relaxed'>
                    {WEEKLY_USED >= WEEKLY_LIMIT
                      ? 'You\'ve used your weekly wash. Contact reception for extra washes.'
                      : 'Your weekly wash is included in your dorm fee. Extra washes at the front desk.'}
                  </p>
                </div>

                {WEEKLY_USED < WEEKLY_LIMIT && (
                  <Button className='w-full h-12 rounded-xl bg-primary text-white font-black text-[10px] uppercase tracking-widest hover:bg-primary/90 shadow-xl shadow-primary/20'>
                    <Plus className='w-4 h-4 mr-2' /> Use My Wash
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={item}>
            <Card className='p-7 border-border/40 bg-card rounded-[2.5rem] space-y-5 shadow-sm'>
              <h3 className='text-base font-black tracking-tight'>Quick <span className='text-muted-foreground/30'>Actions</span></h3>
              <div className='space-y-3'>
                {[
                  { label: 'Book a Time Slot',  sub: 'Reserve your machine',   icon: CalendarCheck, color: 'text-primary',     bg: 'bg-primary/10',     hover: 'hover:border-primary/20 hover:bg-primary/5' },
                  { label: 'Report an Issue',   sub: 'Machine broken or stuck', icon: AlertTriangle, color: 'text-rose-500',    bg: 'bg-rose-500/10',    hover: 'hover:border-rose-500/20 hover:bg-rose-500/5' },
                  { label: 'Laundry Tips',      sub: 'Care guide for fabrics',  icon: Star,          color: 'text-amber-500',   bg: 'bg-amber-500/10',   hover: 'hover:border-amber-500/20 hover:bg-amber-500/5' },
                  { label: 'Ask Reception',     sub: 'Chat with front desk',    icon: Bell,          color: 'text-indigo-500',  bg: 'bg-indigo-500/10',  hover: 'hover:border-indigo-500/20 hover:bg-indigo-500/5' },
                ].map((a, i) => (
                  <button
                    key={i}
                    className={cn(
                      'w-full flex items-center gap-4 p-4 rounded-2xl border border-border/40 transition-all group text-left',
                      a.hover,
                    )}
                  >
                    <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110', a.bg, a.color)}>
                      <a.icon className='w-5 h-5' />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='font-bold text-sm'>{a.label}</p>
                      <p className='text-[10px] font-bold text-muted-foreground uppercase truncate'>{a.sub}</p>
                    </div>
                    <ChevronRight className={cn('w-4 h-4 text-muted-foreground/30 group-hover:translate-x-0.5 transition-all', a.color.replace('text-', 'group-hover:text-'))} />
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Facility Alerts */}
          <motion.div variants={item}>
            <Card className='p-7 border-border/40 bg-card rounded-[2.5rem] space-y-4 shadow-sm'>
              <div className='flex items-center justify-between'>
                <h3 className='text-base font-black tracking-tight'>Facility <span className='text-muted-foreground/30'>Alerts</span></h3>
                <Bell className='w-4 h-4 text-muted-foreground/30' />
              </div>
              <div className='space-y-3'>
                <div className='p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex gap-3 items-start'>
                  <Zap className='w-4 h-4 text-emerald-500 shrink-0 mt-0.5' />
                  <p className='text-xs font-medium text-foreground/80 leading-relaxed'>
                    Floor 4 is at <span className='font-bold'>25% capacity</span> right now — great time to do your laundry!
                  </p>
                </div>
                <div className='p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex gap-3 items-start'>
                  <AlertTriangle className='w-4 h-4 text-amber-500 shrink-0 mt-0.5' />
                  <p className='text-xs font-medium text-foreground/80 leading-relaxed'>
                    Unit <span className='font-bold'>W-05</span> is offline for routine filter cleaning today.
                  </p>
                </div>
                <div className='p-4 rounded-2xl bg-primary/5 border border-primary/10 flex gap-3 items-start'>
                  <ShieldCheck className='w-4 h-4 text-primary shrink-0 mt-0.5' />
                  <p className='text-xs font-medium text-foreground/80 leading-relaxed'>
                    All machines serviced and certified. Last hygiene check was <span className='font-bold'>yesterday</span>.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Laundry Tip */}
          <motion.div variants={item}>
            <Card className='p-6 border-border/40 bg-muted/30 rounded-[2rem] space-y-3'>
              <div className='flex items-center gap-2 text-primary'>
                <Info className='w-4 h-4' />
                <span className='text-[10px] font-black uppercase tracking-widest'>Laundry Tip</span>
              </div>
              <p className='text-xs font-medium text-muted-foreground leading-relaxed'>
                Separate your whites and colours to prevent colour bleeding. Use cold water for delicate fabrics to preserve quality and save energy.
              </p>
            </Card>
          </motion.div>

        </div>
      </div>

      {/* ─── Booking Modal (inline, no external lib needed) ───────────── */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm'
            onClick={() => setBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              className='bg-background border border-border/40 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl space-y-8'
            >
              <div className='flex justify-between items-start'>
                <div className='space-y-1'>
                  <h3 className='text-2xl font-black tracking-tight'>Book a Machine</h3>
                  <p className='text-sm text-muted-foreground font-medium'>Select a machine and preferred time.</p>
                </div>
                <button
                  onClick={() => setBookingOpen(false)}
                  className='w-10 h-10 rounded-xl bg-muted/30 flex items-center justify-center text-muted-foreground hover:bg-muted/60 transition-colors'
                >✕</button>
              </div>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <label className='text-[10px] font-black uppercase tracking-widest text-muted-foreground'>Machine Type</label>
                  <div className='grid grid-cols-2 gap-3'>
                    {['Washer', 'Dryer'].map(t => (
                      <button key={t} className='p-4 rounded-2xl border-2 border-primary bg-primary/5 text-sm font-black text-primary transition-all hover:bg-primary hover:text-white'>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='space-y-2'>
                  <label className='text-[10px] font-black uppercase tracking-widest text-muted-foreground'>Available Slots</label>
                  <div className='grid grid-cols-3 gap-3'>
                    {['Now', '11:00 AM', '12:30 PM', '2:00 PM', '3:30 PM', '5:00 PM'].map(t => (
                      <button key={t} className='p-3 rounded-xl border border-border/40 text-[11px] font-black text-center hover:border-primary hover:bg-primary/5 transition-all'>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button className='w-full h-14 rounded-2xl bg-primary text-white font-black text-sm shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform'>
                Confirm Booking <ArrowRight className='w-4 h-4 ml-2' />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
