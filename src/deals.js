const DEALS = [
  // ===== GAMING DEALS =====
  {
    dealName: "Sony PlayStation 5 Pro 2TB Disc Edition",
    slug: "ps5-pro-2tb",
    dealImage: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop&q=80",
    dealDescription: "PS5 Pro 2TB. 8K Gaming, Ray Tracing, 2x DualSense Edge + 3 AAA games. Brand New.",
    dealContent: `
    <p>Get the ultimate gaming experience with PS5 Pro. 2x faster GPU, Advanced Ray Tracing, and AI upscaling.</p>
    <h3>Includes</h3>
    <ul>
      <li>PS5 Pro 2TB Disc Edition</li>
      <li>2x DualSense Edge Wireless Controllers</li>
      <li>Games: GTA 6, EA FC 26, Call of Duty 2026</li>
      <li>HDMI 2.1 Cable, Power Cable, USB-C Cable</li>
    </ul>
    <h3>Condition</h3>
    <p><b>Brand New, Sealed.</b> 1 Year Sony Warranty.</p>
  `,
    category: "Gaming Deals",
    price: "1,800,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Xbox Series X 2TB Galaxy Black Edition",
    slug: "xbox-series-x-2tb",
    dealImage: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800&h=600&fit=crop&q=80",
    dealDescription: "Xbox Series X 2TB. 4K 120fps, Quick Resume, Game Pass Ultimate 12 Months. Brand New.",
    dealContent: `
    <p>The most powerful Xbox ever. Load games in seconds with custom SSD.</p>
    <h3>Includes</h3>
    <ul>
      <li>Xbox Series X 2TB Console</li>
      <li>1x Wireless Controller</li>
      <li>12 Months Game Pass Ultimate</li>
      <li>HDMI 2.1 Cable, Power Cable</li>
    </ul>
    <h3>Condition</h3>
    <p><b>Brand New, Sealed.</b> 1 Year Microsoft Warranty.</p>
  `,
    category: "Gaming Deals",
    price: "1,500,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== phones =====
  {
    dealName: "Samsung Galaxy S26 Ultra 1TB - Titanium Black",
    slug: "samsung-S26-ultra-1tb",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9UcJl6gFuhfSTX6UzRudea5XQGkGfGbHyl4BB3CiOYS3kL6poKSo0blY&s=10",
    dealDescription: "Galaxy S26 Ultra 1TB. Snapdragon 8 Elite Gen 2, 200MP AI Camera, S-Pen, 7 Years Updates.",
    dealContent: `
    <p>The king of Android 2026. Built-in Galaxy AI and satellite messaging.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 1TB</li>
      <li><b>Chip:</b> Snapdragon 8 Elite Gen 2 for Galaxy</li>
      <li><b>Camera:</b> 200MP Main + 50MP Ultra + 50MP 5x + 10MP 10x</li>
      <li><b>Display:</b> 6.9-inch QHD+ 120Hz LTPO</li>
      <li><b>Battery:</b> 5500mAh with 65W charging</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed. 2 Years Warranty.</p>
  `,
    category: "phones",
    price: "1,400,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Samsung Galaxy Z Flip 8 512GB - Blue",
    slug: "galaxy-z-flip8-512gb",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCWQ2R8HbNumAtEdXEG6ifqffWyWQAVMR10jvihyypkgfgs4PAwX5D-U4&s=10",
    dealDescription: "Galaxy Z Flip 8 512GB. Snapdragon 8 Elite Gen 2. 4.5-inch Cover Screen, Galaxy AI.",
    dealContent: `
    <p>The most pocketable flagship. Now with bigger battery and less crease.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 512GB</li>
      <li><b>Chip:</b> Snapdragon 8 Elite Gen 2</li>
      <li><b>Main Display:</b> 6.9-inch AMOLED 120Hz</li>
      <li><b>Cover Display:</b> 4.5-inch AMOLED</li>
      <li><b>Camera:</b> 50MP + 12MP</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "phones",
    price: "1,300,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "iPhone 17 Air 512GB - Sky Blue",
    slug: "iphone-17-air-512gb",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_Dq0h3EcnAph1oGXmfD-2biLz8WQxQOmKi3jpBrmSYMNe3TDfTy3y6g&s=10",
    dealDescription: "iPhone 17 Air 512GB. Thinnest iPhone ever. A19 chip, Apple Intelligence, 48MP.",
    dealContent: `
    <p>Only 5.5mm thin. All-day battery with A19 efficiency.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 512GB</li>
      <li><b>Chip:</b> A19</li>
      <li><b>Camera:</b> 48MP Fusion</li>
      <li><b>Display:</b> 6.6-inch Super Retina XDR 120Hz</li>
      <li><b>Weight:</b> 145g</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed. 1 Year Apple Warranty.</p>
  `,
    category: "phones",
    price: "1,800,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "iPhone 17 Pro Max 1TB - Desert Titanium",
    slug: "iphone-17-pro-max-1tb",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXl_1fOHpAuk2IGpWvYydFeTdtaWpG6es7TMrAOeiy2CDzxYDyJ9201WTK&s=10",
    dealDescription: "iPhone 17 Pro Max 1TB. A19 Pro, 8x Optical Zoom, Apple Intelligence, Titanium.",
    dealContent: `
    <p>Apple's most advanced iPhone. Pro camera system with 8x tetraprism zoom.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 1TB</li>
      <li><b>Chip:</b> A19 Pro</li>
      <li><b>Camera:</b> 48MP Main, 48MP Ultra, 48MP 8x Telephoto</li>
      <li><b>Display:</b> 6.9-inch ProMotion 120Hz</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "phones",
    price: "3,500,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Google Pixel 10 Pro 1TB - Obsidian",
    slug: "pixel-10-pro-1tb",
    dealImage: "https://media.wired.com/photos/68aeaf0ccb3116c38839e10b/master/w_2560%2Cc_limit/Google%2520Pixel%252010%2520Series%2520SOURCE%2520Julian%2520Chokkattu.jpg",
    dealDescription: "Pixel 10 Pro 1TB. Tensor G5, Best AI Phone, 7 Years Updates, Magic Editor Pro.",
    dealContent: `
    <p>Pure Android + Gemini Nano. Best computational photography.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 1TB</li>
      <li><b>Chip:</b> Google Tensor G5</li>
      <li><b>Camera:</b> 50MP + 48MP Ultra + 48MP 5x</li>
      <li><b>Display:</b> 6.7-inch LTPO 120Hz</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "phones",
    price: "1,650,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Google Pixel 10 Pro Fold 1TB - Porcelain",
    slug: "pixel-10-pro-fold-1tb",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAZLhEsuB4dhhIpYRz9URaJjqdGSH4csmhUBgwU7Hbg&s=10",
    dealDescription: "Pixel 10 Pro Fold 1TB. 8.2-inch display, Tensor G5, Best AI for foldables.",
    dealContent: `
    <p>Fold for productivity. Unfold for AI. Translate, edit, multitask.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Storage:</b> 1TB</li>
      <li><b>Chip:</b> Google Tensor G5</li>
      <li><b>Main Display:</b> 8.2-inch LTPO 120Hz</li>
      <li><b>Camera:</b> 48MP + 10.5MP + 10.8MP</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "phones",
    price: "1,800,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== laptops =====
  {
    dealName: "Lenovo Legion 9i 2026 i9 RTX 5090",
    slug: "legion-9i-2026-rtx5090",
    dealImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnYE9-5MB-FktkxHbf6hBmpX1--X4NHXGbFwcLaI5NNOuTjwHaBHkB1E&s=10",
    dealDescription: "Legion 9i 2026. i9-14980HX, RTX 5090 24GB, Liquid Cooling, 3.2K 165Hz Mini-LED.",
    dealContent: `
    <p>World's first self-contained liquid cooling in a laptop. Creator + Gamer beast.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>CPU:</b> Intel Core i9-14980HX</li>
      <li><b>GPU:</b> NVIDIA RTX 5090 24GB</li>
      <li><b>RAM:</b> 64GB DDR5 5600MHz</li>
      <li><b>Storage:</b> 2TB NVMe SSD</li>
      <li><b>Display:</b> 16-inch 3.2K 165Hz Mini-LED</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed. 2 Years Warranty.</p>
  `,
    category: "laptops",
    price: "4,800,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "ASUS ROG Zephyrus G18 2026 RTX 5090",
    slug: "asus-rog-g18-2026",
    dealImage: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:420,cw:1080,ch:1080,q:80,w:1080/u22kCXQ4sHRuEhvNrHEZaR.jpg",
    dealDescription: "ROG Zephyrus G18 2026. Ryzen 9 9955HX, RTX 5090, 18-inch Nebula HDR 240Hz.",
    dealContent: `
    <p>Thinnest 18-inch gaming laptop. MUX switch + 240W charging.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>CPU:</b> AMD Ryzen 9 9955HX</li>
      <li><b>GPU:</b> NVIDIA RTX 5090 24GB</li>
      <li><b>RAM:</b> 32GB DDR5</li>
      <li><b>Storage:</b> 2TB SSD</li>
      <li><b>Display:</b> 18-inch QHD 240Hz Nebula HDR</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "laptops",
    price: "3,200,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Alienware m18 R3 i9 RTX 5090",
    slug: "alienware-m18-r3",
    dealImage: "https://images.cnbctv18.com/wp-content/uploads/2023/03/alienware-m18.jpeg?impolicy=website&width=640&height=360",
    dealDescription: "Alienware m18 R3. i9-14980HX, RTX 5090, 18-inch QHD+ 165Hz. Fully upgradeable.",
    dealContent: `
    <p>Desktop replacement with Cryo-tech cooling. RGB everything.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>CPU:</b> Intel i9-14980HX</li>
      <li><b>GPU:</b> NVIDIA RTX 5090 24GB</li>
      <li><b>RAM:</b> 64GB DDR5</li>
      <li><b>Storage:</b> 4TB SSD RAID</li>
      <li><b>Display:</b> 18-inch QHD+ 165Hz</li>
    </ul>
    <p><b>Condition:</b> Brand New, Sealed.</p>
  `,
    category: "laptops",
    price: "3,500,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== cars =====
  {
    dealName: "Lexus LX 600 F-Sport 2026 - Black",
    slug: "lexus-lx600-fsport-2026",
    dealImage: "https://www.nairaland.com/attachments/17403863_img20230703wa0002_jpegef435868b78183201af286a41c6d3862",
    dealDescription: "2026 Lexus LX 600 F-Sport. 3.5L V6 Twin Turbo, 409HP, Luxury + Offroad. Brand New.",
    dealContent: `
    <p>The most reliable luxury SUV. Mark Levinson audio + 4-zone climate.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Engine:</b> 3.5L V6 Twin Turbo 409HP</li>
      <li><b>Transmission:</b> 10-Speed Automatic</li>
      <li><b>Drivetrain:</b> 4WD with Torsen LSD</li>
      <li><b>Interior:</b> F-Sport Black Leather, 25 Speaker Mark Levinson</li>
    </ul>
    <p><b>Condition:</b> Brand New. 4 Years Warranty.</p>
  `,
    category: "cars",
    price: "380,000,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'
  },
  {
    dealName: "Cadillac Escalade V 2026 - White",
    slug: "cadillac-escalade-v-2026",
    dealImage: "https://dresdenmotors.com/wp-content/uploads/2025/08/1-71.jpg",
    dealDescription: "2026 Cadillac Escalade V. 6.2L Supercharged V8 682HP. AKG 36 Speaker. Brand New.",
    dealContent: `
    <p>American luxury + Supercharged power. 38-inch OLED display inside.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Engine:</b> 6.2L Supercharged V8 682HP</li>
      <li><b>Transmission:</b> 10-Speed Automatic</li>
      <li><b>Display:</b> 38-inch Curved OLED</li>
      <li><b>Audio:</b> AKG 36 Speaker Studio Reference</li>
    </ul>
    <p><b>Condition:</b> Brand New.</p>
  `,
    category: "cars",
    price: "170,000,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'
  },
  {
    dealName: "Mercedes-Benz GLE 63 S AMG 2026 - Grey",
    slug: "mercedes-gle63s-2026",
    dealImage: "https://machineswithsouls.com/wp-content/uploads/2025/08/mercedes-amg-gle-63s-coupe020.jpg",
    dealDescription: "2026 Mercedes GLE 63 S AMG. 4.0L V8 Biturbo 603HP + EQ Boost. Burmester 3D.",
    dealContent: `
    <p>Performance SUV. 0-100 in 3.8s. AMG Ride Control+ suspension.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Engine:</b> 4.0L V8 Biturbo 603HP + 21HP EQ Boost</li>
      <li><b>Transmission:</b> AMG Speedshift 9-Speed</li>
      <li><b>0-100:</b> 3.8 seconds</li>
      <li><b>Interior:</b> AMG Nappa Leather, Burmester 3D 13 Speaker</li>
    </ul>
    <p><b>Condition:</b> Brand New.</p>
  `,
    category: "cars",
    price: "175,900,000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'
  },
  {
    dealName: "Starlink Mini Portable Kit 2026 - Brand New",
    slug: "starlink-mini-portable-2026",
    dealImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "2026 Starlink Mini Portable. 150Mbps, backpack size, works with power bank. Brand New Sealed.",
    dealContent: `
    <p>Official SpaceX Starlink Mini for remote work, travel, farms. No more MTN wahala.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Speed:</b> Up to 150Mbps down / 20Mbps up</li>
      <li><b>Weight:</b> 1.1kg with kickstand, laptop size</li>
      <li><b>Power:</b> Works with 100W power bank for 4hrs</li>
      <li><b>In Box:</b> Dish, kickstand, adapter, cable + 1 month free</li>
    </ul>
    <p><b>Condition:</b> Brand New Sealed. 1 Year Warranty.</p>
  `,
    category: "accessories",
    price: "250,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  },
  {
    dealName: "Starlink Standard Gen 3 Kit - WiFi 6 Router",
    slug: "starlink-standard-gen3-2026",
    dealImage: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "2026 Starlink Standard Gen 3. 250Mbps, WiFi 6, covers full house. Best for homes & offices.",
    dealContent: `
    <p>Latest Gen 3 with WiFi 6 router. Handles 100+ devices, 300sqm coverage.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Speed:</b> 200-250Mbps unlimited data</li>
      <li><b>Router:</b> Gen 3 WiFi 6, 2x2 MIMO</li>
      <li><b>Coverage:</b> 3-bedroom flat, no dead zones</li>
      <li><b>Install:</b> Free installation support in Lagos</li>
    </ul>
    <p><b>Condition:</b> Brand New Sealed.</p>
  `,
    category: "accessories",
    price: "440,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  },
  {
    dealName: "Starlink Mini Business Bundle - Dish + Power Bank + Mesh",
    slug: "starlink-mini-business-bundle-2026",
    dealImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "Business Bundle: Mini + 20000mAh 100W Power Bank + TP-Link WiFi 6 Mesh Router. Work anywhere.",
    dealContent: `
    <p>Complete remote-work bundle. No NEPA, no problem.</p>
    <h3>Bundle Includes</h3>
    <ul>
      <li><b>Starlink Mini:</b> 150Mbps portable dish</li>
      <li><b>Power Bank:</b> 20000mAh 100W PD, powers Mini 4hrs + laptop</li>
      <li><b>Mesh Router:</b> WiFi 6, full house coverage, 50+ devices</li>
      <li><b>Free:</b> Ethernet adapter + wall mount</li>
    </ul>
    <p><b>Condition:</b> Brand New.</p>
  `,
    category: "accessories",
    price: "380,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  },
  {
    dealName: "Starlink Solar Power Station Bundle - 100W + 512Wh",
    slug: "starlink-solar-power-station-bundle-2026",
    dealImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "100W foldable solar panel + 512Wh power station. Powers Starlink + laptop all day off-grid.",
    dealContent: `
    <p>Best for farms, sites, villages. Charge in 4hrs sun.</p>
    <h3>Specs</h3>
    <ul>
      <li><b>Panel:</b> 100W foldable, waterproof, 23% efficiency</li>
      <li><b>Station:</b> 512Wh, 500W AC, 100W PD, 2x USB</li>
      <li><b>Runtime:</b> Starlink Mini 8hrs, Laptop 2 full charges, Phones 10x</li>
      <li><b>Weight:</b> 6kg total, portable</li>
    </ul>
    <p><b>Condition:</b> Brand New. 1 Year Warranty.</p>
  `,
    category: "accessories",
    price: "520,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  },
  {
    dealName: "MacBook Air M2 + Starlink Mini - Remote Work Kit",
    slug: "macbook-air-m2-starlink-kit-2026",
    dealImage: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "M2 256GB + Starlink Mini + ANC Headset. Ultimate work-from-anywhere kit.",
    dealContent: `
    <p>For CEOs and remote workers. Like new MacBook + brand new Starlink.</p>
    <h3>Kit Includes</h3>
    <ul>
      <li><b>MacBook Air M2:</b> 256GB, 8GB RAM, 13.6\" Liquid Retina</li>
      <li><b>Starlink Mini:</b> 150Mbps portable internet</li>
      <li><b>Headset:</b> Bluetooth 5.3 ANC, 40hrs battery, clear mic for Zoom</li>
      <li><b>Bonus:</b> Laptop stand + wireless mouse</li>
    </ul>
    <p><b>Condition:</b> Premium Used / Brand New.</p>
  `,
    category: "accessories",
    price: "1,250,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  },
  {
    dealName: "PS5 Disc + Starlink Mini - No Lag Gaming Bundle",
    slug: "ps5-starlink-gaming-bundle-2026",
    dealImage: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=1200&q=80&fm=jpg&fit=crop",
    dealDescription: "PS5 1TB Disc + Starlink Mini + Ethernet Adapter. <30ms ping, FIFA 26 + 3 Months PS Plus.",
    dealContent: `
    <p>Play online in Nigeria without lag. Starlink gives low ping for COD, FIFA, Fortnite.</p>
    <h3>Bundle Includes</h3>
    <ul>
      <li><b>PS5 Disc Edition:</b> 1TB, DualSense controller</li>
      <li><b>Starlink Mini:</b> For low-latency gaming</li>
      <li><b>Games:</b> FIFA 26 + Call of Duty + 3 Months PS Plus</li>
      <li><b>Network:</b> Ethernet adapter for wired 30ms ping</li>
    </ul>
    <p><b>Condition:</b> Brand New Sealed.</p>
  `,
    category: "accessories",
    price: "890,000",
    date: "2026-09-26",
    DATE: [{ date: "2026-09-26" }],
    CTA: 'Deal'
  }
  
]

module.exports = DEALS;