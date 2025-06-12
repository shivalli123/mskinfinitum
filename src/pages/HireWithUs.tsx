import React from 'react';
import { Users, Award, Globe, Heart, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

const HireWithUs = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere while collaborating with our global team of experts.'
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and performance-based bonuses.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Access to training, conferences, and certification programs.'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and comprehensive health benefits.'
    },
    {
      icon: Briefcase,
      title: 'Exciting Projects',
      description: 'Work on cutting-edge AI and full-stack projects for leading companies.'
    },
    {
      icon: Users,
      title: 'Collaborative Team',
      description: 'Join a supportive team of passionate developers and AI experts.'
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Remote / Toronto',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'NLP'],
      description: 'Lead AI model development and deployment for enterprise clients.'
    },
    {
      title: 'Full Stack Developer',
      type: 'Full-time',
      location: 'Remote / Toronto',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
      description: 'Build scalable web applications and contribute to our client projects.'
    },
    {
      title: 'Machine Learning Engineer',
      type: 'Full-time',
      location: 'Remote / Toronto',
      skills: ['Python', 'MLOps', 'Kubernetes', 'Data Pipeline', 'Cloud'],
      description: 'Design and implement ML systems at scale for production environments.'
    },
    {
      title: 'Frontend Developer',
      type: 'Contract',
      location: 'Remote',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
      description: 'Create beautiful, responsive user interfaces for our client projects.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Exceptional Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're looking for talented AI engineers and full-stack developers to join our 
            growing team in Toronto and remotely. Help us build the future of technology.
          </p>
          <div className="flex justify-center mb-8">
            <a
              href="https://forms.google.com/careers-form"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At MSK Infinitum Solutions, we believe in empowering our team members to do their best work 
              while maintaining a healthy work-life balance and fostering continuous growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600">
              Join our team and work on exciting projects with cutting-edge technologies
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-600 mb-4">
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            {position.type}
                          </span>
                          <span className="flex items-center">
                            <Globe className="h-4 w-4 mr-1" />
                            {position.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <a
                      href="https://forms.google.com/careers-form"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2 w-full lg:w-auto justify-center"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-xl text-gray-600">
              We've designed a straightforward process to find the best talent
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 'Apply', description: 'Submit your application through our Google Form with your resume and portfolio' },
              { step: 'Screen', description: 'Initial phone/video screening to discuss your background and interests' },
              { step: 'Interview', description: 'Technical interview and culture fit assessment with our team' },
              { step: 'Decision', description: 'Quick decision process and offer for successful candidates' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.step}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Form Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out our application form below and we'll get back to you within 48 hours.
            </p>
          </div>

          {/* Google Form Embed Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="bg-gray-100 rounded-lg p-12 mb-6">
                <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Careers Application Form
                </h3>
                <p className="text-gray-600 mb-6">
                  Click the button below to access our Google Form and submit your application.
                </p>
                <a
                  href="https://forms.google.com/careers-form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                >
                  <span>Open Application Form</span>
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-gray-500">
                The form will open in a new tab. Please have your resume and portfolio ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Questions About Working With Us?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
            We'd love to hear from you. Reach out to our HR team for any questions 
            about our open positions or company culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@mskinfinitum.com"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              Email HR Team
            </a>
            <a
              href="https://linkedin.com/company/msk-infinitum"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-600 hover:text-white transition-colors font-semibold"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HireWithUs;