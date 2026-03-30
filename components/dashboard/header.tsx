'use client';

import { Bell, Search, ChevronDown, Sparkles, Command } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  role: 'admin' | 'tenant' | 'chef';
  tier?: 'normal' | 'pro' | 'premium';
}

export function Header({ role, tier = 'normal' }: HeaderProps) {
  return (
    <header className={cn(
      "sticky top-0 z-40 transition-all duration-500",
      tier === 'premium' ? "px-6 py-4" : tier === 'pro' ? "px-4 py-3" : "px-3 py-2"
    )}>
      <div className={cn(
        "max-w-[1600px] mx-auto flex items-center justify-between gap-8 transition-all duration-500",
        tier === 'premium'
          ? "bg-muted/10 backdrop-blur-3xl border border-border/40 rounded-[2rem] px-6 h-16 shadow-2xl shadow-primary/5"
          : tier === 'pro'
          ? "bg-muted/10 backdrop-blur-xl border border-border/40 rounded-2xl px-5 h-14 shadow-sm"
          : "bg-background border-b border-border rounded-none px-4 h-12 shadow-none"
      )}>
        <div className="flex-1 max-w-md relative group hidden sm:block">

          {tier !== 'normal' && (
            <div className={cn(
              "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              tier === 'premium' ? "bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10" : "bg-gradient-to-r from-white/20 via-transparent to-white/20"
            )} />
          )}

          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none z-10">
            <div className={cn(
              "p-2 rounded-xl shadow-sm transition-all duration-500 ease-out",
              tier === 'premium'
                ? "bg-foreground/10 backdrop-blur-md border border-foreground/20 text-foreground group-focus-within:bg-primary group-focus-within:text-white group-focus-within:scale-105"
                : tier === 'pro'
                ? "bg-foreground/5 border border-foreground/10 text-muted-foreground group-focus-within:bg-primary group-focus-within:text-white group-focus-within:scale-105"
                : "bg-muted border border-border text-muted-foreground group-focus-within:bg-foreground group-focus-within:text-background"
            )}>
              <Search className="w-4 h-4" />
            </div>
          </div>

          <Input
            placeholder={`Search ${role === 'admin' ? 'residents, rooms, logs...' : role === 'chef' ? 'meals, inventory, plans...' : 'payments, meals, profile...'}`}
            className={cn(
              "w-full pl-14 pr-24 transition-all duration-500 text-sm font-semibold tracking-tight",
              tier === 'premium'
                ? "bg-foreground/5 border-foreground/10 hover:bg-foreground/10 focus:bg-foreground/15 backdrop-blur-2xl h-12 rounded-xl shadow-inner placeholder:text-muted-foreground/40"
                : tier === 'pro'
                ? "bg-foreground/5 border-foreground/10 hover:bg-foreground/10 focus:bg-foreground/15 backdrop-blur-2xl h-11 rounded-xl shadow-sm placeholder:text-muted-foreground/40"
                : "bg-muted/50 border-border h-10 rounded-lg focus:bg-background placeholder:text-muted-foreground/50 shadow-none"
            )}
          />

          {tier !== 'normal' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2.5 z-10">
              <div className={cn(
                "hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[10px] font-black shadow-sm transition-colors duration-500",
                tier === 'premium'
                  ? "border-white/20 bg-white/10 text-white/60 group-focus-within:text-primary"
                  : "border-white/60 bg-white/90 text-muted-foreground group-focus-within:text-primary"
              )}>
                 <span className="text-[12px] leading-none">⌘</span>
                 <span className="leading-none">K</span>
              </div>

              <div className={cn(
                "h-8 w-[1px] transition-colors duration-500",
                tier === 'premium' ? "bg-white/10" : "bg-white/40"
              )} />

              <div className={cn(
                "p-1.5 rounded-lg transition-all duration-500",
                tier === 'premium' ? "bg-cyan-500/10 text-cyan-400" : "bg-emerald-500/5 text-emerald-600/60"
              )}>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />

          <Button variant="ghost" size="icon" className="relative h-10 w-10 rounded-xl text-muted-foreground hover:bg-muted transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-primary border-2 border-background"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className={cn(
                "flex items-center gap-3 pl-4 border-l transition-all group cursor-pointer",
                "border-border/40"
              )}>
                <Avatar className={cn(
                  "h-9 w-9 border-2 shadow-sm transition-all",
                  tier === 'premium' ? "border-primary/20 group-hover:border-primary/60" : "border-border/40 group-hover:border-primary/40"
                )}>
                  <AvatarFallback className="bg-primary/5 text-primary font-bold text-xs">Sv</AvatarFallback>
                </Avatar>
                <div className="flex flex-col hidden lg:flex">
                  <p className={cn("text-sm font-bold leading-tight text-foreground")}> Saravuth</p>
                  <p className={cn(
                    "text-[10px] font-bold uppercase tracking-wider capitalize",
                    tier === 'premium' ? "text-primary/70" : tier === 'pro' ? "text-primary/60" : "text-muted-foreground/60"
                  )}>{tier} Plan</p>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className={cn(
              "w-56 rounded-[1.5rem] p-2 shadow-2xl border-border/40 bg-popover/80 backdrop-blur-2xl"
            )}>
              <DropdownMenuLabel className="font-bold text-xs uppercase tracking-widest text-muted-foreground/70 px-3 py-2">Global Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border/40" />
              <DropdownMenuItem className="rounded-xl cursor-pointer py-3 px-3 font-semibold text-sm">Profile Settings</DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl cursor-pointer py-3 px-3 font-semibold text-sm">Organization</DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/40" />
              <DropdownMenuItem className="rounded-xl cursor-pointer py-3 px-3 font-bold text-sm text-destructive focus:text-destructive focus:bg-destructive/5">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
