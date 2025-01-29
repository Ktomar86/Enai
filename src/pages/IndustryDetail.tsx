import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { ChevronRight, ArrowLeft } from 'lucide-react';

const industryInsights = {
  saas: {
    title: "Technology (SaaS)",
    insights: [
      {
        title: "Microsoft Revolutionizes Customer Service with AI",
        description: "Microsoft's implementation of AI-powered customer service automation has transformed their support operations, leading to significant improvements in response times and customer satisfaction.",
        source: "TechCrunch, 2024",
        impact: [
          "Immediate response to customer queries",
          "Enhanced customer satisfaction scores",
          "Reduced support team workload"
        ]
      },
      {
        title: "Salesforce's AI-Driven Lead Scoring Success",
        description: "Salesforce's Einstein AI has revolutionized how companies qualify and pursue sales opportunities, resulting in more efficient sales processes and higher conversion rates.",
        source: "Forbes Technology, 2024",
        impact: [
          "More accurate lead prioritization",
          "Shortened sales cycles",
          "Improved conversion rates"
        ]
      },
      {
        title: "HubSpot's AI Onboarding Innovation",
        description: "HubSpot's introduction of AI-powered onboarding has set new standards in customer success, making the process more intuitive and personalized for each client.",
        source: "VentureBeat, 2024",
        impact: [
          "Streamlined onboarding experience",
          "Higher customer retention",
          "Reduced support requirements"
        ]
      }
    ]
  },
  "financial-services": {
    title: "Financial Services",
    insights: [
      {
        title: "JPMorgan Chase Implements Advanced AI Risk Detection",
        description: "JPMorgan Chase's new AI system has revolutionized fraud detection and risk assessment, setting new industry standards for financial security.",
        source: "Financial Times, 2024",
        impact: [
          "Enhanced fraud prevention",
          "Improved risk assessment accuracy",
          "Reduced false positives"
        ]
      },
      {
        title: "Goldman Sachs Transforms Client Onboarding",
        description: "Goldman Sachs has revolutionized their client onboarding process with AI automation, significantly reducing processing times while maintaining compliance.",
        source: "Bloomberg, 2024",
        impact: [
          "Faster client onboarding",
          "Enhanced compliance accuracy",
          "Improved client experience"
        ]
      },
      {
        title: "BlackRock's AI Portfolio Management Success",
        description: "BlackRock's AI-driven portfolio management system has transformed investment strategies, leading to more informed decision-making and better client outcomes.",
        source: "Reuters, 2024",
        impact: [
          "Enhanced portfolio performance",
          "Better risk management",
          "Increased client satisfaction"
        ]
      }
    ]
  },
  healthcare: {
    title: "Healthcare",
    insights: [
      {
        title: "Mayo Clinic's AI Scheduling Revolution",
        description: "Mayo Clinic's implementation of AI-powered scheduling has transformed patient engagement and appointment management across their network.",
        source: "Healthcare Weekly, 2024",
        impact: [
          "Optimized appointment scheduling",
          "Reduced wait times",
          "Improved patient experience"
        ]
      },
      {
        title: "Cleveland Clinic's AI Care Coordination Success",
        description: "Cleveland Clinic's AI-driven care coordination system has revolutionized patient care management and follow-up procedures.",
        source: "Modern Healthcare, 2024",
        impact: [
          "Enhanced care coordination",
          "Better patient outcomes",
          "Streamlined communication"
        ]
      },
      {
        title: "Johns Hopkins' Resource Optimization Achievement",
        description: "Johns Hopkins Hospital has transformed their resource allocation with AI, leading to more efficient staffing and improved patient care.",
        source: "Health Tech Magazine, 2024",
        impact: [
          "Optimized staff scheduling",
          "Improved resource utilization",
          "Enhanced care quality"
        ]
      }
    ]
  },
  ecommerce: {
    title: "E-commerce",
    insights: [
      {
        title: "Amazon's AI Recommendation Engine Success",
        description: "Amazon's enhanced AI recommendation system has set new standards in personalized shopping experiences and customer engagement.",
        source: "Business Insider, 2024",
        impact: [
          "Personalized shopping experiences",
          "Increased customer engagement",
          "Higher repeat purchases"
        ]
      },
      {
        title: "Shopify's Inventory Management Innovation",
        description: "Shopify's AI-powered inventory management system has transformed how merchants handle stock and predict demand.",
        source: "E-commerce Times, 2024",
        impact: [
          "Improved inventory accuracy",
          "Better demand forecasting",
          "Reduced stockouts"
        ]
      },
      {
        title: "Walmart's Customer Support Transformation",
        description: "Walmart's implementation of AI customer support has revolutionized their online shopping experience and support efficiency.",
        source: "Retail Dive, 2024",
        impact: [
          "Faster response times",
          "Enhanced customer satisfaction",
          "Efficient issue resolution"
        ]
      }
    ]
  },
  "real-estate": {
    title: "Real Estate",
    insights: [
      {
        title: "Zillow's AI-Powered Lead Qualification Success",
        description: "Zillow's implementation of AI lead qualification has transformed how agents connect with potential buyers and sellers.",
        source: "Real Estate Weekly, 2024",
        impact: [
          "Better qualified leads",
          "Faster deal closures",
          "Improved agent efficiency"
        ]
      },
      {
        title: "Redfin's Property Matching Innovation",
        description: "Redfin's AI-driven property matching system has revolutionized how buyers find their perfect homes.",
        source: "Property Tech News, 2024",
        impact: [
          "More accurate property matches",
          "Improved buyer satisfaction",
          "Faster property sales"
        ]
      },
      {
        title: "Compass's Virtual Tour Success",
        description: "Compass's AI-powered virtual tour platform has transformed how properties are showcased and viewed.",
        source: "Inman News, 2024",
        impact: [
          "Enhanced viewing experience",
          "Increased efficiency",
          "Better buyer engagement"
        ]
      }
    ]
  },
  manufacturing: {
    title: "Manufacturing",
    insights: [
      {
        title: "Tesla's Supply Chain AI Revolution",
        description: "Tesla's implementation of AI in supply chain management has set new standards in manufacturing efficiency and logistics optimization.",
        source: "Manufacturing Today, 2024",
        impact: [
          "Optimized supply chain",
          "Improved delivery times",
          "Enhanced inventory management"
        ]
      },
      {
        title: "Siemens' Predictive Maintenance Success",
        description: "Siemens' AI-powered predictive maintenance system has transformed how manufacturers approach equipment maintenance and reliability.",
        source: "Industry Week, 2024",
        impact: [
          "Reduced downtime",
          "Improved maintenance efficiency",
          "Extended equipment life"
        ]
      },
      {
        title: "GE's Quality Control Innovation",
        description: "GE's implementation of AI in quality control has revolutionized manufacturing precision and reliability.",
        source: "Manufacturing Business Technology, 2024",
        impact: [
          "Enhanced quality control",
          "Reduced defects",
          "Improved efficiency"
        ]
      }
    ]
  },
  education: {
    title: "Education",
    insights: [
      {
        title: "Harvard's AI Student Engagement Success",
        description: "Harvard University's AI-powered student engagement system has transformed their recruitment and retention processes.",
        source: "Education Weekly, 2024",
        impact: [
          "Enhanced student engagement",
          "Improved enrollment rates",
          "Better student retention"
        ]
      },
      {
        title: "Coursera's Learning Support Innovation",
        description: "Coursera's AI-driven learning support system has revolutionized online education and student success rates.",
        source: "EdTech Magazine, 2024",
        impact: [
          "Improved completion rates",
          "Enhanced learning outcomes",
          "Better student support"
        ]
      },
      {
        title: "MIT's Resource Optimization Achievement",
        description: "MIT's implementation of AI in resource scheduling has transformed educational efficiency and student experience.",
        source: "Inside Higher Ed, 2024",
        impact: [
          "Optimized scheduling",
          "Better resource utilization",
          "Enhanced learning experience"
        ]
      }
    ]
  }
};

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industryInsights[slug as keyof typeof industryInsights];
  
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-800">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/industries"
            className="inline-flex items-center text-gray-300 hover:text-primary-400 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Industries
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">{industry.title}</span>
          </h1>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industry.insights.map((insight, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary-400 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{insight.title}</h3>
                <p className="text-gray-300 mb-4">{insight.description}</p>
                <p className="text-sm text-primary-400 mb-6">{insight.source}</p>
                <div className="space-y-3">
                  {insight.impact.map((item, idx) => (
                    <div key={idx} className="flex items-center text-gray-300">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-dark-800 to-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold gradient-text mb-8">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how our AI workers can help you achieve similar results.
          </p>
          <button
            onClick={scrollToContact}
            className="button-glow text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center group"
          >
            Get Started
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}