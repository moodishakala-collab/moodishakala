import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Home,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-white text-zinc-900 overflow-hidden relative flex items-center justify-center">

      {/* Background Decorations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-[8%] w-16 h-16 rounded-full border border-zinc-200"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-24 right-[8%] w-24 h-24 rounded-full border border-zinc-100"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[18%] right-[15%] text-zinc-200"
      >
      </motion.div>

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[18%] left-[12%] text-zinc-200"
      >
      </motion.div>


      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-center lg:text-left"
          >

            {/* Small Label */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.5,
              }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-5"
            >

              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                Page Not Found
              </span>
            </motion.div>


            {/* 404 */}
            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[110px] sm:text-[150px] lg:text-[180px] font-black tracking-[-0.08em] leading-[0.75] text-zinc-900"
            >
              404
            </motion.h1>


            {/* Heading */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
                duration: 0.6,
              }}
              className="mt-10 text-3xl sm:text-4xl font-black tracking-tight"
            >
              Looks like this{" "}
              <span className="relative inline-block">
                trend
                <span className="absolute left-0 right-0 -bottom-1 h-1 bg-zinc-900 rounded-full" />
              </span>{" "}
              is missing.
            </motion.h2>


            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
              }}
              className="mt-5 text-sm sm:text-base text-zinc-400 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              The page you're looking for may have moved,
              been removed, or simply isn't available anymore.
              Let's get you back to the latest trends.
            </motion.p>


            {/* Buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.6,
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-8"
            >

              <Link to="/">
                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10"
                >
                  <Home size={16} />

                  Back to Home

                  <ArrowLeft
                    size={15}
                    className="rotate-180 group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>
              </Link>


              <Link to="/shop">
                <motion.button
                  whileHover={{
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-sm font-semibold hover:border-zinc-900 transition-colors"
                >
                  <ShoppingBag size={16} />

                  Explore Collection
                </motion.button>
              </Link>

            </motion.div>

          </motion.div>


          {/* ================= CARTOON ================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center items-center"
          >

            {/* Shadow */}
            <motion.div
              animate={{
                scaleX: [1, 0.88, 1],
                opacity: [0.18, 0.1, 0.18],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-5 w-64 h-8 bg-zinc-900/20 blur-xl rounded-full"
            />


            {/* Cartoon Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[300px] sm:w-[360px] h-[360px] sm:h-[420px] flex items-center justify-center"
            >

              {/* Background Circle */}
              <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-zinc-50 border border-zinc-100" />


              {/* Decorative Stars */}
              <motion.div
                animate={{
                  rotate: [0, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-5 text-zinc-900"
              >
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute top-24 left-4 text-zinc-400"
              >
              </motion.div>


              {/* Cartoon Character */}
              <div className="relative z-10">

                {/* Head */}
                <motion.div
                  animate={{
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-[45%] bg-[#f4c7a1] border-[6px] border-zinc-900"
                >

                  {/* Hair */}
                  <div className="absolute -top-8 left-5 right-5 h-20 bg-zinc-900 rounded-[50%_50%_25%_25%]" />

                  {/* Left Eye */}
                  <div className="absolute left-10 top-20 w-5 h-7 bg-zinc-900 rounded-full">
                    <div className="absolute top-1 left-1.5 w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Right Eye */}
                  <div className="absolute right-10 top-20 w-5 h-7 bg-zinc-900 rounded-full">
                    <div className="absolute top-1 left-1.5 w-2 h-2 bg-white rounded-full" />
                  </div>

                  {/* Nose */}
                  <div className="absolute left-1/2 top-[102px] -translate-x-1/2 w-3 h-4 border-l-2 border-b-2 border-zinc-700 rounded-bl-full" />

                  {/* Smile */}
                  <div className="absolute left-1/2 top-[122px] -translate-x-1/2 w-12 h-6 border-b-[4px] border-zinc-900 rounded-full" />

                  {/* Cheeks */}
                  <div className="absolute left-5 top-28 w-6 h-3 bg-pink-300/50 rounded-full" />
                  <div className="absolute right-5 top-28 w-6 h-3 bg-pink-300/50 rounded-full" />

                </motion.div>


                {/* Body / Shirt */}
                <div className="relative -mt-2 mx-auto w-52 sm:w-60 h-36 bg-zinc-900 rounded-[45px_45px_25px_25px] border-[6px] border-zinc-900">

                  {/* Shirt Collar */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-20 h-12 bg-white clip-path-triangle" />

                  {/* Shirt Logo */}
                  <div className="absolute left-1/2 top-14 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white text-zinc-900">
                    <span className="text-xs font-black">
                      BT
                    </span>
                  </div>

                  {/* Left Arm */}
                  <div className="absolute -left-8 top-8 w-12 h-24 bg-zinc-900 rounded-full rotate-[18deg]" />

                  {/* Right Arm */}
                  <div className="absolute -right-8 top-8 w-12 h-24 bg-zinc-900 rounded-full -rotate-[18deg]" />

                </div>


                {/* Shopping Bag */}
                <motion.div
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute -right-14 bottom-2 w-20 h-24 bg-white border-[5px] border-zinc-900 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <ShoppingBag
                    size={30}
                    strokeWidth={2.5}
                  />

                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-9 h-8 border-[5px] border-b-0 border-zinc-900 rounded-t-full" />
                </motion.div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;