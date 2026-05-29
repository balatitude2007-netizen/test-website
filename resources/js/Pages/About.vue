<script setup>
import { Target, Lightbulb, Trophy, Users, Award, ShieldCheck, ChevronRight } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const teamData = [
  { name: "Elena Rostova", role: "Chief Executive Officer", image: "https://i.pravatar.cc/300?img=47" },
  { name: "Marcus Chen", role: "Chief Technology Officer", image: "https://i.pravatar.cc/300?img=11" },
  { name: "Sarah Jenkins", role: "Head of AI Research", image: "https://i.pravatar.cc/300?img=5" },
  { name: "David Alaba", role: "VP of Engineering", image: "https://i.pravatar.cc/300?img=60" }
];

const awardsData = [
  { icon: Trophy, title: "Best IT Services 2025", org: "Global Tech Awards" },
  { icon: Award, title: "Top AI Innovator", org: "Tech Disrupt" },
  { icon: ShieldCheck, title: "Security Excellence", org: "CyberSec Summit" },
  { icon: Users, title: "Great Place to Work", org: "GPTW Institute" }
];

const statsData = [
  { num: "10+", label: "Years Experience" },
  { num: "500+", label: "Projects Delivered" },
  { num: "99%", label: "Client Retention" },
  { num: "50+", label: "Global Partners" }
];
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero / Company Story -->
      <section class="relative pt-40 pb-24 overflow-hidden bg-grid-pattern">
        <div class="absolute inset-0 z-0 aurora-bg opacity-40 mix-blend-screen" />
        <div class="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div 
            v-motion
            :initial="staggerContainer.initial"
            :enter="staggerContainer.enter"
            class="max-w-4xl mx-auto"
          >
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
              Our Story
            </div>
            <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tighter">
              Pioneering the <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple">Unknown</span>
            </h1>
            <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl md:text-2xl text-text-secondary leading-relaxed mb-6 max-w-3xl mx-auto">
              PROGLAN isn't just an IT company. We are a collective of visionaries, engineers, and designers dedicated to pushing the boundaries of what technology can achieve.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Mission & Vision -->
      <section class="py-32 relative bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0 }"
              class="p-12 rounded-[2rem] glass-panel glass-panel-hover relative overflow-hidden"
            >
              <div class="absolute -right-20 -top-20 w-[300px] h-[300px] bg-primary-cyan/10 rounded-full blur-[80px] opacity-50" />
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Target class="w-6 h-6 text-primary-cyan" />
              </div>
              <h2 class="text-3xl font-display font-bold text-white mb-4 tracking-tight">Our Mission</h2>
              <p class="text-lg text-text-secondary leading-relaxed">
                To empower businesses globally by delivering cutting-edge, secure, and scalable technology solutions that drive efficiency, growth, and unparalleled competitive advantage in a digital-first world.
              </p>
            </div>
            
            <div 
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="p-12 rounded-[2rem] glass-panel glass-panel-hover relative overflow-hidden"
            >
              <div class="absolute -right-20 -top-20 w-[300px] h-[300px] bg-primary-purple/10 rounded-full blur-[80px] opacity-50" />
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                <Lightbulb class="w-6 h-6 text-primary-purple" />
              </div>
              <h2 class="text-3xl font-display font-bold text-white mb-4 tracking-tight">Our Vision</h2>
              <p class="text-lg text-text-secondary leading-relaxed">
                To be the undisputed global leader in digital transformation and AI integration, recognized for our technological excellence, creative problem-solving, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Animated Statistics -->
      <section class="py-32 relative bg-primary-navy">
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div 
              v-for="(stat, i) in statsData" :key="i"
              v-motion 
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { delay: i * 100 } }"
              class="text-center p-8 rounded-[2rem] glass-panel glass-panel-hover"
            >
              <div class="text-5xl md:text-6xl font-display font-bold text-white mb-4 tracking-tighter">{{stat.num}}</div>
              <div class="text-xs font-bold text-text-secondary uppercase tracking-widest">{{stat.label}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Leadership Team -->
      <section class="py-40 bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Leadership <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-primary-pink">Team</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">The brilliant minds guiding our strategy, engineering, and innovation.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div 
              v-for="(member, i) in teamData" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="group relative rounded-[2rem] overflow-hidden glass-panel"
            >
              <div class="aspect-[4/5] overflow-hidden bg-primary-navy">
                <img loading="lazy" :src="member.image" :alt="member.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/40 to-transparent" />
              <div class="absolute bottom-0 left-0 w-full p-6">
                <h3 class="text-xl font-bold text-white mb-1 tracking-tight">{{member.name}}</h3>
                <p class="text-text-secondary text-sm font-medium">{{member.role}}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Achievements -->
      <section class="py-32 relative bg-primary-navy overflow-hidden">
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
            <div 
              v-motion 
              :initial="{ opacity: 0, x: -30 }"
              :visible-once="{ opacity: 1, x: 0 }"
              class="lg:col-span-1"
            >
              <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Awards & <br/>Excellence</h2>
              <p class="text-lg text-text-secondary mb-10 leading-relaxed">Our dedication to building high-quality software has earned us recognition from top industry bodies globally.</p>
            </div>
            
            <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                v-for="(award, i) in awardsData" :key="i"
                v-motion 
                :initial="{ opacity: 0, y: 20 }"
                :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
                class="p-6 rounded-[2rem] glass-panel glass-panel-hover flex items-center gap-6"
              >
                <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
                  <component :is="award.icon" class="w-6 h-6" />
                </div>
                <div>
                  <h4 class="text-lg font-bold text-white leading-snug mb-1">{{award.title}}</h4>
                  <p class="text-text-secondary text-sm">{{award.org}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </template>
