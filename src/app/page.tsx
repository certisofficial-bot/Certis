"use client";

import { useState } from "react";
import { ArrowRight, Shield, Zap, Clock, CheckCircle2, ChevronRight, FileText, Server } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CALENDLY_LINK = "https://calendly.com/certis-official/30min";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function MarketingPage() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0C] text-zinc-100 selection:bg-indigo-500/30">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="border-b border-white/5 sticky top-0 z-50 bg-[#0A0A0C]/80 backdrop-blur-md"
        >
          <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Certis" 
                className="h-12 w-auto brightness-125 contrast-125 drop-shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:brightness-150 transition-all" 
              />
            </div>
            
            <div className="flex items-center gap-8 text-sm text-zinc-400 font-medium">
              <a href="#features" className="hover:text-white transition-colors hidden sm:block">Features</a>
              <a href="#pricing" className="hover:text-white transition-colors hidden sm:block">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors hidden sm:block">FAQ</a>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-white bg-white/10 hover:bg-white/20 px-5 py-2 rounded-md transition-colors border border-white/5">
                Book a call
              </a>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div variants={fadeInUp} initial="hidden" animate="visible">
            <Badge variant="outline" className="mb-8 px-3 py-1 text-xs text-zinc-400 border-white/10 bg-white/5 rounded-full">
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" />
              Early Access Pilot Now Open
            </Badge>
          </motion.div>

          <motion.h1 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-medium tracking-tight mb-6 leading-[1.1] text-white"
          >
            Automate your security <br className="hidden sm:block" />
            <span className="text-zinc-400">questionnaires.</span>
          </motion.h1>

          <motion.p 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ delay: 0.2 }}
            className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Certis uses AI to auto-fill RFPs, security reviews, and SOC2 compliance docs 
            using your existing policies. Reduce review cycles from weeks to hours.
          </motion.p>

          <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="h-12 px-8 text-base font-medium bg-white text-black hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Book Your Pilot Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#pricing" className="h-12 px-8">
              <Button size="lg" variant="outline" className="h-full w-full text-base font-medium border-white/10 text-zinc-300 hover:bg-white/5 hover:text-white transition-all">
                View Pricing
              </Button>
            </a>
          </motion.div>

          {/* Product Mockup */}
          <motion.div 
            variants={fadeInUp} 
            initial="hidden" 
            animate="visible" 
            transition={{ delay: 0.4 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative rounded-xl border border-white/10 bg-[#111113] shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <div className="flex-1 text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-white/5 text-xs text-zinc-500">
                    <FileText className="w-3 h-3" />
                    vendor_security_review.xlsx
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-sm font-medium text-zinc-200">Data Encryption at Rest</span>
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] px-1.5 py-0 h-5">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Auto-filled
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Yes, we use AES-256 encryption for all data at rest. Infrastructure hosted on AWS with encryption enabled for all storage volumes.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02]">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-sm font-medium text-zinc-200">SOC 2 Type II Certification</span>
                        <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px] px-1.5 py-0 h-5">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Auto-filled
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        Yes, we maintain SOC 2 Type II certification. Most recent audit completed Q4 2025 with no exceptions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border border-white/5 bg-white/[0.02] opacity-60">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="text-sm font-medium text-zinc-200">Incident Response Procedures</span>
                        <Badge variant="outline" className="bg-zinc-500/10 text-zinc-400 border-zinc-500/20 text-[10px] px-1.5 py-0 h-5">
                          <Clock className="w-3 h-3 mr-1" /> Pending
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-500 italic">
                        Waiting for additional context...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-zinc-500">Completion Progress</span>
                    <span className="text-zinc-300 font-medium">87%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: "87%" }} 
                      transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
                      className="h-full rounded-full bg-zinc-200" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="max-w-6xl mx-auto px-6 py-16 border-y border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "95%", label: "Auto-fill Accuracy" },
              { value: "10x", label: "Faster Completion" },
              { value: "500+", label: "Questionnaires Processed" },
              { value: "24/7", label: "Compliance Ready" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-3xl font-medium text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="max-w-6xl mx-auto px-6 py-24">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Built for modern security teams</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Everything you need to accelerate security reviews and close enterprise deals.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4"
          >
            <FeatureCard
              icon={<Zap className="w-5 h-5 text-zinc-300" />}
              title="Instant Auto-Fill"
              description="Upload any RFP or security questionnaire. Our AI analyzes your documentation and fills it out with high accuracy."
            />
            <FeatureCard
              icon={<Shield className="w-5 h-5 text-zinc-300" />}
              title="Always Compliant"
              description="Trained exclusively on your approved security policies. Zero hallucinations, 100% audit-ready responses."
            />
            <FeatureCard
              icon={<Clock className="w-5 h-5 text-zinc-300" />}
              title="Close Deals Faster"
              description="Remove the primary bottleneck in enterprise sales. Go from weeks to hours per questionnaire."
            />
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">How it works</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Get from questionnaire to completion in three simple steps.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            <HowItWorksCard
              step="01"
              title="Upload your documents"
              description="Connect your security policies, SOC2 reports, and past questionnaire responses. We securely index everything."
              icon={<FileText className="w-5 h-5" />}
            />
            <HowItWorksCard
              step="02"
              title="AI analyzes & learns"
              description="Our AI studies your documentation to understand your security posture, compliance status, and response patterns."
              icon={<Server className="w-5 h-5" />}
            />
            <HowItWorksCard
              step="03"
              title="Auto-fill & review"
              description="Upload any RFP or security questionnaire. Watch as Certis auto-fills the majority of questions with perfect accuracy."
              icon={<CheckCircle2 className="w-5 h-5" />}
            />
          </motion.div>
        </section>

        {/* Comparison Section */}
        <section className="max-w-4xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Stop wasting weeks on spreadsheets</h2>
            <p className="text-zinc-400">See how Certis compares to the manual process.</p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]"
          >
            <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03]">
              <div className="p-5 text-sm font-medium text-zinc-300">Feature</div>
              <div className="p-5 text-sm font-medium text-white text-center border-x border-white/10">Certis</div>
              <div className="p-5 text-sm font-medium text-zinc-500 text-center">Manual Process</div>
            </div>
            {[
              { feature: 'Time to complete', certis: 'Hours', manual: '2-4 Weeks' },
              { feature: 'Accuracy rate', certis: '95%+', manual: '60-70%' },
              { feature: 'Team members required', certis: '1 person', manual: '3-5 people' },
              { feature: 'Audit trail & versioning', certis: 'Automatic', manual: 'Manual tracking' },
              { feature: 'Security compliance', certis: 'SOC 2 / ISO', manual: 'Varies' },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                <div className="p-5 text-sm text-zinc-300">{row.feature}</div>
                <div className="p-5 text-sm text-center text-emerald-400 border-x border-white/10 bg-emerald-500/[0.03]">{row.certis}</div>
                <div className="p-5 text-sm text-center text-zinc-500">{row.manual}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-medium tracking-tight mb-4 text-white">Frequently asked questions</h2>
            <p className="text-zinc-400">Everything you need to know about Certis.</p>
          </motion.div>

          <div className="space-y-3">
            <FAQItem
              question="How accurate is the AI?"
              answer="Certis achieves 95%+ accuracy on first-pass auto-fill. The AI is trained exclusively on your approved security policies and past responses, eliminating hallucinations. Our customers typically only need to review and approve the remaining 5-10% of questions."
            />
            <FAQItem
              question="Is my data secure?"
              answer="Absolutely. We use AES-256 encryption at rest and in transit. Your documents are never shared between customers, and we're SOC 2 Type II certified. We can sign your enterprise security agreement and NDA before onboarding."
            />
            <FAQItem
              question="What formats does Certis support?"
              answer="We support Excel (.xlsx), Word (.docx), Google Sheets, Google Docs, and most major RFP platforms. Export with perfect formatting preserved, ready to send to your prospects."
            />
            <FAQItem
              question="How long does setup take?"
              answer="Most teams are up and running in under 2 hours. Upload your security policies, SOC2 report, and 5-10 past questionnaire responses. Our AI indexes everything and is ready to auto-fill immediately."
            />
            <FAQItem
              question="Can I cancel anytime?"
              answer="Yes. The pilot program includes a 30-day money-back guarantee, no questions asked. After that, you're locked in at your pilot rate for life with no monthly fees if you pay annually."
            />
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="relative rounded-xl border border-white/10 bg-white/[0.02] p-8 sm:p-12">
              <div className="text-center mb-10">
                <Badge variant="outline" className="mb-6 px-3 py-1 text-xs text-emerald-400 border-emerald-500/20 bg-emerald-500/10 rounded-full">
                  Limited to first 20 companies
                </Badge>
                <h2 className="text-3xl font-medium tracking-tight mb-3 text-white">Early Access Pricing</h2>
                <p className="text-zinc-400">Get lifetime access at a fraction of the cost. Price increases to €5,000/year after launch.</p>
              </div>

              <div className="max-w-xl mx-auto">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-3 mb-2">
                    <span className="text-5xl font-medium text-white tracking-tight">€499</span>
                    <span className="text-zinc-500">/month</span>
                  </div>
                  <span className="text-sm text-zinc-500 line-through">€5,000/yr standard pricing</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {[
                    'Unlimited RFP & security questionnaire auto-fill',
                    'AI trained on your SOC2 policies & past answers',
                    'Excel/Word export with perfect formatting',
                    'Priority email support',
                    'Free updates for life',
                    'No monthly fees after pilot (if paid annually)'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button className="w-full h-12 text-base font-medium bg-white text-black hover:bg-zinc-200 transition-all">
                    Book Your Pilot Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  30-day money-back guarantee. No questions asked.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Final CTA Banner */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-12 sm:p-16 text-center"
          >
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight mb-4 text-white">
                Ready to accelerate your security reviews?
              </h2>
              <p className="text-zinc-400 max-w-xl mx-auto mb-8">
                Join the first 20 companies getting lifetime access at our early-bird pilot rate.
              </p>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="h-12 px-8 text-base font-medium bg-white text-black hover:bg-zinc-200 transition-all">
                  Book Your Pilot Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Certis" 
                className="h-9 w-auto brightness-125 contrast-125 opacity-80 hover:opacity-100 transition-opacity" 
              />
            </div>
            <p>© 2026 Certis. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
              <a href="mailto:founder@certis.ai" className="hover:text-zinc-300 transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ 
  icon, 
  title, 
  description
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="group relative rounded-lg border border-white/5 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
    >
      <div className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:border-white/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-base font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// How It Works Card Component
function HowItWorksCard({ 
  step, 
  title, 
  description, 
  icon 
}: { 
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="relative p-6 rounded-lg border border-white/5 bg-white/[0.02]"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400">
          {icon}
        </div>
        <div>
          <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider mb-1">Step {step}</div>
          <h3 className="text-base font-medium text-white mb-2">{title}</h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      variants={fadeInUp}
      className="border border-white/5 rounded-lg overflow-hidden bg-white/[0.02]"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/[0.04] transition-colors"
      >
        <span className="text-sm font-medium text-zinc-200">{question}</span>
        <ChevronRight 
          className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4 text-sm text-zinc-400 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </motion.div>
  );
}