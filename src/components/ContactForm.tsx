import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  Mobile: string;
  WhatsApp: string
};

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    // setIsSubmitting(true);
    // const serviceID = 'service_13lvyeg';
    // const templateID = 'template_e8089g1';
    // const publickey = 'MylrLw5zBRs5yqgx6'

    // emailjs.send(serviceID, templateID, data, publickey)
    // .then(() => {
    //   setIsSubmitting(false);
    //   setSubmitSuccess(true);
    //   reset();

    //   setTimeout(() => {
    //     setSubmitSuccess(false);
    //   }, 5000);
    // })
    // .catch((error) => {
    //   console.error('Email send error:', error);
    //   setIsSubmitting(false);
    // });
    // // Simulate form submission
    // setTimeout(() => {
    //   console.log('Form data:', data);
    //   setIsSubmitting(false);
    //   setSubmitSuccess(true);
    //   reset();
      
    //   // Reset success message after 5 seconds
    //   setTimeout(() => {
    //     setSubmitSuccess(false);
    //   }, 5000);
    // }, 1500);
  setIsSubmitting(true);
  try {
    setIsSubmitting(true);

    // ✅ Prepare WhatsApp message
    const messageText = `
Hello ,
Abdul Azeez,  
A new lead has just been submitted through our website. Please review their details and follow up promptly:  

🧑 Name: ${data.name}  
📧 Email: ${data.email}  
📱 Whatsapp: ${data.mobile}  
📱 Mobile: ${data.mobilePhone}  
📝 Subject: ${data.subject}  
💬 Message: ${data.message}  


Let’s ensure we respond quickly and address their needs.

`;

    // ✅ Send message via Evolution API
    const response = await fetch(
      "http://94.136.187.188:8084/message/sendText/Maaz", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "modimc"
        },
        body: JSON.stringify({
          number: "919667462284",
          text: messageText
        })
      }
    );
    const messageForUser ='hello from Allied. We\'ll contact you shortly ';
    const responseClient = await fetch(
      "http://94.136.187.188:8084/message/sendText/Maaz", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": "modimc"
        },
        body: JSON.stringify({
          number: `91${data.mobile}`,
          text: messageForUser
        })
      }
    );

    if (!response.ok || !responseClient.ok) {
      throw new Error(`WhatsApp send failed: ${response.statusText}`);
    }

    setSubmitSuccess(true);
    reset();
    setTimeout(() => setSubmitSuccess(false), 5000);

  } catch (error) {
    console.error("Error sending message:", error);
    alert("Failed to send WhatsApp message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }   

  const serviceID = 'service_13lvyeg';
  const adminTemplateID = 'template_mluya8x';     // replace with your actual admin template ID
  const userTemplateID = 'template_e8089g1';       // replace with your actual user template ID
  const publicKey = 'MylrLw5zBRs5yqgx6';
  const timestamp = new Date().toLocaleString();   // Send human-readable time

  // Payload shared between both templates
  const templateParams = {
    name: data.name,
    email: data.email,
    mobile: data.mobile,
    mobilePhone:data.mobilePhone,
    subject: data.subject,
    message: data.message,
    time: timestamp,
    logo_url: `${window.location.origin}/logo.png`,
  };

  // Send email to Admin
  const sendAdminEmail = emailjs.send(serviceID, adminTemplateID, templateParams, publicKey);

  // Send email to User (confirmation)
  const sendUserEmail = emailjs.send(serviceID, userTemplateID, templateParams, publicKey);

  Promise.all([sendAdminEmail, sendUserEmail])
    .then(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Email send error:', error);
      setIsSubmitting(false);
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h3 className="font-heading text-2xl font-semibold mb-6 text-secondary">Get In Touch</h3>
      
      {submitSuccess && (
        <div className="mb-6 p-4 bg-success/10 border border-success text-success rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-darkgray mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.name ? 'border-error' : 'border-mediumgray'}`}
              placeholder="John Doe"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-error text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="mobilePhone" className="block text-sm font-medium text-darkgray mb-1">
             Mobile Number
            </label>
            <input
              type="tel"
              id="mobilePhone"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.mobilePhone ? 'border-error' : 'border-mediumgray'}`}
              placeholder="10-digit mobile number"
              {...register('mobilePhone', {
                required: 'Mobile number is required',
                pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit mobile number'
               }
             })}
           />
           {errors.mobile && <p className="text-error text-xs mt-1">{errors.mobile.message}</p>}
          </div>
        
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-darkgray mb-1">
             Whatsapp Number
            </label>
            <input
              type="tel"
              id="mobile"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.mobile ? 'border-error' : 'border-mediumgray'}`}
              placeholder="10-digit mobile number"
              {...register('mobile', {
                required: 'Whatsapp number is required',
                pattern: {
                value: /^[6-9]\d{9}$/,
                message: 'Enter a valid 10-digit Whatsapp number'
               }
             })}
           />
           {errors.mobile && <p className="text-error text-xs mt-1">{errors.mobile.message}</p>}
          </div>
        

          




          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-darkgray mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.email ? 'border-error' : 'border-mediumgray'}`}
              placeholder="your.email@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-darkgray mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.subject ? 'border-error' : 'border-mediumgray'}`}
            placeholder="How can we help you?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && (
            <p className="text-error text-xs mt-1">{errors.subject.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-darkgray mb-1">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${errors.message ? 'border-error' : 'border-mediumgray'}`}
            placeholder="Your message here..."
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && (
            <p className="text-error text-xs mt-1">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition duration-300 flex items-center justify-center w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
          ) : (
            <SendIcon size={18} className="mr-2" />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;




// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { SendIcon } from 'lucide-react';

// type FormValues = {
//   name: string;
//   email: string;
//   mobile: string;
//   subject: string;
//   message: string;
// };

// const ContactForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>();

//   /**
//    * FORM SUBMISSION HANDLER
//    * - Sends form data to n8n webhook
//    * - n8n workflow will then send a WhatsApp message using Evolution API
//    */
//   const onSubmit = async (data: FormValues) => {
//     setIsSubmitting(true);
//     const messageText = `
// Hello ${data.name},

// ✅ Hey Abdul, This our new lead from Allied Infra Solutions website.
// 📧 Email: ${data.email}
// 📱 Mobile: ${data.mobile}
// 📌 Subject: ${data.subject}
// 💬 Message: ${data.message}

// Please Contact .
//       `;

//       // ✅ 2. Call Evolution API Send Message endpoint
//       const response = await fetch(
//         "http://94.136.187.188:8084/message/sendText/Maaz", 
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "apikey": "modimc" // replace with your API key
//           },
//           body: JSON.stringify({
//             number: "919667462284"          //data.mobile,  // Must be in international format, e.g. "919891459548"
//             text: messageText
//           })
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`WhatsApp send failed: ${response.statusText}`);
//       }

//       .then(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       reset();

//       Hide success message after 5 seconds
//       setTimeout(() => setSubmitSuccess(false), 10000);
//     })
//   };


//     // 1️⃣ Send data to your n8n webhook
//     // fetch('http://localhost:5678/webhook-test/92a6d8d1-ec0f-4ccb-9288-3683e3ffc6c5', { // <-- Change this to your actual n8n webhook URL
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(data)
//     // })
//     // .then(res => res.json())
//     // .then(() => {
//     //   setIsSubmitting(false);
//     //   setSubmitSuccess(true);
//     //   reset();

//     //   Hide success message after 5 seconds
//     //   setTimeout(() => setSubmitSuccess(false), 10000);
//     // })
//   //   .catch(err => {
//   //     console.error('Webhook Error:', err);
//   //     setIsSubmitting(false);
//   //   });
//   // };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
//       <h3 className="font-heading text-2xl font-semibold mb-6 text-secondary">Get In Touch</h3>

//       {submitSuccess && (
//         <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
//           ✅ Thank you for your message! We’ll contact you via WhatsApp soon.
//         </div>
//       )}

//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Name Field */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Your Name</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//             placeholder="John Doe"
//             {...register('name', { required: 'Name is required' })}
//           />
//           {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
//         </div>

//         {/* Mobile Number Field */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
//           <input
//             type="tel"
//             className={`w-full px-4 py-2 border rounded-md ${errors.mobile ? 'border-red-500' : 'border-gray-300'}`}
//             placeholder="919891459548"
//             {...register('mobile', {
//               required: 'Mobile number is required',
//               pattern: {
//                 value: /^[0-9]{10,15}$/,
//                 message: 'Enter a valid number with country code (e.g. 919891459548)'
//               }
//             })}
//           />
//           {errors.mobile && <p className="text-red-500 text-xs">{errors.mobile.message}</p>}
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             className={`w-full px-4 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//             placeholder="you@example.com"
//             {...register('email', {
//               required: 'Email is required',
//               pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email' }
//             })}
//           />
//           {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
//         </div>

//         {/* Subject Field */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">Subject</label>
//           <input
//             type="text"
//             className={`w-full px-4 py-2 border rounded-md ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
//             placeholder="How can we help you?"
//             {...register('subject', { required: 'Subject is required' })}
//           />
//           {errors.subject && <p className="text-red-500 text-xs">{errors.subject.message}</p>}
//         </div>

//         {/* Message Field */}
//         <div className="mb-6">
//           <label className="block text-sm font-medium text-gray-700">Message</label>
//           <textarea
//             rows={5}
//             className={`w-full px-4 py-2 border rounded-md ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//             placeholder="Your message here..."
//             {...register('message', { required: 'Message is required' })}
//           />
//           {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md flex items-center justify-center w-full"
//         >
//           {isSubmitting ? 'Sending...' : <><SendIcon size={18} className="mr-2" />Send Message</>}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;