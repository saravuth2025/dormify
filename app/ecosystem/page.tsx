'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, Utensils, Waves, Wrench, ArrowLeft, 
  Shield, Zap, Activity, CheckCircle2 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function EcosystemPage() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-8 mb-24"
          >
            <Badge variant="outline" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] border-primary/20 text-primary">
              Product Deep Dive
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              The Unified <br />
              <span className="text-muted-foreground/30 italic">Ecosystem.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed border-l-2 border-primary pl-6">
              Explore how Dormify integrates every facet of campus living into a single, high-performance operating system.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              { 
                title: "Smart Housing", 
                icon: <Building2 />, 
                desc: "Automated room assignments based on resident preferences and real-time availability. Digital contracts and move-in workflows that save hours of manual labor.",
                features: ["Intelligent Matching", "Digital Lease Signing", "Inventory Audits"]
              },
              { 
                title: "Gourmet Dining", 
                icon: <Utensils />, 
                desc: "Full-scale kitchen management with inventory tracking, nutritional analysis, and automated resident meal credit deduction.",
                features: ["Allergen Tracking", "Supply Prediction", "Mobile Ordering"]
              },
              { 
                title: "IoT Laundry", 
                icon: <Waves />, 
                desc: "Integrated sensor networks that provide real-time machine availability and automated maintenance alerts directly to staff.",
                features: ["Live Status Feed", "SMS Notifications", "Utility Analytics"]
              },
              { 
                title: "Facility Maintenance", 
                icon: <Wrench />, 
                desc: "Institutional-grade ticketing system with photo evidence, priority routing, and professional team management.",
                features: ["SLA Monitoring", "Asset Lifecycle", "Work Order Sync"]
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] border border-border bg-card/50 space-y-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{item.desc}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                   {item.features.map((f, j) => (
                     <div key={j} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <CheckCircle2 className="w-3 h-3 text-primary" />
                        {f}
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Everything Connects.</h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">Dormify was built from the ground up to ensure that no department is an island. Data flows seamlessly from the meal hall to the manager's desk.</p>
            <Button size="lg" className="rounded-full px-10 h-14 bg-primary text-white font-bold hover:scale-105 transition-all">
               Start Integrating
            </Button>
         </div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[120px] rounded-full" />
      </section>
    </div>
  );
}
