'use client';

import {
  Utensils, Clock, Calendar, Plus, ChevronRight, Zap, Activity,
  Leaf, Flame, Scale, Star, Shield, Menu as MenuIcon,
  TrendingDown, TrendingUp, DollarSign, Users, AlertTriangle,
  CheckCircle2, Heart, Info, Filter, Search, Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface MealsContentProps {
  title: string;
  tier?: 'normal' | 'pro' | 'premium';
  role?: 'admin' | 'tenant' | 'chef';
}

export function MealsContent({ title, tier = 'normal', role = 'admin' }: MealsContentProps) {
  const [selectedDay, setSelectedDay] = useState('Today');
  const isPremium = tier === 'premium';

  if (role === 'tenant') {
    const todayMenu = [
      { id: 'm1', meal: 'Breakfast', menu: 'Scrambled Eggs, Avocado Toast', time: '07:30 - 09:30', kcal: 450, protein: '24g', carbs: '32g', fat: '18g', icon: '🍳', tags: ['High Protein', 'Vegetarian'], allergens: ['Eggs', 'Gluten'] },
      { id: 'm2', meal: 'Lunch', menu: 'Grilled Chicken Caesar Salad', time: '12:00 - 14:00', kcal: 620, protein: '42g', carbs: '45g', fat: '22g', icon: '🥗', tags: ['Keto'], allergens: ['Dairy', 'Fish'] },
      { id: 'm3', meal: 'Dinner', menu: 'Slow-cooked Beef Bourguignon', time: '18:30 - 20:30', kcal: 780, protein: '38g', carbs: '65g', fat: '28g', icon: '🥘', tags: ['Chef Special'], allergens: ['Dairy'] },
    ];

    const weekDays = [
      { day: 'Mon', date: '27', active: true },
      { day: 'Tue', date: '28', active: false },
      { day: 'Wed', date: '29', active: false },
      { day: 'Thu', date: '30', active: false },
      { day: 'Fri', date: '31', active: false },
      { day: 'Sat', date: '01', active: false },
      { day: 'Sun', date: '02', active: false },
    ];

    return (
      <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-700">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-6 border-b border-border/40">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">{title}</h2>
            <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
              <span className="text-primary flex items-center gap-1"><Star className="w-3 h-3 fill-primary" /> Elite Dining</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>Spring Cycle • Week 12</span>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto">
             <Button variant="outline" className="flex-1 lg:flex-none h-10 rounded-xl font-bold text-xs border-border/40 bg-background hover:bg-muted transition-all">
                <Calendar className="w-4 h-4 mr-2" /> Full Schedule
             </Button>
             <Button className="flex-1 lg:flex-none h-10 rounded-xl font-bold text-xs bg-primary text-primary-foreground shadow-lg shadow-primary/10">
                <Plus className="w-4 h-4 mr-2" /> Guest Credits
             </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {weekDays.map((d) => (
            <button
              key={d.day}
              className={cn(
                "flex flex-col items-center min-w-[70px] py-3 rounded-2xl transition-all border",
                d.active
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-card border-border/40 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              <span className="text-[10px] font-black uppercase tracking-tighter mb-1">{d.day}</span>
              <span className="text-lg font-bold">{d.date}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MenuIcon className="w-5 h-5 text-primary" /> Daily Selections
              </h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-xs font-bold text-muted-foreground hover:text-primary">
                  <Filter className="w-3.5 h-3.5 mr-2" /> Filters
                </Button>
              </div>
            </div>

            <div className="grid gap-6">
              {todayMenu.map((item) => (
                <Card key={item.id} className="group overflow-hidden border-border/40 bg-card hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 rounded-3xl">
                  <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8">
                    <div className="md:w-32 md:h-32 w-full h-48 flex items-center justify-center text-6xl bg-muted/30 rounded-2xl group-hover:scale-105 transition-transform duration-500 shrink-0">
                      {item.icon}
                    </div>

                    <div className="flex-1 space-y-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-primary/30 text-primary bg-primary/5 px-2 py-0.5">{item.meal}</Badge>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {item.time}</span>
                          </div>
                          <h4 className="text-2xl font-serif tracking-tight text-foreground group-hover:text-primary transition-colors">{item.menu}</h4>
                        </div>
                        <Button variant="outline" size="icon" className="h-10 w-10 shrink-0 rounded-xl border-border/40 hover:bg-rose-50 hover:text-rose-500 hover:border-rose-200 transition-all shadow-sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-4 rounded-2xl bg-muted/20 border border-border/40">

                         <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                               <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                  <Flame className="w-4 h-4" />
                               </div>
                               <div>
                                  <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest leading-none mb-1">Cals</p>
                                  <p className="text-base font-black leading-none">{item.kcal}</p>
                               </div>
                            </div>

                            <div className="flex items-center gap-4 text-center">
                               <div>
                                  <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mb-0.5">Pro</p>
                                  <p className="text-sm font-bold">{item.protein}</p>
                               </div>
                               <div className="w-px h-6 bg-border/60" />
                               <div>
                                  <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mb-0.5">Carbs</p>
                                  <p className="text-sm font-bold">{item.carbs}</p>
                               </div>
                               <div className="w-px h-6 bg-border/60" />
                               <div>
                                  <p className="text-[8px] font-black uppercase text-muted-foreground tracking-widest mb-0.5">Fat</p>
                                  <p className="text-sm font-bold">{item.fat}</p>
                               </div>
                            </div>
                         </div>

                         <div className="flex flex-col items-start sm:items-end gap-2">
                            <span className="text-[8px] font-bold text-muted-foreground uppercase opacity-70 flex items-center gap-1"><Info className="w-3 h-3" /> Contains</span>
                            <div className="flex gap-1.5 flex-wrap">
                               {item.allergens.map(allergen => (
                                 <Badge key={allergen} variant="outline" className="text-[9px] font-bold border-amber-500/30 text-amber-600 bg-amber-500/5 px-2 py-0 border-dashed">
                                   {allergen}
                                 </Badge>
                               ))}
                            </div>
                         </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-8 py-3 bg-muted/10 border-t border-border/40 flex justify-between items-center group-hover:bg-primary/5 transition-colors">
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Nutritional details verified by Chef Team</p>
                    <Button size="sm" className="h-8 px-4 rounded-lg font-bold text-[10px] uppercase tracking-widest">Select</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">

            <Card className="p-6 border-border/40 rounded-3xl bg-background space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold">Plan Summary</h4>
                <Settings className="w-4 h-4 text-muted-foreground/40" />
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border/20">
                  <div className="flex justify-between items-end mb-2">
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Available Credits</p>
                      <p className="text-3xl font-black">42</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black mb-1">PREMIUM</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span className="text-muted-foreground uppercase">Weekly Usage</span>
                      <span>14 / 21</span>
                    </div>
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: '66%' }} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-2xl border border-border/40 flex flex-col items-center text-center">
                    <Leaf className="w-4 h-4 text-emerald-500 mb-1" />
                    <p className="text-[9px] font-bold text-muted-foreground uppercase">Veggie</p>
                    <p className="text-xs font-bold">Enabled</p>
                  </div>
                  <div className="p-3 rounded-2xl border border-border/40 flex flex-col items-center text-center">
                    <Flame className="w-4 h-4 text-orange-500 mb-1" />
                    <p className="text-[9px] font-bold text-muted-foreground uppercase">High Kcal</p>
                    <p className="text-xs font-bold">Disabled</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full h-10 rounded-xl font-bold text-xs">Manage Dining Plan</Button>
            </Card>

            <section className="space-y-3">
              <h4 className="text-sm font-bold px-1">Quick Tools</h4>
              <div className="grid gap-2">
                {[
                  { label: 'Dietary Restrictions', icon: Shield, color: 'text-indigo-500' },
                  { label: 'Nutrition Calculator', icon: Scale, color: 'text-cyan-500' },
                  { label: 'Submit Feedback', icon: Info, color: 'text-amber-500' },
                ].map((item, i) => (
                  <button key={i} className="flex items-center justify-between p-4 rounded-2xl border border-border/20 bg-card hover:bg-muted/30 transition-all text-left group">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-lg bg-muted flex items-center justify-center transition-colors group-hover:bg-white", item.color)}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-foreground/80">{item.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30" />
                  </button>
                ))}
              </div>
            </section>

            <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex gap-3">
              <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-[11px] font-bold text-foreground">Kitchen Hours Update</p>
                <p className="text-[10px] text-muted-foreground leading-relaxed">Service ends at 19:30 this Friday due to the Spring Formal event preparation.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  const kpiStats = [
    { label: 'Today Served', value: '428', sub: '85% of target', icon: Users, color: 'text-primary' },
    { label: 'Food Cost', value: '28.4%', sub: '-1.2% this week', icon: DollarSign, color: 'text-emerald-500', trend: 'down' },
    { label: 'Waste Est.', value: '4.2%', sub: 'Within threshold', icon: TrendingDown, color: 'text-amber-500' },
  ];

  const dailyMeals = [
    { id: 'm1', type: 'Breakfast', menu: 'Scrambled Eggs, Avocado Toast', time: '07:30 - 09:30', status: 'Published', icon: '🍳' },
    { id: 'm2', type: 'Lunch', menu: 'Grilled Chicken Caesar Salad', time: '12:00 - 14:00', status: 'Prep Active', icon: '🥗' },
    { id: 'm3', type: 'Dinner', menu: 'Slow-cooked Beef Bourguignon', time: '18:30 - 20:30', status: 'Pending', icon: '🥘' },
  ];

  return (
    <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-700">

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-border/40">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{title}</h2>
          <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-0.5">
            <span className="flex items-center gap-1.5"><Activity className="w-3 h-3 text-emerald-500" /> Kitchen: Online</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span>Week 12 Planning</span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full lg:w-auto">
          <div className="relative flex-1 lg:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-9 h-9 w-full lg:w-48 bg-card border-border/40 rounded-xl text-xs" />
          </div>
          <Button className="h-9 px-4 rounded-xl font-bold text-xs bg-primary text-primary-foreground">
            Update Menu
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kpiStats.map((stat, i) => (
          <Card key={i} className="p-4 border-border/40 bg-card rounded-2xl hover:shadow-xl hover:shadow-primary/5 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center transition-colors bg-muted/50 group-hover:bg-primary/10", stat.color)}>
                <stat.icon className="w-4 h-4" />
              </div>
              <Badge variant="outline" className={cn(
                "text-[9px] font-black border-border/40 h-4 px-1.5",
                stat.trend === 'down' ? "text-emerald-500" : "text-muted-foreground"
              )}>{stat.sub}</Badge>
            </div>
            <div>
              <p className="text-[9px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-black">{stat.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        <div className="lg:col-span-8 space-y-4 flex flex-col">
          <div className="flex items-center justify-between min-h-[32px]">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Today's Menu</h3>
            <Button variant="outline" size="sm" className="h-8 text-[10px] font-bold rounded-lg border-border/40">Manage Cycle</Button>
          </div>

          <div className="grid gap-4 flex-1">
            {dailyMeals.map((meal) => (
              <Card key={meal.id} className="group overflow-hidden border-border/40 bg-card hover:border-primary/30 transition-all duration-300 rounded-3xl">
                <div className="p-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                   <div className="w-16 h-16 flex items-center justify-center text-3xl bg-muted/30 rounded-2xl group-hover:scale-105 transition-transform shrink-0">
                      {meal.icon}
                   </div>

                   <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-3">
                         <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest border-primary/30 text-primary bg-primary/5 px-2 py-0.5">{meal.type}</Badge>
                         <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1.5"><Clock className="w-3 h-3" /> {meal.time}</span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{meal.menu}</h4>
                   </div>

                   <div className="flex items-center gap-4 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-0 border-border/40">
                      <Badge variant="outline" className={cn(
                        "text-[9px] font-black uppercase tracking-widest border-none px-2",
                        meal.status === 'Published' ? "bg-emerald-500/10 text-emerald-600" :
                        meal.status === 'Prep Active' ? "bg-amber-500/10 text-amber-600 animate-pulse" :
                        "bg-muted text-muted-foreground"
                      )}>{meal.status}</Badge>

                      <Button variant="outline" size="sm" className="h-8 px-4 font-bold text-[10px] uppercase tracking-widest rounded-lg border-border/40 hover:bg-primary/5 hover:text-primary transition-all">
                        Update
                      </Button>
                   </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4 flex flex-col">

          <div className="flex items-center justify-between min-h-[32px]">
             <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Inventory Sync</h3>
             <Badge variant="outline" className="text-[9px] font-black uppercase tracking-widest text-amber-500 border-amber-500/30 bg-amber-500/10 h-5 px-2">1 Alert</Badge>
          </div>

          <Card className="p-5 border-border/40 bg-card rounded-3xl flex flex-col flex-1">
            <div className="space-y-4 flex-1">
              {[
                { label: 'Fresh Produce', level: 85, color: 'bg-emerald-500', status: 'Optimal' },
                { label: 'Dry Goods', level: 42, color: 'bg-amber-500', status: 'Reorder Soon' },
                { label: 'Meat & Protein', level: 15, color: 'bg-rose-500', status: 'Critical' },
              ].map((item, i) => (
                <div key={i} className="space-y-2 group">
                  <div className="flex justify-between items-end">
                    <div>
                       <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.label}</span>
                       <p className={cn("text-[9px] font-bold mt-0.5", item.level < 20 ? "text-rose-500" : "text-muted-foreground/50")}>{item.status}</p>
                    </div>
                    <span className={cn("text-xs font-bold", item.level < 20 ? "text-rose-500" : "text-foreground")}>{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className={cn("h-full transition-all duration-1000", item.color)} style={{ width: `${item.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full h-10 rounded-xl font-bold text-[10px] uppercase tracking-widest border-border/40 hover:bg-muted/50 mt-6">Full Audit</Button>
          </Card>

        </div>
      </div>
    </div>
  );
}
