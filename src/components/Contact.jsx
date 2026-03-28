import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from './Icons';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', phone: '', goal: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', goal: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 97043 68333',
      action: 'tel:+919704368333',
      label: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: 'Madinaguda, Hyderabad, Telangana',
      action: 'https://maps.google.com/?q=Madinaguda+Hyderabad',
      label: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sun: 5:00 AM - 11:00 PM',
      action: null,
      label: null
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@muscletechfitness.com',
      action: 'mailto:info@muscletechfitness.com',
      label: 'Send Email'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-[#0f0f0f]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-red-500 text-sm font-bold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
            Start Your <span className="text-red-500">Journey Today</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Ready to transform your body? Contact us now for a free trial session 
            and consultation with our fitness experts.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-2xl p-8 border border-white/5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                <p className="text-gray-400">We will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Fitness Goal</label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-white/10 text-white focus:border-red-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300"
                >
                  <Send className="w-5 h-5" />
                  Get Free Trial
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to receive calls and messages about our services.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-red-600/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-1">{info.title}</h4>
                  <p className="text-gray-400 mb-2">{info.content}</p>
                  {info.action && (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-red-500 hover:text-red-400 font-medium transition-colors"
                    >
                      {info.label} →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Map Embed Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="rounded-xl overflow-hidden border border-white/5 h-48"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3!2d78.35!3d17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93!2sMadinaguda%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muscletech Fitness Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
