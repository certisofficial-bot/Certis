"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Check, ChevronDown, ArrowRight, Sparkles, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Certis AI work?",
      answer: "Certis analyzes your existing security policies, documentation, and previous responses to automatically generate accurate answers to new security questionnaires. It learns from your inputs and improves over time."
    },
    {
      question: "Is my data secure with Certis?",
      answer: "Absolutely. We use enterprise-grade encryption (AES-256) for data at rest and TLS 1.3 for data in transit. Your documents are never shared with third parties, and we're SOC 2 Type II compliant ourselves."
    },
    {
      question: "Can I integrate Certis with my existing tools?",
      answer: "Yes! Certis integrates with popular platforms like Google Drive, Confluence, Notion, and SharePoint. We also offer API access for custom integrations."
    },
    {
      question: "What types of questionnaires does Certis support?",
      answer: "Certis supports SOC 2, ISO 27001, GDPR, HIPAA, SIG, CAIQ, and custom RFPs. If you have a specific format, our team can help configure it."
    },
    {
      question: "How accurate is the AI?",
      answer: "Our AI achieves 90%+ accuracy on standard questionnaires. Every response is reviewed by you before sending, and the system learns from your corrections to improve future responses."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-zinc-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0C]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LOGO SECTION - Made larger and removed text */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Certis" 
                width={140} 
                height={40} 
                className="object-contain transition-transform hover:scale-105"
                priority
              />
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Features</a>
              <a href="#pricing" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Pricing</a>
              <a href="#faq" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">FAQ</a>
              <Button variant="outline" className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10">
                Book a call
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
              Early Access Pilot Now Open
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
              Automate your security<br />questionnaires.
            </h1>
            
            <p className="text-xl text-zinc-400 mb-10 max-w-3xl mx-auto">
              Certis uses AI to auto-fill RFPs, security reviews, and SOC2 compliance docs using your existing policies. Reduce review cycles from weeks to hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 group">
                Book Your Pilot Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                View Pricing
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-blue-400" />
                <span>14-day free trial</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, label: "Average time saved per questionnaire", value: "12 hours" },
              { icon: TrendingUp, label: "Faster response time", value: "10x" },
              { icon: Lock, label: "Security standards supported", value: "SOC 2, ISO, GDPR" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why security teams love Certis</h2>
            <p className="text-zinc-400 text-lg">Stop manually copying answers from your policies to questionnaires.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "AI-Powered Auto-Fill", description: "Our AI reads your policies and automatically fills questionnaires with accurate, context-aware responses." },
              { icon: Lock, title: "Enterprise Security", description: "Bank-grade encryption, SOC 2 compliant, and GDPR ready. Your data never leaves our secure infrastructure." },
              { icon: Sparkles, title: "Smart Learning", description: "Certis learns from your edits and feedback, getting smarter and more accurate with every questionnaire." },
              { icon: Check, title: "90%+ Accuracy", description: "Our AI achieves industry-leading accuracy rates, with human review capabilities for perfect responses." },
              { icon: Clock, title: "Save 40+ Hours/Month", description: "Security teams typically save 10-15 hours per questionnaire. That's weeks of work back in your calendar." },
              { icon: Zap, title: "Multi-Standard Support", description: "SOC 2, ISO 27001, GDPR, HIPAA, SIG, CAIQ, and custom formats. One tool for all compliance needs." }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <feature.icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Certis works</h2>
            <p className="text-zinc-400 text-lg">From upload to completed questionnaire in three simple steps.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Upload Your Documents", description: "Connect your policy docs, previous questionnaires, or security documentation. We support PDF, DOCX, and Google Drive." },
              { step: "2", title: "AI Analyzes & Learns", description: "Our AI reads and understands your security posture, mapping policies to common questionnaire requirements." },
              { step: "3", title: "Auto-Fill & Review", description: "Receive AI-generated responses in seconds. Review, edit if needed, and export in your preferred format." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-blue-400/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manual vs. Certis</h2>
            <p className="text-zinc-400 text-lg">See how much time you'll save.</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6">Task</th>
                  <th className="text-center py-4 px-6 text-zinc-400">Manual Process</th>
                  <th className="text-center py-4 px-6 text-blue-400 font-semibold">With Certis</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Read & understand questionnaire", "1-2 hours", "5 minutes"],
                  ["Search through policies", "3-5 hours", "Instant"],
                  ["Copy & paste answers", "2-3 hours", "Auto-generated"],
                  ["Review & finalize", "1-2 hours", "15 minutes"],
                  ["Total time per questionnaire", "7-12 hours", "20-30 minutes"]
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/5">
                    <td className="py-4 px-6 font-medium">{row[0]}</td>
                    <td className="py-4 px-6 text-center text-zinc-400">{row[1]}</td>
                    <td className="py-4 px-6 text-center text-blue-400 font-semibold">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
            <p className="text-zinc-400 text-lg">Everything you need to know about Certis.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-zinc-400">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
            <p className="text-zinc-400 text-lg">Start free, scale as you grow.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Free",
                description: "Perfect for trying out Certis",
                features: ["3 questionnaires/month", "Basic AI responses", "Email support", "SOC 2 templates"]
              },
              {
                name: "Professional",
                price: "$299",
                period: "/month",
                description: "For growing security teams",
                features: ["Unlimited questionnaires", "Advanced AI learning", "Priority support", "All compliance templates", "API access", "Custom integrations"],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "For large organizations",
                features: ["Everything in Pro", "Dedicated account manager", "Custom AI training", "SSO & advanced security", "SLA guarantees", "On-premise option"]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-xl border ${plan.popular ? 'border-blue-400 bg-blue-400/5' : 'border-white/10 bg-white/5'}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-zinc-400">{plan.period}</span>}
                </div>
                <p className="text-zinc-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-transparent to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to automate your security reviews?</h2>
            <p className="text-xl text-zinc-400 mb-10">Join forward-thinking security teams who've already cut their questionnaire time by 90%.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-zinc-200 group">
                Book Your Pilot Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-zinc-700 hover:bg-zinc-800">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* FOOTER LOGO - Made larger and removed text */}
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Certis" 
                width={120} 
                height={36} 
                className="object-contain"
              />
            </div>
            <div className="flex gap-6 text-sm text-zinc-400">
              <a href="/privacy" className="hover:text-zinc-100 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-zinc-100 transition-colors">Terms of Service</a>
              <a href="mailto:certis.official@gmail.com" className="hover:text-zinc-100 transition-colors">certis.official@gmail.com</a>
            </div>
            <div className="text-sm text-zinc-500">
              © 2026 Certis. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}