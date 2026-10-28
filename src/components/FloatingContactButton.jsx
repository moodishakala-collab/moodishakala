import { motion } from 'motion/react'
import { Phone } from 'lucide-react'
import {
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const FloatingContactButton = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // =====================================================
  // CONTACT PAGE CHECK
  // Sirf Contact button hide hoga
  // Social buttons hamesha visible rahenge
  // =====================================================

  const isContactPage =
    location.pathname === '/contact' || location.pathname === '/contact-us'

  // =====================================================
  // CONTACT HANDLER
  // =====================================================

  const handleContact = () => {
    navigate('/contact')
  }

  return (
    <div
      className='
                fixed
                right-4
                bottom-16

                sm:right-7
                sm:bottom-7

                z-[9998]

                flex
                flex-col
                items-center
                gap-2
            '
    >
      {/* =================================================
    INSTAGRAM
================================================= */}

      <motion.a
        href='https://www.instagram.com/moodishakala/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.45,
          delay: 0,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{
          scale: 1.12,
          x: -4
        }}
        whileTap={{
          scale: 0.9
        }}
        className='
        group
        relative

        flex
        h-11
        w-11

        items-center
        justify-center

        rounded-full

        bg-gradient-to-tr
        from-yellow-400
        via-pink-500
        to-purple-600

        text-white

        border
        border-white/20

        shadow-[0_10px_30px_rgba(0,0,0,0.25)]

        cursor-pointer

        transition-all
        duration-300

        hover:shadow-[0_12px_35px_rgba(236,72,153,0.5)]
    '
      >
        {/* Blink Ring */}

        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
          className='
            pointer-events-none
            absolute
            inset-0
            rounded-full
            border-2
            border-pink-300
        '
        />

        <FaInstagram
          size={20}
          className='
            relative
            z-10
            transition-transform
            duration-300
            group-hover:scale-110
        '
        />
      </motion.a>

      {/* =================================================
                YOUTUBE
            ================================================= */}

      {/* <motion.a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"

                initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}

                transition={{
                    duration: 0.45,
                    delay: 0.05,
                    ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={{
                    scale: 1.12,
                    x: -4,
                }}

                whileTap={{
                    scale: 0.9,
                }}

                className="
                    group
                    relative

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    bg-red-600
                    text-white

                    border
                    border-white/20

                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]

                    cursor-pointer

                    transition-all
                    duration-300

                    hover:shadow-[0_12px_35px_rgba(220,38,38,0.5)]
                "
            >


                <motion.span
                    animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.5, 0, 0.5],
                    }}

                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                    }}

                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-red-400
                    "
                />

                <FaYoutube
                    size={20}
                    className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                />

            </motion.a> */}

      {/* =================================================
                FACEBOOK
            ================================================= */}

      {/* <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"

                initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20,
                }}

                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                }}

                transition={{
                    duration: 0.45,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1],
                }}

                whileHover={{
                    scale: 1.12,
                    x: -4,
                }}

                whileTap={{
                    scale: 0.9,
                }}

                className="
                    group
                    relative

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    bg-[#1877F2]
                    text-white

                    border
                    border-white/20

                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]

                    cursor-pointer

                    transition-all
                    duration-300

                    hover:shadow-[0_12px_35px_rgba(24,119,242,0.5)]
                "
            >


                <motion.span
                    animate={{
                        scale: [1, 1.35, 1],
                        opacity: [0.5, 0, 0.5],
                    }}

                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.25,
                        ease: "easeOut",
                    }}

                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-blue-300
                    "
                />

                <FaFacebookF
                    size={18}
                    className="
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                />

            </motion.a> */}

      {/* =================================================
                WHATSAPP
            ================================================= */}

      <motion.a
        href='https://wa.me/917855003727'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='WhatsApp'
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.45,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{
          scale: 1.12,
          x: -4
        }}
        whileTap={{
          scale: 0.9
        }}
        className='group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 hover:shadow-[0_12px_35px_rgba(37,211,102,0.5)]'
      >
        {/* Blink Ring */}
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.5,
            ease: 'easeOut'
          }}
          className='pointer-events-none absolute inset-0 rounded-full border-2 border-green-300'
        />

        <FaWhatsapp
          size={20}
          className='relative z-10 transition-transform duration-300 group-hover:scale-110'
        />
      </motion.a>

      {/* =================================================
                TWITTER / X
            ================================================= */}

      {/* <motion.a
        href='https://twitter.com/'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Twitter'
        initial={{
          opacity: 0,
          scale: 0.5,
          y: 20
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0
        }}
        transition={{
          duration: 0.45,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1]
        }}
        whileHover={{
          scale: 1.12,
          x: -4
        }}
        whileTap={{
          scale: 0.9
        }}
        className='
                    group
                    relative

                    flex
                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    bg-black
                    text-white

                    border
                    border-white/20

                    shadow-[0_10px_30px_rgba(0,0,0,0.3)]

                    cursor-pointer

                    transition-all
                    duration-300

                    hover:bg-neutral-800
                '
      >
        <motion.span
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.75,
            ease: 'easeOut'
          }}
          className='
                        pointer-events-none
                        absolute
                        inset-0
                        rounded-full
                        border-2
                        border-white/50
                    '
        />

        <FaTwitter
          size={18}
          className='
                        relative
                        z-10
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    '
        />
      </motion.a> */}

      {/* =================================================
                CONTACT BUTTON
                ONLY THIS BUTTON HIDE ON CONTACT PAGE
            ================================================= */}
      {!isContactPage && (
        <motion.a
          href='tel:+917855003727'
          aria-label='Call Us'
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 20
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0
          }}
          transition={{
            duration: 0.45,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1]
          }}
          whileHover={{
            scale: 1.12,
            x: -4
          }}
          whileTap={{
            scale: 0.9
          }}
          className='
      group relative
      flex h-11 w-11
      items-center justify-center
      rounded-full
      bg-orange-500 text-white
      border border-white/20
      shadow-[0_12px_35px_rgba(249,115,22,0.4)]
      cursor-pointer
      transition-all duration-300
      hover:bg-orange-600
    '
        >
          {/* Blinking Ring */}
          <motion.span
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.6, 0, 0.6]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeOut'
            }}
            className='
        pointer-events-none
        absolute inset-0
        rounded-full
        border-2 border-orange-300
      '
          />

          {/* Highlight */}
          <motion.span
            animate={{
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className='
        pointer-events-none
        absolute inset-0
        rounded-full
        bg-white
      '
          />

          <Phone
            size={19}
            strokeWidth={2.2}
            className='
        relative z-10
        transition-transform duration-300
        group-hover:rotate-12
      '
          />
        </motion.a>
      )}
    </div>
  )
}

export default FloatingContactButton
