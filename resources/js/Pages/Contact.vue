<script setup>
import { ref } from 'vue';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, ChevronDown, ChevronUp, Send, MessageCircle } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const faqs = [
  { question: 'What is your typical project timeline?', answer: 'Our project timelines vary depending on scope. An MVP usually takes 8-12 weeks, while complex enterprise solutions may take 6+ months. We will provide a detailed timeline during the proposal phase.' },
  { question: 'Do you offer post-launch support?', answer: 'Yes, we provide comprehensive SLA-backed support and maintenance packages tailored to your needs, ensuring your software remains secure, updated, and highly performant.' },
  { question: 'What engagement models do you offer?', answer: 'We offer Dedicated Teams, Fixed Price Projects, and Time & Material models. You can review the exact breakdown of these models on our Hire Us page.' },
  { question: 'Can you sign an NDA before we discuss details?', answer: 'Absolutely. We prioritize your intellectual property and are happy to sign a Non-Disclosure Agreement before any initial consultations or technical deep-dives.' }
];

const activeFaq = ref(null);

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index;
};
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero & Main Contact Section -->
      <section class="relative pt-40 pb-32 overflow-hidden bg-grid-pattern">
        <div class="absolute inset-0 z-0 aurora-bg opacity-30 mix-blend-screen" />
        
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div 
            v-motion
            :initial="staggerContainer.initial"
            :enter="staggerContainer.enter"
            class="text-center max-w-3xl mx-auto mb-24"
          >
            <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
              <MessageCircle class="w-4 h-4" /> Let's Talk
            </div>
            <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">
              Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-purple">Touch</span>
            </h1>
            <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl text-text-secondary leading-relaxed">
              Whether you have a groundbreaking idea or need to scale your existing systems, our team is ready to help you execute flawlessly.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            
            <!-- Contact Info & Socials -->
            <div 
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
              class="lg:col-span-2 space-y-6"
            >
              <div class="p-10 rounded-[2rem] glass-panel glass-panel-hover">
                <h3 class="text-2xl font-bold text-white mb-8 tracking-tight">Contact Information</h3>
                <div class="space-y-8">
                  <div class="flex items-start gap-5">
                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-bold text-white mb-1">Global Headquarters</p>
                      <p class="text-text-secondary text-sm leading-relaxed">123 Innovation Drive<br/>Tech District, TC 90210<br/>San Francisco, CA</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5">
                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Phone class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-bold text-white mb-1">Phone</p>
                      <p class="text-text-secondary text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-5">
                    <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Mail class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-bold text-white mb-1">Email</p>
                      <p class="text-text-secondary text-sm">hello@PROGLAN.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-10 rounded-[2rem] glass-panel glass-panel-hover">
                <h3 class="text-xl font-bold text-white mb-6 tracking-tight">Connect With Us</h3>
                <div class="flex gap-4">
                  <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
                    <router-linkedin class="w-5 h-5" />
                  </a>
                  <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
                    <Twitter class="w-5 h-5" />
                  </a>
                  <a href="#" class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
                    <Github class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <!-- Premium Contact Form -->
            <div 
              v-motion 
              :initial="{ opacity: 0, y: 30 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: 300 } }"
              class="lg:col-span-3 p-10 md:p-12 rounded-[2rem] glass-panel relative overflow-hidden"
            >
              <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[100px]" />
              
              <h3 class="text-3xl font-display font-bold text-white mb-8 tracking-tight relative z-10">Send us a Message</h3>
              
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
                  <label class="block text-sm font-medium text-text-secondary mb-2">Subject</label>
                  <input type="text" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="How can we help?" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Message</label>
                  <textarea rows="5" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" class="w-full py-4 rounded-xl bg-white text-primary-navy font-bold text-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Send Message <Send class="w-5 h-5" />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <!-- 2. Map Section Placeholder -->
      <section class="py-0 relative border-y border-white/5">
        <div class="w-full h-[500px] bg-primary-dark relative flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 bg-grid-pattern opacity-30" />
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
              <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <MapPin class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-2 tracking-tight">Interactive Map</h3>
              <p class="text-text-secondary text-sm">Location visualization goes here.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. FAQ Section -->
      <section class="py-32 relative bg-primary-navy">
        <div class="container mx-auto px-4 md:px-6 max-w-4xl">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">Frequently Asked <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink">Questions</span></h2>
            <p class="text-xl text-text-secondary">Everything you need to know about working with us.</p>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(faq, i) in faqs" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="bg-white/5 border border-white/10 rounded-[1.5rem] overflow-hidden hover:border-white/20 transition-colors"
            >
              <button 
                class="w-full p-6 md:p-8 flex items-center justify-between text-left focus:outline-none group"
                @click="toggleFaq(i)"
              >
                <h3 class="text-lg font-bold text-white group-hover:text-text-secondary transition-colors pr-8">
                  {{faq.question}}
                </h3>
                <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary shrink-0 group-hover:bg-white/10 group-hover:text-white transition-colors">
                  <component :is="activeFaq === i ? ChevronUp : ChevronDown" class="w-5 h-5" />
                </div>
              </button>

              <Transition name="expand">
                <div 
                  v-if="activeFaq === i"
                  class="border-t border-white/5 px-6 md:px-8 bg-primary-dark/30"
                >
                  <p class="py-6 text-text-secondary text-sm leading-relaxed">
                    {{faq.answer}}
                  </p>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </section>

    </div>
  </template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.expand-enter-from,
.expand-leave-to {
  height: 0;
  opacity: 0;
}
</style>
