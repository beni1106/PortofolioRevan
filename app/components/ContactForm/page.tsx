'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin, } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({ success: false, error: false, loading: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ success: false, error: false, loading: true });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'd3206287-73ed-48db-a6e0-7e9c9f673d8f', // Replace with your Web3Forms access key
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus({ success: true, error: false, loading: false });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, error: true, loading: false });
      }
    } catch (error) {
      setStatus({ success: false, error: true, loading: false });
    }
  }

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  }

  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-white mb-12 text-center font-poppins text-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          <motion.div
            className="lg:w-1/2 text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-3xl font-semibold mb-6">My Contact </h3>
            <p className="mb-8 text-white">

            </p>
            <div className="space-y-4">
              <div className="flex items-center hover:text-gray-400">
                <Mail className="w-6 h-6 mr-4 text-white" />
                <span>revannofendri@gmail.com</span>
              </div>
              <div className="flex items-center hover:text-gray-400">
                <Phone className="w-6 h-6 mr-4 text-white" />
                <span>+62 895410240543</span>
              </div>
              <div className="flex items-center hover:text-gray-400">
                <MapPin className="w-6 h-6 mr-4 text-white" />
                <span>Kota Jambi, Indonesia</span>
              </div>
            </div>
            {/* <div className="mt-8 flex space-x-4">
              <a href="https://www.linkedin.com/in/shashank-kumar2232/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Shashank5239/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                <Github size={24} />
              </a>
            </div> */}
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="w-full bg-gray-800/40 max-w-md mx-auto border-none backdrop-blur-md rounded-lg 
hover:shadow-[0_0_25px_10px_rgba(107,114,128,0.3)] duration-500">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="Your name"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>
                  <motion.div variants={inputVariants} whileFocus="focus">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white rounded-md focus:outline-none text-black placeholder-sky-900"
                      placeholder="Your message here..."
                    />
                  </motion.div>

                  {status.success && (
                    <p className="text-green-500 text-center">Your message was sent successfully!</p>
                  )}
                  {status.error && (
                    <p className="text-red-500 text-center">Something went wrong. Please try again later.</p>
                  )}

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      disabled={status.loading}
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-md transition 
  duration-300 flex items-center justify-center text-lg font-sans shadow-lg hover:brightness-110">
                      {status.loading ? 'Sending...' : 'Send Message'}
                      <Send size={20} className="ml-2" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section >
  )
}

