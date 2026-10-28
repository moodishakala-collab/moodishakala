import { motion } from 'motion/react'
import { ArrowDownRight, ArrowUpRight, Check, Sparkles } from 'lucide-react'

import { leadershipData } from '../../data/aboutUsData'

const Leadership = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  return (
    <section className='relative overflow-hidden bg-[#f7f7f5] px-5 py-20 text-black sm:px-8 md:py-28'>
      {/* Background decoration */}
      <div className='pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-3xl' />
      <div className='pointer-events-none absolute -left-32 top-[45%] h-72 w-72 rounded-full bg-orange-400/[0.05] blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        {/* HEADER */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className='mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between'
        >
          <div className='max-w-3xl'>
            <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-4 py-2'>
              <Sparkles size={13} className='text-orange-500' />
              <span className='text-[10px] font-bold uppercase tracking-[0.22em] text-orange-600'>
                {leadershipData.smallTitle}
              </span>
            </div>

            <h2 className='text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl'>
              {leadershipData.title}
              <span className='mt-1 block text-orange-500'>
                {leadershipData.highlight}
              </span>
            </h2>

            <p className='mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8'>
              {leadershipData.description}
            </p>
          </div>

          <div className='hidden shrink-0 items-center gap-3 pb-2 md:flex'>
            <div className='h-px w-12 bg-orange-500' />
            <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400'>
              People behind the vision
            </span>
          </div>
        </motion.div>

        {/* FOUNDER & CEO */}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className='group relative overflow-hidden rounded-[28px] bg-[#111] text-white shadow-[0_25px_80px_rgba(0,0,0,0.10)] sm:rounded-[36px]'
        >
          <div className='grid lg:grid-cols-[0.9fr_1.1fr]'>
            {/* FOUNDER IMAGE */}
            <div className='relative min-h-[400px] overflow-hidden sm:min-h-[520px] lg:min-h-[600px]'>
              <motion.img
                src={leadershipData.founder.image}
                alt={leadershipData.founder.name}
                whileHover={{ scale: 1.045 }}
                transition={{ duration: 0.8 }}
                className='absolute inset-0 h-full w-full object-cover object-center'
              />

              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/15 to-black/5 lg:bg-gradient-to-r lg:from-transparent lg:via-black/5 lg:to-[#111]' />

              <div className='absolute left-6 top-6 sm:left-8 sm:top-8'>
                <span className='inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md'>
                  <span className='h-1.5 w-1.5 rounded-full bg-orange-400' />
                  {leadershipData.founder.role}
                </span>
              </div>

              <div className='absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-8 sm:right-8 lg:hidden'>
                <h3 className='text-3xl font-black tracking-tight sm:text-4xl'>
                  {leadershipData.founder.name}
                </h3>
              </div>

              <div className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-300 to-transparent' />
            </div>

            {/* FOUNDER CONTENT */}
            <div className='relative flex flex-col justify-center overflow-hidden p-6 sm:p-10 lg:p-14 xl:p-16'>
              <span className='pointer-events-none absolute -right-8 top-0 select-none text-[180px] font-black leading-none text-white/[0.025] sm:text-[240px]'>
                01
              </span>

              <div className='relative'>
                <div className='mb-7 hidden lg:block'>
                  <p className='text-xs font-medium uppercase tracking-[0.2em] text-gray-500'>
                    {leadershipData.founder.department}
                  </p>

                  <h3 className='mt-4 text-3xl font-black leading-tight tracking-tight xl:text-4xl'>
                    {leadershipData.founder.name}
                  </h3>
                </div>

                <div className='mb-6 flex items-center gap-3 lg:mt-8'>
                  <span className='h-px w-9 bg-orange-500' />
                  <span className='text-[10px] font-bold uppercase tracking-[0.22em] text-orange-400'>
                    {leadershipData.founder.department}
                  </span>
                </div>

                <h4 className='max-w-xl text-3xl font-black leading-[1.12] tracking-tight sm:text-4xl xl:text-5xl'>
                  {leadershipData.founder.heading
                    .split(' ')
                    .slice(0, 1)
                    .join(' ')}
                  <span className='mt-1 block text-gray-500'>
                    {leadershipData.founder.heading
                      .split(' ')
                      .slice(1)
                      .join(' ')}
                  </span>
                </h4>

                <p className='mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8'>
                  {leadershipData.founder.description}
                </p>

                {/* FOUNDER TAGS */}
                <div className='mt-7 flex flex-wrap gap-2'>
                  {leadershipData.founder.tags.map(tag => (
                    <span
                      key={tag}
                      className='rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[11px] font-medium text-gray-300 transition-colors duration-300 hover:border-orange-500/50 hover:bg-orange-500/10'
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* FOUNDER QUOTE */}
                <div className='mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6'>
                  <div className='mb-3 flex items-center gap-2'>
                    <span className='h-7 w-1 rounded-full bg-orange-500' />
                    <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400'>
                      Our philosophy
                    </span>
                  </div>

                  <p className='text-sm italic leading-7 text-gray-200 sm:text-base'>
                    “{leadershipData.founder.quote}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CORE TEAM */}
        <div className='mt-20 sm:mt-28'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className='flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between'
          >
            <div>
              <p className='text-[10px] font-bold uppercase tracking-[0.25em] text-orange-600'>
                {leadershipData.teamLabel}
              </p>

              <h3 className='mt-4 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl'>
                {leadershipData.teamTitle}
              </h3>

              <p className='mt-4 max-w-xl text-sm leading-7 text-gray-500'>
                Great work comes from great people. Meet the team helping turn
                our vision into meaningful results.
              </p>
            </div>

            <div className='flex w-fit items-center gap-3 rounded-full border border-black/[0.07] bg-white px-4 py-3'>
              <span className='text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500'>
                Meet the team
              </span>
              <ArrowDownRight size={16} className='text-orange-500' />
            </div>
          </motion.div>

          {/* TEAM CARDS */}
          <div className='mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
            {leadershipData.team.map((member, index) => {
              const Icon = member.icon

              return (
                <motion.div
                  key={member.name || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -7 }}
                  className='group relative overflow-hidden rounded-[26px] border border-black/[0.06] bg-white p-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.025)] transition-shadow duration-500 hover:shadow-[0_22px_55px_rgba(0,0,0,0.10)]'
                >
                  {/* MEMBER PHOTO */}
                  <div
                    className='relative h-[300px] overflow-hidden rounded-[19px] sm:h-[320px]'
                    style={{
                      backgroundColor: `${member.accent}18`
                    }}
                  >
                    <motion.img
                      src={member.image}
                      alt={member.name || `Team member ${index + 1}`}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className='h-full w-full object-cover'
                    />

                    <div className='absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15 opacity-80 transition-opacity duration-300 group-hover:opacity-100' />

                    {/* MEMBER NUMBER */}
                    <span
                      className='absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-xs font-bold text-white backdrop-blur-md'
                      style={{
                        backgroundColor: `${member.accent}CC`
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* MEMBER ROLE */}
                    <span
                      className='absolute bottom-3 left-3 max-w-[85%] rounded-full border px-3 py-1.5 text-[10px] font-semibold backdrop-blur-md'
                      style={{
                        borderColor: `${member.accent}80`,
                        backgroundColor: 'rgba(0,0,0,0.65)',
                        color: member.accent
                      }}
                    >
                      {member.role || 'Team Member'}
                    </span>
                  </div>

                  {/* MEMBER INFO */}
                  <div className='px-2 pb-2 pt-5'>
                    <p className='text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400'>
                      Team member {String(index + 1).padStart(2, '0')}
                    </p>

                    <h4 className='mt-2 break-words text-lg font-extrabold leading-snug tracking-tight text-gray-900 sm:text-xl'>
                      {member.name || 'Name'}
                    </h4>

                    {/* ACCENT ICON */}
                    <div className='mt-4 flex items-center gap-3'>
                      <div
                        className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105'
                        style={{
                          backgroundColor: `${member.accent}18`,
                          color: member.accent
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <div className='min-w-0'>
                        <p className='text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400'>
                          Department
                        </p>
                        <p className='mt-1 truncate text-xs font-semibold text-gray-700'>
                          {member.role || 'Our Team'}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={17}
                        className='ml-auto shrink-0 text-gray-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500'
                      />
                    </div>

                    {/* MEMBER TAGS */}
                    {member.tags?.length > 0 && (
                      <div className='mt-5 space-y-3 border-t border-black/[0.06] pt-4'>
                        {member.tags.map(tag => (
                          <div key={tag} className='flex items-start gap-2.5'>
                            <span
                              className='mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full'
                              style={{
                                backgroundColor: `${member.accent}25`,
                                color: member.accent
                              }}
                            >
                              <Check size={11} strokeWidth={3} />
                            </span>

                            <span className='text-xs leading-5 text-gray-600'>
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* BOTTOM ACCENT */}
                  <div
                    className='absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full'
                    style={{ backgroundColor: member.accent }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership
