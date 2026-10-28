import { useState } from 'react'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 3500)
  }

  return (
    <main className='bg-[#f4f1eb] text-[#171717] overflow-hidden'>
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className='relative min-h-[78vh] bg-[#111] text-white overflow-hidden'>
        {/* Background Pattern */}
        <div className='absolute inset-0 pointer-events-none'>
          <div className='absolute top-[-120px] right-[-100px] w-[380px] h-[380px] rounded-full border border-orange-500/10' />

          <div className='absolute top-[-70px] right-[-50px] w-[270px] h-[270px] rounded-full border border-orange-500/10' />

          <div className='absolute bottom-[-180px] left-[-100px] w-[380px] h-[380px] rounded-full border border-white/5' />

          <div className='absolute top-[20%] left-[45%] w-px h-40 bg-white/5' />

          <div className='absolute top-[20%] left-[45%] h-px w-40 bg-white/5' />

          <div className='absolute top-[30%] left-[44.5%] w-2 h-2 rounded-full bg-orange-500/60' />
        </div>

        <div className='relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-28'>
          <div className='grid lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-24 items-center'>
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className='flex items-center gap-3 mb-8'>
                <span className='w-10 h-px bg-orange-500' />

                <span className='text-[10px] uppercase tracking-[0.35em] text-gray-400'>
                  Connect With Us
                </span>
              </div>

              <h1 className='text-[44px] sm:text-5xl md:text-6xl lg:text-[68px] font-light leading-[1.02] tracking-tight'>
                Let's keep
                <br />
                <span className='text-orange-500 italic font-serif'>
                  the story
                </span>
                <br />
                <span className='text-white'>going.</span>
              </h1>

              <p className='mt-8 max-w-md text-sm leading-7 text-gray-400'>
                Every conversation is another way to discover, preserve and
                share the artistic heritage of Odisha.
              </p>

              <div className='flex flex-wrap gap-3 mt-9'>
                <a
                  href='#contact-form'
                  className='group inline-flex items-center gap-3 bg-orange-500 text-white px-6 py-3.5 rounded-full text-xs font-medium hover:bg-orange-400 transition-all duration-300'
                >
                  Start a conversation
                  <ArrowUpRight
                    size={14}
                    className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300'
                  />
                </a>

                <a
                  href='https://wa.me/917855003727'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Chat with us on WhatsApp'
                  className='inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 text-xs text-gray-300 hover:border-orange-500/60 hover:text-orange-400 transition-all duration-300'
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </motion.div>

            {/* RIGHT ARTISTIC CARD */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: 'easeOut'
              }}
              className='relative'
            >
              <div className='relative max-w-sm mx-auto lg:ml-auto'>
                {/* Outer border */}
                <div className='absolute -inset-3 border border-orange-500/15 rounded-[32px]' />

                {/* Card */}
                <div className='relative bg-[#181818] rounded-[28px] p-7 sm:p-8 border border-white/10'>
                  <div className='flex justify-between items-start mb-10'>
                    <div>
                      <p className='text-[9px] uppercase tracking-[0.3em] text-gray-500'>
                        Mo Odisha Kala
                      </p>

                      <h2 className='mt-2 text-lg font-light'>
                        We're listening.
                      </h2>
                    </div>

                    <div className='w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center'>
                      <Send size={15} className='text-orange-400' />
                    </div>
                  </div>

                  {/* Contact Items */}

                  <div className='space-y-6'>
                    <a
                      href='mailto:moodishakala@gmail.com'
                      className='group flex gap-4 items-center'
                    >
                      <div className='w-11 h-11 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all duration-300'>
                        <Mail
                          size={16}
                          className='text-orange-400 group-hover:text-white transition-colors duration-300'
                        />
                      </div>

                      <div>
                        <p className='text-[9px] uppercase tracking-[0.2em] text-gray-500'>
                          Email
                        </p>

                        <p className='text-xs text-gray-200 mt-1'>
                          moodishakala@gmail.com
                        </p>
                      </div>
                    </a>

                    <a
                      href='https://wa.me/919937028629'
                      target='_blank'
                      rel='noreferrer'
                      className='group flex gap-4 items-center'
                    >
                      <div className='w-11 h-11 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all duration-300'>
                        <MessageCircle
                          size={16}
                          className='text-orange-400 group-hover:text-white transition-colors duration-300'
                        />
                      </div>

                      <div>
                        <p className='text-[9px] uppercase tracking-[0.2em] text-gray-500'>
                          WhatsApp
                        </p>

                        <p className='text-xs text-gray-200 mt-1'>
                          +91 9937028629
                        </p>
                      </div>
                    </a>

                    <div className='group flex gap-4 items-center'>


                      <a
                        href='https://www.google.com/maps/search/?api=1&query=Saranakul%2C+Nayagarh%2C+Odisha+770038'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group flex gap-4 items-center'
                      >
                        <div className='w-11 h-11 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 group-hover:bg-orange-500 transition-all duration-300'>
                          <MapPin
                            size={16}
                            className='text-orange-400 group-hover:text-white transition-colors duration-300'
                          />
                        </div>

                        <div>
                          <p className='text-[9px] uppercase tracking-[0.2em] text-gray-500'>
                            Location
                          </p>

                          <p className='text-xs text-gray-200 mt-1 group-hover:text-orange-400 transition-colors duration-300'>
                            Saranakul Nayagada, Odisha - 752080
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Bottom line */}

                  <div className='mt-9 pt-5 border-t border-white/10'>
                    <div className='flex items-center justify-between'>
                      <span className='text-[9px] uppercase tracking-[0.25em] text-gray-500'>
                        Odisha • India
                      </span>

                      <span className='w-2 h-2 rounded-full bg-orange-500' />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section
        id='contact-form'
        className='relative py-24 sm:py-28 px-6 sm:px-10 lg:px-16 bg-[#f4f1eb]'
      >
        <div className='max-w-7xl mx-auto'>
          {/* Section heading */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className='mb-14'
          >
            <div className='flex items-center gap-3 mb-5'>
              <span className='text-[9px] uppercase tracking-[0.3em] text-orange-600'>
                01 — Say Hello
              </span>

              <span className='w-16 h-px bg-orange-300' />
            </div>

            <h2 className='text-3xl sm:text-4xl font-light tracking-tight'>
              Have something
              <span className='font-serif italic text-orange-600'>
                {' '}
                to share?
              </span>
            </h2>
          </motion.div>

          <div className='grid lg:grid-cols-[0.75fr_1.25fr] gap-12 lg:gap-20 items-start'>
            {/* LEFT SIDE */}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className='text-sm text-gray-600 leading-7 max-w-sm'>
                Tell us what you're looking for. Whether it is a question,
                collaboration, feedback or something completely new, we'd love
                to hear from you.
              </p>

              {/* Little information blocks */}

              <div className='mt-10 space-y-5'>
                <div className='flex gap-4'>
                  <span className='text-orange-500 text-xs font-medium'>
                    01
                  </span>

                  <div>
                    <h3 className='text-sm font-medium'>Share your idea</h3>

                    <p className='text-xs text-gray-500 mt-1 leading-5'>
                      Tell us about your requirement or question.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <span className='text-orange-500 text-xs font-medium'>
                    02
                  </span>

                  <div>
                    <h3 className='text-sm font-medium'>We'll connect</h3>

                    <p className='text-xs text-gray-500 mt-1 leading-5'>
                      Our team will get back to you shortly.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4'>
                  <span className='text-orange-500 text-xs font-medium'>
                    03
                  </span>

                  <div>
                    <h3 className='text-sm font-medium'>Let's create</h3>

                    <p className='text-xs text-gray-500 mt-1 leading-5'>
                      Turn the conversation into something meaningful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative quote */}

              <div className='mt-12 border-l-2 border-orange-500 pl-5'>
                <p className='font-serif italic text-base text-gray-700 leading-6'>
                  "Art connects people, stories and generations."
                </p>

                <p className='text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-2'>
                  Mo Odisha Kala
                </p>
              </div>
            </motion.div>

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <form
                onSubmit={handleSubmit}
                className='bg-white rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]'
              >
                <div className='flex items-center justify-between mb-8'>
                  <div>
                    <p className='text-[9px] uppercase tracking-[0.25em] text-orange-500'>
                      Contact Form
                    </p>

                    <h3 className='text-xl font-medium mt-2'>
                      Send us a message
                    </h3>
                  </div>

                  <div className='w-10 h-10 rounded-full bg-[#f4f1eb] flex items-center justify-center'>
                    <MessageCircle size={16} className='text-orange-500' />
                  </div>
                </div>

                {/* NAME + EMAIL */}

                <div className='grid sm:grid-cols-2 gap-5'>
                  <div>
                    <label className='block text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2'>
                      Full Name
                    </label>

                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      placeholder='Your name'
                      required
                      className='w-full h-12 px-4 rounded-xl bg-[#f7f6f3] border border-transparent text-sm outline-none focus:border-orange-400 focus:bg-white transition-all duration-300'
                    />
                  </div>

                  <div>
                    <label className='block text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2'>
                      Email Address
                    </label>

                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      placeholder='you@example.com'
                      required
                      className='w-full h-12 px-4 rounded-xl bg-[#f7f6f3] border border-transparent text-sm outline-none focus:border-orange-400 focus:bg-white transition-all duration-300'
                    />
                  </div>
                </div>

                {/* PHONE + SUBJECT */}

                <div className='grid sm:grid-cols-2 gap-5 mt-5'>
                  <div>
                    <label className='block text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2'>
                      Phone Number
                    </label>

                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder='+91 XXXXX XXXXX'
                      className='w-full h-12 px-4 rounded-xl bg-[#f7f6f3] border border-transparent text-sm outline-none focus:border-orange-400 focus:bg-white transition-all duration-300'
                    />
                  </div>

                  <div>
                    <label className='block text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2'>
                      Subject
                    </label>

                    <div className='relative'>
                      <select
                        name='subject'
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className='appearance-none w-full h-12 px-4 pr-10 rounded-xl bg-[#f7f6f3] border border-transparent text-sm outline-none focus:border-orange-400 focus:bg-white transition-all duration-300 text-gray-600'
                      >
                        <option value=''>Select a subject</option>

                        <option value='General Inquiry'>General Inquiry</option>

                        <option value='Product Inquiry'>Product Inquiry</option>

                        <option value='Store Inquiry'>Store Inquiry</option>

                        <option value='Business'>Business</option>

                        <option value='Feedback'>Feedback</option>
                      </select>

                      <ChevronDown
                        size={15}
                        className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none'
                      />
                    </div>
                  </div>
                </div>

                {/* MESSAGE */}

                <div className='mt-5'>
                  <label className='block text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-2'>
                    Your Message
                  </label>

                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Tell us a little about what you need...'
                    required
                    rows='5'
                    className='w-full px-4 py-3.5 rounded-xl bg-[#f7f6f3] border border-transparent text-sm outline-none focus:border-orange-400 focus:bg-white transition-all duration-300 resize-none'
                  />
                </div>

                {/* BUTTON */}

                <div className='flex justify-end mt-6'>
                  <button
                    type='submit'
                    className={`group inline-flex items-center justify-center gap-2 min-w-[160px] h-11 px-6 rounded-full text-xs font-medium transition-all duration-300 ${
                      submitted
                        ? 'bg-green-600 text-white'
                        : 'bg-[#111] text-white hover:bg-orange-500'
                    }`}
                  >
                    {submitted ? (
                      <>
                        <Check size={15} />
                        Message Sent
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send
                          size={14}
                          className='group-hover:translate-x-1 transition-transform duration-300'
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONNECT STRIP
      ====================================================== */}
      <section className='bg-orange-500 px-6 sm:px-10 lg:px-16 py-12'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row md:items-center justify-between gap-8'>
            <div>
              <p className='text-[9px] uppercase tracking-[0.3em] text-orange-100'>
                Prefer a direct conversation?
              </p>

              <h2 className='text-2xl sm:text-3xl font-light text-white mt-2'>
                We're just a message away.
              </h2>
            </div>

            <div className='flex flex-wrap gap-3'>
              <a
                href='mailto:[email protected]'
                className='inline-flex items-center gap-2 bg-white text-[#111] px-5 py-3 rounded-full text-xs hover:bg-[#111] hover:text-white transition-all duration-300'
              >
                <Mail size={14} />
                Email Us
              </a>

              <a
                href='tel:+919937028629'
                className='inline-flex items-center gap-2 border border-white/40 text-white px-5 py-3 rounded-full text-xs hover:bg-white hover:text-[#111] transition-all duration-300'
              >
                <Phone size={14} />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER DETAIL
      ====================================================== */}
      <section className='bg-[#111] text-white px-6 sm:px-10 lg:px-16 py-10'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5'>
            <div>
              <p className='font-serif italic text-lg text-orange-400'>
                Mo Odisha Kala
              </p>

              <p className='text-[10px] text-gray-500 mt-1'>
                Preserving stories through art & culture.
              </p>
            </div>

            <div className='flex items-center gap-5 text-[9px] uppercase tracking-[0.2em] text-gray-500'>
              <span>Odisha</span>

              <span className='w-1 h-1 rounded-full bg-orange-500' />

              <span>India</span>

              <span className='w-1 h-1 rounded-full bg-orange-500' />

              <span>Heritage</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
