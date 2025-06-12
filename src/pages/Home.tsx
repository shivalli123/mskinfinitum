import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Brain,
  Code,
  Users,
  Zap,
  CheckCircle,
  Star,
  Sparkles,
  TrendingUp,
  Globe,
  Shield,
  Rocket,
} from "lucide-react";

// Import partner logos
import scotiaBankLogo from "/public/logos/scotiabank.png";
import citiBankLogo from "/public/logos/Citibank.png";
import rbcLogo from "/public/logos/RBC.png";
import ericssonLogo from "/public/logos/Ericsson.png";
import TelusLogo from "/public/logos/Telus.png";
import avivaLogo from "/public/logos/Dell.png";
import synechronLogo from "/public/logos/synechron.png";
import CorusLogo from "/public/logos/Corus.png";
import DellLogo from "/public/logos/Dell.png";

const Home = () => {
  const stats = [
    { number: "150+", label: "Projects Delivered", icon: Rocket },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "10+", label: "Years Experience", icon: TrendingUp },
    { number: "24/7", label: "Support", icon: Shield },
  ];

  const partners = [
    { name: "Scotia Bank", logo: scotiaBankLogo },
    { name: "Citi Bank", logo: citiBankLogo },
    { name: "Royal Bank Of Canada", logo: rbcLogo },
    { name: "Ericson", logo: ericssonLogo },
    { name: "Telus", logo: TelusLogo },
    { name: "Dell", logo: DellLogo },
    { name: "synechron", logo: synechronLogo },
    { name: "Aviva", logo: avivaLogo },
    { name: "Corus", logo: CorusLogo },
  ];

  const testimonials = [
    {
      name: "Varshil Medidhi",
      company: "Imagine Software Club",
      role: "Project Lead",
      text: "MSK Infinitum Solutions Led Our club on developing Modren Solutions . The results exceeded our expectations and delivered incredible ROI.",
      rating: 5,
      avatar: "VM",
    },
    {
      name: "Amar Zeno",
      company: "Charater XYZ",
      role: "CEO",
      text: "Professional team, cutting-edge solutions, and exceptional support. Their full-stack expertise helped us scale rapidly.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Sean Rodriguez",
      company: "Royal Bank of Canada",
      role: "Product Manager",
      text: "Their AI solutions revolutionized our workflow. The team's expertise and dedication to quality is unmatched.",
      rating: 5,
      avatar: "ER",
    },
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description:
        "Leveraging cutting-edge artificial intelligence to solve complex business challenges.",
      gradient: "from-primary-500 to-blue-600",
    },
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description:
        "End-to-end development solutions using modern technologies and best practices.",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "Toronto-based with worldwide service delivery and 24/7 support.",
      gradient: "from-accent-500 to-green-600",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Fast turnaround times without compromising on quality or security.",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-purple-500/10 to-accent-500/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg animate-slide-down">
              <Sparkles className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 50+ Companies Worldwide
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="block text-gray-900">Empowering</span>
                <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 bg-clip-text text-transparent animate-gradient-x">
                  Businesses
                </span>
                <span className="block text-gray-900">with AI</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Based in{" "}
                <span className="font-semibold text-primary-600">
                  Toronto, Canada
                </span>
                , we deliver innovative AI automation and full-stack solutions
                that transform how businesses operate and grow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-glow-lg transition-all duration-300 hover-lift overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-purple-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Get Started Today</span>
                <ArrowRight className="relative z-10 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                <div className="absolute inset-0 shimmer-effect"></div>
              </Link>
              <Link
                to="/ai-services"
                className="group inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border-2 border-primary-200 text-primary-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary-50 hover:border-primary-300 transition-all duration-300 hover-lift"
              >
                <span>Explore Services</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="group text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl shadow-lg group-hover:shadow-glow transition-all duration-300 hover-lift">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-display font-bold text-gray-900">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary-50 rounded-full px-6 py-3">
              <Zap className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-700">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Built for the <span className="gradient-text">Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to
              deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-white rounded-3xl border border-gray-100 hover:border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative space-y-6">
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:shadow-glow transition-all duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-display font-bold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-accent-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Brain className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-semibold text-primary-700">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Comprehensive{" "}
              <span className="gradient-text">Tech Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in AI solutions and Full Stack development,
              delivering comprehensive technology solutions for modern
              businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Services */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative p-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl">
                      <Brain className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-gray-900">
                      AI Solutions
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "AI Automation & Workflows",
                    "Intelligent Chatbots",
                    "Content Generation",
                    "Custom AI Models",
                    "Data Analysis",
                    "Vision Solutions",
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/ai-services"
                  className="group/link inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    Explore AI Services
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Full Stack Services */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-500 to-green-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative p-4 bg-gradient-to-br from-accent-500 to-green-600 rounded-2xl">
                      <Code className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-display font-bold text-gray-900">
                      Full Stack Development
                    </h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Rapid MVP Development",
                    "Website & Landing Pages",
                    "Dashboard Development",
                    "Custom Integrations",
                    "API Development",
                    "Cloud Solutions",
                  ].map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-gray-700"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-accent-500 to-green-500 rounded-full"></div>
                      <span className="font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/full-stack-services"
                  className="group/link inline-flex items-center space-x-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors"
                >
                  <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                    Explore Development Services
                  </span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-display font-bold text-gray-900">
              Trusted by Leading Companies
            </h2>
            <p className="text-gray-600">
              Join the growing list of satisfied clients worldwide
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="group text-center relative">
                <div className="bg-white rounded-2xl p-8 hover:bg-gray-50 transition-all duration-300 hover-lift border border-gray-100 hover:border-gray-200">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/70 rounded-2xl">
                    <span className="text-white font-semibold text-sm">
                      {partner.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-semibold text-gray-700">
                Client Success Stories
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                <div className="relative space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-display font-bold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary-600 via-purple-600 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-purple-600/90 to-accent-600/90"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-display font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our AI and full-stack solutions can drive your
              business forward. Get in touch with our team today and start your
              digital transformation journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative inline-flex items-center space-x-3 bg-white text-primary-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 hover-lift shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/hire-with-us"
              className="group inline-flex items-center space-x-3 border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover-lift backdrop-blur-sm"
            >
              <span>Join Our Team</span>
              <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
