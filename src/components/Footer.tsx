import { Link } from 'react-router-dom';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-4">
            <Logo className="w-8 h-8" />
            <span className="font-display font-bold text-lg tracking-tight text-white">Canvex<span className="text-cyan-400">Display</span></span>
          </Link>
          <p className="text-slate-400 text-sm max-w-sm mb-6">
            Low-latency remote display and control for Windows and Android.
          </p>
          <p className="text-slate-500 text-xs mt-6">
            &copy; 2026 MTG Softworks. All Rights Reserved.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Product</h4>
          <ul className="space-y-2">
            <li><a href="/#download" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Download</a></li>
            <li><a href="/#setup" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Setup</a></li>
            <li><a href="/#faq" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/support" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Support</Link></li>
            <li><Link to="/privacy" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">Terms of Use</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
