import React, { useEffect, useRef } from 'react';

const insights = [
  {
    title: "Microsoft Revolutionizes Customer Service with AI",
    description: "Microsoft's implementation of AI-powered customer service automation leads to 60% faster response times.",
    category: "Technology"
  },
  {
    title: "JPMorgan Chase Implements Advanced AI Risk Detection",
    description: "New AI system revolutionizes fraud detection with 85% improvement in accuracy.",
    category: "Finance"
  },
  {
    title: "Mayo Clinic's AI Scheduling Revolution",
    description: "AI-powered scheduling reduces wait times by 45% across their network.",
    category: "Healthcare"
  },
  {
    title: "Zillow's AI-Powered Lead Qualification Success",
    description: "Implementation of AI lead qualification increases conversion rates by 40%.",
    category: "Real Estate"
  },
  {
    title: "Tesla's Supply Chain AI Revolution",
    description: "AI in supply chain management reduces logistics costs by 30%.",
    category: "Manufacturing"
  }
];

// Triple the insights to ensure smooth infinite scroll
const allInsights = [...insights, ...insights, ...insights];

export default function Insights() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const container = containerRef.current;
    if (!scrollContainer || !container) return;

    // Set initial scroll position to show the second set of items
    scrollContainer.scrollLeft = container.clientWidth / 3;

    let animationFrameId: number;
    let lastTimestamp = 0;
    const speed = 50; // Pixels per second

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (scrollContainer) {
        scrollContainer.scrollLeft += (speed * delta) / 1000;

        // Reset scroll position when reaching the end of the second set
        if (scrollContainer.scrollLeft >= (container.clientWidth * 2) / 3) {
          scrollContainer.scrollLeft = container.clientWidth / 3;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseLeave = () => {
      lastTimestamp = 0;
      animationFrameId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center gradient-text mb-16">Insights</h2>
        <div className="relative">
          <div 
            ref={scrollRef}
            className="overflow-x-hidden"
          >
            <div 
              ref={containerRef}
              className="flex space-x-6"
              style={{ width: 'max-content' }}
            >
              {allInsights.map((insight, index) => (
                <div
                  key={index}
                  className="block w-[400px] p-6 rounded-2xl bg-dark-800 border border-dark-700 transition-all duration-300 hover:border-primary-400 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-sm text-primary-400">{insight.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{insight.title}</h3>
                  <p className="text-gray-300">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}