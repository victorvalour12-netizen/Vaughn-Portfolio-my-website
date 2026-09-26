require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');

const SKILLS = require('./src/skills');
const PROJECTS = require('./src/projects');
const DEALS = require('./src/deals');
const COURSES = require('./src/courses');
const BLOGS = require('./src/blogs');
const UL = require('./src/ul');

const port = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${port}`;

app.use(express.static(path.join(__dirname, "src", "public")));
app.set('views', path.join(__dirname, 'src', 'pages'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());

app.use((req, res, next) => {
    res.locals.BASE_URL = BASE_URL;
    next();
});

const ogs = require('open-graph-scraper');

async function getLinkPreview(url) {
    if (!url) return null;
    try {
        const { result } = await ogs({
            url: url,
            timeout: 10,
            headers: { 'user-agent': 'Mozilla/5.0' }
        });
        console.log('OG SCRAPED:', url, '->', result.ogTitle);
        return {
            title: result.ogTitle || result.twitterTitle || '',
            description: result.ogDescription || result.twitterDescription || '',
            image: result.ogImage?.[0]?.url || result.twitterImage?.[0]?.url || '',
            domain: new URL(url).hostname.replace('www.', '')
        };
    } catch (e) {
        console.log('OG FAILED for', url, e.message);
        return null;
    }
}

// --- HELPER - MESSAGE + LINK, NO HARDCODE ---
function getShareMessages(type, url, liveLink = null) {
    const pageUrl = url;
    const previewUrl = liveLink || url;
    let shareText = '';
    let buyText = '';
    if (type === 'projects') {
        if (liveLink) {
            shareText = `Check out this project I built 👇\n${previewUrl}\n\nWant something similar?\n${pageUrl}`;
            buyText = `Hi Valour, I saw your project:\n${pageUrl}\nLive: ${previewUrl}\n\nCan you build something similar for me?`;
        } else {
            shareText = `I can build this for you 🚀 Check it out:\n${pageUrl}`;
            buyText = `Hi Valour, I'm interested in starting this project:\n${pageUrl}\n\nLet's discuss?`;
        }
    }
    if (type === 'deals') {
        shareText = `Found this hot deal for you 🔥\n${pageUrl}`;
        buyText = `Hi Valour, I'm interested in this deal:\n${pageUrl}\n\nIs it still available?`;
    }
    if (type === 'blogs') {
        shareText = `You need to read this 📰\n${pageUrl}`;
        buyText = shareText;
    }
    if (type === 'courses') {
        shareText = `This course is worth it 💡\n${pageUrl}`;
        buyText = `Hi Valour, I want to register for this course:\n${pageUrl}\n\nWhere do I pay?`;
    }
    return {
        SHARE_URL: previewUrl,
        PAGE_URL: pageUrl,
        SHARE_TEXT: shareText,
        SHARE_WHATSAPP: `https://wa.me/?text=${encodeURIComponent(shareText)}`,
        SHARE_TWITTER: `https://twitter.com/intent/tweet?url=${encodeURIComponent(previewUrl)}&text=${encodeURIComponent(shareText)}`,
        SHARE_FACEBOOK: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(previewUrl)}`,
        BUY_WHATSAPP_MESSAGE: encodeURIComponent(buyText)
    }
}

// --- FINAL FIXED SEO HELPER ---
function toAbsoluteImage(imgPath) {
    if (!imgPath) return `${BASE_URL.replace(/\/$/, '')}/images/og-image.jpg`;
    if (imgPath.startsWith('http://') || imgPath.startsWith('https://')) return imgPath; // LINKS WORK
    const cleanPath = imgPath.startsWith('/') ? imgPath : `/${imgPath}`;
    return `${BASE_URL.replace(/\/$/, '')}${cleanPath}`;
}

function getSEO({ title, description, image, url, type = 'website', keywords }) {
    const cleanDesc = (description || '').toString().replace(/<[^>]*>/g, '').substring(0, 155);
    return {
        SEO_TITLE: title,
        SEO_DESCRIPTION: cleanDesc,
        SEO_KEYWORDS: keywords,
        SEO_URL: url,
        OG_IMAGE: toAbsoluteImage(image),
        OG_TYPE: type
    }
}

// HOME
app.get('/', (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "home" }))
    const seo = getSEO({
        title: 'Vaughn Tech | SEO friendly Web Developer in Lagos',
        description: 'Vaughn Valour is a Full Stack Web Developer in Lagos building fast, modern, SEO-friendly websites and web apps that rank and convert.',
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/`,
        keywords: 'web developer Lagos, portfolio website, e-commerce website, business website, frontend developer Nigeria, seo friendly web developer'
    });
    const data = { SKILLS, UL: nav, HOME: true, BASE_URL, ...seo }
    if (req.headers['hx-request']) return res.render('partials/home', data)
    res.render('index', data)
});

// PROJECTS
app.get('/projects', async (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "projects" }))
    const categorySlug = (req.query.category || 'completed').toLowerCase().trim();
    const PROJECT_CATEGORIES = [
        { name: 'Completed', slug: 'completed', icon: '✅' },
        { name: 'Start a Project', slug: 'starter', icon: '🚀' }
    ];
    const CATS_UI = PROJECT_CATEGORIES.map(cat => ({ ...cat, activeClass: cat.slug === categorySlug ? 'active' : '' }));
    let filtered = PROJECTS;
    if (categorySlug !== 'all') filtered = PROJECTS.filter(p => (p.type || 'starter') === categorySlug);
    const projectsWithLinks = await Promise.all(filtered.map(async (proj) => {
        const projectUrl = `${BASE_URL}/projects/${proj.slug}`;
        const isCompleted = (proj.type || 'starter') === 'completed';
        let og = null;
        if (isCompleted && proj.liveLink) {
            og = await getLinkPreview(proj.liveLink);
        }
        const share = getShareMessages('projects', projectUrl, isCompleted ? proj.liveLink : null);
        let waMessage = isCompleted
            ? `Hi Valour, I saw your completed project:\n*${proj.projectName}*\nLive: ${proj.liveLink}\n\nCan you build something similar?`
            : `Hi Valour, I would like to start this project:\n*${proj.projectName}*\nLink: ${projectUrl}\n\nLet's discuss?`;
        console.log(`Project: ${proj.projectName} | isCompleted: ${isCompleted} | OG:`, og?.title);
        return {
            ...proj,
            IS_COMPLETED: isCompleted,
            IS_STARTER: !isCompleted,
            OG_TITLE: og?.title || proj.projectName,
            OG_DESC: og?.description || proj.projectDescription,
            OG_IMAGE: og?.image || proj.projectImage,
            OG_DOMAIN: og?.domain || (proj.liveLink ? new URL(proj.liveLink).hostname : ''),
            ...share,
            BUY_WHATSAPP_MESSAGE: encodeURIComponent(waMessage),
        }
    }));
    const seo = getSEO({
        title: categorySlug === 'completed' ? 'Completed Projects | Vaughn Tech' : 'Starter Projects You Can Launch Today | Vaughn Tech',
        description: categorySlug === 'completed' ? 'See completed websites built by Vaughn Valour.' : 'Pick a starter template and launch in days.',
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/projects?category=${categorySlug}`,
        keywords: 'web projects Lagos, starter websites'
    });
    const data = { PROJECTS: projectsWithLinks, PROJECT_CATEGORIES: CATS_UI, UL: nav, PROJECTSPAGE: true, BASE_URL, currentProjectCategory: categorySlug, ...seo }
    if (req.headers['hx-request']) return res.render('partials/projects', data)
    res.render('index', data)
});

app.get('/projects/:slug', (req, res) => {
    const matchedProject = PROJECTS.find(p => p.slug.toString() === req.params.slug);
    if (!matchedProject) return res.status(404).send("Not found");
    const related = PROJECTS.filter(p => p.category === matchedProject.category && p.slug !== matchedProject.slug).slice(0, 3);
    const projectUrl = `${BASE_URL}/projects/${matchedProject.slug}`;
    const share = getShareMessages('projects', projectUrl, matchedProject.type === 'completed' ? matchedProject.liveLink : null);
    const seo = getSEO({
        title: `${matchedProject.projectName} | Vaughn Tech`,
        description: matchedProject.projectDescription || matchedProject.description || `Check out ${matchedProject.projectName} built by Vaughn Valour`,
        image: matchedProject.projectImage || `/images/og-image.jpg`,
        url: projectUrl,
        type: 'article',
        keywords: `${matchedProject.projectName}, ${matchedProject.category}, web development Lagos`
    });
    res.render('project-single', { PROJECT: matchedProject, TITLE: matchedProject.projectName, RELATED: related, BASE_URL, ...share, ...seo });
});

// DEALS
app.get('/deals', (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "deals" }))
    const LIMIT = 10;
    const categorySlug = (req.query.category || 'all').toLowerCase().trim();
    const ALL_CATEGORIES = [{ name: 'All', slug: 'all', icon: '🔥' }, { name: 'Cars', slug: 'cars', icon: '🚗' }, { name: 'Laptops', slug: 'laptops', icon: '💻' }, { name: 'Phones', slug: 'phones', icon: '📱' }, { name: 'Gaming', slug: 'gaming', icon: '🎮' },];
    const CATEGORIES = ALL_CATEGORIES.map(cat => ({ ...cat, activeClass: cat.slug === categorySlug ? 'active' : '' }));
    let filteredDeals = DEALS;
    if (categorySlug !== 'all') filteredDeals = DEALS.filter(d => d.category.toLowerCase().includes(categorySlug));
    const page = parseInt(req.query.page) || 1;
    const paginatedDeals = filteredDeals.slice((page - 1) * LIMIT, page * LIMIT).map(deal => {
        const url = `${BASE_URL}/deals/${deal.slug}`;
        const share = getShareMessages('deals', url);
        return { ...deal, ...share }
    });
    const seo = getSEO({
        title: `${categorySlug === 'all' ? 'Tech' : categorySlug} Deals in Lagos | Vaughn Tech`,
        description: `Best ${categorySlug} deals in Lagos - phones, laptops, cars, gaming. Verified and affordable.`,
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/deals?category=${categorySlug}`,
        keywords: `${categorySlug} deals Lagos, cheap ${categorySlug}`
    });
    res.render('index', { DEALS: paginatedDeals, CATEGORIES, UL: nav, DEALSPAGE: true, hasMore: page * LIMIT < filteredDeals.length, nextPage: page + 1, currentCategory: categorySlug, BASE_URL, ...seo })
});

app.get('/deals/:slug', (req, res) => {
    const matchedDeal = DEALS.find(d => d.slug.toString() === req.params.slug);
    if (!matchedDeal) return res.status(404).send("Deal not found")
    const url = `${BASE_URL}/deals/${matchedDeal.slug}`;
    const share = getShareMessages('deals', url);
    const seo = getSEO({
        title: `${matchedDeal.dealName} - ₦${matchedDeal.price} | Deals`,
        description: `${matchedDeal.dealName} for ₦${matchedDeal.price}. ${matchedDeal.description || ''}`,
        image: matchedDeal.dealImage || `/images/og-image.jpg`,
        url: url,
        type: 'product',
        keywords: `${matchedDeal.dealName}, ${matchedDeal.category}, deals Lagos`
    });
    res.render('deal-single', { DEAL: matchedDeal, TITLE: matchedDeal.dealName, RELATED: DEALS.filter(r => r.category === matchedDeal.category && r.slug !== matchedDeal.slug).slice(0, 3), BASE_URL, ...share, ...seo });
});

// BLOGS
app.get('/blogs', (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "blogs" }))
    const categorySlug = (req.query.category || 'all').toLowerCase().trim();
    const BLOG_CATEGORIES = [{ name: 'All', slug: 'all', icon: '📰' }, { name: 'Tech News', slug: 'tech', icon: '💻' }, { name: 'Billionaire News', slug: 'billionaire', icon: '💰' }, { name: 'World News', slug: 'world', icon: '🌍' }, { name: 'Church Gist', slug: 'church', icon: '✝' }];
    const BLOG_CATS_UI = BLOG_CATEGORIES.map(cat => ({ ...cat, activeClass: cat.slug === categorySlug ? 'active' : '' }));
    let filteredBlogs = [...BLOGS];
    if (categorySlug !== 'all') filteredBlogs = filteredBlogs.filter(b => (b.category || '').toLowerCase().includes(categorySlug));
    const blogsWithShare = filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date)).map(blog => {
        const blogUrl = `${BASE_URL}/blogs/${blog.slug}`;
        const share = getShareMessages('blogs', blogUrl);
        return { ...blog, ...share }
    });
    const seo = getSEO({
        title: `Latest ${categorySlug === 'all' ? '' : categorySlug} News | Vaughn Tech Blog`,
        description: `Latest ${categorySlug} news, tech gist, billionaire news and church gist from Vaughn Valour.`,
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/blogs?category=${categorySlug}`,
        keywords: `${categorySlug} news, blog Lagos`
    });
    const data = { BLOGS: blogsWithShare, BLOG_CATEGORIES: BLOG_CATS_UI, UL: nav, BLOGSPAGE: true, BASE_URL, currentBlogCategory: categorySlug, ...seo }
    if (req.headers['hx-request']) return res.render('partials/blogs', data)
    res.render('index', data)
});

app.get('/blogs/:slug', (req, res) => {
    const matchedBlog = BLOGS.find(b => b.slug === req.params.slug);
    if (!matchedBlog) return res.status(404).send("Not found");
    const url = `${BASE_URL}/blogs/${matchedBlog.slug}`;
    const share = getShareMessages('blogs', url);
    const seo = getSEO({
        title: `${matchedBlog.blogName} | Vaughn Blog`,
        description: matchedBlog.excerpt || matchedBlog.description || matchedBlog.blogName,
        image: matchedBlog.blogImage || `/images/og-image.jpg`,
        url: url,
        type: 'article',
        keywords: `${matchedBlog.category}, ${matchedBlog.blogName}`
    });
    res.render('blog-single', { BLOG: matchedBlog, TITLE: matchedBlog.blogName, RELATED: BLOGS.filter(b => b.category === matchedBlog.category && b.slug !== matchedBlog.slug).slice(0, 3), POV: BLOGS.filter(p => p.pov === matchedBlog.pov && p.slug !== matchedBlog.slug).slice(0, 3), BASE_URL, ...share, ...seo });
});

// COURSES
app.get('/courses', (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "courses" }))
    const categorySlug = req.query.category || 'all';
    const ALL_CATEGORIES = [{ name: 'All', slug: 'all', icon: '🔥' }, { name: 'Coding', slug: 'Coding', icon: '👨‍💻' }, { name: 'Creative', slug: 'Creative', icon: '🎨' }, { name: 'Business', slug: 'Business', icon: '💼' }];
    const CATEGORIES = ALL_CATEGORIES.map(cat => ({ ...cat, active: cat.slug === categorySlug }));
    let filteredCourses = COURSES;
    if (categorySlug !== 'all') filteredCourses = COURSES.filter(d => d.category === categorySlug);
    filteredCourses = filteredCourses.map(c => {
        const url = `${BASE_URL}/courses/${c.slug}`;
        const share = getShareMessages('courses', url);
        return { ...c, ...share }
    });
    const seo = getSEO({
        title: `${categorySlug === 'all' ? 'Tech' : categorySlug} Courses in Lagos | Vaughn Tech`,
        description: `Learn ${categorySlug} with Vaughn Valour in Lagos. Practical courses that get you jobs.`,
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/courses?category=${categorySlug}`,
        keywords: `${categorySlug} courses Lagos`
    });
    const data = { COURSES: filteredCourses, CATEGORIES, UL: nav, COURSESPAGE: true, BASE_URL, ...seo }
    if (req.headers['hx-request']) return res.render('partials/courses', data)
    res.render('index', data)
});

app.get('/courses/:slug', (req, res) => {
    const slug = req.params.slug;
    const matchedCourse = COURSES.find(course => course.slug.toString() === slug);
    if (!matchedCourse) return res.status(404).send("Course not found")
    const url = `${BASE_URL}/courses/${matchedCourse.slug}`;
    const share = getShareMessages('courses', url);
    const seo = getSEO({
        title: `${matchedCourse.courseName} | Courses`,
        description: `${matchedCourse.courseName} - ₦${matchedCourse.price}. ${matchedCourse.description || ''}`,
        image: matchedCourse.courseImage || `/images/og-image.jpg`,
        url: url,
        type: 'product',
        keywords: `${matchedCourse.courseName}, courses Lagos`
    });
    res.render('course-single', { COURSE: matchedCourse, TITLE: matchedCourse.courseName, RELATED: COURSES.filter(r => r.category === matchedCourse.category && r.slug !== matchedCourse.slug).slice(0, 3), BASE_URL, ...share, ...seo });
});

app.get('/aboutMe', (req, res) => {
    const nav = UL.map(item => ({ ...item, isActive: item.key === "about Me" }))
    const seo = getSEO({
        title: 'About Vaughn Valour | Web Developer Lagos',
        description: 'About Vaughn Valour - Full Stack Developer in Lagos helping businesses build fast websites that convert.',
        image: `/images/og-image.jpg`,
        url: `${BASE_URL}/aboutMe`,
        keywords: 'about Vaughn Valour, web developer Lagos'
    });
    res.render('index', { UL: nav, ABOUTPAGE: true, ...seo })
});

module.exports = app;
if (require.main === module) {
    app.listen(port, () => console.log(`running on ${BASE_URL}`));
}