<script setup>
import { Monitor, Smartphone, Brain, Cloud, Terminal, Shield, ArrowRight, Zap, Database, LayoutTemplate, Network, Code2 } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const services = [
  { 
    icon: Monitor, 
    title: 'Web Engineering', 
    desc: 'High-performance, scalable web applications built with modern JavaScript frameworks.',
    features: ['React & Next.js', 'Progressive Web Apps', 'E-commerce Platforms', 'Enterprise Portals'],
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
  },
  { 
    icon: Smartphone, 
    title: 'Mobile App Development', 
    desc: 'Native and cross-platform mobile experiences that engage users and drive conversions.',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Mobile UI/UX'],
    color: 'text-primary-cyan',
    bg: 'bg-primary-cyan/10',
  },
  { 
    icon: Brain, 
    title: 'AI & Machine Learning', 
    desc: 'Intelligent systems and predictive models to automate workflows and unlock insights.',
    features: ['Custom LLMs', 'Computer Vision', 'Predictive Analytics', 'NLP Solutions'],
    color: 'text-primary-purple',
    bg: 'bg-primary-purple/10',
  },
  { 
    icon: Cloud, 
    title: 'Cloud Architecture', 
    desc: 'Resilient and secure cloud infrastructures built for scale and continuous availability.',
    features: ['AWS & Azure', 'Serverless Apps', 'Cloud Migration', 'Cost Optimization'],
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
  },
  { 
    icon: Terminal, 
    title: 'DevOps & CI/CD', 
    desc: 'Streamlined development pipelines and automated deployments for rapid delivery.',
    features: ['Kubernetes', 'Docker', 'Jenkins/Actions', 'Infrastructure as Code'],
    color: 'text-primary-cyan',
    bg: 'bg-primary-cyan/10',
  },
  { 
    icon: Shield, 
    title: 'Cybersecurity', 
    desc: 'Advanced security protocols and auditing to keep your enterprise data completely safe.',
    features: ['Penetration Testing', 'Compliance', 'Data Encryption', 'Security Audits'],
    color: 'text-primary-purple',
    bg: 'bg-primary-purple/10',
  }
];

const technologies = [
  { name: 'Frontend', icon: LayoutTemplate, items: ['React', 'Next.js', 'Vue.js', 'TailwindCSS', 'Framer Motion'] },
  { name: 'Backend', icon: Database, items: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB'] },
  { name: 'Cloud & DevOps', icon: Network, items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
  { name: 'AI & ML', icon: Brain, items: ['TensorFlow', 'PyTorch', 'OpenAI API', 'HuggingFace', 'LangChain'] }
];

const processes = [
  { step: '01', title: 'Discovery', desc: 'We analyze your requirements and goals to create a roadmap.' },
  { step: '02', title: 'Architecture', desc: 'Designing resilient, scalable systems for your data.' },
  { step: '03', title: 'Development', desc: 'Sprints to build clean, efficient code with regular updates.' },
  { step: '04', title: 'Deployment', desc: 'Rigorous QA testing followed by a seamless launch.' }
];
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero Section -->
      <section class="relative pt-40 pb-32 overflow-hidden bg-grid-pattern">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/10 rounded-full blur-[150px] mix-blend-screen" />
        
        <div class="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div 
            v-motion
            :initial="staggerContainer.initial"
            :enter="staggerContainer.enter"
            class="max-w-4xl mx-auto"
          >
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
              Platform Capabilities
            </div>
            <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1] tracking-tighter">
              Engineering the <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple">Digital Tomorrow</span>
            </h1>
            <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
              End-to-end technology solutions tailored for forward-thinking enterprises. From AI integration to scalable cloud architectures.
            </p>
          </div>
        </div>
      </section>

      <!-- 2. Detailed Service Cards -->
      <section class="py-32 relative bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
            <div 
              v-for="(service, i) in services" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: (i % 2) * 100 } }"
              class="glass-panel glass-panel-hover p-10 lg:p-12 rounded-[2rem] group relative overflow-hidden"
            >
              <div :class="['absolute -right-20 -top-20 w-[300px] h-[300px] rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-700 opacity-50', service.bg]" />
              
              <div :class="['w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8', service.color]">
                <component :is="service.icon" class="w-6 h-6" />
              </div>
              
              <h3 class="text-3xl font-display font-bold text-white mb-4 tracking-tight">{{service.title}}</h3>
              <p class="text-lg text-text-secondary mb-10 leading-relaxed">{{service.desc}}</p>
              
              <div class="space-y-4">
                <h4 class="text-xs font-bold text-text-muted uppercase tracking-[0.2em]">Key Capabilities</h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <li v-for="(feature, idx) in service.features" :key="idx" class="flex items-center gap-3 text-text-secondary">
                    <Code2 :class="['w-4 h-4', service.color]" />
                    <span class="font-medium text-sm">{{feature}}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Technology Stack Grid -->
      <section class="py-40 relative bg-primary-navy">
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Technology <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Stack</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">We leverage industry-leading tools and frameworks to build resilient software.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div 
              v-for="(tech, i) in technologies" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="p-8 rounded-[2rem] glass-panel glass-panel-hover text-center"
            >
              <div class="w-14 h-14 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <component :is="tech.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white mb-6 tracking-tight">{{tech.name}}</h3>
              <div class="flex flex-wrap justify-center gap-2">
                <span v-for="(item, idx) in tech.items" :key="idx" class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-text-secondary">
                  {{item}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Process Flow -->
      <section class="py-32 relative bg-primary-dark border-t border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">How We <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink">Work</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">A proven methodology designed to deliver products on time and beyond expectations.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
            <div 
              v-for="(process, i) in processes" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="relative z-10 flex flex-col p-8 glass-panel rounded-[2rem]"
            >
              <div class="text-4xl font-display font-bold text-white/10 mb-6">{{process.step}}</div>
              <h3 class="text-xl font-bold text-white mb-4 tracking-tight">{{process.title}}</h3>
              <p class="text-text-secondary text-sm leading-relaxed">{{process.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CTA Section -->
      <section class="py-40 relative bg-primary-navy overflow-hidden">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/20 blur-[150px] rounded-full mix-blend-screen -z-10" />
        
        <div class="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <div 
            v-motion 
            :initial="{ opacity: 0, scale: 0.95 }"
            :visible-once="{ opacity: 1, scale: 1 }"
            class="max-w-3xl mx-auto p-12 md:p-16 rounded-[3rem] glass-panel"
          >
            <Zap class="w-12 h-12 text-primary-cyan mx-auto mb-8" />
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
              Transform your business today.
            </h2>
            <p class="text-lg text-text-secondary mb-10 max-w-xl mx-auto">
              Partner with PROGLAN to build the intelligent, scalable solutions your enterprise needs to dominate the market.
            </p>
            <router-link to="/contact" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary-navy font-bold text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
              Start Your Project <ArrowRight class="w-5 h-5" />
            </router-link>
          </div>
        </div>
      </section>

    </div>
  </template>
