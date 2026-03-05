import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Manufacturing Company, Gurgaon",
      text: "Allied Infra Solutions helped us find the perfect industrial warehouse in Gurgaon. Their expertise in industrial real estate and professional service made the entire process smooth. Highly recommended for anyone looking for industrial property in Delhi NCR.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Logistics Firm, Noida",
      text: "We worked with Allied Infra Solutions for our factory construction project. Their turnkey construction services are exceptional. They delivered on time and within budget. Allied Infra is truly a leading industrial construction company in NCR.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "Industrial Business, Faridabad",
      text: "Allied Infra Solutions provided excellent service for our industrial land lease. Their knowledge of R-zone and free zone properties helped us make the right decision. Great team and professional approach throughout.",
      rating: 5
    },
    {
      name: "Sunita Mehta",
      company: "Manufacturing Unit, Ghaziabad",
      text: "We needed a warehouse for rent in Delhi NCR, and Allied Infra Solutions found us the perfect space. Their property leasing services are top-notch. They understand industrial real estate needs and deliver solutions that work.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            What Our Clients Say About Allied Infra Solutions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-darkgray">
            Trusted by businesses across India for industrial construction, real estate, and property services. NCR-based company with PAN India operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Quote size={32} className="text-primary mb-4" />
              <p className="text-darkgray mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-darkgray">{testimonial.company}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
