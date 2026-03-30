'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { LucideIcon, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface ActivityItem {
  title: string;
  description: string;
  time: string;
  status?: 'success' | 'pending' | 'warning';
  icon?: LucideIcon;
}

interface ActivityFeedProps {
  title: string;
  items: ActivityItem[];
  tier: 'normal' | 'pro' | 'premium';
}

export function ActivityFeed({ title, items, tier }: ActivityFeedProps) {
  const isPremium = tier === 'premium';

  return (
    <Card className={cn(
      "p-8 transition-all duration-300 border-border/50",
      isPremium
        ? "bg-slate-950/40 backdrop-blur-xl border-indigo-500/10"
        : "bg-card shadow-sm"
    )}>
      <div className="flex items-center justify-between mb-8">
        <h3 className={cn(
          "text-sm font-bold uppercase tracking-widest",
          isPremium ? "text-indigo-400" : "text-muted-foreground"
        )}>
          {title}
        </h3>
        <Badge variant="outline" className="text-[10px] font-bold border-muted-foreground/20">
          Recent
        </Badge>
      </div>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-4 group cursor-pointer">
            <div className={cn(
              "p-2 rounded-lg transition-colors border",
              item.status === 'success' ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/20" :
              item.status === 'warning' ? "bg-amber-500/5 text-amber-500 border-amber-500/20" :
              "bg-muted/50 text-muted-foreground border-transparent"
            )}>
              {item.status === 'success' ? <CheckCircle2 className="w-4 h-4" /> :
               item.status === 'warning' ? <AlertTriangle className="w-4 h-4" /> :
               <Clock className="w-4 h-4" />}
            </div>
            <div className="flex-1 border-b border-border/50 pb-4 group-last:border-none">
              <div className="flex items-center justify-between mb-1">
                <p className={cn(
                  "text-sm font-bold",
                  isPremium ? "text-white group-hover:text-indigo-400" : "text-foreground group-hover:text-primary"
                )}>
                  {item.title}
                </p>
                <span className="text-[10px] font-medium text-muted-foreground">{item.time}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
