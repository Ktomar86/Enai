import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  BookOpen, 
  Mail, 
  MessageSquare, 
  BarChart3,
  Target,
  Users,
  Bot,
  ChevronRight,
  Linkedin,
  LineChart,
  HeadphonesIcon
} from 'lucide-react';
import { PrivacyPolicy } from './PrivacyPolicy';
import { TermsOfService } from './TermsOfService';
import Navigation from './components/Navigation';
import Insights from './components/SuccessStories';
import Testimonials from './components/Testimonials';

const solutions = [
  {
    title: 'Lead Generation & Qualification',
    icon: <Target className="w-12 h-12 text-primary-400" />,
    description: 'AI-powered scoring, outreach, and follow-ups'
  },
  {
    title: 'Market Research & Analysis',
    icon: <BarChart3 className="w-12 h-12 text-primary-400" />,
    description: 'Deep insights, audience segmentation'
  },
  {
    title: 'Sales Process Automation',
    icon: <Zap className="w-12 h-12 text-primary-400" />,
    description: 'Automated pipeline management, smart scheduling'
  },
  {
    title: 'Customer Support Enhancement',
    icon: <MessageSquare className="w-12 h-12 text-primary-400" />,
    description: '24/7 intelligent support, ticket automation'
  },
  {
    title: 'Content Personalization',
    icon: <BookOpen className="w-12 h-12 text-primary-400" />,
    description: 'Dynamic creation and distribution'
  },
  {
    title: 'Performance Analytics',
    icon: <BarChart3 className="w-12 h-12 text-primary-400" />,
    description: 'Real-time tracking, AI-driven insights'
  }
];

const aiTeam = [
  {
    name: 'LEO',
    icon: <Bot className="w-16 h-16 text-primary-400" />,
    description: 'Automates communication across email, SMS, voice, and video'
  },
  {
    name: 'ARES',
    icon: <Target className="w-16 h-16 text-primary-400" />,
    description: 'Advanced analytics for customer profiling and market niche targeting'
  },
  {
    name: 'ZEUS',
    icon: <MessageSquare className="w-16 h-16 text-primary-400" />,
    description: 'Voice call scheduling and follow-ups'
  },
  {
    name: 'TECHNO',
    icon: <BarChart3 className="w-16 h-16 text-primary-400" />,
    description: 'Tracks campaign performance with detailed insights'
  },
  {
    name: 'CRONUS',
    icon: <Mail className="w-16 h-16 text-primary-400" />,
    description: 'Generates personalized content for email and SMS'
  },
  {
    name: 'CLIO',
    icon: <Zap className="w-16 h-16 text-primary-400" />,
    description: 'Creates optimized sales funnels'
  }
];

function App() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOfServiceOpen, setIsTermsOfServiceOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message')
    };

    // Send email to madhav@enai.ai
    window.location.href = `mailto:madhav@enai.ai?subject=New Contact Form Submission&body=Name: ${data.name}%0D%0AEmail: ${data.email}%0D%0ACompany: ${data.company}%0D%0AMessage: ${data.message}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-dark-800">
        <div className="max-w-7xl mx-auto text-center scroll-fade">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-white">MEET YOUR NEW</span><br />
            <span className="gradient-text">AI WORKERS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Empower your business with our AI workers. Get a dedicated team of AI agents that understand your business and help you scale efficiently.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="button-glow text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center group"
          >
            Start Free
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Why Choose ENAI */}
      <section id="features" className="py-24 bg-gradient-to-b from-dark-800 to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">Why Choose ENAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-dark-800 shadow-xl hover:shadow-2xl transition-shadow border border-dark-700 h-full">
              <Brain className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Intelligent Automation</h3>
              <p className="text-gray-300 text-center">Our AI agents are more than tools—they're virtual team members that adapt to your unique business needs, learning and evolving to provide optimal results over time.</p>
            </div>
            <div className="p-8 rounded-2xl bg-dark-800 shadow-xl hover:shadow-2xl transition-shadow border border-dark-700 h-full">
              <Zap className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Rapid Deployment</h3>
              <p className="text-gray-300 text-center">Pre-trained, customizable AI models</p>
            </div>
            <div className="p-8 rounded-2xl bg-dark-800 shadow-xl hover:shadow-2xl transition-shadow border border-dark-700 h-full">
              <Users className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Scalable and Cost-Effective</h3>
              <p className="text-gray-300 text-center">Scale your business operations without the need for extensive hiring or training. Our AI solutions are designed to grow alongside your business, ensuring cost efficiency at every stage.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-dark-800 shadow-xl hover:shadow-2xl transition-shadow border border-dark-700 h-full">
              <LineChart className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Real-Time Insights</h3>
              <p className="text-gray-300 text-center">Leverage real-time analytics and actionable insights to make informed decisions. Our AI workers provide detailed reports to help you optimize performance and maximize ROI.</p>
            </div>
            <div className="p-8 rounded-2xl bg-dark-800 shadow-xl hover:shadow-2xl transition-shadow border border-dark-700 h-full">
              <HeadphonesIcon className="w-16 h-16 text-primary-400 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white text-center">Exceptional Support</h3>
              <p className="text-gray-300 text-center">We're with you every step of the way. Our dedicated support team ensures smooth implementation and provides ongoing assistance to help you achieve your business objectives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="card-hover p-8 rounded-2xl bg-dark-800 border border-dark-700">
                <div className="text-primary-400">{solution.icon}</div>
                <h3 className="text-xl font-semibold mt-6 mb-4 text-white">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Team */}
      <section id="team" className="py-24 bg-gradient-to-b from-dark to-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center gradient-text mb-16">Meet Our AI Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTeam.map((member, index) => (
              <div key={index} className="p-8 rounded-2xl bg-dark-800 shadow-lg hover:shadow-xl transition-shadow border border-dark-700 text-center">
                <div className="mb-6 text-primary-400">{member.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{member.name}</h3>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Insights */}
      <Insights />

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-b from-dark-800 to-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold gradient-text mb-8">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Unit 3, Bradbury's Court<br />
                Lyon Rd, London HA1 2BY<br />
                United Kingdom
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-gray-300 group">
                  <a href="mailto:madhav@enai.ai" className="flex items-center hover:text-primary-400">
                    <Mail className="w-5 h-5 mr-2" />
                    madhav@enai.ai (CRO)
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/madhavmohankatarya/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-primary-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-gray-300 group">
                  <a href="mailto:nikhil@enai.ai" className="flex items-center hover:text-primary-400">
                    <Mail className="w-5 h-5 mr-2" />
                    nikhil@enai.ai (CTO)
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nikhil-nehra-57716a23b/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-primary-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center justify-between text-gray-300 group">
                  <a href="mailto:zeeshan@enai.ai" className="flex items-center hover:text-primary-400">
                    <Mail className="w-5 h-5 mr-2" />
                    zeeshan@enai.ai (CSO)
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/zidrees/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-primary-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white input-glow"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white input-glow"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white input-glow"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white input-glow"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-400 text-white px-6 py-3 rounded-lg hover:bg-primary-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 border-t border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-8 md:mb-0">
              <img src="https://i.postimg.cc/5j48qtcH/logo.png" alt="ENAI" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold gradient-text">ENAI</span>
            </div>
            <div className="flex space-x-8 mb-8 md:mb-0">
              <button 
                onClick={() => setIsPrivacyPolicyOpen(true)}
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsOfServiceOpen(true)}
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
            <div className="flex space-x-6">
              <a 
                href="https://www.linkedin.com/company/enai-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy 
        isOpen={isPrivacyPolicyOpen} 
        onClose={() => setIsPrivacyPolicyOpen(false)} 
      />

      {/* Terms of Service Modal */}
      <TermsOfService
        isOpen={isTermsOfServiceOpen}
        onClose={() => setIsTermsOfServiceOpen(false)}
      />
    </div>
  );
}

export default App;