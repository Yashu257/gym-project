import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from './Icons';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
      text: 'Muscletech Fitness completely changed my life. Lost 20kg in 6 months with their personalized training program. The trainers are incredibly supportive and the equipment is top-notch. Best gym in Madinaguda!'
    },
    {
      name: 'Lakshmi Devi',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
      text: 'As a working woman, I needed a gym with flexible hours. Muscletech delivers perfectly! The 5 AM to 11 PM schedule works great for me. The cardio zone is amazing and always clean. Highly recommended!'
    },
    {
      name: 'Mohammed Ali',
      role: 'College Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 5,
      text: 'Joined 8 months ago for muscle building. The strength training area has everything you need - from free weights to machines. Trainer Amit helped me gain 8kg of lean muscle. This place is a game changer!'
    },
    {
      name: 'Priya Sharma',
      role: 'Homemaker',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
      text: 'After pregnancy, I struggled with weight. Priya mam from Muscletech created a perfect post-natal fitness plan for me. Lost 15kg in 5 months safely. The supportive environment here is unmatched!'
    },
    {
      name: 'Venkatesh Rao',
      role: 'Retired Banker',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 5,
      text: 'At 58, I thought it was too late to get fit. Rahul sir proved me wrong! His guidance helped me manage my diabetes better and I feel 20 years younger. The age-friendly approach here is wonderful.'
    },
    {
      name: 'Ananya Reddy',
      role: 'Fashion Designer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
      text: 'The yoga and HIIT classes here are fantastic! Sneha is an amazing instructor. I have tried many gyms in Hyderabad, but Muscletech stands out for its cleanliness, professional trainers, and results!'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            What Our <span className="text-red-500">Members Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at Muscletech Fitness.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/20 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-red-500" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-red-600/30"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span>Google Rating</span>
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
          <div className="text-gray-400">
            <span className="font-bold text-white">500+</span> Happy Members
          </div>
          <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
          <div className="text-gray-400">
            <span className="font-bold text-white">98%</span> Would Recommend
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
