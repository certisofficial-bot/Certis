export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert prose-zinc">
          <p className="text-zinc-400 mb-6">Last updated: August 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-zinc-300 mb-4">
            By accessing and using Certis, you accept and agree to be bound by the terms 
            and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p className="text-zinc-300 mb-4">
            Permission is granted to temporarily access Certis for personal or commercial 
            use. This is the grant of a license, not a transfer of title.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p className="text-zinc-300 mb-4">
            The materials on Certis are provided on an 'as is' basis. Certis makes no 
            warranties, expressed or implied, and hereby disclaims and negates all other warranties.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact</h2>
          <p className="text-zinc-300 mb-4">
            If you have any questions about these Terms, please contact us at 
            <a href="mailto:legal@certis.ai" className="text-blue-400 hover:text-blue-300 ml-1">
              legal@certis.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}