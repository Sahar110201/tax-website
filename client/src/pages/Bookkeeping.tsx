import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Bookkeeping() {
  const features = [
    "Monthly transaction recording and reconciliation",
    "Bank and credit card reconciliation",
    "Accounts payable and receivable management",
    "Payroll processing and tax withholding",
    "Financial statement preparation",
    "Expense categorization and analysis",
    "Inventory tracking and management",
    "Tax-ready financial reports",
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      description: "For small businesses with minimal transactions",
      features: [
        "Up to 100 transactions/month",
        "Monthly reconciliation",
        "Basic financial reports",
        "Email support",
        "Quarterly review",
      ],
    },
    {
      name: "Professional",
      price: "$599",
      description: "For growing businesses with regular activity",
      features: [
        "Up to 500 transactions/month",
        "Weekly reconciliation",
        "Detailed financial reports",
        "Accounts payable management",
        "Monthly review calls",
        "Tax preparation support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      description: "For established businesses with complex needs",
      features: [
        "Unlimited transactions",
        "Daily reconciliation",
        "Advanced financial analysis",
        "Payroll integration",
        "Bi-weekly consultations",
        "Custom reporting",
        "Audit support",
      ],
    },
    {
      name: "Custom",
      price: "Contact",
      description: "For specialized requirements",
      features: [
        "Multi-entity accounting",
        "International transactions",
        "Complex inventory systems",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ];

  const benefits = [
    {
      title: "Accurate Financial Records",
      description: "Maintain precise, organized financial records that reflect your true business performance.",
    },
    {
      title: "Better Decision Making",
      description: "Access real-time financial data to make informed business decisions with confidence.",
    },
    {
      title: "Tax Compliance",
      description: "Stay compliant with tax regulations and prepare for audits with organized documentation.",
    },
    {
      title: "Time Savings",
      description: "Free up your time to focus on growing your business instead of managing bookkeeping.",
    },
    {
      title: "Cost Efficiency",
      description: "Reduce costs by identifying inefficiencies and optimizing your business operations.",
    },
    {
      title: "Professional Support",
      description: "Benefit from expert guidance on financial management and business accounting practices.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2">
              Professional Bookkeeping
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bookkeeping Services
            </h1>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Professional bookkeeping services to keep your financial records organized, accurate, and tax-ready. Let us handle the numbers while you focus on growing your business.
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg flex items-center gap-2"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1">
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Comprehensive Bookkeeping Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to maintain accurate financial records and stay compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose Our Bookkeeping Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a plan that matches your business size and complexity. All plans include monthly financial statements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`p-6 flex flex-col h-full transition-all duration-300 ${
                    tier.highlighted
                      ? "border-2 border-blue-600 shadow-xl scale-105"
                      : "border border-gray-200 hover:shadow-lg"
                  }`}
                >
                  {tier.highlighted && (
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                      MOST POPULAR
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{tier.price}</span>
                    {tier.price !== "Contact" && <span className="text-gray-600 ml-2">/month</span>}
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-semibold ${
                      tier.highlighted
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                What's Included in Every Plan
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Services</h3>
                  <ul className="space-y-3">
                    {[
                      "Transaction recording and categorization",
                      "Bank reconciliation",
                      "Financial statement preparation",
                      "Account reconciliation",
                      "Email support",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Services</h3>
                  <ul className="space-y-3">
                    {[
                      "Year-end financial review",
                      "Tax preparation support",
                      "Annual business analysis",
                      "Financial planning consultation",
                      "Audit-ready documentation",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Your Bookkeeping Under Control
              </h2>
              <p className="text-lg text-blue-50 mb-8">
                Schedule a free consultation to discuss your bookkeeping needs and find the perfect plan for your business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg"
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 font-semibold"
                >
                  Contact Us
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center text-blue-100">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>info@sttax.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
