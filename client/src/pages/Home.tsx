import React, { useState, useEffect } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Cloud, Search, Phone, Mail, MapIcon, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Timer from "@/components/Timer";
import WeatherWidget from "@/components/WeatherWidget";
import MapWidget from "@/components/MapWidget";

export default function Home() {
  const { user, isAuthenticated } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Personal Tax Preparation",
      description: "Expert tax filing services for individuals with complex financial situations.",
      icon: "📋",
      href: "/services/tax-preparation",
    },
    {
      title: "Business Accounting",
      description: "Comprehensive accounting services to keep your business finances organized.",
      icon: "💼",
      href: "#",
    },
    {
      title: "Bookkeeping Services",
      description: "Professional bookkeeping to maintain accurate financial records.",
      icon: "📊",
      href: "/services/bookkeeping",
    },
    {
      title: "Payroll Processing",
      description: "Streamlined payroll management for your business employees.",
      icon: "💰",
      href: "/services/payroll",
    },
    {
      title: "Tax Planning",
      description: "Strategic tax planning to minimize your tax liability.",
      icon: "📈",
      href: "#",
    },
    {
      title: "Business Consulting",
      description: "Expert advice to help grow and optimize your business.",
      icon: "🎯",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Blue Gradient */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-16 md:py-32 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-32 -mb-32"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-blue-100 font-semibold mb-2 text-sm uppercase tracking-wide">Professional Tax Services</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                ST Tax and Accounting
              </h1>
              <p className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed">
                Professional tax and accounting services for individuals and businesses. We're committed to maximizing your financial success with expert guidance and personalized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-lg flex items-center gap-2"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700 font-semibold"
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right side widgets */}
            <div className="space-y-4">
              <Card className="p-6 bg-white/15 border-white/30 backdrop-blur-md rounded-2xl shadow-xl">
                <div className="flex items-center gap-3 text-white">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-100">Current Time</p>
                    <p className="text-2xl font-bold">
                      {currentTime.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </Card>
              <WeatherWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-8 border-b border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-blue-400" />
              <Input
                placeholder="Search services, articles, or FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-md">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        {/* Services Section */}
        <section id="services" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Professional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive tax and accounting solutions tailored to your unique needs and business goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300 group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <a href={service.href} className="block">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                    >
                      Learn More
                    </Button>
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">About Us</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Why Choose ST Tax and Accounting?
                </h2>
                <ul className="space-y-4">
                  {[
                    "Expert CPAs with years of experience",
                    "Personalized service tailored to your needs",
                    "Proactive tax planning and strategies",
                    "Transparent pricing with no hidden fees",
                    "Dedicated client support and guidance",
                    "Latest tax software and technology",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1 text-lg">✓</span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Quick Facts
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold mb-1">15+</p>
                    <p className="text-blue-100">Years of Experience</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">500+</p>
                    <p className="text-blue-100">Satisfied Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold mb-1">100%</p>
                    <p className="text-blue-100">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Locations</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Office Locations
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit us at any of our convenient office locations across the region.
              </p>
            </div>
            <MapWidget />
          </div>
        </section>

        {/* Timer Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-2">Important Dates</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Tax Deadline Countdown
              </h2>
              <p className="text-lg text-gray-600">
                Don't miss important tax deadlines. Stay on top of your obligations with our countdown timer.
              </p>
            </div>
            <Timer />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-blue-100 font-semibold text-sm uppercase tracking-wide mb-2">Get in Touch</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Take Control of Your Finances?
                </h2>
                <p className="text-blue-50 mb-8 text-lg leading-relaxed">
                  Contact us today for a free consultation. Our expert team is ready to help you achieve your financial goals.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-100">Phone</p>
                      <p className="text-white text-lg">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-100">Email</p>
                      <p className="text-white text-lg">info@sttax.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-300 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-blue-100">Address</p>
                      <p className="text-white">123 Business Street, Suite 100</p>
                      <p className="text-white">Your City, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md border border-white/20">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-100">
                      Full Name
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-300 focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-100">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-200 focus:border-blue-300 focus:ring-blue-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-blue-100">
                      Message
                    </label>
                    <textarea
                      placeholder="Tell us about your needs..."
                      rows={4}
                      className="w-full bg-white/10 border border-white/30 text-white placeholder:text-blue-200 rounded-md p-3 focus:border-blue-300 focus:ring-blue-300"
                    />
                  </div>
                  <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
