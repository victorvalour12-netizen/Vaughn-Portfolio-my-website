const BLOGS = [
    // --- TECH NEWS 💻 ---
    {
        slug: 'nigeria-launches-first-ai-data-center-lagos',
        blogName: "Nigeria Launches First AI Data Center in Lagos Worth $200M",
        blogContent: "<p>Lagos just made history. The Federal Government in partnership with private tech firms has commissioned Nigeria's first Tier-4 AI-ready data center in Yaba.</p><p>The facility promises 99.99% uptime, 10MW power capacity and will host AI models for banks, startups and universities. Experts say this will cut cloud costs by 60% for local companies who currently host on AWS Europe.</p><p>Minister of Communications says 'This is the start of data sovereignty for Nigeria.'</p>",
        category: 'Tech News',
        character: 'Tech Reporter',
        date: "2026-09-25",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '25' }],
        blogImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'openai-gpt-6-rumors-what-to-expect',
        blogName: "OpenAI GPT-6 Rumors: What We Know So Far",
        blogContent: "<p>Leaks from Silicon Valley suggest GPT-6 could launch early 2027 with full video reasoning and 10M token context. Unlike GPT-5, it will be able to run offline agents for days.</p><p>Sam Altman teased 'It will feel less like a chatbot and more like a colleague.' Developers in Lagos are already preparing to build local plugins for it.</p>",
        category: 'Tech News',
        character: 'Vaughn Valour',
        date: "2026-09-24",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '24' }],
        blogImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'starlink-mini-now-available-nigeria-price',
        blogName: "Starlink Mini Now Available in Nigeria For ₦250,000",
        blogContent: "<p>Elon Musk's Starlink has officially launched Starlink Mini in Nigeria. The portable dish is the size of a laptop and can fit in a backpack.</p><p>It offers 150Mbps speed and works with a power bank. Jumia sold out in 6 hours after launch. Perfect for remote workers and travelers.</p>",
        category: 'Tech News',
        character: 'Gadget Guy',
        date: "2026-09-22",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '22' }],
        blogImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'why-every-lagos-business-needs-website-2026',
        blogName: "Why Every Business in Lagos Needs a Website in 2026 (Not Just Instagram)",
        blogContent: "<p>If your business is only on Instagram, you are invisible on Google. New data shows 87% of Lagosians Google a business before buying.</p><p>A fast, SEO-friendly website builds trust, takes payments while you sleep, and ranks on Google. In this post, we break down how a ₦150k website can bring ₦1M+ monthly.</p>",
        category: 'Tech News',
        character: 'Vaughn Valour',
        date: "2026-09-20",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '20' }],
        blogImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fm=jpg&fit=crop'
    },

    // --- BILLIONAIRE NEWS 💰 ---
    {
        slug: 'dangote-becomes-2nd-richest-in-africa-again',
        blogName: "Dangote Overtakes South African Billionaire To Become 2nd Richest in Africa",
        blogContent: "<p>Aliko Dangote is back at number 2. According to Forbes, his net worth rose to $15.2B after Dangote Refinery hit full 650,000 barrels per day production.</p><p>The refinery now supplies 80% of Nigeria's fuel needs and exports to 5 countries. Dangote says he plans to list the refinery on NGX in 2027.</p>",
        category: 'Billionaire News',
        character: 'Forbes Africa',
        date: "2026-09-26",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '26' }],
        blogImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'elon-musk-becomes-first-500billion-man',
        blogName: "Elon Musk Becomes World's First $500 Billion Man After Tesla Stock Surge",
        blogContent: "<p>History made. Elon Musk's net worth crossed $500 Billion yesterday, making him the richest human ever. Tesla stock jumped 18% after its Robotaxi was approved in California and Texas.</p><p>His wealth is now more than the GDP of Nigeria. He tweeted 'We are just getting started'.</p>",
        category: 'Billionaire News',
        character: 'Tech Reporter',
        date: "2026-09-25",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '25' }],
        blogImage: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'burna-boy-joins-billionaire-list-after-200m-deal',
        blogName: "Burna Boy Joins Billionaire List After $200M Atlantic Records Deal",
        blogContent: "<p>Afro-fusion star Burna Boy has reportedly signed a new $200M deal that includes masters, touring, and his new cannabis brand. This makes him the youngest Nigerian artist to hit billionaire status in Naira terms.</p><p>Fans are celebrating online, calling him 'African Giant for a reason'.</p>",
        category: 'Billionaire News',
        character: 'Entertainment Desk',
        date: "2026-09-23",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '23' }],
        blogImage: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'wizkid-buys-private-jet-for-40million',
        blogName: "Wizkid Acquires $40M Private Jet, Joins Elite Club of African Owners",
        blogContent: "<p>Wizkid was spotted landing in Lagos with his new Bombardier Challenger 605 jet. The jet, reportedly worth $40M, was customized with 'More Love, Less Ego' inscription.</p><p>He is now the 3rd Nigerian artist to own a private jet after Davido and Burna Boy.</p>",
        category: 'Billionaire News',
        character: 'Entertainment Desk',
        date: "2026-09-21",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '21' }],
        blogImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&fm=jpg&fit=crop'
    },

    // --- WORLD NEWS 🌍 ---
    {
        slug: 'apple-iphone-17-pro-max-breaks-sales-record',
        blogName: "Apple iPhone 17 Pro Max Breaks Sales Record in 48 Hours",
        blogContent: "<p>Apple has done it again. The iPhone 17 Pro Max sold 10 million units in 48 hours globally. The new transparent design and AI battery that lasts 3 days is driving demand.</p><p>In Nigeria, Computer Village price starts at ₦2.8M but people are still pre-ordering.</p>",
        category: 'World News',
        character: 'World Reporter',
        date: "2026-09-26",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '26' }],
        blogImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'japa-rate-drops-as-canada-tightens-visa-rules',
        blogName: "Japa Rate Drops 40% As Canada and UK Tighten Student Visa Rules",
        blogContent: "<p>For the first time in 3 years, Japa rate from Nigeria dropped. Canada now requires ₦35M proof of funds and UK has banned dependents for Masters students.</p><p>Many youths are now turning to remote tech jobs and local businesses instead. Experts call it 'Reverse Japa'.</p>",
        category: 'World News',
        character: 'World Reporter',
        date: "2026-09-24",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '24' }],
        blogImage: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'earthquake-hits-morocco-again-2026',
        blogName: "6.2 Magnitude Earthquake Hits Morocco Again, 300 Injured",
        blogContent: "<p>Tragedy in North Africa. A 6.2 magnitude earthquake hit Marrakesh this morning. Buildings collapsed and over 300 people are injured. Rescue teams are searching for survivors.</p><p>Nigerian community in Morocco says no Nigerian casualty reported yet.</p>",
        category: 'World News',
        character: 'World Reporter',
        date: "2026-09-23",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '23' }],
        blogImage: 'https://images.unsplash.com/photo-1525749851863-58c0d7b2b3d3?w=1200&q=80&fm=jpg&fit=crop'
    },
    {
        slug: 'us-election-2026-surprise-winner',
        blogName: "US Mid-Term Election 2026: Shock As 32-Year-Old Becomes Youngest Senator",
        blogContent: "<p>In a stunning upset, 32-year-old tech founder Maya Rodriguez won a Senate seat in California, beating a 20-year incumbent. She ran her campaign fully on TikTok and AI ads.</p><p>Analysts say this shows Gen Z is taking over US politics.</p>",
        category: 'World News',
        character: 'World Reporter',
        date: "2026-09-22",
        DATE: [{ date: '2026' }, { date: 'SEPTEMBER' }, { date: '22' }],
        blogImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f2?w=1200&q=80&fm=jpg&fit=crop'
    }
];

module.exports = BLOGS;