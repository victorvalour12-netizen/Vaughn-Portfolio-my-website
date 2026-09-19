const DEALS = [
  // ===== LAPTOP DEALS - 12 =====

  // ===== GAMING DEALS =====
  {
    dealName: "Sony PlayStation 5 Pro 2TB Disc Edition",
    slug: "ps5-pro-2tb",
    dealImage: "https://image.api.playstation.com/vulcan/ap/rnd/202311/2827/6a0f3b8c8f8c8f8c8f8c8f8c8f8c8f8c8.png",
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
    price: "1800000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Xbox Series X 2TB Galaxy Black Edition",
    slug: "xbox-series-x-2tb",
    dealImage: "https://assets.xboxservices.com/assets/8f/2d/8f2d8f2d-8f2d-8f2d-8f2d-8f2d8f2d8f2d.jpg",
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
    price: "1500000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== PHONE DEALS =====
  {
    dealName: "Samsung Galaxy S27 Ultra 1TB - Titanium Black",
    slug: "samsung-s27-ultra-1tb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/samsung-galaxy-s27-ultra/lifestyle/-1024w2/gsmarena_001.jpg",
    dealDescription: "Galaxy S27 Ultra 1TB. Snapdragon 8 Elite Gen 2, 200MP AI Camera, S-Pen, 7 Years Updates.",
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
    category: "Phone Deals",
    price: "3400000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Samsung Galaxy Z Flip 8 512GB - Blue",
    slug: "galaxy-z-flip8-512gb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/samsung-galaxy-z-flip8/lifestyle/-1024w2/gsmarena_001.jpg",
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
    category: "Phone Deals",
    price: "2300000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "iPhone 17 Air 512GB - Sky Blue",
    slug: "iphone-17-air-512gb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/apple-iphone-17-air/lifestyle/-1024w2/gsmarena_001.jpg",
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
    category: "Phone Deals",
    price: "2100000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "iPhone 17 Pro Max 1TB - Desert Titanium",
    slug: "iphone-17-pro-max-1tb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/apple-iphone-17-pro-max/lifestyle/-1024w2/gsmarena_001.jpg",
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
    category: "Phone Deals",
    price: "3500000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Google Pixel 10 Pro 1TB - Obsidian",
    slug: "pixel-10-pro-1tb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/google-pixel-10-pro/lifestyle/-1024w2/gsmarena_001.jpg",
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
    category: "Phone Deals",
    price: "2800000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Google Pixel 10 Pro Fold 1TB - Porcelain",
    slug: "pixel-10-pro-fold-1tb",
    dealImage: "https://fdn.gsmarena.com/imgroot/reviews/26/google-pixel-10-pro-fold/lifestyle/-1024w2/gsmarena_001.jpg",
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
    category: "Phone Deals",
    price: "3400000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== LAPTOP DEALS =====
  {
    dealName: "Lenovo Legion 9i 2026 i9 RTX 5090",
    slug: "legion-9i-2026-rtx5090",
    dealImage: "https://p1-ofp.static.pub/fes/cms/2026/01/15/legion9i-gallery-01.jpg",
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
    category: "Laptop Deals",
    price: "7800000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "ASUS ROG Zephyrus G18 2026 RTX 5090",
    slug: "asus-rog-g18-2026",
    dealImage: "https://dlcdnwebimgs.asus.com/files/media/8C2C3D4E-5F6A-7B8C-9D0E-1F2A3B4C5D6E.jpg",
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
    category: "Laptop Deals",
    price: "7200000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },
  {
    dealName: "Alienware m18 R3 i9 RTX 5090",
    slug: "alienware-m18-r3",
    dealImage: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-r3/media-gallery/aw-m18-r3-gallery-1.psd",
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
    category: "Laptop Deals",
    price: "8500000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Buy'
  },

  // ===== CAR DEALS =====
  {
    dealName: "Lexus LX 600 F-Sport 2026 - Black",
    slug: "lexus-lx600-fsport-2026",
    dealImage: "https://www.lexus.com/content/dam/lexus/2026/lx/trim/fsport/gallery/exterior/01.jpg",
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
    category: "Car Deals",
    price: "380000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'
  },
  {
    dealName: "Cadillac Escalade V 2026 - White",
    slug: "cadillac-escalade-v-2026",
    dealImage: "https://www.cadillac.com/content/dam/cadillac/na/us/en/vehicles/2026/escalade/gallery/01-images/2026-escalade-v-exterior-01.jpg",
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
    category: "Car Deals",
    price: "420000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'
  },
  {
    dealName: "Mercedes-Benz GLE 63 S AMG 2026 - Grey",
    slug: "mercedes-gle63s-2026",
    dealImage: "https://www.mercedes-benz.com/content/dam/brandhub/assets/mbpassion/stories/gle63s/2026/mercedes-benz-gle-63-s-amg-v167-exterior-3400x1440.jpg",
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
    category: "Car Deals",
    price: "450000",
    date: "2026-08-27",
    DATE: [{ date: "2026-08-27" }],
    CTA: 'Deal'

  }
]

module.exports = DEALS;