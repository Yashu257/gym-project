import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from './Icons';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Monthly',
      price: '2,999',
      period: '/month',
      description: 'Perfect for beginners trying out',
      popular: false,
      features: [
        { text: 'Full gym access', included: true },
        { text: 'Cardio & weights', included: true },
        { text: 'Locker room access', included: true },
        { text: 'Basic equipment', included: true },
        { text: 'Personal training', included: false },
        { text: 'Nutrition plan', included: false },
        { text: 'Steam room', included: false },
      ],
      cta: 'Get Started'
    },
    {
      name: 'Quarterly',
      price: '7,499',
      period: '/3 months',
      description: 'Most popular - Save ₹1,498',
      popular: true,
      features: [
        { text: 'Full gym access', included: true },
        { text: 'Cardio & weights', included: true },
        { text: 'Locker room access', included: true },
        { text: 'All equipment', included: true },
        { text: '2 PT sessions', included: true },
        { text: 'Nutrition plan', included: true },
        { text: 'Steam room', included: false },
      ],
      cta: 'Join Now'
    },
    {
      name: 'Annual',
      price: '24,999',
      period: '/year',
      description: 'Best value - Save ₹11,989',
      popular: false,
      features: [
        { text: 'Full gym access', included: true },
        { text: 'Cardio & weights', included: true },
        { text: 'Premium locker', included: true },
        { text: 'All equipment', included: true },
        { text: '8 PT sessions', included: true },
        { text: 'Nutrition plan', included: true },
        { text: 'Steam room access', included: true },
      ],
      cta: 'Best Value'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            Membership Plans
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Choose Your <span className="text-red-500">Plan</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Flexible membership options designed to fit your fitness goals and budget. 
            No hidden fees, cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-b from-red-600/20 to-red-900/20 border-2 border-red-600'
                  : 'bg-[#1a1a1a] border border-white/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-center text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="text-center mb-8">
                <span className="text-gray-400 text-xl">₹</span>
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-red-600/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-red-500" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-gray-700/50 flex items-center justify-center">
                        <X className="w-3 h-3 text-gray-500" />
                      </div>
                    )}
                    <span className={feature.included ? 'text-white' : 'text-gray-500'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/25'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            <span className="text-red-500 font-bold">Special Offer:</span> Get 1 week FREE trial on any plan! 
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white underline ml-2 hover:text-red-500 transition-colors"
            >
              Claim now →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
