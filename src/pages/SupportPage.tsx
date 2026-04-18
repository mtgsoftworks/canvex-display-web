import { Link } from 'react-router-dom';

export function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-display font-bold text-white mb-8">Support</h1>
      
      <div className="max-w-none">
        <p className="text-slate-300 text-lg mb-12">
          If you need help with installation, pairing, entitlement, or connection issues, start with the <a href="/#setup" className="text-cyan-400 hover:underline">setup</a> and <a href="/#faq" className="text-cyan-400 hover:underline">FAQ</a> pages. If you still need help, contact MTG Softworks.
        </p>

        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-6">Troubleshooting</h2>
        
        <div className="space-y-8">
          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-medium text-white mb-3">Host not found</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Make sure the Windows host is open.</li>
              <li>Confirm both devices are on the same network.</li>
              <li>Try manual IP entry if discovery is empty.</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-medium text-white mb-3">Connected but no image yet</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Wait a few seconds for startup recovery.</li>
              <li>Use <strong>Request Keyframe</strong> from the session screen.</li>
              <li>Check that the host is not being blocked by firewall rules.</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-medium text-white mb-3">USB route not working</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Try Wi-Fi first.</li>
              <li>Reconnect the cable.</li>
              <li>Confirm ADB-based routing is available in the environment.</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-medium text-white mb-3">Audio is unavailable</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Some host/runtime paths may not provide usable audio.</li>
              <li>If audio is unsupported on the current host path, the app may disable it automatically.</li>
            </ul>
          </div>

          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h3 className="text-xl font-medium text-white mb-3">Session feels degraded</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-400">
              <li>Reduce quality settings.</li>
              <li>Move closer to the router or use a cleaner Wi-Fi environment.</li>
              <li>Try USB convenience routing if available.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-display font-semibold text-white mt-16 mb-6">Contact</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h4 className="font-medium text-white mb-2">General Web</h4>
            <a href="https://canvexdisplay.mtgsoftworks.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">canvexdisplay.mtgsoftworks.com</a>
          </div>
          <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl">
            <h4 className="font-medium text-white mb-2">Support Email</h4>
            <a href="mailto:support@mtgsoftworks.com" className="text-cyan-400 hover:underline">support@mtgsoftworks.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
