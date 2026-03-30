'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, Key, Users, Bell, ArrowLeft, 
  Building2, Heart, MessageSquare, Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResidentPage() {
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
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-10"
            >
              <Badge variant="outline" className="px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.4em] border-primary/20 text-primary">
                Student Life v2.0
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
                Live <br />
                <span className="text-muted-foreground/30 italic">Empowered.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-lg border-l-2 border-primary pl-6">
                Your entire campus experience in the palm of your hand. From digital keys to community events, Dormify makes student life seamless.
              </p>

              <div className="grid gap-6 pt-4">
                {[
                  { title: "Digital Key Access", icon: <Key />, desc: "Unlock your room and building with a secure, encrypted NFC token on your phone." },
                  { title: "Smart Dining", icon: <Heart />, desc: "Track meal credits, view menus, and get nutritional data in real-time." },
                  { title: "Community Hub", icon: <Users />, desc: "Stay connected with campus events and direct messaging with staff." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex justify-center lg:justify-end"
            >
               {/* Mobile UI Preview */}
               <div className="relative w-[300px] h-[620px] bg-slate-900 rounded-[3.5rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                  <div className="absolute inset-0 bg-background p-8 space-y-8">
                     <div className="flex justify-between items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10" />
                        <Bell className="w-5 h-5 text-muted-foreground" />
                     </div>
                     <div className="space-y-2">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">Resident Portal</p>
                        <h5 className="text-2xl font-black">Hi, Alex.</h5>
                     </div>
                     <div className="bg-primary p-6 rounded-[2rem] text-white space-y-6 shadow-xl shadow-primary/20">
                        <div className="flex justify-between">
                           <Key className="w-6 h-6" />
                           <Zap className="w-6 h-6 opacity-50" />
                        </div>
                        <p className="text-sm font-bold">Room 402 Active</p>
                        <Button className="w-full bg-white text-primary font-black rounded-2xl h-12 text-[10px] uppercase tracking-widest">
                           Hold to Entry
                        </Button>
                     </div>
                     <div className="space-y-4">
                        <div className="h-20 rounded-2xl border border-border bg-muted/20 p-4 flex gap-4">
                           <div className="w-10 h-10 rounded-xl bg-muted" />
                           <div className="space-y-2 flex-1 pt-1">
                              <div className="h-2 w-full bg-muted rounded-full" />
                              <div className="h-2 w-2/3 bg-muted/50 rounded-full" />
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl" />
               </div>
               
               {/* Decorative Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>
      </main>

      <section className="py-32 bg-muted/20 border-y border-border">
         <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Download the Native App.</h2>
            <div className="flex flex-wrap justify-center gap-6">
               <div className="h-16 px-10 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary transition-all cursor-pointer">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                     <p className="text-[10px] font-black uppercase text-muted-foreground">Download on</p>
                     <p className="text-lg font-bold tracking-tight leading-none">App Store</p>
                  </div>
               </div>
               <div className="h-16 px-10 rounded-2xl border border-border bg-card flex items-center gap-4 hover:border-primary transition-all cursor-pointer">
                  <Smartphone className="w-6 h-6 rotate-180" />
                  <div className="text-left">
                     <p className="text-[10px] font-black uppercase text-muted-foreground">Get it on</p>
                     <p className="text-lg font-bold tracking-tight leading-none">Google Play</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
