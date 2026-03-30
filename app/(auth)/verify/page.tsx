'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function VerifyPage() {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = '/auth/reset';
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
            <h1 className="text-3xl font-black tracking-tight text-black">Verify Code</h1>
            <p className="text-muted-foreground font-medium text-sm">
              Enter the code sent to your email
            </p>
          </div>

          <form onSubmit={handleVerify} className="space-y-5">
            <div className="space-y-2">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-1">
                  Verification Code
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-black transition-colors">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <Input
                    type="text"
                    placeholder="000000"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
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
              {isLoading ? 'Verifying...' : 'Verify'}
            </Button>
          </form>

          <p className="text-center text-sm font-medium text-muted-foreground">
            Didn&apos;t receive a code?{' '}
            <Link href="/auth/forgot-password" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Resend
            </Link>
          </p>

          <p className="text-center text-sm font-medium text-muted-foreground pt-1">
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
              Verify your identity safely
            </h2>
            <p className="text-base font-medium text-blue-50 max-w-sm drop-shadow-md">
              One step away from securing your account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
