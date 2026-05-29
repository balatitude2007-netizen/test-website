const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'resources', 'js');

const directories = [
    path.join(baseDir, 'Pages'),
    path.join(baseDir, 'Components', 'ui'),
    path.join(baseDir, 'Components', 'layout'),
    path.join(__dirname, 'public', 'build'), // Public assets structure for Vite
    path.join(__dirname, 'resources', 'css') // Asset organization
];

// Create directories
directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

const pages = ['Home.vue', 'About.vue', 'Services.vue', 'HireUs.vue', 'Blogs.vue', 'Career.vue', 'Contact.vue'];
const uiComponents = ['Button.vue', 'GlassCard.vue', 'CustomCursor.vue', 'LoadingScreen.vue', 'ScrollReveal.vue'];
const layoutComponents = ['Navbar.vue', 'Footer.vue'];

const defaultSfc = `<script setup>
import Layout from '@/Layouts/Layout.vue';
</script>

<template>
    <Layout>
        <div>Page Placeholder</div>
    </Layout>
</template>
`;

const emptySfc = `<script setup>
</script>

<template>
    <div>Component Placeholder</div>
</template>
`;

pages.forEach(page => {
    const file = path.join(baseDir, 'Pages', page);
    if (!fs.existsSync(file)) fs.writeFileSync(file, defaultSfc);
});

uiComponents.forEach(cmp => {
    const file = path.join(baseDir, 'Components', 'ui', cmp);
    if (!fs.existsSync(file)) fs.writeFileSync(file, emptySfc);
});

layoutComponents.forEach(cmp => {
    const file = path.join(baseDir, 'Components', 'layout', cmp);
    if (!fs.existsSync(file)) fs.writeFileSync(file, emptySfc);
});

// Copy existing CSS to new location
const oldCss = path.join(__dirname, 'src', 'index.css');
const newCss = path.join(__dirname, 'resources', 'css', 'app.css');
if (fs.existsSync(oldCss) && !fs.existsSync(newCss)) {
    fs.copyFileSync(oldCss, newCss);
}

console.log('Vue structure scaffolded successfully.');
