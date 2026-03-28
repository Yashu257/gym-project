import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Dumbbell, Users, Clock, Trophy, Shield, Heart } from './Icons';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    { icon: Dumbbell, title: 'Modern Equipment', desc: 'Latest fitness machines and free weights' },
    { icon: Users, title: 'Expert Trainers', desc: 'Certified professionals to guide you' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Open 5 AM to 11 PM, 7 days a week' },
    { icon: Shield, title: 'Safe Environment', desc: 'Clean and sanitized facilities daily' },
    { icon: Heart, title: 'Health Focused', desc: 'Holistic approach to fitness and wellness' },
    { icon: Trophy, title: 'Proven Results', desc: 'Track record of successful transformations' },
  ];

  return (
    <section id="about" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Your Fitness Journey <span className="text-red-500">Starts Here</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Muscletech Fitness in Madinaguda, Hyderabad is more than just a gym. 
            We are a community dedicated to helping you achieve your fitness goals 
            with state-of-the-art equipment, expert guidance, and unwavering support.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Gym Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl"
            >
              <div className="text-4xl font-black">5+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Why Choose Muscletech Fitness?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Located in the heart of Madinaguda, Hyderabad, Muscletech Fitness has been 
              transforming lives since 2019. Our facility spans over 5,000 square feet 
              of premium workout space, featuring cutting-edge equipment from leading brands.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We believe fitness is not just about physical strength, but mental resilience 
              and overall well-being. Our holistic approach combines strength training, 
              cardio, nutrition guidance, and personalized coaching.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✓</span>
                </div>
                <span className="text-white font-medium">AC Facility</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✓</span>
                </div>
                <span className="text-white font-medium">Parking Available</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✓</span>
                </div>
                <span className="text-white font-medium">Locker Rooms</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-red-500 font-bold">✓</span>
                </div>
                <span className="text-white font-medium">Nutrition Cafe</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="group p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-red-600/10 flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                <facility.icon className="w-7 h-7 text-red-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{facility.title}</h4>
              <p className="text-gray-400">{facility.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
