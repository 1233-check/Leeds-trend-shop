/* ============================================
   Leeds Trend Shop — Product Data (23 Products)
   ============================================ */

const PRODUCTS = [
  // ─── JACKETS & OUTERWEAR ───
  {
    id: "black-pearl-button-cardigan",
    title: "Black Pearl-Button Cardigan",
    price: 149.00, compareAt: 199.00,
    category: "Jackets", tags: ["Outerwear","Jackets","New Arrival"],
    image: "images/products/black-pearl-button-cardigan.png",
    description: "Channel timeless Parisian elegance with this exquisite black bouclé cardigan. Pearl-and-gold button detailing with contrast chain trim along the collarless neckline, pockets, and cuffs.",
    sizes: ["XS","S","M","L","XL"],
    details: ["Bouclé textured fabric","Pearl & gold buttons","Chain trim","Four front pockets","Collarless design"],
    featured: true
  },
  {
    id: "maroon-cropped-faux-fur-trim-jacket",
    title: "Maroon Cropped Fur Trim Jacket",
    price: 229.00, compareAt: 299.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Bestseller"],
    image: "images/products/maroon-cropped-faux-fur-trim-jacket.png",
    description: "Make a statement with this luxurious burgundy cropped bomber jacket. Sumptuous faux fur trim on the oversized hood and cuffs, elasticated waistband for a flattering cropped silhouette.",
    sizes: ["S","M","L","XL"],
    details: ["Premium shell fabric","Faux fur hood & cuffs","Elasticated waistband","Zip front closure","Cropped bomber fit"],
    featured: true
  },
  {
    id: "black-faux-fur-jacket",
    title: "Black Faux Fur Jacket",
    price: 259.00, compareAt: 349.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Bestseller"],
    image: "images/products/black-faux-fur-jacket.png",
    description: "Pure luxury in a cropped silhouette. Full black faux fur construction with plush, deep-pile texture. Lightweight yet incredibly warm – the ultimate layering piece.",
    sizes: ["S","M","L","XL"],
    details: ["Full faux fur body","Deep-pile texture","Cropped length","Hook & eye closure","Fully lined"],
    featured: true
  },
  {
    id: "maroon-leather-faux-fur-trim-jacket",
    title: "Maroon Leather Fur Trim Jacket",
    price: 279.00, compareAt: 369.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Premium"],
    image: "images/products/maroon-leather-faux-fur-trim-jacket.png",
    description: "A masterful blend of edge and elegance. Burgundy faux leather with a stunning cream faux fur oversized collar and cuff trim. Cropped biker-inspired cut with zip closure.",
    sizes: ["S","M","L","XL"],
    details: ["Premium faux leather","Cream faux fur collar & cuffs","Zip front closure","Cropped biker fit","Fully lined"],
    featured: false
  },
  {
    id: "cream-leather-faux-fur-trim-jacket",
    title: "Cream Leather Fur Trim Jacket",
    price: 289.00, compareAt: 379.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Premium"],
    image: "images/products/cream-leather-faux-fur-trim-jacket.png",
    description: "Effortlessly chic cream faux leather jacket with oversized matching faux fur collar and cuffs. Gold hardware accents and four front pockets with decorative clasps.",
    sizes: ["S","M","L","XL"],
    details: ["Cream faux leather","Faux fur collar & cuffs","Gold hardware","Four front pockets","Trucker-style fit"],
    featured: false
  },
  {
    id: "black-leather-faux-fur-trim-jacket",
    title: "Black Leather Fur Trim Jacket",
    price: 249.00, compareAt: 329.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Bestseller"],
    image: "images/products/black-leather-faux-fur-trim-jacket.png",
    description: "The ultimate versatile outerwear. Black faux leather hooded bomber with matching faux fur trim on the hood and cuffs. Elasticated waistband and zip closure.",
    sizes: ["S","M","L","XL"],
    details: ["Faux leather","Faux fur hood & cuffs","Elasticated waistband","Zip front closure","Bomber fit"],
    featured: true
  },
  {
    id: "red-icon2-puffer-jacket",
    title: "Red ICON2 Puffer Jacket",
    price: 199.00, compareAt: 269.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Streetwear"],
    image: "images/products/red-icon2-puffer-jacket.png",
    description: "Turn heads in this vibrant red quilted puffer jacket. Oversized padded silhouette with bold triangular logo badge, high collar, zip front and spacious pockets.",
    sizes: ["S","M","L","XL","XXL"],
    details: ["Quilted puffer","Padded insulation","Logo badge","High collar","Zip front with pockets"],
    featured: false
  },
  {
    id: "black-faux-leather-fur-trimmed-coat",
    title: "Black Fur Trimmed Leather Coat",
    price: 329.00, compareAt: 429.00,
    category: "Jackets", tags: ["Outerwear","Coats","Premium"],
    image: "images/products/black-faux-leather-fur-trimmed-coat.png",
    description: "Commanding elegance redefined. Mid-length black faux leather coat with luxurious faux fur collar, cuffs and hem trim. Belted waist creates a flattering hourglass silhouette.",
    sizes: ["S","M","L","XL"],
    details: ["Premium faux leather","Faux fur collar, cuffs & hem","Belted waist","Mid-length cut","Fully lined"],
    featured: false
  },
  {
    id: "lv-pattern-puffer-jacket",
    title: "Designer Pattern Puffer Jacket",
    price: 219.00, compareAt: 299.00,
    category: "Jackets", tags: ["Outerwear","Jackets","Streetwear"],
    image: "images/products/lv-pattern-puffer-jacket.png",
    description: "Stand out with this grey monogram-patterned quilted puffer. All-over designer-inspired print in charcoal and black. Hooded design with padded insulation.",
    sizes: ["S","M","L","XL","XXL"],
    details: ["Monogram print","Quilted puffer","Padded insulation","Hooded design","Zip front"],
    featured: false
  },

  // ─── SKIRTS ───
  {
    id: "purple-silk-maxi-skirt",
    title: "Purple Silk Maxi Skirt",
    price: 89.00, compareAt: 129.00,
    category: "Skirts", tags: ["Skirts","Bottoms","New Arrival"],
    image: "images/products/purple-silk-maxi-skirt.png",
    description: "Stunning purple satin silk maxi skirt with a luxurious sheen. Elasticated waistband for a flattering, comfortable fit. Perfect for evening occasions.",
    sizes: ["XS","S","M","L","XL"],
    details: ["100% Premium Satin","Elasticated waistband","Full-length maxi","Machine washable 30°C","Made in Italy"],
    featured: true
  },
  {
    id: "bronze-pleated-maxi-skirt",
    title: "Bronze Pleated Maxi Skirt",
    price: 95.00, compareAt: 139.00,
    category: "Skirts", tags: ["Skirts","Bottoms","New Arrival"],
    image: "images/products/bronze-pleated-maxi-skirt.png",
    description: "Sophisticated bronze pleated maxi skirt with fine accordion pleats that catch the light beautifully. Metallic olive tone adds a modern edge.",
    sizes: ["XS","S","M","L","XL"],
    details: ["Premium pleated fabric","Metallic bronze finish","Elasticated waistband","Full-length cut","Dry clean"],
    featured: true
  },
  {
    id: "black-sparkle-pleated-skirt",
    title: "Black Sparkle Pleated Skirt",
    price: 85.00, compareAt: 119.00,
    category: "Skirts", tags: ["Skirts","Bottoms","New Arrival"],
    image: "images/products/black-sparkle-pleated-skirt.jpg",
    description: "A dazzling black pleated midi skirt adorned with scattered crystal embellishments. The sheer overlay catches every light source for a show-stopping evening look.",
    sizes: ["XS","S","M","L","XL"],
    details: ["Sparkle-studded fabric","Fine pleating","Elasticated waistband","Midi length","Dry clean"],
    featured: false
  },
  {
    id: "copper-satin-maxi-skirt",
    title: "Copper Satin Maxi Skirt",
    price: 92.00, compareAt: 129.00,
    category: "Skirts", tags: ["Skirts","Bottoms","New Arrival"],
    image: "images/products/copper-satin-maxi-skirt.jpg",
    description: "Rich copper-toned satin maxi skirt with a flowing silhouette. Self-tie bow detail at the waist adds a feminine touch. Elasticated back waistband.",
    sizes: ["XS","S","M","L","XL"],
    details: ["Premium satin fabric","Self-tie waist detail","Elasticated back","Full-length flow","Hand wash"],
    featured: false
  },

  // ─── SHOES & TRAINERS ───
  {
    id: "taupe-chunky-sneakers",
    title: "Taupe Chunky Platform Sneakers",
    price: 79.00, compareAt: 119.00,
    category: "Shoes", tags: ["Shoes","Trainers","New Arrival"],
    image: "images/products/taupe-chunky-sneakers.png",
    description: "Mushroom taupe chunky platform sneakers with mesh panels and suede overlays. White sculpted sole for added height and street-style impact.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Suede & mesh upper","Chunky platform sole","Lace-up closure","Padded insole","Lightweight"],
    featured: true
  },
  {
    id: "white-evolutions-trainers",
    title: "White Evolutions Rhinestone Trainers",
    price: 89.00, compareAt: 129.00,
    category: "Shoes", tags: ["Shoes","Trainers","Premium"],
    image: "images/products/white-evolutions-trainers.png",
    description: "White and beige chunky trainers with delicate rhinestone trim accents and gold hardware. Evolutions branding on the pull-tab. Statement street-style kicks.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Rhinestone trim","Gold hardware accents","Chunky sole","Padded tongue","Lace-up"],
    featured: true
  },
  {
    id: "silver-glitter-block-heel-sandals",
    title: "Silver Glitter Block Heel Sandals",
    price: 69.00, compareAt: 99.00,
    category: "Sandals", tags: ["Sandals","Heels","Occasion"],
    image: "images/products/silver-glitter-sandals.png",
    description: "Silver glitter block heel sandals with rhinestone-encrusted straps and ankle strap with buckle. Low block heel for comfortable elegance. Perfect for parties and events.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Glitter finish","Rhinestone straps","Ankle strap","Low block heel","Cushioned insole"],
    featured: true
  },
  {
    id: "black-fashion-platform-sneakers",
    title: "Black Fashion Platform Sneakers",
    price: 85.00, compareAt: 119.00,
    category: "Shoes", tags: ["Shoes","Trainers","Streetwear"],
    image: "images/products/black-fashion-sneakers.png",
    description: "All-black chunky platform sneakers with 'FASHION' text strap and rhinestone trim accents. Ultra-thick sole for maximum height boost and urban attitude.",
    sizes: ["3","4","5","6","7","8"],
    details: ["All-black design","Fashion text strap","Rhinestone accents","Thick platform","Lace-up"],
    featured: false
  },
  {
    id: "grey-orange-air-trainers",
    title: "Grey & Orange Air Cushion Trainers",
    price: 95.00, compareAt: 139.00,
    category: "Shoes", tags: ["Shoes","Trainers","Streetwear"],
    image: "images/products/grey-orange-trainers.png",
    description: "Grey athletic trainers with vibrant orange accents and visible air cushion sole unit. Ribbed wave design on the upper for a premium athletic look.",
    sizes: ["3","4","5","6","7","8","9","10"],
    details: ["Air cushion sole","Mesh & synthetic upper","Orange accent details","Ribbed design","Lace-up"],
    featured: false
  },
  {
    id: "beige-nb-chunky-trainers",
    title: "Beige Retro Chunky Trainers",
    price: 82.00, compareAt: 119.00,
    category: "Shoes", tags: ["Shoes","Trainers","New Arrival"],
    image: "images/products/beige-nb-chunky-trainers.png",
    description: "Beige and taupe retro-inspired chunky trainers with cream white sole and bold N logo. Suede and mesh panel construction for a classic athletic look.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Suede & mesh","Retro chunky sole","N logo branding","Padded collar","Lace-up"],
    featured: false
  },
  {
    id: "white-rhinestone-platform-sneakers",
    title: "White Rhinestone Platform Sneakers",
    price: 89.00, compareAt: 129.00,
    category: "Shoes", tags: ["Shoes","Trainers","Premium"],
    image: "images/products/white-rhinestone-sneakers.jpg",
    description: "White and beige chunky platform sneakers with rhinestone crystal trim lines and gold metallic heel accent. Beige suede panels on white leather upper.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Rhinestone trim","Gold metallic accent","Chunky platform","Leather & suede","Lace-up"],
    featured: false
  },
  {
    id: "black-chain-buckle-platforms",
    title: "Black Chain Buckle Platform Shoes",
    price: 95.00, compareAt: 139.00,
    category: "Shoes", tags: ["Shoes","Platforms","Streetwear"],
    image: "images/products/black-chain-platforms.jpg",
    description: "Black chunky platform shoes with silver chain buckle detail and rhinestone studded trim around the sole edge. Thick black ribbed platform for bold street style.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Chain buckle detail","Rhinestone sole trim","Thick platform","Faux leather","Lace-up"],
    featured: false
  },

  // ─── HEELS ───
  {
    id: "nude-patent-court-heels",
    title: "Nude Patent Court Heels",
    price: 65.00, compareAt: 89.00,
    category: "Shoes", tags: ["Shoes","Heels","Occasion"],
    image: "images/products/nude-patent-heels.jpg",
    description: "Classic nude/blush patent court heels with round-toe pump silhouette and mid-height stiletto heel. Glossy patent leather finish for timeless elegance.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Patent leather","Round toe","Mid-height stiletto","Cushioned insole","Versatile nude"],
    featured: false
  },
  {
    id: "black-patent-court-heels",
    title: "Black Patent Court Heels",
    price: 65.00, compareAt: 89.00,
    category: "Shoes", tags: ["Shoes","Heels","Occasion"],
    image: "images/products/black-patent-heels.jpg",
    description: "Sleek black patent court heels with pointed-toe silhouette and mid-height stiletto heel. A wardrobe essential in glossy patent leather.",
    sizes: ["3","4","5","6","7","8"],
    details: ["Patent leather","Pointed toe","Mid-height stiletto","Cushioned insole","Classic black"],
    featured: false
  }
];

if (typeof window !== 'undefined') window.PRODUCTS = PRODUCTS;
