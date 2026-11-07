'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { site } from '@/lib/site'

type Status = 'idle' | 'loading' | 'success' | 'error'

// Access key Web3Forms disimpan di .env.local (lihat .env.example), bukan di source code.
const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

const fieldClass =
  'w-full rounded-md bg-white px-4 py-3 text-black placeholder:text-sky-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget

    if (!accessKey) {
      console.error('NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY belum diisi di .env.local')
      setStatus('error')
      return
    }

    setStatus('loading')
    const data = Object.fromEntries(new FormData(form))

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Pesan baru dari ${data.name} lewat Portfolio`,
          from_name: 'Portfolio Revan',
          ...data,
        }),
      })
      const result = await response.json().catch(() => null)

      if (response.ok && result?.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  // overflow-x-clip: animasi masuk (x: ±50) tidak boleh memunculkan scroll horizontal di HP
  return (
    <section id="contact" className="overflow-x-clip py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-4xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          <motion.div
            className="text-white lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="mb-6 text-3xl font-semibold">My Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center hover:text-gray-400">
                  <Mail className="mr-4 h-6 w-6 text-white" aria-hidden />
                  <span>{site.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-gray-400">
                  <Phone className="mr-4 h-6 w-6 text-white" aria-hidden />
                  <span>{site.phone}</span>
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-4 h-6 w-6 text-white" aria-hidden />
                <span>{site.location}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="mx-auto w-full max-w-md rounded-lg border-none bg-gray-800/40 backdrop-blur-md duration-500 hover:shadow-[0_0_25px_10px_rgba(107,114,128,0.3)]">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot anti-spam bawaan Web3Forms: harus tetap tidak tercentang */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

                  <div className="transition-transform duration-200 focus-within:scale-[1.02]">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                      Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className={fieldClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="transition-transform duration-200 focus-within:scale-[1.02]">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      className={fieldClass}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="transition-transform duration-200 focus-within:scale-[1.02]">
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className={fieldClass}
                      placeholder="Your message here..."
                    />
                  </div>

                  <div aria-live="polite">
                    {status === 'success' && (
                      <p className="text-center text-green-500">Your message was sent successfully!</p>
                    )}
                    {status === 'error' && (
                      <p className="text-center text-red-500">Something went wrong. Please try again later.</p>
                    )}
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex w-full items-center justify-center rounded-md bg-gradient-to-r from-gray-700 to-gray-900 px-6 py-3 text-lg text-white shadow-lg transition duration-300 hover:brightness-110"
                    >
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                      <Send size={20} className="ml-2" aria-hidden />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
