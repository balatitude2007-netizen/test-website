<script setup>
import { Users, Clock, Briefcase, CheckCircle2, ArrowRight, Calendar, MessageSquare, Code2, Rocket } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const engagementModels = [
  {
    icon: Users,
    title: 'Dedicated Team',
    desc: 'Hire a full-time, dedicated team of experts tailored exclusively to your project requirements.',
    price: '$4,500',
    period: '/mo per dev',
    features: ['Direct control over the team', 'Daily scrums & updates', 'Flexible team scaling', 'No hidden overheads'],
    color: 'text-primary-blue',
    popular: true
  },
  {
    icon: Briefcase,
    title: 'Fixed Price',
    desc: 'Best for projects with clear requirements, defined scope, and a strict timeline.',
    price: 'Custom',
    period: 'Quote',
    features: ['Fixed budget & timeline', 'Minimal risk', 'Clear milestones', 'Dedicated project manager'],
    color: 'text-primary-cyan',
    popular: false
  },
  {
    icon: Clock,
    title: 'Time & Material',
    desc: 'Ideal for ongoing projects where scope is fluid and maximum flexibility is required.',
    price: '$45',
    period: '/hour',
    features: ['Pay only for hours worked', 'Flexible scope changes', 'Transparent reporting', 'Agile execution'],
    color: 'text-primary-purple',
    popular: false
  }
];

const processSteps = [
  { icon: MessageSquare, title: 'Initial Consultation', desc: 'We discuss your requirements, technical challenges, and overarching business objectives to understand your vision.' },
  { icon: Code2, title: 'Technical Assessment', desc: 'Our senior architects draft a solution blueprint and propose the best tech stack for scale and security.' },
  { icon: Calendar, title: 'Proposal & Onboarding', desc: 'We agree on the optimal engagement model, set clear milestones, and seamlessly onboard the engineering team.' },
  { icon: Rocket, title: 'Kickoff & Delivery', desc: 'Development sprints begin immediately with full transparency, daily updates, and regular code deliveries.' }
];
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero Section -->
      <section class="relative pt-40 pb-24 overflow-hidden bg-grid-pattern">
        <div class="absolute inset-0 z-0 aurora-bg opacity-30 mix-blend-screen" />
        <div class="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div 
            v-motion
            :initial="staggerContainer.initial"
            :enter="staggerContainer.enter"
            class="max-w-4xl mx-auto"
          >
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
              Partner With Us
            </div>
            <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
              Scale your team <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple">Without Limits</span>
            </h1>
            <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto">
              Choose from our flexible engagement models designed to fit startups and enterprises alike. Get access to top-tier engineering talent instantly.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Engagement Models -->
      <section class="py-24 relative z-10">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              v-for="(model, i) in engagementModels" :key="i"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              :class="['glass-panel glass-panel-hover p-10 rounded-[2rem] flex flex-col relative overflow-hidden', model.popular ? 'border-primary-blue/30' : '']"
            >
              <div v-if="model.popular" class="absolute top-6 right-6 px-3 py-1 bg-white text-primary-navy text-xs font-bold uppercase tracking-widest rounded-full">
                Popular
              </div>
              
              <div :class="['w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6', model.color]">
                <component :is="model.icon" class="w-6 h-6" />
              </div>
              
              <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">{{model.title}}</h3>
              <p class="text-sm text-text-secondary mb-8 flex-grow leading-relaxed">{{model.desc}}</p>
              
              <div class="mb-8 pb-8 border-b border-white/5">
                <span class="text-4xl font-display font-bold text-white tracking-tighter">{{model.price}}</span>
                <span class="text-text-secondary ml-2">{{model.period}}</span>
              </div>
              
              <ul class="space-y-4 mb-10">
                <li v-for="(feat, idx) in model.features" :key="idx" class="flex items-start gap-3">
                  <CheckCircle2 :class="['w-5 h-5 shrink-0', model.color]" />
                  <span class="text-sm text-text-secondary">{{feat}}</span>
                </li>
              </ul>
              
              <button :class="['mt-auto w-full py-4 rounded-xl font-bold transition-all', model.popular ? 'bg-white text-primary-navy hover:scale-[1.02]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5 hover:border-white/20']">
                Select Model
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Engagement Process -->
      <section class="py-32 relative bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">How We <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Engage</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">A streamlined, transparent process to get your project off the ground in record time.</p>
          </div>

          <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              v-for="(step, i) in processSteps" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="p-8 glass-panel rounded-[2rem] flex gap-6"
            >
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <component :is="step.icon" class="w-6 h-6 text-white" />
              </div>
              <div>
                <div class="text-xs font-bold text-text-muted mb-2 tracking-widest uppercase">Step 0{{i + 1}}</div>
                <h3 class="text-xl font-bold text-white mb-3 tracking-tight">{{step.title}}</h3>
                <p class="text-text-secondary text-sm leading-relaxed">{{step.desc}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Consultation CTA / Form -->
      <section class="py-32 relative bg-primary-navy">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            
            <div 
              v-motion 
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0 }"
            >
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight">Request a <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Free Consultation</span></h2>
              <p class="text-lg text-text-secondary leading-relaxed mb-10 max-w-md">
                Not sure which model fits your needs? Fill out the form, and our technical architects will review your requirements and schedule a call within 24 hours.
              </p>
              <div class="space-y-8">
                <div class="flex items-center gap-6">
                  <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <CheckCircle2 class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="text-white font-bold tracking-tight">Sign NDA</h4>
                    <p class="text-sm text-text-secondary">Your intellectual property is always secure.</p>
                  </div>
                </div>
                <div class="flex items-center gap-6">
                  <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Code2 class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="text-white font-bold tracking-tight">Tech Stack Review</h4>
                    <p class="text-sm text-text-secondary">Expert advice on architecture and scaling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div 
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              class="p-10 lg:p-12 rounded-[2rem] glass-panel relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 w-[300px] h-[300px] bg-primary-blue/10 rounded-full blur-[80px]" />
              
              <form class="space-y-6 relative z-10" @submit.prevent>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-text-secondary mb-2">First Name</label>
                    <input type="text" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="John" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-text-secondary mb-2">Last Name</label>
                    <input type="text" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Work Email</label>
                  <input type="email" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="john@company.com" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Interested In</label>
                  <select class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none outline-none">
                    <option value="" class="bg-primary-navy text-text-secondary">Select an option</option>
                    <option value="dedicated" class="bg-primary-navy">Dedicated Team</option>
                    <option value="fixed" class="bg-primary-navy">Fixed Price Project</option>
                    <option value="tm" class="bg-primary-navy">Time & Material</option>
                    <option value="advice" class="bg-primary-navy">Just need some advice</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Project Details</label>
                  <textarea rows="4" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="Briefly describe your project goals..."></textarea>
                </div>
                <button type="button" class="w-full py-4 rounded-xl bg-white text-primary-navy font-bold text-lg hover:scale-[1.02] transition-transform">
                  Send Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  </template>
