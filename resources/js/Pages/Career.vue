<script setup>
import { ref } from 'vue';
import { Briefcase, ArrowRight, Heart, Zap, Globe, Laptop, GraduationCap, Coffee, ChevronDown, ChevronUp } from 'lucide-vue-next';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  enter: { opacity: 1, y: 0, transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition: { staggerChildren: 100 } }
};

const benefits = [
  { icon: Globe, title: 'Remote-First', desc: 'Work from anywhere in the world. We value output over office hours.' },
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health, dental, and vision insurance for you and your family.' },
  { icon: Laptop, title: 'Home Office Setup', desc: 'Get a $1,000 stipend to set up your perfect remote workspace.' },
  { icon: GraduationCap, title: 'Learning Budget', desc: 'Annual $2,000 budget for courses, conferences, and continuous learning.' },
  { icon: Coffee, title: 'Unlimited PTO', desc: 'Take the time you need to recharge. We mandate a minimum of 20 days off.' },
  { icon: Zap, title: 'High-Impact Work', desc: 'Build technology that solves real problems for massive global enterprises.' }
];

const jobs = [
  { id: 1, role: 'Senior React Developer', department: 'Engineering', type: 'Full-time', location: 'Remote (US/EU)' },
  { id: 2, role: 'Lead UI/UX Designer', department: 'Design', type: 'Full-time', location: 'New York, NY or Remote' },
  { id: 3, role: 'DevOps Cloud Engineer', department: 'Infrastructure', type: 'Full-time', location: 'Remote (Global)' },
  { id: 4, role: 'AI Research Scientist', department: 'Data Science', type: 'Full-time', location: 'San Francisco, CA' },
  { id: 5, role: 'Product Manager', department: 'Product', type: 'Full-time', location: 'London, UK or Remote' }
];

const workflow = [
  { step: '01', title: 'Application', desc: 'Submit your resume and portfolio. Our talent team reviews every application within 48 hours.' },
  { step: '02', title: 'Culture Fit Call', desc: 'A 30-minute chat to discuss your background, career goals, and alignment with our values.' },
  { step: '03', title: 'Technical Interview', desc: 'A deep dive into your technical skills, usually involving a take-home assignment or pair programming.' },
  { step: '04', title: 'Final Offer', desc: "Meet the founders. If it's a match, we move fast to extend a competitive offer." }
];

const selectedJob = ref(null);

const toggleJob = (id) => {
  selectedJob.value = selectedJob.value === id ? null : id;
};
</script>

<template>
      
    <div class="w-full bg-primary-navy overflow-hidden">
      
      <!-- 1. Hero Section -->
      <section class="relative pt-40 pb-24 overflow-hidden bg-grid-pattern">
        <div class="absolute inset-0 z-0 aurora-bg opacity-30 mix-blend-screen" />
        
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div 
              v-motion
              :initial="staggerContainer.initial"
              :enter="staggerContainer.enter"
              class="max-w-2xl"
            >
              <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-text-secondary font-medium text-xs tracking-widest uppercase backdrop-blur-md">
                <span class="w-2 h-2 rounded-full bg-primary-blue animate-pulse" />
                We're Hiring
              </div>
              <h1 v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 tracking-tighter">
                Build the future <br/>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">With Us.</span>
              </h1>
              <p v-motion :initial="fadeIn.initial" :enter="fadeIn.enter" class="text-xl text-text-secondary leading-relaxed mb-10">
                Join a collective of visionaries, engineers, and creators. We're looking for passionate individuals who want to solve complex problems and build enterprise software that matters.
              </p>
              <div v-motion :initial="fadeIn.initial" :enter="fadeIn.enter">
                <a href="#open-roles" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-primary-navy font-bold text-lg hover:scale-105 transition-transform">
                  View Open Roles <ArrowRight class="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div 
              v-motion 
              :initial="{ opacity: 0, scale: 0.95 }"
              :visible-once="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
              class="relative rounded-[2rem] overflow-hidden glass-panel hidden lg:block aspect-square max-w-lg ml-auto"
            >
              <img loading="lazy" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=800" alt="Team collaborating" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-tr from-primary-navy via-transparent to-primary-blue/20 mix-blend-overlay" />
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Employee Benefits -->
      <section class="py-32 relative bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Perks & <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-pink">Benefits</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">We invest heavily in our team's well-being, growth, and happiness.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div 
              v-for="(benefit, i) in benefits" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="p-10 rounded-[2rem] glass-panel glass-panel-hover"
            >
              <div class="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <component :is="benefit.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold text-white mb-4 tracking-tight">{{benefit.title}}</h3>
              <p class="text-text-secondary leading-relaxed">{{benefit.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Recruitment Workflow -->
      <section class="py-32 relative bg-primary-navy">
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div class="text-center mb-24">
            <h2 class="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">Our Hiring <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-primary-blue">Process</span></h2>
            <p class="text-xl text-text-secondary max-w-2xl mx-auto">We respect your time. Our process is designed to be fast, transparent, and fair.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div 
              v-for="(item, i) in workflow" :key="i"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="relative flex flex-col p-8 rounded-[2rem] glass-panel"
            >
              <div class="text-4xl font-display font-bold text-white/10 mb-6">{{item.step}}</div>
              <h3 class="text-xl font-bold text-white mb-4 tracking-tight">{{item.title}}</h3>
              <p class="text-text-secondary text-sm leading-relaxed">{{item.desc}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Job Openings -->
      <section id="open-roles" class="py-32 relative bg-primary-dark border-y border-white/5">
        <div class="container mx-auto px-4 md:px-6 max-w-5xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 class="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Open <span class="text-white">Positions</span></h2>
              <p class="text-xl text-text-secondary">Find your next career-defining role.</p>
            </div>
            <div class="text-primary-navy font-bold bg-white px-5 py-2 rounded-full border border-white/10 text-sm uppercase tracking-widest">
              {{jobs.length}} Roles Available
            </div>
          </div>

          <div class="space-y-4">
            <div 
              v-for="(job, i) in jobs" :key="job.id"
              v-motion 
              :initial="{ opacity: 0, y: 20 }"
              :visible-once="{ opacity: 1, y: 0, transition: { delay: i * 100 } }"
              class="glass-panel glass-panel-hover rounded-[1.5rem] overflow-hidden"
            >
              <div 
                class="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group"
                @click="toggleJob(job.id)"
              >
                <div class="mb-6 md:mb-0">
                  <h3 class="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary-blue transition-colors">{{job.role}}</h3>
                  <div class="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest">
                    <span class="px-3 py-1.5 rounded-lg bg-white/10 text-white">{{job.department}}</span>
                    <span class="px-3 py-1.5 rounded-lg bg-white/10 text-white">{{job.type}}</span>
                    <span class="text-text-secondary ml-2">{{job.location}}</span>
                  </div>
                </div>
                <div class="flex items-center gap-4">
                  <button class="px-6 py-2.5 rounded-xl bg-white text-primary-navy font-bold hover:scale-105 transition-transform hidden sm:block">
                    Apply Now
                  </button>
                  <div class="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <component :is="selectedJob === job.id ? ChevronUp : ChevronDown" class="w-5 h-5" />
                  </div>
                </div>
              </div>

              <!-- Expanded Details -->
              <Transition name="expand">
                <div 
                  v-if="selectedJob === job.id"
                  class="border-t border-white/5 px-6 md:px-8 bg-black/20"
                >
                  <div class="py-8 max-w-3xl">
                    <h4 class="text-lg font-bold text-white mb-3">About the Role</h4>
                    <p class="text-text-secondary leading-relaxed mb-8 text-sm">
                      We are looking for a highly skilled {{job.role}} to join our core {{job.department.toLowerCase()}} team. 
                      You will be responsible for architecting solutions, mentoring junior members, and driving our technical strategy forward.
                    </p>
                    <h4 class="text-lg font-bold text-white mb-3">Requirements</h4>
                    <ul class="list-disc list-inside text-text-secondary space-y-3 mb-8 text-sm">
                      <li>5+ years of relevant industry experience.</li>
                      <li>Strong communication skills and ability to work in a remote-first environment.</li>
                      <li>Proven track record of delivering scalable enterprise solutions.</li>
                    </ul>
                    <button class="px-8 py-4 rounded-xl bg-white text-primary-navy font-bold hover:bg-gray-200 transition-colors sm:hidden w-full">
                      Submit Application
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. Open Application Form -->
      <section class="py-32 relative bg-primary-navy overflow-hidden">
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-primary-blue/10 blur-[150px] rounded-full pointer-events-none" />
        <div class="container relative z-10 mx-auto px-4 md:px-6">
          <div 
            v-motion 
            :initial="{ opacity: 0, y: 30 }"
            :visible-once="{ opacity: 1, y: 0 }"
            class="max-w-3xl mx-auto glass-panel p-10 md:p-16 rounded-[3rem]"
          >
            <div class="text-center mb-12">
              <div class="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase class="w-8 h-8 text-white" />
              </div>
              <h2 class="text-3xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">Don't see a fit?</h2>
              <p class="text-text-secondary text-lg">We're always looking for extraordinary talent. Send us your resume and we'll reach out when a position opens up.</p>
            </div>

            <form class="space-y-6" @submit.prevent>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Full Name</label>
                  <input type="text" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="Jane Doe" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input type="email" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="jane@example.com" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-text-secondary mb-2">LinkedIn Profile URL</label>
                <input type="url" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="https://linkedin.com/in/..." />
              </div>
              <div>
                <label class="block text-sm font-medium text-text-secondary mb-2">Tell us about yourself</label>
                <textarea rows="4" class="w-full px-5 py-4 rounded-xl bg-primary-dark/50 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors placeholder:text-text-muted" placeholder="Why do you want to join PROGLAN?"></textarea>
              </div>
              <button type="button" class="w-full py-4 rounded-xl bg-white text-primary-navy font-bold text-lg hover:scale-[1.02] transition-transform">
                Submit Open Application
              </button>
            </form>
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
