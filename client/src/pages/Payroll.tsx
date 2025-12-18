import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Payroll() {
  const features = [
    "Payroll processing and tax withholding",
    "Direct deposit setup and management",
    "Payroll tax return preparation",
    "Quarterly and annual tax filings",
    "Employee tax document preparation (W-2s, 1099s)",
    "Wage garnishment and deduction management",
    "Multi-state payroll support",
    "Payroll reporting and analytics",
  ];

  const pricingTiers = [
    {
      name: "Micro",
      price: "$99",
      description: "For businesses with 1-5 employees",
      features: [
        "Up to 5 employees",
        "Bi-weekly or monthly processing",
        "Direct deposit",
        "Tax withholding",
        "Monthly reporting",
      ],
    },
    {
      name: "Small Business",
      price: "$199",
      description: "For businesses with 6-20 employees",
      features: [
        "Up to 20 employees",
        "Weekly, bi-weekly, or monthly",
        "Direct deposit",
        "Tax withholding & filing",
        "Employee self-service portal",
        "Quarterly tax reports",
      ],
      highlighted: true,
    },
    {
      name: "Growing Business",
      price: "$349",
      description: "For businesses with 21-100 employees",
      features: [
        "Up to 100 employees",
        "Flexible pay schedules",
        "Direct deposit",
        "Tax withholding & filing",
        "Employee portal",
        "Garnishment management",
        "Multi-state support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For businesses with 100+ employees",
      features: [
        "Unlimited employees",
        "Custom pay schedules",
        "Advanced integrations",
        "Dedicated support",
        "Custom reporting",
        "International payroll",
      ],
    },
  ];

  const whyChoose = [
    {
      title: "Accuracy & Compliance",
      description: "Ensure accurate payroll calculations and stay compliant with federal, state, and local tax regulations.",
    },
    {
      title: "Time Savings",
      description: "Eliminate manual payroll processing and free up your team to focus on core business activities.",
    },
    {
      title: "Employee Satisfaction",
      description: "Provide reliable, on-time payroll and employee self-service access to pay stubs and tax documents.",
    },
    {
      title: "Tax Compliance",
      description: "We handle all payroll tax filings, ensuring you never miss a deadline or face penalties.",
    },
    {
      title: "Cost Effective",
      description: "Reduce payroll processing costs compared to in-house management or other providers.",
    },
    {
      title: "Expert Support",
      description: "Access to payroll experts who understand complex compensation structures and multi-state requirements.",
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
              Payroll Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Payroll Processing Services
            </h1>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Professional payroll processing that ensures accurate, timely payments and full tax compliance. Let us handle the complexity while you focus on your business.
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
                Complete Payroll Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to manage employee payments and tax compliance.
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

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose Our Payroll Services?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, index) => (
                <Card key={index} className="p-6 border border-blue-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose a plan based on your employee count. All plans include tax filing and employee support.
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
                    {tier.price !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
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

        {/* How It Works Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                How Our Payroll Service Works
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "1. Setup",
                    description: "We set up your payroll account and configure employee information, pay schedules, and tax settings.",
                  },
                  {
                    title: "2. Input Hours",
                    description: "You provide employee hours through our simple online portal or integrate with your time tracking system.",
                  },
                  {
                    title: "3. Review",
                    description: "Review the calculated payroll before processing. We handle all tax calculations automatically.",
                  },
                  {
                    title: "4. Process",
                    description: "We process payroll and initiate direct deposits to employee accounts on your specified schedule.",
                  },
                  {
                    title: "5. File Taxes",
                    description: "We automatically file all required federal, state, and local payroll tax returns on your behalf.",
                  },
                  {
                    title: "6. Report",
                    description: "Access detailed payroll reports and provide employees with pay stubs and tax documents.",
                  },
                ].map((item, index) => (
                  <Card key={index} className="p-6 border border-blue-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                ))}
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
                Simplify Your Payroll Today
              </h2>
              <p className="text-lg text-blue-50 mb-8">
                Let us handle the complexity of payroll processing. Schedule a free consultation to see how we can save you time and money.
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
