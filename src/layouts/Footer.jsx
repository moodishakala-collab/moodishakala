import React, { useState } from "react";
import { motion } from "motion/react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Footer({ logoSrc = "/white Logo.png" }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
    },
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
    },
  ];

  const companyLinks = [
    "About Us",
    "Careers",
    "Our Story",
    "Contact Us",
  ];

  const shopLinks = [
    "Men's Wear",
    "Women's Wear",
    "Kids Wear",
    "Footwear",
    "Accessories",
  ];

  return (
    <footer className="w-full bg-black text-white overflow-hidden">

      {/* Main Footer */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* ================= BRAND ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            {/* Logo + Brand Name */}
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              viewport={{
                once: true,
              }}
              className="flex items-center gap-3"
            >
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt="Bharat Trend logo"
                  className=""
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              )}
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              viewport={{
                once: true,
              }}
              className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs"
            >
              Discover the latest fashion trends for everyone.
              From everyday essentials to statement styles,
              find your perfect look with Bharat Trend.
            </motion.p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.92,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.3 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* ================= COMPANY ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Company
            </h3>

            <div className="mt-6 space-y-4">
              {companyLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileHover={{
                    x: 4,
                    color: "#ffffff",
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.25 + index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= SHOP ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Shop
            </h3>

            <div className="mt-6 space-y-4">
              {shopLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  whileHover={{
                    x: 4,
                    color: "#ffffff",
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.35 + index * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ================= STAY UPDATED ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Stay Updated
            </h3>

            <p className="mt-6 text-sm text-gray-400 leading-relaxed">
              Subscribe for the latest trends, new arrivals,
              exclusive offers and fashion updates.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={handleSubscribe}
              className="mt-5"
            >
              <div className="flex items-center border border-white/15 rounded-xl overflow-hidden focus-within:border-white/40 transition-colors duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="Enter email"
                  required
                  className="flex-1 min-w-0 bg-transparent px-4 py-3 text-sm text-white placeholder:text-gray-500 outline-none"
                />

                <motion.button
                  type="submit"
                  whileHover={{
                    x: 2,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="w-12 h-11 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <FaArrowRight size={14} />
                </motion.button>
              </div>
            </form>

            <p className="mt-3 text-[11px] text-gray-600">
              No spam. Only the latest from Bharat Trend.
            </p>
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="border-t border-white/10 mt-14"
        >
          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">

            <p>
              © {new Date().getFullYear()} BHARAT TREND.
              All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;