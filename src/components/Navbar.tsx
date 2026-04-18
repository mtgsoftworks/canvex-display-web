import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from '@/components/Logo';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 drop-shadow-[0_0_10px_rgba(34,211,238,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all" />
          <span className="font-display font-bold text-xl tracking-tight text-white">Canvex<span className="text-cyan-400">Display</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="/#how-it-works" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">How It Works</a>
          <a href="/#setup" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Setup</a>
          <a href="/#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
          <a href="/#download" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Download</a>
          <a href="https://play.google.com/store/apps/details?id=com.mtgsoftworks.canvex.display" className="text-sm font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all">
            Free Trial
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/5 px-6 py-4 flex flex-col gap-4">
          <a href="/#features" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="/#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">How It Works</a>
          <a href="/#setup" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Setup</a>
          <a href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">FAQ</a>
          <a href="/#download" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Download</a>
          <a href="https://play.google.com/store/apps/details?id=com.mtgsoftworks.canvex.display" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-cyan-400">Free Trial</a>
        </div>
      )}
    </header>
  );
}
