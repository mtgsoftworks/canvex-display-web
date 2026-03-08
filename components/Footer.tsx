import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { Download } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-lg tracking-tight text-white">Canvex<span className="text-cyan-400">Display</span></span>
          </Link>
          <p className="text-slate-400 text-sm max-w-sm mb-6">
            Low-latency remote display and control for Windows and Android.
          </p>
          <a 
            href="/api/download" 
            className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-400/10 hover:bg-cyan-400/20 px-4 py-2 rounded-lg border border-cyan-400/20"
          >
            <Download className="w-4 h-4" />
            Download Source Code
          </a>
          <p className="text-slate-500 text-xs mt-6">
            &copy; 2026 MTG Softworks. All Rights Reserved.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link href="/#download" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Download</Link></li>
            <li><Link href="/#setup" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Setup</Link></li>
            <li><Link href="/#faq" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="/support" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Support</Link></li>
            <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
