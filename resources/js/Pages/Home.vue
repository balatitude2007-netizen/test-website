<script setup>
import { ref, computed } from 'vue';
import { useWindowScroll } from '@vueuse/core';
import { Monitor, Smartphone, Brain, Cloud, ArrowRight, CheckCircle2, ChevronRight, Zap, Shield, Cpu } from 'lucide-vue-next';

const { y } = useWindowScroll();

const scrollYProgress = computed(() => {
    // simplified parallax effect
    const maxScroll = typeof window !== 'undefined' ? window.innerHeight : 1000;
    return Math.min(y.value / maxScroll, 1);
});

const auroraY = computed(() => `${scrollYProgress.value * 50}%`);
const auroraOpacity = computed(() => 1 - scrollYProgress.value * 2);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 800, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const stats = [
    { num: "500+", label: "Projects Delivered" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "<50ms", label: "Avg Latency" },
    { num: "24/7", label: "Expert Support" },
];
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero Section -->
      <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
        <!-- Animated Background Elements -->
        <div 
          class="absolute inset-0 z-0 aurora-bg animate-aurora mix-blend-screen opacity-60 transition-all duration-300 ease-out" 
          :style="{ transform: `translateY(${auroraY})`, opacity: Math.max(0, auroraOpacity) }"
        ></div>

        <div class="container relative z-10 px-4 md:px-6 mx-auto text-center">
          <div
            v-motion
            :initial="staggerContainer.initial"
            :enter="staggerContainer.enter"
            class="max-w-5xl mx-auto"
          >
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-cyan opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-cyan"></span>
              </span>
              Introducing Next-Gen Infrastructure
            </div>
            
            <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8 leading-[1.05] tracking-tighter">
              Architecting <br class="hidden md:block"/>
              the <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple">Digital Future</span>
            </h1>
            
            <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
              We engineer enterprise-grade software, AI-driven architectures, and scalable cloud solutions that transform industries.
            </p>
            
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <router-link to="/hire-us" class="group relative px-8 py-4 rounded-full bg-white text-primary-navy font-semibold text-lg overflow-hidden w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all">
                <span class="relative flex items-center justify-center gap-2">
                  Start Building <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </router-link>
              <router-link to="/services" class="px-8 py-4 rounded-full bg-transparent text-white border border-white/10 hover:bg-white/5 font-semibold text-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                Explore Platform
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Scroll Indicator -->
        <div 
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 1000, duration: 1000 } }"
          class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <div class="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        </div>
      </section>

      <!-- 2. Tech Stack Marquee -->
      <section class="py-12 border-y border-white/5 bg-primary-dark/30 backdrop-blur-md overflow-hidden flex whitespace-nowrap">
        <div 
          v-motion
          :initial="{ x: '0%' }"
          :enter="{ x: '-50%', transition: { repeat: Infinity, repeatType: 'loop', ease: 'linear', duration: 40000 } }"
          class="flex items-center gap-32 px-16 text-xl md:text-2xl font-display font-medium text-text-muted uppercase tracking-[0.2em]"
        >
          <span>React</span> <span>Vue 3</span> <span>Laravel</span> <span>Python</span> <span>AWS</span> <span>Docker</span> <span>Kubernetes</span> <span>Machine Learning</span>
          <span>React</span> <span>Vue 3</span> <span>Laravel</span> <span>Python</span> <span>AWS</span> <span>Docker</span> <span>Kubernetes</span> <span>Machine Learning</span>
        </div>
      </section>

      <!-- 3. Core Services Bento Grid -->
      <section class="py-32 relative z-10 bg-primary-navy">
        <div class="container mx-auto px-4 md:px-6">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            class="text-center mb-20"
          >
            <h2 class="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6 tracking-tight">Ecosystem</h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">A comprehensive suite of tools and services designed for extreme scale.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <!-- Large Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0 }"
              class="md:col-span-2 glass-panel glass-panel-hover p-10 md:p-12 rounded-3xl group relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/10 rounded-full blur-[100px] -z-10 group-hover:bg-primary-blue/20 transition-colors duration-700" />
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary-cyan">
                <Cloud class="w-7 h-7" />
              </div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Cloud Native Infrastructure</h3>
              <p class="text-text-secondary mb-8 leading-relaxed text-lg max-w-md">Resilient cloud infrastructures on AWS, Azure, and GCP with fully automated CI/CD pipelines and zero-downtime deployments.</p>
              <router-link to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary-cyan transition-colors">
                Explore Cloud <ChevronRight class="w-4 h-4" />
              </router-link>
            </div>

            <!-- Square Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 100 } }"
              class="glass-panel glass-panel-hover p-10 rounded-3xl group relative overflow-hidden"
            >
              <div class="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-primary-purple/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary-purple/20 transition-colors duration-700" />
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary-purple">
                <Brain class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">AI & Machine Learning</h3>
              <p class="text-text-secondary mb-8 text-base">Intelligent systems and automation for enterprise workflows.</p>
              <router-link to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary-purple transition-colors">
                View AI Solutions <ChevronRight class="w-4 h-4" />
              </router-link>
            </div>

            <!-- Square Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="glass-panel glass-panel-hover p-10 rounded-3xl group relative overflow-hidden"
            >
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-primary-pink">
                <Monitor class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-4 tracking-tight">Web Engineering</h3>
              <p class="text-text-secondary mb-8 text-base">High-performance, scalable web applications using modern tooling.</p>
              <router-link to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-primary-pink transition-colors">
                See Web Services <ChevronRight class="w-4 h-4" />
              </router-link>
            </div>

            <!-- Large Card -->
            <div
              v-motion
              :initial="{ opacity: 0, y: 40 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
              class="md:col-span-2 glass-panel glass-panel-hover p-10 md:p-12 rounded-3xl group relative overflow-hidden"
            >
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-transparent via-primary-blue/5 to-transparent -z-10 skew-y-12 group-hover:via-primary-blue/10 transition-colors duration-700" />
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white">
                <Shield class="w-7 h-7" />
              </div>
              <h3 class="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Enterprise Cybersecurity</h3>
              <p class="text-text-secondary mb-8 leading-relaxed text-lg max-w-md">Advanced security protocols, end-to-end encryption, and rigorous auditing to keep your sensitive enterprise data completely isolated and safe.</p>
              <router-link to="/services" class="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-text-secondary transition-colors">
                Learn about Security <ChevronRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Stats -->
      <section class="py-24 relative overflow-hidden bg-primary-dark border-y border-white/5">
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div 
              v-for="(stat, i) in stats" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="flex flex-col items-center text-center space-y-2"
            >
              <div class="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">{{stat.num}}</div>
              <div class="text-xs font-semibold text-text-muted uppercase tracking-widest">{{stat.label}}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CTA Section -->
      <section class="py-40 relative overflow-hidden bg-primary-navy">
        <!-- Glow behind CTA -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/20 blur-[150px] rounded-full -z-10 mix-blend-screen" />
        
        <div class="container relative z-10 mx-auto px-4 text-center">
          <div 
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            class="max-w-3xl mx-auto glass-panel p-16 rounded-[3rem]"
          >
            <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Zap class="w-8 h-8 text-primary-cyan" />
            </div>
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              Ready to scale?
            </h2>
            <p class="text-xl text-text-secondary mb-10 max-w-xl mx-auto">
              Join industry leaders who trust PROGLAN to build their mission-critical infrastructure.
            </p>
            <router-link to="/contact" class="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-primary-navy font-bold text-lg hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Start Your Project
            </router-link>
          </div>
        </div>
      </section>

    </div>
  </template>
