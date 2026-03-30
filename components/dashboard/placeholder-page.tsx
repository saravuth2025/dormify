import { Card } from '@/components/ui/card';
import { Construction } from 'lucide-react';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 animate-in fade-in zoom-in duration-500">
      <div className="w-16 h-16 bg-secondary/50 rounded-2xl flex items-center justify-center text-muted-foreground mb-4">
        <Construction className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground max-w-sm">
        This module is currently being optimized for the new v2.0 experience. Check back soon.
      </p>
    </div>
  );
}
