const PROJECTS = [
    {
        slug: 'hotel-website',
        projectImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200', // hotel
        projectName: "Fullstack Hotel Website",
        projectDescription: "Let Google suggest your Hotel to tourists, locals and more! A complete hotel booking and management website.",
        excerpt: "Responsive hotel website with booking features, room gallery, and CMS. Built with Astro, Tailwind, and Strapi",
        TOOL: [
            { name: 'Astro' },
            { name: 'Tailwind' },
            { name: 'Sanity' }
        ],
        category: 'Projects',
        clientReference: 'Hotel',
        placeholder: "EKO Hotels",

        price1: "N269,000",
        tier1Label: "TIER 1",
        features1: [
            { FEAT: '<span style="color: var(--accent)">✓ Responsive Website:</span> Photo gallery with descriptions and pricing, Homepage, Rooms, About, Contact Pages' },
            { FEAT: '<span style="color: var(--accent)">✓ Room Gallery:</span> Photo gallery with descriptions and pricing' },
            { FEAT: '<span style="color: var(--accent)">✓ Basic CMS:</span> Edit Text, Photos, and room info' },
            { FEAT: '<span style="color: var(--accent)">✓ Google Maps Integration:</span> Location + directions' }
        ],

        price2: "N469,000",
        tier2Label: "TIER 2",
        features2: [
            { FEAT: '<span style="color: var(--accent)">✓ Everything in Tier 1</span>' },
            { FEAT: '<span style="color: var(--accent)">✓ Online Booking System:</span> Customers can book rooms directly' },
            { FEAT: '<span style="color: var(--accent)">✓ User Login:</span> Customers can create accounts, leave reviews, save rooms, view booking history, get notifications and more.' },
            { FEAT: '<span style="color: var(--accent)">✓ Admin Dashboard:</span> Manage bookings, rooms, and customers' },
            { FEAT: '<span style="color: var(--accent)">✓ Payment Integration:</span> Paystack for online payments' }
        ]
    },
    {
        slug: 'real-estate-listings',
        projectImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200', // real estate
        projectName: "Real Estate Listings Website",
        projectDescription: "Showcase properties, get leads, and close deals faster. A modern platform for real estate agents.",
        excerpt: "Property listing platform with search, filters, and contact forms. Built with Astro and Tailwind",
        TOOL: [
            { name: 'Astro' },
            { name: 'Tailwind' },
            { name: 'Sanity' }
        ],
        category: 'Projects',
        clientReference: 'Real Estate',
        placeholder: "Adron Homes",

        price1: "N269,000",
        tier1Label: "TIER 1",
        features1: [
            { FEAT: '<span style="color: var(--accent)">✓ Property Listings:</span> Add unlimited properties with images and details' },
            { FEAT: '<span style="color: var(--accent)">✓ Search & Filter:</span> Filter by location, price, bedrooms, etc' },
            { FEAT: '<span style="color: var(--accent)">✓ Google Maps:</span> Property locations with directions' },
            { FEAT: '<span style="color: var(--accent)">✓ Contact Form:</span> Get leads directly to WhatsApp/Email' },
            { FEAT: '<span style="color: var(--accent)">✓ Mobile Responsive:</span> Looks great on all devices' }
        ],

        price2: "N549,000",
        tier2Label: "TIER 2",
        features2: [
            { FEAT: '<span style="color: var(--accent)">✓ Everything in Tier 1</span>' },
            { FEAT: '<span style="color: var(--accent)">✓ User Login:</span> Clients can create portfolio, save listings, liquidate portfolio onlime and many more.' },
            { FEAT: '<span style="color: var(--accent)">✓ Agent Dashboard:</span> Manage listings and leads' },
            { FEAT: '<span style="color: var(--accent)">✓ SEO Optimized:</span> Rank higher on Google' },
            { FEAT: '<span style="color: var(--accent)">✓ User Login:</span> Clients can create portfolio, save listings, liquidate portfolio onlime and many more.' }

        ]
    },
    {
        slug: 'ecommerce-website',
        projectImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200', // ecommerce
        projectName: "E-commerce Website",
        projectDescription: "Sell products online with ease. Complete store with cart, payment, and order management.",
        excerpt: "Full e-commerce store with Paystack, cart, and admin panel. Built with Node.js, Express, and MongoDB",
        TOOL: [
            { name: 'Node.js' },
            { name: 'Express' },
            { name: 'MongoDB' },
            { name: 'Paystack' }
        ],
        category: 'Projects',
        clientReference: 'Ecommerce',
        placeholder: "Justrite Online",

        price1: "N209,000",
        tier1Label: "TIER 1",
        features1: [
            { FEAT: '<span style="color: var(--accent)">✓ Product Catalog:</span> Unlimited products with categories' },
            { FEAT: '<span style="color: var(--accent)">✓ Shopping Cart:</span> Add to cart and checkout system' },
            { FEAT: '<span style="color: var(--accent)">✓ WhatsApp Checkout:</span> Customers checkout to whatsApp' }
        ],

        price2: "N499,000",
        tier2Label: "TIER 2",
        features2: [
            { FEAT: '<span style="color: var(--accent)">✓ Everything in Tier 1</span>' },
            { FEAT: '<span style="color: var(--accent)">✓ User Accounts:</span> Customer login and order history' },
            { FEAT: '<span style="color: var(--accent)">✓ Paystack Payment:</span> Accept cards and bank transfers' },
            { FEAT: '<span style="color: var(--accent)">✓ Order Management:</span> Track orders and customers' },
            { FEAT: '<span style="color: var(--accent)">✓ Admin Dashboard:</span> Manage products, orders, and inventory' }
        ]
    },
    {
        slug: 'portfolio-website',
        projectImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200', // portfolio
        projectName: "Portfolio Website",
        projectDescription: "Show off your work and get clients. Clean, fast, and SEO optimized portfolio site.",
        excerpt: "Modern portfolio to showcase projects and services. Built with Astro and Tailwind",
        TOOL: [
            { name: 'Astro' },
            { name: 'Tailwind' },
            { name: 'Strapi' }
        ],
        category: 'Projects',
        clientReference: 'Portfolio',
        placeholder: "Tony Elumelu",

        price1: "N124,000",
        tier1Label: "TIER 1",
        features1: [
            { FEAT: '<span style="color: var(--accent)">✓ Project Showcase:</span> Display your best work' },
            { FEAT: '<span style="color: var(--accent)">✓ About & Contact:</span> Let clients reach you easily' },
            { FEAT: '<span style="color: var(--accent)">✓ Fast & SEO Ready:</span> Optimized for Google' },
            { FEAT: '<span style="color: var(--accent)">✓ Mobile First:</span> Perfect on phone and desktop' }
        ],

        price2: "N249,000",
        tier2Label: "TIER 2",
        features2: [
            { FEAT: '<span style="color: var(--accent)">✓ Everything in Tier 1</span>' },
            { FEAT: '<span style="color: var(--accent)">✓ Blog Section:</span> Share articles and rank on Google' },
            { FEAT: '<span style="color: var(--accent)">✓ WhatsApp Chat:</span> Direct chat button for clients' },
            { FEAT: '<span style="color: var(--accent)">✓ Custom Animations:</span> Modern and interactive design' }
        ]
    }
]

module.exports = PROJECTS;