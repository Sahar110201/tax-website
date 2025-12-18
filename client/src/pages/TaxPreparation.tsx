import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function TaxPreparation() {
  const features = [
    "Individual income tax return preparation",
    "Business tax return preparation",
    "Self-employment tax planning",
    "Deduction optimization and analysis",
    "Tax credits identification",
    "IRS correspondence and audit support",
    "Prior year tax return preparation",
    "Quarterly estimated tax planning",
  ];

  const pricingTiers = [
    {
      name: "Basic Individual",
      price: "$199",
      description: "For simple individual tax returns",
      features: [
        "W-2 income only",
        "Standard deductions",
        "Basic itemized deductions",
        "Federal return only",
        "E-file included",
      ],
    },
    {
      name: "Standard Individual",
      price: "$349",
      description: "For individuals with multiple income sources",
      features: [
        "Multiple W-2s or 1099s",
        "Investment income",
        "Rental property income",
        "Itemized deductions",
        "Federal & state returns",
        "E-file included",
      ],
      highlighted: true,
    },
    {
      name: "Business Owner",
      price: "$599",
      description: "For self-employed and business owners",
      features: [
        "Schedule C (self-employment)",
        "Business expense analysis",
        "Quarterly tax planning",
        "Estimated tax payments",
        "Federal & state returns",
        "E-file included",
        "Consultation included",
      ],
    },
    {
      name: "Complex Return",
      price: "Custom",
      description: "For complex financial situations",
      features: [
        "Multiple business entities",
        "Investment portfolio",
        "International income",
        "Capital gains/losses",
        "Alternative minimum tax",
        "Comprehensive planning",
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We review your financial situation and discuss your tax goals for the year.",
    },
    {
      step: 2,
      title: "Document Collection",
      description: "Gather all necessary documents including W-2s, 1099s, receipts, and statements.",
    },
    {
      step: 3,
      title: "Tax Analysis",
      description: "Our CPAs analyze your situation to identify deductions and tax-saving opportunities.",
    },
    {
      step: 4,
      title: "Return Preparation",
      description: "We prepare your complete tax return with accuracy and attention to detail.",
    },
    {
      step: 5,
      title: "Review & Approval",
      description: "You review the return and we address any questions before filing.",
    },
    {
      step: 6,
      title: "E-File & Follow-up",
      description: "We electronically file your return and provide ongoing support.",
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
              Professional Tax Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tax Preparation Services
            </h1>
            <p className="text-lg text-blue-50 mb-8 leading-relaxed">
              Expert tax preparation for individuals and business owners. Maximize your refund and minimize your tax liability with our comprehensive tax planning and preparation services.
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
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tax preparation services tailored to your specific needs.
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

        {/* Pricing Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Transparent Pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the package that fits your needs. All prices include federal return preparation and e-filing.
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
                    {tier.price !== "Custom" && <span className="text-gray-600 ml-2">and up</span>}
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

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A streamlined approach to tax preparation that ensures accuracy and maximizes your benefits.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <Card className="p-6 h-full border border-blue-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-blue-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "When should I file my taxes?",
                  a: "The tax filing deadline is typically April 15th. We recommend starting the process in January to allow time for thorough preparation and planning.",
                },
                {
                  q: "What documents do I need to bring?",
                  a: "You'll need W-2s, 1099s, receipts for deductible expenses, mortgage interest statements, property tax records, and any other income documentation.",
                },
                {
                  q: "Can you help with back taxes?",
                  a: "Yes! We can prepare prior year tax returns. There may be additional fees, but we can often help recover refunds or resolve tax debt.",
                },
                {
                  q: "Do you offer payment plans?",
                  a: "We offer flexible payment options. Contact us to discuss a payment plan that works for your situation.",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </Card>
              ))}
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
                Ready to Maximize Your Tax Refund?
              </h2>
              <p className="text-lg text-blue-50 mb-8">
                Schedule a free consultation with one of our tax experts today. We'll review your situation and show you how much you can save.
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
