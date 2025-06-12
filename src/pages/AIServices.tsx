import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Target, 
  Camera, 
  Mic, 
  Settings, 
  Users,
  ArrowRight 
} from 'lucide-react';

const AIServices = () => {
  const services = [
    {
      icon: Settings,
      title: 'AI Automation & Workflows',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work, increase efficiency, and eliminate human error.',
      features: ['Process Automation', 'Workflow Optimization', 'Task Scheduling', 'Data Processing']
    },
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Deploy intelligent chatbots that provide 24/7 customer support, handle inquiries, and improve customer satisfaction with natural language understanding.',
      features: ['Customer Support', 'Lead Generation', 'Multi-language Support', 'Integration Ready']
    },
    {
      icon: FileText,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing tools for marketing, documentation, social media, and more.',
      features: ['Blog Posts', 'Marketing Copy', 'Social Media', 'Technical Documentation']
    },
    {
      icon: BarChart3,
      title: 'AI Data Analysis',
      description: 'Transform raw data into actionable insights with advanced analytics, predictive modeling, and intelligent reporting systems.',
      features: ['Predictive Analytics', 'Data Visualization', 'Trend Analysis', 'Custom Reports']
    },
    {
      icon: Target,
      title: 'AI for Sales & Marketing',
      description: 'Boost your sales and marketing efforts with AI-driven lead scoring, customer segmentation, and personalized campaigns.',
      features: ['Lead Scoring', 'Customer Segmentation', 'Campaign Optimization', 'Sales Forecasting']
    },
    {
      icon: Camera,
      title: 'AI Vision Solutions',
      description: 'Implement computer vision solutions for object detection, image recognition, quality control, and visual automation.',
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Visual Inspection']
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Integrate voice recognition, speech-to-text, text-to-speech, and voice-activated controls into your applications.',
      features: ['Speech Recognition', 'Voice Commands', 'Audio Transcription', 'Voice Analytics']
    },
    {
      icon: Brain,
      title: 'Custom AI Model Development',
      description: 'Build tailored AI models specific to your business needs, from machine learning algorithms to deep learning solutions.',
      features: ['Custom Models', 'Model Training', 'Performance Optimization', 'Deployment Support']
    },
    {
      icon: Users,
      title: 'AI Consulting',
      description: 'Get expert guidance on AI strategy, implementation roadmaps, and best practices to maximize your AI investment.',
      features: ['Strategy Planning', 'Technology Assessment', 'Implementation Guidance', 'ROI Analysis']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Solutions That{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate processes, gain insights, 
            and drive innovation across every aspect of your business operations.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Get AI Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From automation to analytics, we offer a full spectrum of AI solutions 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-blue-200 group">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-200"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600">
              From consultation to deployment, we ensure seamless AI integration
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We analyze your business needs and identify AI opportunities' },
              { step: '02', title: 'Strategy', description: 'Develop a comprehensive AI implementation roadmap' },
              { step: '03', title: 'Development', description: 'Build and train custom AI solutions for your requirements' },
              { step: '04', title: 'Deployment', description: 'Launch, monitor, and optimize your AI systems' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your operations and drive growth. 
            Schedule a consultation with our AI experts today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center space-x-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIServices;