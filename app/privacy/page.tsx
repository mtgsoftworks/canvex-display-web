import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Canvex Display',
  description: 'Privacy Policy for Canvex Display.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-display font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-slate-400 mb-8">Last updated: March 2026 - MTG Softworks</p>
      
      <div className="max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">Information We Collect</h2>
        <p>
          MTG Softworks ("we," "us," or "our") is committed to protecting your privacy. Canvex Display collects the following
          categories of information strictly for functionality and service improvement:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Device Information:</strong> device model, operating system version, display resolution, and hardware capabilities required for optimal streaming configuration.</li>
          <li><strong>Connection Metadata:</strong> host IP addresses, port configurations, connection routes (Wi-Fi/USB), session timestamps, and pairing records necessary for establishing and maintaining display sessions.</li>
          <li><strong>Diagnostics Data:</strong> runtime performance metrics including round-trip time (RTT), jitter, packet loss, frame rates, encoder statistics, and transport-layer events used for troubleshooting and quality optimization.</li>
          <li><strong>License Data:</strong> license key identifiers and activation status stored locally for entitlement verification.</li>
        </ul>
        <p>
          We do NOT collect, store, or transmit the actual screen content, media streams, touch input data, or any files
          transferred during active sessions. All media transport occurs exclusively between your device and the paired host
          over your local network and is never routed through our servers.
        </p>

        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">Data Security & Storage</h2>
        <p>We implement industry-standard security measures to protect your information:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Encryption:</strong> All session control and media channels are protected using X25519 ECDH key exchange and AES-128-GCM authenticated encryption. Pairing credentials are stored using Android Keystore-backed encryption.</li>
          <li><strong>Local Storage:</strong> Connection history, pairing secrets, diagnostic logs, and license tokens are stored exclusively on your device using encrypted SharedPreferences and DataStore. No personal data is transmitted to external servers unless you explicitly enable optional telemetry.</li>
          <li><strong>Optional Telemetry:</strong> If enabled, anonymized performance snapshots (session duration, average latency, codec utilization) may be transmitted to our analytics infrastructure over TLS 1.3. Telemetry data is aggregated and cannot be used to identify individual users.</li>
          <li><strong>Data Retention:</strong> Diagnostic event logs are retained on-device for the duration of the app installation. You may clear all stored data at any time through device settings or in-app controls.</li>
        </ul>

        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">Your Rights & Choices</h2>
        <p>You maintain full control over your data:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Access & Deletion:</strong> You can view all stored connection records and diagnostic data within the app. To delete all data, clear app data through Android Settings or uninstall the application.</li>
          <li><strong>Telemetry Opt-out:</strong> Optional telemetry can be disabled at any time through Settings. When disabled, no data is transmitted beyond your local network.</li>
          <li><strong>Pairing Management:</strong> You can unpair individual devices or reset all pairing credentials from the Settings screen.</li>
          <li><strong>Data Portability:</strong> Diagnostic logs can be exported via the copy-to-clipboard function in the Diagnostics screen.</li>
        </ul>

        <p className="mt-8">
          For data protection inquiries, contact us at <a href="mailto:privacy@mtgsoftworks.com" className="text-cyan-400 hover:underline">privacy@mtgsoftworks.com</a>.
        </p>
        <p>
          This policy may be updated periodically. Continued use of the Software after changes constitutes acceptance of the
          revised policy. Material changes will be communicated through in-app notifications.
        </p>
      </div>
    </div>
  );
}
