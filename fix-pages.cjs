const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'resources', 'js', 'Pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.vue'));

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove imports
    content = content.replace(/import\s+{\s*Head\s*,?\s*.*?}\s+from\s+['"]@inertiajs\/vue3['"];?\n?/g, '');
    content = content.replace(/import\s+{\s*Link\s*,?\s*.*?}\s+from\s+['"]@inertiajs\/vue3['"];?\n?/g, '');
    content = content.replace(/import\s+{\s*Head\s*,\s*Link\s*}\s+from\s+['"]@inertiajs\/vue3['"];?\n?/g, '');
    content = content.replace(/import\s+Layout\s+from\s+['"]@\/Layouts\/Layout\.vue['"];?\n?/g, '');

    // Sometimes they imported Link separately
    content = content.replace(/import\s+{\s*Link\s*}\s+from\s+['"]@inertiajs\/vue3['"];?\n?/g, '');

    // Replace <Link> with <router-link>
    content = content.replace(/<Link/g, '<router-link');
    content = content.replace(/<\/Link>/g, '</router-link>');

    // Remove Head tags and their contents
    content = content.replace(/<Head>[\s\S]*?<\/Head>\n?/g, '');

    // Remove <Layout> and </Layout> tags
    content = content.replace(/<Layout>\n?/g, '');
    content = content.replace(/<\/Layout>\n?/g, '');

    // Format imports (some files might have leftover empty imports or we need to add vue-router link?)
    // Actually <router-link> doesn't need to be imported in Vue Router.

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${file}`);
});
