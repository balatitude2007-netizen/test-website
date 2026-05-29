<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Menu, X, Infinity as InfinityIcon } from 'lucide-vue-next';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const route = useRoute();

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-primary-navy/70 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'
    ]"
  >
    <div class="container mx-auto px-4 md:px-6 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center group">
        <img src="/images/logo.png" alt="PROGLAN Logo" class="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex items-center gap-8 bg-primary-dark/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/5">
        <router-link
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          :class="[
            'text-sm font-medium transition-colors hover:text-white',
            route.path === link.path ? 'text-white' : 'text-text-secondary'
          ]"
        >
          {{ link.name }}
        </router-link>
      </nav>

      <!-- CTA & Mobile Toggle -->
      <div class="flex items-center gap-4">
        <router-link
          to="/hire-us"
          class="hidden lg:flex px-6 py-2.5 rounded-full bg-white text-primary-navy font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
        >
          Hire Us
        </router-link>
        
        <button
          class="lg:hidden text-text-secondary hover:text-white p-2"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
    <Transition name="slide-down">
      <div
        v-if="mobileMenuOpen"
        class="absolute top-full left-0 w-full bg-primary-navy/95 backdrop-blur-xl border-b border-white/5 lg:hidden overflow-hidden"
      >
        <div class="flex flex-col p-6 gap-6">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="mobileMenuOpen = false"
            :class="[
              'text-lg font-medium transition-colors',
              route.path === link.path ? 'text-white' : 'text-text-secondary hover:text-white'
            ]"
          >
            {{ link.name }}
          </router-link>
          <router-link
            to="/hire-us"
            @click="mobileMenuOpen = false"
            class="mt-4 text-center px-6 py-3.5 rounded-xl bg-white text-primary-navy font-semibold w-full"
          >
            Hire Us
          </router-link>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  height: 0;
  opacity: 0;
}
.slide-down-enter-to,
.slide-down-leave-from {
  height: 350px;
}
</style>
