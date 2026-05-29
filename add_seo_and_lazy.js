const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const pages = [
  { file: 'Home.tsx', title: 'Home', desc: 'Welcome to FutureTech IT Services. We engineer enterprise-grade software and AI-driven architectures.' },
  { file: 'About.tsx', title: 'About Us', desc: 'Learn about FutureTech, our mission, vision, and the team behind our innovative solutions.' },
  { file: 'Services.tsx', title: 'Our Services', desc: 'Explore our wide range of IT services including custom software development, cloud infrastructure, and AI integration.' },
  { file: 'HireUs.tsx', title: 'Hire Us', desc: 'Scale your team with our dedicated experts. Flexible engagement models for startups and enterprises.' },
  { file: 'Blogs.tsx', title: 'Blogs & Insights', desc: 'Read our latest thoughts, tutorials, and deep-dives into technology and digital transformation.' },
  { file: 'Career.tsx', title: 'Careers', desc: 'Join a collective of visionaries and engineers. Build the future with FutureTech.' },
  { file: 'Contact.tsx', title: 'Contact Us', desc: 'Get in touch with FutureTech. We are ready to help you execute your ideas flawlessly.' }
];

pages.forEach(page => {
  const filePath = path.join(pagesDir, page.file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Add SEOMeta Import
  if (!content.includes('import SEOMeta')) {
    content = content.replace(/(import .* from ['"].*['"];\n)(?!(import .* from ['"].*['"];\n))/, `$1import SEOMeta from '../components/SEO/SEOMeta';\n`);
  }

  // 2. Add SEOMeta tag inside the main return wrapper
  // We'll look for `return (\n    <div className="w-full bg-primary-navy` or similar wrapper
  const returnRegex = /(return\s*\(\s*<div[^>]*>)/;
  if (content.match(returnRegex) && !content.includes('<SEOMeta')) {
    content = content.replace(returnRegex, `$1\n      <SEOMeta title="${page.title}" description="${page.desc}" />`);
  }

  // 3. Add loading="lazy" to <img> tags that don't have it
  content = content.replace(/<img(?!.*loading=["']lazy["'])([^>]+)>/g, '<img loading="lazy"$1>');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${page.file}`);
});
