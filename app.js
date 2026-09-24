require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');




const mustacheExpress = require('mustache-express');
const SKILLS = require('./src/skills');
const PROJECTS = require('./projects');
const DEALS = require('./src/deals');
const COURSES = require('./src/courses');
const BLOGS = require('./src/blogs');
const UL = require('./src/ul');



app.use(express.static(path.join(__dirname, "src", "public")));

app.set('views', path.join(__dirname, 'src', 'pages'));
app.set('view engine', 'mustache');
app.engine('mustache', mustacheExpress());



app.get('/', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "home"
    }))

    const data = { SKILLS: SKILLS, UL: nav, HOME: true, BASE_URL: BASE_URL }

    if (req.headers['hx-request']) {
        return res.render('partials/home', data)
    }

    res.render('index', data)
});

app.get('/projects', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "projects"
    }))

    const data = { PROJECTS: PROJECTS, UL: nav, PROJECTSPAGE: true, BASE_URL: BASE_URL }

    if (req.headers['hx-request']) {
        return res.render('partials/projects', data)
    }

    res.render('index', data)
});

app.get('/projects/:slug', (req, res) => {
    const slug = req.params.slug;
    const matchedProject = PROJECTS.find(project => project.slug.toString() === slug);

    const related = PROJECTS.filter(p =>
        p.category === matchedProject.category && p.slug.toString() !== slug
    ).slice(0, 3)

    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

    res.render('project-single', {
        PROJECT: matchedProject,
        TITLE: matchedProject.projectName,
        RELATED: related,
        BASE_URL: BASE_URL
    });
})


// DEALS LIST PAGE

const LIMIT = 10;

app.get('/deals', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "deals"
    }))

    const ALL_CATEGORIES = [
        { name: 'All', slug: 'all', icon: '🔥' },
        { name: 'Cars', slug: 'cars', icon: '🚗' },
        { name: 'Laptops', slug: 'laptops', icon: '💻' },
        { name: 'Phones', slug: 'phones', icon: '📱' },
        { name: 'Gaming', slug: 'gaming', icon: '🎮' },
    ];

const categorySlug = (req.query.category || 'all').toLowerCase().trim();

const CATEGORIES = ALL_CATEGORIES.map(cat => {
  const isActive = cat.slug.toLowerCase() === categorySlug;
  return {
    ...cat,
    active: isActive,
    activeClass: isActive ? 'active' : '' // we add a string class directly
  }
});


    // Make filter case-insensitive and match your real data
    let filteredDeals = DEALS;
    if (categorySlug !== 'all') {
        filteredDeals = DEALS.filter(d => 
          d.category.toLowerCase().includes(categorySlug) || 
          d.category.toLowerCase() === categorySlug
        );
    }

    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * LIMIT;
    const endIndex = page * LIMIT;
    const paginatedDeals = filteredDeals.slice(startIndex, endIndex);

    const data = {
        DEALS: paginatedDeals,
        CATEGORIES: CATEGORIES,
        UL: nav,
        DEALSPAGE: true,
        hasMore: endIndex < filteredDeals.length,
        nextPage: page + 1,
        currentCategory: categorySlug,
        BASE_URL: BASE_URL
    }

    // ALWAYS full page now - no more htmx partial
    res.render('index', data)
});

// NEW API route for infinite scroll JS
// app.get('/api/deals', (req, res) => {
//     const categorySlug = req.query.category || 'all';
//     const page = parseInt(req.query.page) || 1;

//     let filteredDeals = DEALS;
//     if (categorySlug !== 'all') {
//         filteredDeals = DEALS.filter(d => d.category === categorySlug);
//     }

//     const startIndex = (page - 1) * LIMIT;
//     const endIndex = page * LIMIT;

//     res.json({
//         DEALS: filteredDeals.slice(startIndex, endIndex),
//         hasMore: endIndex < filteredDeals.length
//     });
// });

// SINGLE DEAL PAGE
app.get('/deals/:slug', (req, res) => {
    const slug = req.params.slug;
    const matchedDeal = DEALS.find(deal => deal.slug.toString() === slug);

    if (!matchedDeal) return res.status(404).send("Deal not found")

    const related = DEALS.filter(r =>
        r.category === matchedDeal.category && r.slug.toString() !== slug
    ).slice(0, 3)

    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

    const message = `Hi Valour, I would like to get this item:\n*${matchedDeal.dealName}*\nPrice: ₦${matchedDeal.price}\nLink: ${BASE_URL}/deals/${matchedDeal.slug}\nImage: ${BASE_URL}${matchedDeal.dealImage}\n\nIs the deal still available?`;

    res.render('deal-single', {
        DEAL: matchedDeal,
        TITLE: matchedDeal.dealName,
        RELATED: related,
        BASE_URL: BASE_URL,
        BUY_WHATSAPP_MESSAGE: encodeURIComponent(message) // ADD THIS LINE
    });
});



app.get('/courses', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "courses"
    }))

    // 1. Define categories with icons
    const ALL_CATEGORIES = [
        { name: 'All', slug: 'all', icon: '🔥' },
        { name: 'Coding', slug: 'Coding', icon: '👨‍💻' },
        { name: 'Creative', slug: 'Creative', icon: '🎨' },
        { name: 'Business', slug: 'Business', icon: '💼' }
    ];

    const categorySlug = req.query.category || 'all';

    // Mark active
    const CATEGORIES = ALL_CATEGORIES.map(cat => ({
        ...cat,
        active: cat.slug === categorySlug
    }));

    // Filter deals. Your DEALS items MUST have `category: 'gaming'`
    let filteredCourses = COURSES;
    if (categorySlug !== 'all') {
        filteredCourses = COURSES.filter(d => d.category === categorySlug);
    }

    const data = {
        COURSES: filteredCourses,
        CATEGORIES: CATEGORIES,
        UL: nav,
        COURSESPAGE: true,
        BASE_URL: BASE_URL
    }

    // HTMX partial swap
    if (req.headers['hx-request']) {
        return res.render('partials/courses', data)
    }
    // Full page load
    res.render('index', data)
});


// SINGLE COURSE PAGE
app.get('/courses/:slug', (req, res) => {
    const slug = req.params.slug;
    const matchedCourse = COURSES.find(course => course.slug.toString() === slug);

    if (!matchedCourse) return res.status(404).send("Course not found")

    const related = COURSES.filter(r =>
        r.category === matchedCourse.category && r.slug.toString() !== slug
    ).slice(0, 3)

    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

    const message = `Hi Valour, I would like to register for this course:\n*${matchedCourse.courseName}*\nPrice: ₦${matchedCourse.price}\nLink: ${BASE_URL}/deals/${matchedCourse.slug}\nImage: ${BASE_URL}${matchedCourse.courseImage}\n\nWhere do I pay and where's your Loaction?`;

    res.render('course-single', {
        COURSE: matchedCourse,
        TITLE: matchedCourse.courseName,
        RELATED: related,
        BASE_URL: BASE_URL,
        BUY_WHATSAPP_MESSAGE: encodeURIComponent(message) // ADD THIS LINE
    });
});



app.get('/blogs', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "blogs"
    }))

    // 1. ADD THIS: Sort newest first
    const sortedBlogs = [...BLOGS].sort((a, b) => new Date(b.date) - new Date(a.date));

    // 2. CHANGE THIS: use sortedBlogs instead of BLOGS
    const data = { BLOGS: sortedBlogs, UL: nav, BLOGSPAGE: true, BASE_URL: BASE_URL}

    if (req.headers['hx-request']) {
        return res.render('partials/blogs', data)
    }

    res.render('index', data)
});

app.get('/blogs/:slug', (req, res) => {
    const id = req.params.slug;
    const matchedBlog = BLOGS.find(blog => blog.slug === id);

    const related = BLOGS.filter(b =>
        b.category === matchedBlog.category && b.slug !== id
    ).slice(0, 3)

    const matchedPov = BLOGS.find(blog => blog.slug === id);

    const pov = BLOGS.filter(p =>
        p.pov === matchedPov.pov && p.slug !== id
    ).slice(0, 3)

    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

    res.render('blog-single', {
        BLOG: matchedBlog,
        TITLE: matchedBlog.blogName,
        RELATED: related,
        POV: pov,
        BASE_URL: BASE_URL
    });
})


app.get('/aboutMe', (req, res) => {
    const nav = UL.map(item => ({
        ...item,
        isActive: item.key === "about Me"
    }))



    res.render('index', { UL: nav, ABOUTPAGE: true })
});

app.get('/:contactId', (req, res) => {
    const id = req.params.contactId;

    const matchedContact = SKILLS.find(skill => skill.contactId.toString() === id);

    const related = SKILLS.filter(s =>
        s.category === matchedContact.category && s.contactId.toString() !== id
    ).slice(0, 3)

    const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

    res.render('contact-single', {
        CONTACT: matchedContact,
        TITLE: matchedContact.contactType,
        RELATED: related,
        BASE_URL: BASE_URL
    });
})





const port = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${port}`; // <- ADD THIS

// <- ADD THIS MIDDLEWARE - after app = express()
app.use((req, res, next) => {
  res.locals.BASE_URL = BASE_URL;
  next();
});

// ... all your app.get() routes

module.exports = app;

if (require.main === module) {
    app.listen(port, () => { // <- use port variable, not process.env.PORT again
        console.log(`running on ${BASE_URL}`);
    });
}