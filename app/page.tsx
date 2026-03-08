'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import {
  MonitorSmartphone,
  Download,
  Play,
  Wifi,
  Usb,
  Lock,
  MousePointer2,
  PenTool,
  Volume2,
  ClipboardCopy,
  Activity,
  CheckCircle2
} from 'lucide-react';
import { AccordionItem } from '@/components/Accordion';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(34,211,238,0.15)_0%,rgba(10,15,20,0)_50%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
          >
            <MonitorSmartphone className="w-4 h-4" />
            <span>Host app only setup</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]"
          >
            Turn your Android device into a low-latency remote display for Windows.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Canvex Display streams your Windows desktop to Android with secure pairing, adaptive quality, touch and pen input, audio support, clipboard sync, and file transfer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="[PLAY_STORE_URL]"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >
              <Play className="w-5 h-5 fill-current" />
              Get it on Google Play
            </a>
            <a
              href="/downloads/CanvexDisplay_Setup_0.3.0.msi"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              <Download className="w-5 h-5" />
              Download Windows Host
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500 font-medium"
          >
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Secure pairing</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Wi-Fi & USB</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Touch & pen input</span>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Get Canvex Display</h2>
            <p className="text-slate-400">No separate driver package required. Just install the Windows host app and the Android app.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Android Card */}
            <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                <MonitorSmartphone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Android App</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Install the Canvex Display mobile app on your Android phone or tablet. Android 8.0+ recommended.
              </p>
              <a
                href="[PLAY_STORE_URL]"
                className="w-full flex items-center justify-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 px-6 py-3 rounded-xl font-medium transition-all"
              >
                <Play className="w-5 h-5" />
                Get it on Google Play
              </a>
            </div>

            {/* Windows Card */}
            <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-cyan-500/30 transition-colors">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-white mb-2">Windows Host</h3>
              <p className="text-slate-400 mb-8 flex-grow">
                Install the Windows host app to stream your desktop to Android.<br />
                <span className="text-sm opacity-80">(Windows 10/11 x64 required)</span>
              </p>
              <a
                href="/downloads/CanvexDisplay_Setup_0.3.0.msi"
                className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-xl font-medium transition-all"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Everything you need</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A complete feature set for low-latency remote control and display.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Activity className="w-6 h-6 text-cyan-400" />}
              title="Low-latency display"
              description="Stream the active Windows desktop to Android with a responsive, session-oriented pipeline."
            />
            <FeatureCard
              icon={<PenTool className="w-6 h-6 text-cyan-400" />}
              title="Touch and pen input"
              description="Control host apps using tablet touch or stylus input, including pressure-aware pen workflows where supported."
            />
            <FeatureCard
              icon={<Wifi className="w-6 h-6 text-cyan-400" />}
              title="Wi-Fi and USB"
              description="Use your local network by default, or switch to USB convenience routing when available."
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6 text-cyan-400" />}
              title="Secure pairing"
              description="Pair devices with a one-time code and keep trusted hosts available for quick reconnects."
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6 text-cyan-400" />}
              title="Encrypted transport"
              description="Control and media paths use authenticated session setup and encrypted transport."
            />
            <FeatureCard
              icon={<Volume2 className="w-6 h-6 text-cyan-400" />}
              title="Audio streaming"
              description="Stream host audio to Android when supported by the current route and host runtime."
            />
            <FeatureCard
              icon={<ClipboardCopy className="w-6 h-6 text-cyan-400" />}
              title="Clipboard & files"
              description="Move text and files between devices with built-in transfer and clipboard tools."
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6 text-cyan-400" />}
              title="Adaptive quality"
              description="Canvex monitors runtime conditions and adjusts stream behavior to improve startup and stability."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How Canvex Display works</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Canvex Display runs as a Windows host app and an Android client. The host captures the active Windows desktop, encodes the stream, and sends it securely to your Android device. The Android app decodes the stream and can send touch, pen, keyboard, and control input back to the PC in real time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-slate-950 border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                <span className="text-3xl font-display font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Install</h3>
              <p className="text-slate-400">Install the Windows host and the Android app.</p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-slate-950 border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                <span className="text-3xl font-display font-bold text-cyan-400">2</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Pair</h3>
              <p className="text-slate-400">Connect to your host over Wi-Fi or USB and confirm the pairing code.</p>
            </div>

            <div className="relative text-center">
              <div className="w-24 h-24 mx-auto bg-slate-950 border border-white/10 rounded-full flex items-center justify-center mb-6 relative z-10">
                <span className="text-3xl font-display font-bold text-cyan-400">3</span>
              </div>
              <h3 className="text-xl font-display font-semibold text-white mb-3">Stream and control</h3>
              <p className="text-slate-400">Start the session, view your desktop on Android, and interact using touch, stylus, keyboard shortcuts, and session controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section id="setup" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Setup</h2>
            <p className="text-slate-400">Getting started with Canvex Display takes only a few steps.</p>
          </div>

          <div className="space-y-6">
            <SetupStep number="1" title="Install the host" description="Download and install the Windows host app on the PC you want to stream from." />
            <SetupStep number="2" title="Install the Android app" description="Install Canvex Display from Google Play on your Android device." />
            <SetupStep number="3" title="Open both apps" description="Launch the Windows host, then open the Android app." />
            <SetupStep number="4" title="Find your host" description="Use host discovery if available, or enter the host IP address manually." />
            <SetupStep number="5" title="Pair once" description="If the host shows a 6-digit pairing code, enter it on Android to trust the device." />
            <SetupStep number="6" title="Start your session" description="Tap Start Session to begin streaming." />
          </div>

          <div className="mt-12 p-6 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
            <h4 className="font-semibold text-cyan-400 mb-2">Wi-Fi is the default connection path.</h4>
            <p className="text-slate-400 text-sm mb-4">USB convenience routing may be available depending on your setup and bundled ADB support.</p>

            <h4 className="font-semibold text-cyan-400 mb-2">First-frame recovery</h4>
            <p className="text-slate-400 text-sm">If the first frame takes time after a route change or fullscreen transition, Canvex Display can request a fresh keyframe automatically. A manual <strong>Request Keyframe</strong> action is also available in-session.</p>
          </div>
        </div>
      </section>

      {/* Licensing / Purchase */}
      <section className="py-24 bg-slate-900/30 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Purchase and entitlement</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Canvex Display for Android uses Google Play entitlement for streaming access.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left mb-10 max-w-2xl mx-auto">
            <div className="bg-slate-950 border border-white/10 p-6 rounded-2xl">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> One-time purchase model</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Device checks handled in the background</li>
              </ul>
            </div>
            <div className="bg-slate-950 border border-white/10 p-6 rounded-2xl">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Offline use supported for a limited period after successful verification</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" /> Restore purchases supported through the app</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-400 text-sm max-w-2xl mx-auto mb-10">
            After purchase, the app can continue to work offline for a limited time. When internet access becomes available again, Canvex Display can re-check entitlement automatically in the background. If entitlement is no longer valid, streaming access may be paused until verification succeeds.
          </p>

          <a
            href="[PLAY_STORE_URL]"
            className="inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold transition-all"
          >
            <Play className="w-5 h-5 fill-current" />
            Buy on Google Play
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="border-t border-white/5">
            <AccordionItem
              question="What is Canvex Display?"
              answer="Canvex Display is a high-performance streaming solution that extends your Windows desktop to Android devices. It delivers ultra-low latency mirroring, advanced touch/pen input forwarding, and seamless session control over your local network."
            />
            <AccordionItem
              question="Do I need to install a separate driver?"
              answer="No virtual display drivers or complex system modifications are required. Simply install the lightweight Windows host application and you are ready to stream."
            />
            <AccordionItem
              question="Does Canvex Display work over Wi-Fi?"
              answer="Yes. Wi-Fi is the default connection method."
            />
            <AccordionItem
              question="Does Canvex Display support USB?"
              answer="Yes. While Wi-Fi is the primary and recommended connection method, Canvex Display supports USB tethering and ADB-based routing for ultra-stable, zero-interference environments where available."
            />
            <AccordionItem
              question="Can I use touch input from my Android device?"
              answer="Yes. Canvex Display supports touch input forwarding to the Windows host."
            />
            <AccordionItem
              question="Does stylus or pen input work?"
              answer="Yes. Pen input is part of the product direction, including pressure-aware workflows where supported by the device and host path."
            />
            <AccordionItem
              question="Does it support audio?"
              answer="Yes, host audio streaming is supported. In some host or route configurations, audio may be unavailable and may be disabled automatically."
            />
            <AccordionItem
              question="Why is the screen black or slow to start?"
              answer="This can happen during route changes, decoder startup, or unstable network conditions. Wait a few seconds first. If needed, use Request Keyframe from the session controls."
            />
            <AccordionItem
              question="Can I use more than one client at the same time?"
              answer="Not in the standard model. The current host runtime supports one active stream at a time."
            />
            <AccordionItem
              question="Is the stream secure?"
              answer="Absolutely. All communication remains strictly on your local network. We utilize industry-standard authenticated encryption (AES-128-GCM) for both media transport and session control, paired via secure ECDH key exchange."
            />
            <AccordionItem
              question="Can I play games over this connection?"
              answer="Canvex Display is optimized for high-fidelity desktop extension, remote administration, and creative workflows (like pen input). While the latency is extremely low, it is not explicitly designed as a dedicated competitive cloud-gaming protocol."
            />
            <AccordionItem
              question="How is the Android app licensed?"
              answer="The Android app uses Google Play entitlement. Streaming can be unlocked by a one-time purchase and may periodically revalidate in the background."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-900/30 border border-white/5 p-6 rounded-2xl hover:bg-slate-900/50 transition-colors">
      <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="text-lg font-display font-semibold text-white mb-2">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function SetupStep({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="flex gap-6">
      <div className="shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-display font-bold">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-display font-semibold text-white mb-1">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
