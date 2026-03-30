'use client';

import { LucideIcon, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  tier: 'normal' | 'pro' | 'premium';
}

export function StatCard({ label, value, change, trend, icon: Icon, tier }: StatCardProps) {

  const trendColor = trend === 'up' ? 'text-success' : trend === 'down' ? 'text-destructive' : 'text-muted-foreground';
  const TrendIcon = trend === 'up' ? ArrowUpRight : trend === 'down' ? ArrowDownRight : Minus;

  return (
    <Card className={cn(
      "flex flex-col justify-between p-6 transition-all duration-500 group relative overflow-hidden",
      tier === 'premium'
        ? "bg-card border-primary/20 hover:border-primary/40 rounded-[2rem] shadow-2xl shadow-primary/5 dark:bg-primary/5 dark:backdrop-blur-3xl"
        : tier === 'pro'
        ? "bg-card border-border/40 backdrop-blur-xl rounded-2xl hover:shadow-lg transition-all"
        : "bg-card border-border rounded-xl shadow-sm hover:shadow-md"
    )}>
      {tier === 'premium' && (
        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-1000" />
      )}

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div className={cn(
          "p-3 rounded-xl transition-all duration-500",
          tier === 'premium'
            ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 shadow-sm"
            : tier === 'pro'
            ? "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
            : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground"
        )}>
          <Icon className="w-5 h-5" />
        </div>
        {change && (
          <div className={cn(
            "flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full transition-colors",
            tier === 'premium' ? "bg-primary/5 border border-primary/10" : "bg-muted/30",
            trendColor
          )}>
            <TrendIcon className="w-3 h-3" />
            {change}
          </div>
        )}
      </div>
      <div className="relative z-10">
        <h3 className={cn(
          "text-3xl font-black tracking-tighter mb-1 transition-colors text-foreground"
        )}>{value}</h3>
        <p className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors text-muted-foreground/60"
        )}>{label}</p>
      </div>
    </Card>
  );
}
