'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Building2, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row overflow-hidden">
      <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 relative z-10 bg-white">
        <div className="max-w-md w-full mx-auto space-y-8">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-black tracking-tighter text-black">Dormify</span>
          </div>

          <div className="space-y-1.5">
            <h1 className="text-3xl font-black tracking-tight text-black">Forgot Password?</h1>
            <p className="text-muted-foreground font-medium text-sm">
              We'll send you a reset link
            </p>
          </div>

          <form onSubmit={handleSendReset} className="space-y-5">
            <div className="space-y-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Email
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-11 pl-11 pr-4 rounded-xl border-border bg-transparent focus:ring-2 focus:ring-black/5 transition-all text-sm font-medium"
                    required
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all mt-2"
            >
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </Button>
          </form>

          {isSent ? (
            <div className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-900">
              Reset link sent! Check your inbox.
            </div>
          ) : null}

          <p className="text-center text-sm font-medium text-muted-foreground pt-2">
            <Link
              href="/auth/login"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 relative p-5">
        <div className="w-full h-full relative rounded-3xl overflow-hidden group">
          <img
            src="/login-bg.png"
            alt="Dormify Building"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-blue-600/35 mix-blend-multiply transition-opacity duration-1000 group-hover:opacity-50" />
          <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-900/30 to-blue-900/20" />

          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8 py-12 space-y-6">
            <h2 className="text-3xl font-bold text-white leading-relaxed max-w-sm drop-shadow-lg">
              Regain access instantly
            </h2>
            <p className="text-base font-medium text-blue-50 max-w-sm drop-shadow-md">
              Quick and secure password recovery to keep you in control
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
