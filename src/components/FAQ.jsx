import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does Allied Infra Solutions provide?",
      answer: "Allied Infra Solutions offers comprehensive industrial construction, real estate, and property services including industrial building construction, warehouse development, factory construction, property leasing and rental, land acquisition, R-zone and free zone property development, industrial design services, and real estate consultancy across India. We are an NCR-based company with PAN India operations."
    },
    {
      question: "Where does Allied Infra Solutions operate?",
      answer: "We are an NCR-based company operating PAN India. Currently, we have 3-4 active projects running in Delhi NCR (including Gurgaon, Noida, Faridabad, Ghaziabad, Greater Noida, and Bhiwadi), while serving clients and executing projects across India. We specialize in industrial construction and real estate services nationwide."
    },
    {
      question: "What is the difference between R-zone and free zone industrial land?",
      answer: "R-zone industrial land refers to residential zone industrial plots with specific regulations, while free zone industrial land offers more flexible usage and development options. Allied Infra Solutions provides expert guidance on both types of properties to help you choose the best option for your industrial needs."
    },
    {
      question: "Can Allied Infra Solutions help with industrial property lease and rental?",
      answer: "Yes, Allied Infra Solutions offers comprehensive property leasing and rental services for warehouses, factories, industrial sheds, and manufacturing units across India. We provide flexible lease terms and help you find the perfect industrial space anywhere in the country."
    },
    {
      question: "Does Allied Infra Solutions provide turnkey construction services?",
      answer: "Absolutely! Allied Infra Solutions specializes in turnkey industrial construction projects. We handle everything from design and planning to construction and project delivery, ensuring a seamless experience for our clients."
    },
    {
      question: "How can I contact Allied Infra Solutions for industrial property inquiries?",
      answer: "You can contact Allied Infra Solutions through our contact form, phone, or email. We offer free consultations for industrial construction, property lease, land purchase, and all real estate services across India. Our NCR-based team serves clients nationwide."
    },
    {
      question: "What types of industrial buildings does Allied Infra Solutions construct?",
      answer: "Allied Infra Solutions constructs various types of industrial buildings including warehouses, factories, manufacturing units, industrial sheds, distribution centers, logistics parks, and custom industrial facilities tailored to your specific requirements."
    },
    {
      question: "Is Allied Infra Solutions a licensed real estate company?",
      answer: "Yes, Allied Infra Solutions is a registered and licensed company providing industrial construction and real estate services. We maintain all necessary licenses and certifications to operate across India. We are NCR-based with PAN India operations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
            Frequently Asked Questions About Allied Infra Solutions
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-darkgray">
            Find answers to common questions about Allied Infra Solutions, our industrial construction services, real estate offerings, and property services. NCR-based company operating PAN India.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-lightgray hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-secondary pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-darkgray bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
