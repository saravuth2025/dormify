'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, Shield, Activity, ArrowLeft, 
  Building2, CreditCard, BarChart3, Globe 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function InstitutionalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10 selection:text-primary">
      <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
              <Building2 className="w-4 h-4" />
            </div>
            <span className="font-bold text-lg tracking-tight">Dormify</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 font-bold text-[10px] uppercase tracking-widest">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl space-y-8 mb-24"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] border-primary/20 text-primary">
              Institutional Strategy
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Portfolio <br />
              <span className="text-muted-foreground/30 italic">Forensics.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-2xl border-l-2 border-primary pl-6">
              Institutional-grade tools designed for property owners who demand precision. Turn complex operational data into forensic-level portfolio yield.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Yield Optimization", 
                icon: <TrendingUp className="w-6 h-6 text-primary" />, 
                desc: "Identify revenue leakages and optimize occupancy with predictive AI models that forecast demand 12 months in advance.",
                stat: "+18.4% Avg ROI"
              },
              { 
                title: "Risk Mitigation", 
                icon: <Shield className="w-6 h-6 text-primary" />, 
                desc: "SOC2 Type II compliant security architectures ensuring that institutional data and resident privacy are never compromised.",
                stat: "Enterprise Grade"
              },
              { 
                title: "Global Management", 
                icon: <Globe className="w-6 h-6 text-primary" />, 
                desc: "Unify disparate assets across different timezones and currencies into a single, high-fidelity command center.",
                stat: "Multi-Currency"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2.5rem] border border-border bg-card/50 flex flex-col space-y-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className="pt-6 border-t border-border flex justify-between items-center">
                   <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.stat}</span>
                   <BarChart3 className="w-4 h-4 text-muted-foreground/30" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 rounded-[3rem] bg-slate-950 p-12 md:p-24 text-white overflow-hidden relative">
             <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                   <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Real-Time Oversight.</h2>
                   <p className="text-slate-400 text-lg leading-relaxed font-medium">Connect your entire portfolio to Dormify and watch your operational overhead vanish. Our API-first approach means you're integrated in weeks, not months.</p>
                   <Button size="lg" className="h-16 px-10 rounded-2xl bg-primary text-white font-bold hover:scale-105 transition-all">
                      Request Portfolio Audit
                   </Button>
                </div>
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                   <img src="/dashboard-overview.jpg" alt="Dashboard" className="w-full h-full object-cover opacity-60" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                         <Activity className="text-white w-8 h-8 animate-pulse" />
                      </div>
                   </div>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-32 -mt-32" />
          </div>
        </div>
      </main>
    </div>
  );
}
