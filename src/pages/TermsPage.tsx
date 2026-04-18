export function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-display font-bold text-white mb-2">Terms of Use</h1>
      <p className="text-slate-400 mb-8">Legal terms governing your use of Canvex Display - MTG Softworks</p>
      
      <div className="max-w-none text-slate-300 space-y-6">
        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">Scope & Acceptance</h2>
        <p>
          These Terms of Use ("Terms") constitute a legally binding agreement between you ("User") and MTG Softworks ("Company")
          governing your access to and use of the Canvex Display software application, including all associated components,
          updates, documentation, and services (collectively, the "Software").
        </p>
        <p>
          By installing, accessing, or using the Software, you acknowledge that you have read, understood, and agree to be bound
          by these Terms. If you do not agree, you must immediately uninstall the Software and cease all use.
        </p>
        <p>
          The Software is designed for remote display extension, screen mirroring, and input forwarding between Android devices
          and Windows host computers over trusted local networks. You are solely responsible for ensuring that your use complies
          with all applicable laws, regulations, and organizational policies in your jurisdiction.
        </p>

        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">License, Restrictions & Intellectual Property</h2>
        <p>
          The Software is proprietary and confidential. All rights, title, and interest in the Software, including all
          intellectual property rights, are owned exclusively by MTG Softworks.
        </p>
        <p>
          Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable,
          revocable license to use the Software for personal or internal business purposes.
        </p>
        <p>You shall NOT:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Copy, modify, distribute, sell, lease, sublicense, or transfer the Software or any portion thereof</li>
          <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the Software</li>
          <li>Circumvent, disable, or interfere with any license validation, DRM, or security mechanisms</li>
          <li>Use the Software to develop competing products or for unauthorized benchmarking</li>
          <li>Remove or alter any proprietary notices, labels, or markings</li>
          <li>Use the Software for any unlawful, harmful, or unauthorized purpose</li>
        </ul>
        <p>
          Violation of these restrictions constitutes immediate termination of your license and may result in legal action.
        </p>

        <h2 className="text-2xl font-display font-semibold text-white mt-12 mb-4">Warranty Disclaimer & Limitation of Liability</h2>
        <p className="uppercase">
          THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
          NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p>
          The Company does not warrant that the Software will be uninterrupted, error-free, or free of harmful components.
          Service quality depends on host hardware capabilities, display driver status, network conditions, and device
          compatibility.
        </p>
        <p className="uppercase">
          IN NO EVENT SHALL MTG SOFTWORKS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          INCLUDING LOST PROFITS, DATA LOSS, OR BUSINESS INTERRUPTION, REGARDLESS OF THE THEORY OF LIABILITY.
        </p>
        <p>
          The Company reserves the right to modify, suspend, or discontinue the Software at any time without prior notice. These
          Terms may be updated periodically; continued use constitutes acceptance.
        </p>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p>
            For legal inquiries: <a href="mailto:legal@mtgsoftworks.com" className="text-cyan-400 hover:underline">legal@mtgsoftworks.com</a>
          </p>
          <p className="mt-2 text-sm text-slate-500">
            © 2026 MTG Softworks. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
