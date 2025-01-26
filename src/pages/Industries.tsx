import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';

const industries = [
  {
    title: "Technology (SaaS)",
    slug: "saas",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Streamline operations for fast-growing SaaS businesses with AI-driven tools that simplify lead management and sales processes.",
    applications: [
      {
        title: "AI-Powered Lead Enrichment",
        description: "Automatically enrich lead data with missing fields such as LinkedIn profiles and job titles, ensuring actionable leads for sales teams."
      },
      {
        title: "Automated Sales Funnel Creation",
        description: "Create sales funnels tailored to lead behavior, segmenting audiences, nurturing leads, and streamlining qualification stages."
      }
    ],
    benefits: [
      "Improved lead quality and sales efficiency",
      "Faster decision-making with complete, enriched data",
      "Simplified workflows for small teams, allowing focus on growth"
    ]
  },
  {
    title: "Financial Services",
    slug: "financial-services",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Boost client engagement and operational efficiency with AI-driven solutions that optimize client interactions and outreach.",
    applications: [
      {
        title: "Voice AI for Appointment Booking",
        description: "Schedule consultations and follow up with clients seamlessly through AI-powered voice calls."
      },
      {
        title: "Personalized Email & SMS Content",
        description: "Generate customized messages tailored to client preferences and real-time engagement signals."
      }
    ],
    benefits: [
      "Reduced manual workload for teams, improving efficiency",
      "Enhanced personalization to build stronger client relationships",
      "Faster scheduling and reduced response times for client interactions"
    ]
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Improve patient engagement and streamline appointment scheduling with AI-powered tools tailored to healthcare providers.",
    applications: [
      {
        title: "Voice AI for Appointment Booking",
        description: "Automate appointment scheduling, confirmations, and follow-ups with patients."
      },
      {
        title: "Personalized Email & SMS Content",
        description: "Send tailored reminders and health tips based on patient data and behavior."
      }
    ],
    benefits: [
      "Enhanced patient satisfaction with personalized communication",
      "Reduced administrative workload for healthcare staff",
      "Improved appointment attendance rates"
    ]
  },
  {
    title: "Real Estate",
    slug: "real-estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Simplify property management and client engagement with AI-powered automation tools for lead nurturing and scheduling.",
    applications: [
      {
        title: "Voice AI for Appointment Booking",
        description: "Automate the scheduling of property tours and follow-ups with prospective buyers or renters."
      },
      {
        title: "Automated Sales Funnel Creation",
        description: "Build customized funnels based on lead behavior, ensuring qualified leads progress efficiently through the sales process."
      }
    ],
    benefits: [
      "Faster response times to client inquiries, improving satisfaction",
      "Reduced manual efforts in lead qualification and follow-ups",
      "Higher conversion rates for property sales or rentals"
    ]
  },
  {
    title: "Retail",
    slug: "retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=500",
    description: "Enhance customer engagement and drive sales with AI-powered tools that create personalized experiences and streamline workflows.",
    applications: [
      {
        title: "Personalized Email & SMS Content",
        description: "Send dynamic promotions and content based on customer behavior and engagement signals."
      },
      {
        title: "Automated Sales Funnel Creation",
        description: "Segment and nurture leads, ensuring customers receive the right message at the right time."
      }
    ],
    benefits: [
      "Improved customer loyalty through tailored communication",
      "Higher sales conversions with behavior-driven messaging",
      "Reduced operational complexity for small retail teams"
    ]
  }
];

export default function Industries() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-dark text-white animate-fade-in">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-800 animate-slide-down">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
            <span className="gradient-text">Industries We Serve</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Discover how our AI solutions are transforming different industries with intelligent automation and personalized engagement.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="rounded-2xl bg-dark-800 border border-dark-700 transition-all duration-300 hover:border-primary-400 hover:transform hover:scale-105 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">{industry.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Applications</h4>
                    <div className="space-y-4">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="space-y-2">
                          <h5 className="text-primary-400 font-medium">{app.title}</h5>
                          <p className="text-gray-300 text-sm">{app.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-3">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ChevronRight className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-dark-800 to-dark animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how our AI workers can help you achieve similar results.
          </p>
          <button
            onClick={scrollToContact}
            className="button-glow text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center group hover:transform hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}