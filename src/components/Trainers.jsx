import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserCircle, Award, Users } from './Icons';

const Trainers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const trainers = [
    {
      name: 'Rahul Sharma',
      role: 'Head Trainer & Founder',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80',
      experience: '10+ years',
      specialization: 'Strength & Conditioning',
      certifications: ['ACE Certified', 'NSCA-CPT'],
      instagram: '#'
    },
    {
      name: 'Priya Patel',
      role: 'Fitness Coach',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
      experience: '7 years',
      specialization: 'Weight Loss & Nutrition',
      certifications: ['ISSA Certified', 'Nutrition Specialist'],
      instagram: '#'
    },
    {
      name: 'Amit Kumar',
      role: 'Strength Coach',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
      experience: '8 years',
      specialization: 'Bodybuilding & Powerlifting',
      certifications: ['NASM-CPT', 'CrossFit L2'],
      instagram: '#'
    },
    {
      name: 'Sneha Reddy',
      role: 'Yoga & Cardio Instructor',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
      experience: '5 years',
      specialization: 'Yoga & HIIT',
      certifications: ['RYT-500', 'ACE Group Fitness'],
      instagram: '#'
    }
  ];

  return (
    <section id="trainers" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            Expert Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Meet Our <span className="text-red-500">Trainers</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our certified and experienced trainers are dedicated to helping you achieve 
            your fitness goals with personalized guidance and motivation.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/30 transition-all duration-500">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent"></div>
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-red-600/90 backdrop-blur-sm text-white text-xs font-semibold">
                    {trainer.experience}
                  </div>

                  {/* Social Link */}
                  <a
                    href={trainer.instagram}
                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                  >
                    <UserCircle className="w-5 h-5 text-white" />
                  </a>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
                  <p className="text-red-500 text-sm font-medium mb-3">{trainer.role}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Award className="w-4 h-4 text-red-500" />
                      <span>{trainer.specialization}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {trainer.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl bg-[#1a1a1a] border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-3xl font-black text-white">15+</div>
            <div className="text-gray-400 text-sm">Expert Trainers</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#1a1a1a] border border-white/5">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 flex items-center justify-center mx-auto mb-3">
              <Award className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-3xl font-black text-white">50+</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#1a1a1a] border border-white/5">
            <div className="text-3xl font-black text-white">2000+</div>
            <div className="text-gray-400 text-sm">Lives Transformed</div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-[#1a1a1a] border border-white/5">
            <div className="text-3xl font-black text-white">98%</div>
            <div className="text-gray-400 text-sm">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
