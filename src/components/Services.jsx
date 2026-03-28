import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Weight, UserCheck, HeartPulse, Target, ArrowRight } from './Icons';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Weight,
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive weight training programs. Access to free weights, machines, and expert guidance.',
      features: ['Free Weights Zone', 'Machine Training', 'Strength Programs', 'Progress Tracking'],
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: UserCheck,
      title: 'Personal Training',
      description: 'One-on-one coaching tailored to your specific goals. Our certified trainers create customized workout and nutrition plans.',
      features: ['Custom Workout Plans', 'Nutrition Guidance', 'Form Correction', 'Goal Tracking'],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      color: 'from-red-700 to-red-900'
    },
    {
      icon: HeartPulse,
      title: 'Cardio Workouts',
      description: 'Improve your cardiovascular health with our state-of-the-art cardio equipment and high-energy group classes.',
      features: ['Treadmills & Bikes', 'Elliptical Machines', 'Rowing Equipment', 'HIIT Classes'],
      image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      color: 'from-red-600 to-red-800'
    },
    {
      icon: Target,
      title: 'Weight Loss Programs',
      description: 'Science-backed weight loss programs combining exercise, nutrition, and lifestyle coaching for sustainable results.',
      features: ['Fat Loss Training', 'Diet Planning', 'Body Composition', 'Weekly Check-ins'],
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      color: 'from-red-700 to-red-900'
    }
  ];

  return (
    <section id="services" className="section-padding bg-[#0f0f0f]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            What We <span className="text-red-500">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals, 
            whether you are building muscle, losing weight, or improving overall health.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button 
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 text-red-500 font-semibold group-hover:text-red-400 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-600/20">
            <div className="text-center sm:text-left">
              <h4 className="text-xl font-bold text-white mb-1">Not sure which service is right for you?</h4>
              <p className="text-gray-400">Get a free consultation with our fitness experts</p>
            </div>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              Book Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
