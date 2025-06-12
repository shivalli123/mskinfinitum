import React from 'react';
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      contact: 'mskinfinitum@gmail.com',
      action: 'mailto:mskinfinitum.com@gmail.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      contact: '+1 (437) 559-0786',
      action: 'tel:+14375590786'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our office location',
      contact: 'Toronto, Ontario, Canada',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday',
      contact: '9:00 AM - 6:00 PM EST',
      action: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/msk-infinitum-solutions-inc/',
      color: 'hover:text-blue-600'
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Start Building
            </span>{' '}
            Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and full-stack solutions? 
            Get in touch with our team to discuss your project and discover how we can help.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-2">{method.description}</p>
                  {method.action.startsWith('#') ? (
                    <p className="font-semibold text-indigo-600">{method.contact}</p>
                  ) : (
                    <a
                      href={method.action}
                      className="font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                    >
                      {method.contact}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-lg text-gray-600 ${social.color} transition-colors hover:bg-gray-200`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Google Form Embed Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-12 mb-6">
                <MessageSquare className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Project Inquiry Form
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our Google Form and tell us about your project.
                </p>
                <a
                  href="https://forms.google.com/contact-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <span>Open Contact Form</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-500">
                The form will open in a new tab. Please provide as much detail as possible about your project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary depending on complexity. Simple websites can be completed in 2-4 weeks, while complex AI implementations may take 8-16 weeks. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Absolutely! While we\'re based in Toronto, Canada, we work with clients globally. We have experience working across different time zones and can accommodate various communication preferences.'
              },
              {
                question: 'What is your pricing structure?',
                answer: 'Our pricing varies based on project scope, complexity, and timeline. We offer both fixed-price projects and hourly consulting. Contact us for a detailed quote based on your specific requirements.'
              },
              {
                question: 'Do you provide ongoing support and maintenance?',
                answer: 'Yes, we offer comprehensive support and maintenance packages for all our solutions. This includes bug fixes, updates, performance monitoring, and feature enhancements as needed.'
              },
              {
                question: 'Can you help with existing projects or systems?',
                answer: 'Definitely! We can help improve, integrate, or modernize existing systems. Our team is experienced in working with legacy code and can provide migration services to modern technologies.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Information */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Visit Our Toronto Office
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Located in the heart of Toronto's tech district, our office is equipped with 
                state-of-the-art facilities and a collaborative environment that fosters innovation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>123 Tech Street, Toronto, ON M5V 3A8, Canada</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>+1 (416) 123-4567</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
              <MapPin className="h-32 w-32 text-gray-600" />
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;