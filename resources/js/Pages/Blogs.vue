<script setup>
import { ref, computed } from 'vue';
import { Search, ArrowRight, Calendar, Clock, Tag } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const categories = ['All', 'Artificial Intelligence', 'Cloud Native', 'Cybersecurity', 'Design UI/UX', 'Development'];

const featuredBlog = {
  title: 'The Future of Enterprise AI: Beyond Large Language Models',
  excerpt: 'As LLMs become commoditized, the next frontier in enterprise AI lies in specialized, multi-modal autonomous agents that can execute complex, multi-step workflows across disparate systems...',
  category: 'Artificial Intelligence',
  date: 'May 24, 2026',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=600'
};

const blogsData = [
  {
    id: 1,
    title: 'Architecting Zero-Trust Networks in 2026',
    excerpt: 'A comprehensive guide to building resilient security perimeters in a distributed workforce era.',
    category: 'Cybersecurity',
    date: 'May 20, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 2,
    title: 'React 19 & Server Components: A Paradigm Shift',
    excerpt: 'How the latest React features are fundamentally changing the way we build high-performance web applications.',
    category: 'Development',
    date: 'May 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 3,
    title: 'Designing for Immersive Web Experiences',
    excerpt: 'Moving beyond flat UI to create engaging, 3D-integrated web experiences without sacrificing performance.',
    category: 'Design UI/UX',
    date: 'May 10, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 4,
    title: 'Migrating Monoliths to Microservices on AWS',
    excerpt: 'A practical roadmap for breaking down legacy systems into scalable, independent microservices.',
    category: 'Cloud Native',
    date: 'May 02, 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 5,
    title: 'The Rise of Agentic AI Frameworks',
    excerpt: 'Exploring how autonomous AI agents are collaborating to solve complex enterprise problems.',
    category: 'Artificial Intelligence',
    date: 'Apr 28, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400'
  },
  {
    id: 6,
    title: 'Next-Gen Authentication Strategies',
    excerpt: 'Why passwords are dead and how to implement secure, passwordless authentication flows.',
    category: 'Cybersecurity',
    date: 'Apr 20, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1614064641913-a538a5b23d53?auto=format&fit=crop&q=80&w=600&h=400'
  }
];

const activeCategory = ref('All');
const searchQuery = ref('');

const filteredBlogs = computed(() => {
  return blogsData.filter(blog => {
    const matchesCategory = activeCategory.value === 'All' || blog.category === activeCategory.value;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});
</script>

<template>
      
    <div class="w-full bg-primary-navy min-h-screen">
      
      <!-- 1. Header & Search -->
      <section class="relative pt-40 pb-20 overflow-hidden bg-grid-pattern">
        <div class="absolute inset-0 z-0 aurora-bg opacity-30 mix-blend-screen" />
        
        <div class="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
          <div 
            v-motion
            :initial="fadeIn.initial"
            :enter="fadeIn.enter"
            class="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div class="max-w-2xl">
              <h1 class="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tighter">Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Insights</span></h1>
              <p class="text-xl text-text-secondary leading-relaxed">
                Discover our latest thoughts, tutorials, and deep-dives into technology, engineering, and digital transformation.
              </p>
            </div>
            
            <div class="relative w-full md:w-96 shrink-0">
              <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search class="h-5 w-5 text-text-muted" />
              </div>
              <input 
                type="text" 
                v-model="searchQuery"
                placeholder="Search articles..." 
                class="w-full pl-12 pr-4 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white placeholder-text-muted focus:outline-none focus:border-white/30 transition-all backdrop-blur-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Featured Article (only show if no search/filter is active) -->
      <Transition name="fade-slide">
        <section 
          v-if="activeCategory === 'All' && searchQuery === ''"
          class="pb-20 relative bg-primary-navy"
        >
          <div class="container mx-auto px-4 md:px-6 max-w-6xl">
            <div class="relative rounded-[2rem] overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">
              <div class="absolute inset-0 z-0 bg-primary-dark">
                <img loading="lazy" 
                  :src="featuredBlog.image" 
                  :alt="featuredBlog.title" 
                  class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-navy via-primary-navy/80 to-transparent" />
              </div>
              
              <div class="relative z-10 p-8 md:p-12 flex flex-col justify-end min-h-[500px]">
                <div class="flex flex-wrap items-center gap-4 mb-6">
                  <span class="px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md">
                    {{featuredBlog.category}}
                  </span>
                  <div class="flex items-center gap-2 text-text-secondary text-sm font-medium">
                    <Calendar class="w-4 h-4" /> {{featuredBlog.date}}
                  </div>
                  <div class="flex items-center gap-2 text-text-secondary text-sm font-medium">
                    <Clock class="w-4 h-4" /> {{featuredBlog.readTime}}
                  </div>
                </div>
                
                <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight group-hover:text-primary-blue transition-colors max-w-3xl tracking-tight">
                  {{featuredBlog.title}}
                </h2>
                <p class="text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl line-clamp-3">
                  {{featuredBlog.excerpt}}
                </p>
                
                <div class="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
                  Read Full Article <ArrowRight class="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <!-- 3. Categories & Grid -->
      <section class="py-20 relative z-10 bg-primary-dark border-t border-white/5">
        <div class="container mx-auto px-4 md:px-6 max-w-6xl">
          
          <!-- Categories Filter -->
          <div class="flex flex-wrap items-center gap-3 mb-16">
            <Tag class="w-5 h-5 text-text-muted mr-2 hidden sm:block" />
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              :class="['px-5 py-2.5 rounded-xl text-sm font-medium transition-all', activeCategory === category ? 'bg-white text-primary-navy' : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-white border border-white/5']"
            >
              {{category}}
            </button>
          </div>

          <!-- Articles Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TransitionGroup name="list">
              <template v-if="filteredBlogs.length > 0">
                <div
                  v-for="blog in filteredBlogs"
                  :key="blog.id"
                  class="group flex flex-col rounded-[2rem] glass-panel glass-panel-hover overflow-hidden cursor-pointer"
                >
                  <div class="relative h-56 overflow-hidden bg-primary-navy">
                    <img loading="lazy" 
                      :src="blog.image" 
                      :alt="blog.title" 
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div class="absolute top-4 left-4">
                      <span class="px-3 py-1.5 rounded-lg bg-black/50 text-white font-bold text-xs uppercase tracking-widest backdrop-blur-md border border-white/10">
                        {{blog.category}}
                      </span>
                    </div>
                  </div>
                  
                  <div class="p-8 flex flex-col flex-grow">
                    <div class="flex items-center gap-4 text-xs font-medium text-text-muted mb-4">
                      <div class="flex items-center gap-1.5"><Calendar class="w-3.5 h-3.5" /> {{blog.date}}</div>
                      <div class="flex items-center gap-1.5"><Clock class="w-3.5 h-3.5" /> {{blog.readTime}}</div>
                    </div>
                    
                    <h3 class="text-xl font-bold text-white leading-snug mb-4 tracking-tight group-hover:text-primary-blue transition-colors">
                      {{blog.title}}
                    </h3>
                    
                    <p class="text-text-secondary text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                      {{blog.excerpt}}
                    </p>
                    
                    <div class="mt-auto flex items-center gap-2 text-white text-sm font-bold group-hover:translate-x-2 transition-transform">
                      Read More <ArrowRight class="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </template>
              <template v-else>
                <div class="col-span-full py-24 text-center glass-panel rounded-[2rem] w-full" key="no-results">
                  <div class="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                    <Search class="w-8 h-8 text-text-secondary" />
                  </div>
                  <h3 class="text-2xl font-display font-bold text-white mb-2 tracking-tight">No articles found</h3>
                  <p class="text-text-secondary">Try adjusting your search or category filter.</p>
                </div>
              </template>
            </TransitionGroup>
          </div>
          
        </div>
      </section>

    </div>
  </template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.list-leave-active {
  position: absolute;
}
</style>
