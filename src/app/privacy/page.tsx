export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert prose-zinc">
          <p className="text-zinc-400 mb-6">Last updated: August 2026</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-zinc-300 mb-4">
            We collect information you provide directly to us, including your name, email address, 
            and any other information you choose to provide when using our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-zinc-300 mb-4">
            We use the information we collect to provide, maintain, and improve our services, 
            process your requests, and communicate with you.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
          <p className="text-zinc-300 mb-4">
            We implement appropriate security measures to protect your personal information 
            against unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="text-zinc-300 mb-4">
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:certis.official@gmail.com" className="text-blue-400 hover:text-blue-300">
              certis.official@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}