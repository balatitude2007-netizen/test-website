<script setup>
import { Head } from '@inertiajs/vue3';
// We will import Navbar and Footer here later
</script>

<template>
    <div>
        <Head title="FutureTech IT Services" />
        <!-- Navbar Placeholder -->
        <header class="p-4 bg-primary-navy text-white text-center">Navbar Placeholder</header>
        
        <main>
            <slot />
        </main>

        <!-- Footer Placeholder -->
        <footer class="p-4 bg-primary-dark text-white text-center">Footer Placeholder</footer>
    </div>
</template>
