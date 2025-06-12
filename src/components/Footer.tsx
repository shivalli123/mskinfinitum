import React from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Phone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-purple-500/5 to-accent-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-accent-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative p-2.5 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl">
                  <Brain className="h-7 w-7 text-white" />
                  <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-accent-300 animate-pulse" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-400 via-purple-400 to-accent-400 bg-clip-text text-transparent">
                  MSK Infinitum Solutions
                </span>
                <span className="text-sm font-mono text-gray-400 -mt-1">
                  Empowering Innovation
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Transforming businesses with cutting-edge AI and Full Stack
              solutions. Based in Toronto, Canada, we deliver innovative
              technology solutions worldwide.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-accent-400 transition-colors duration-300">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-accent-500/20 transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Toronto, Ontario, Canada</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 group hover:text-primary-400 transition-colors duration-300">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a
                  href="mailto:mskinfinitum@gmail.com"
                  className="hover:underline"
                >
                  mskinfinitum@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "AI Solutions", path: "/ai-services" },
                {
                  name: "Full Stack Development",
                  path: "/full-stack-services",
                },
                { name: "Careers", path: "/hire-with-us" },
                { name: "Contact Us", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-xl font-display font-bold text-white">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/msk-infinitum-solutions-inc/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-gray-800 rounded-xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover-lift"
              >
                <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-600/0 group-hover:from-blue-500/20 group-hover:to-blue-600/20 rounded-xl transition-all duration-300"></div>
              </a>
            </div>

            <div className="space-y-3">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              >
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  Terms of Service
                </span>
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm group"
              >
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                  Privacy Policy
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 MSK Infinitum Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span>Made in Toronto, Canada</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
