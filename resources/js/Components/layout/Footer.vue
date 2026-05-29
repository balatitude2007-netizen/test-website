<script setup>
import { Link } from '@inertiajs/vue3';
import { Rocket, Twitter, Linkedin, Github, Infinity as InfinityIcon } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-primary-dark border-t border-white/5 pt-20 pb-10">
    <div class="container mx-auto px-4 md:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        <!-- Brand -->
        <div class="lg:col-span-1">
          <router-link to="/" class="flex items-center mb-6 group inline-flex">
            <img src="/images/logo.png" alt="PROGLAN Logo" class="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
          </router-link>
          <p class="text-text-secondary text-sm leading-relaxed mb-6">
            Engineering the digital tomorrow. We build resilient, scalable software for forward-thinking enterprises.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
              <Linkedin class="w-4 h-4" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
              <Twitter class="w-4 h-4" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-text-secondary hover:text-white hover:bg-white/10 transition-colors">
              <Github class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-bold text-white mb-6">Company</h4>
          <ul class="space-y-4">
            <li><router-link to="/about" class="text-text-secondary hover:text-white text-sm transition-colors">About Us</router-link></li>
            <li><router-link to="/services" class="text-text-secondary hover:text-white text-sm transition-colors">Services</router-link></li>
            <li><router-link to="/career" class="text-text-secondary hover:text-white text-sm transition-colors">Careers</router-link></li>
            <li><router-link to="/blogs" class="text-text-secondary hover:text-white text-sm transition-colors">Insights</router-link></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold text-white mb-6">Services</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-text-secondary hover:text-white text-sm transition-colors">Web Engineering</a></li>
            <li><a href="#" class="text-text-secondary hover:text-white text-sm transition-colors">Cloud Architecture</a></li>
            <li><a href="#" class="text-text-secondary hover:text-white text-sm transition-colors">AI & Machine Learning</a></li>
            <li><a href="#" class="text-text-secondary hover:text-white text-sm transition-colors">Cybersecurity</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-bold text-white mb-6">Stay Updated</h4>
          <p class="text-text-secondary text-sm mb-4">Subscribe to our newsletter for the latest tech insights.</p>
          <form class="flex gap-2">
            <input type="email" placeholder="Enter your email" class="bg-primary-navy/50 border border-white/10 rounded-lg px-4 py-2 w-full text-sm text-white focus:outline-none focus:border-primary-cyan transition-colors" />
            <button class="bg-white text-primary-navy px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-text-muted text-sm">© 2026 PROGLAN IT Services. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="text-text-muted hover:text-white text-sm transition-colors">Privacy Policy</a>
          <a href="#" class="text-text-muted hover:text-white text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
