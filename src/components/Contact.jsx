import React, { useState } from 'react';
import { motion, time } from 'framer-motion';
import qrcode from '../assets/qrcode.svg';
import emailjs from '@emailjs/browser';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
        time: new Date().toLocaleString(),
      });
    
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    
      const validate = () => {
        const newErrors = {};
    
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim() || formData.message.length < 10)
          newErrors.message = "Message must be at least 10 characters";
    
        return newErrors;
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: "" });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
          return;
        }
      
        // console.log("Form Data Submitted: ", formData);
        sendEmail(formData); 
        setSubmitted(true);
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
          time : ""
        });
      };
      

      const sendEmail = (formData) => {
        emailjs
          .send(
            'service_nxqs73h',
            'template_fkym18o',
            {
              name: formData.name,
              email: formData.email,
              company: formData.company,
              service: formData.service,
              budget: formData.budget,
              message: formData.message,
              time: new Date().toLocaleString()
            },
            'esuLp9bVj2UybE3bu' // from EmailJS account
          )
          .then(
            (result) => {
              console.log('Message Sent', result.text);
              alert('Message sent successfully!');
            },
            (error) => {
              console.error('Error:', error.text);
              alert('Message failed to send.');
            }
          );
      };
    


    
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={containerVariants}
      className="flex flex-col items-center justify-between p-10 md:p-10 gap-12 bg-white text-black"
    >
      <motion.h2
        variants={itemVariants}
        style={{ fontFamily: 'Big Shoulders , sans-serif' }}
        className="text-[7rem] w-full font-bold self-start tracking-wide text-center"
      >
        Get In Touch
      </motion.h2>

      <form 
      onSubmit={handleSubmit}
      className="flex flex-row justify-center flex-wrap items-center w-full px-36">

        {/* Left Side */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-start items-start gap-2 w-full md:w-1/2 self-start"
        >
          <h2
            style={{ fontFamily: 'Big Shoulders , sans-serif' }}
            className="text-[5.5rem] font-bold"
          >
            Email
          </h2>
          <p
            style={{ fontFamily: 'Lexend , sans-serif' }}
            className="text-[1.75rem]"
          >
            anshulgadia04@gmail.com
          </p>
          <div className="w-1/2 mt-14">
            <img src={qrcode} alt="QR Code" />
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          variants={itemVariants}
          style={{ fontFamily: 'Inter, sans-serif' }}
          className="w-full md:w-1/2 bg-white px-16 py-5 rounded-lg space-y-4"
        >
          <motion.h2
            variants={itemVariants}
            className="text-[2rem] font-semibold text-[#061C3D]"
          >
            Write down your quote here...
          </motion.h2>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="full-name" className="block text-sm font-medium text-[#061C3D] mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Full name"
                value={formData.name}
                onChange={handleChange}
                className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full placeholder:text-[1rem] placeholder:text-[#838E9E] text-[#838E9E]"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-[#061C3D] mb-2">
                Email Address
              </label>
              <input
                 name="email"
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full placeholder:text-[1rem] placeholder:text-[#838E9E]"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="brand" className="block text-sm font-medium text-[#061C3D] mb-2">
              Company Name
            </label>
            <input
              name="company"
            type="text"
            placeholder="Company name"
            value={formData.company}
            onChange={handleChange}
              className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full placeholder:text-[1rem] placeholder:text-[#838E9E]"
            />
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="service" className="block text-sm font-medium text-[#061C3D] mb-2">
                Services
              </label>
              <select
                name="service"
              value={formData.service}
              onChange={handleChange}
                className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full text-[0.75rem] text-[#838E9E]"
              >
                <option>What are we looking for:</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Consultation</option>
              </select>
            </motion.div>
            <motion.div variants={itemVariants}>
              <label htmlFor="budget" className="block text-sm font-medium text-[#061C3D] mb-2">
                Project Budget (USD)
              </label>
              <select
                name="budget"
              value={formData.budget}
              onChange={handleChange}
                className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full text-[0.75rem] text-[#838E9E]"
              >
                <option>Project budget (USD)</option>
                <option>&lt; $1000</option>
                <option>$1000 - $5000</option>
                <option>$5000+</option>
              </select>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="description" className="block text-sm font-medium text-[#061C3D] mb-2">
              Project Description
            </label>
            <textarea
              name="message"
            rows={4}
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
              className="border border-[#E6E8EC] py-2 px-3 rounded-md w-full placeholder:text-[1rem] placeholder:text-[#838E9E]"
            />
             {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </motion.div>

          <motion.button
           type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="w-full bg-[#5C5C5C] text-white py-3 rounded-md"
          >
            Request A Quote →
          </motion.button>
        </motion.div>
      </form>
    </motion.section>
  );
};

export default Contact;
