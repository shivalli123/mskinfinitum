import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Zap,
  Globe,
  BarChart3,
  Puzzle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const FullStackServices = () => {
  const services = [
    {
      icon: Zap,
      title: "Rapid MVP Development",
      description:
        "Transform your ideas into working products quickly with our streamlined MVP development process. Perfect for startups and businesses looking to validate concepts.",
      image: "/public/images/rapidmvp.jpeg",
      features: [
        "Quick prototyping and validation",
        "Modern tech stack implementation",
        "Scalable architecture design",
        "User feedback integration",
        "Iterative development approach",
        "Launch-ready applications",
      ],
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      icon: Globe,
      title: "Website & Landing Page Development",
      description:
        "Create stunning, high-converting websites and landing pages that capture your brand essence and drive business results.",
      image: "/public/images/webDev.jpg",
      features: [
        "Responsive design for all devices",
        "SEO optimization and performance",
        "Conversion-focused layouts",
        "Content management systems",
        "E-commerce integration",
        "Analytics and tracking setup",
      ],
      techStack: ["React", "Next.js", "Tailwind CSS", "Headless CMS", "Vercel"],
    },
    {
      icon: BarChart3,
      title: "Dashboard Development",
      description:
        "Build powerful, interactive dashboards that provide real-time insights and enable data-driven decision making for your business.",
      image: "/public/images/dashboard.png",
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "User role management",
        "Custom reporting features",
        "Mobile-responsive design",
        "Third-party integrations",
      ],
      techStack: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis"],
    },
    {
      icon: Puzzle,
      title: "Custom Integrations",
      description:
        "Seamlessly connect your existing systems and third-party services with custom API integrations and middleware solutions.",
      image: "/public/images/apidev.png",
      features: [
        "API development and integration",
        "Legacy system modernization",
        "Data synchronization",
        "Webhook implementations",
        "Authentication systems",
        "Microservices architecture",
      ],
      techStack: ["Node.js", "Express", "GraphQL", "Docker", "Kubernetes"],
    },
  ];

  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Express", "FastAPI", "GraphQL"],
    },
    {
      category: "Database",
      techs: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase"],
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Docker", "Kubernetes", "Vercel", "CI/CD"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-teal-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Full Stack Development{" "}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From rapid prototypes to enterprise solutions, we build scalable,
            modern applications using cutting-edge technologies and best
            practices.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-green-600 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive full-stack solutions tailored to your business needs
              and goals.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mr-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        What's Included:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-gray-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Technology Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>

                  <div
                    className={
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }
                  >
                    <div className="relative rounded-2xl overflow-hidden h-96">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://placehold.co/600x400/e2e8f0/64748b?text=Service+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                        <div className="text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm opacity-90">
                            {service.description.substring(0, 100)}...
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              We use modern, proven technologies to build robust and scalable
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.techs.map((tech, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <Code className="h-4 w-4 text-green-500 mr-3" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              Agile methodology ensures efficient delivery and exceptional
              results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Planning",
                description:
                  "Requirements gathering, architecture design, and project roadmap creation",
              },
              {
                step: "Development",
                description:
                  "Agile development with regular updates and feedback incorporation",
              },
              {
                step: "Testing",
                description:
                  "Comprehensive testing including unit, integration, and user acceptance tests",
              },
              {
                step: "Deployment",
                description:
                  "Production deployment, monitoring setup, and ongoing support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-green-500 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {phase.step}
                </h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            From concept to deployment, we'll help you build scalable, modern
            applications that drive your business forward. Let's discuss your
            project today.
          </p>
          <Link
            to="/contact"
            className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FullStackServices;
