export const CAFE_INFO = {
  name: "Sea~Sons Cafe & Restro",
  tagline: "Where Good Coffee Meets Seasonal Vibe",
  subtitle: "Nashik's Signature Arch-Designed Aesthetic Cafe & Restro",
  location: "Manik Nagar, Gangapur Road Area, Nashik, Maharashtra 422005",
  googleMapsUrl: "https://share.google/nGG5wzpK4N2OynLsP",
  instagramUrl: "https://www.instagram.com/sea_sons_cafe_n_restro/?hl=en",
  instagramHandle: "@sea_sons_cafe_n_restro",
  heroVideoReelUrl: "https://www.instagram.com/reel/DbeosVPIskw/?igsh=eTQzZmRiMmM2cDRi",
  heroVideoEmbedId: "DbeosVPIskw",
  // Actual Instagram Reel video MP4 downloaded directly into public assets
  heroVideoMp4: "/videos/hero-reel.mp4",
  secondaryVideoMp4: "https://assets.mixkit.co/videos/preview/mixkit-barista-making-a-latte-art-coffee-41315-large.mp4",
  phone: "+91 98230 44555",
  rating: 4.8,
  reviewCount: 520,
  isPureVeg: true,
  openingHours: "11:00 AM – 11:00 PM (Open All 7 Days)",
  quotes: [
    { text: "Be With Someone Who Knows Your Coffee Order.", location: "Arch Corridor Wall" },
    { text: "You Are Exactly Where You Need To Be.", location: "Illuminated Wall Nook" },
    { text: "I Speak French Fries 🍟", location: "Bar Lounge Nook" },
    { text: "Good Coffee, Better Vibes, Seasonal Comfort.", location: "Rooftop Canopy" }
  ]
};

export const CAFE_PHOTOS = [
  {
    id: 1,
    title: "Illuminated Arch Corridor",
    category: "Architecture",
    src: "/images/arch-corridor.jpg",
    description: "Signature glowing warm linear lights framed by elegant cream arches and motivational wall quotes."
  },
  {
    id: 2,
    title: "Exterior Facade & Balcony",
    category: "Exterior",
    src: "/images/exterior-facade.jpg",
    description: "Distinguished facade featuring hand-woven rattan ceiling baskets, arched glass window, and vibrant logo."
  },
  {
    id: 3,
    title: "Rooftop Botanical Canopy",
    category: "Ambiance",
    src: "/images/rooftop-canopy.jpg",
    description: "Lush hanging greenery suspended from woven basket ceiling with plush teal seating & wooden board games."
  },
  {
    id: 4,
    title: "Panoramic Arch Window Dining",
    category: "Indoor",
    src: "/images/window-dining.jpg",
    description: "Spacious dining hall with grand arch windows overlooking Nashik, warm olive ceiling accents, and cozy light fixtures."
  },
  {
    id: 5,
    title: "Sage Green Espresso Bar",
    category: "Bar & Counter",
    src: "/images/sage-bar-counter.jpg",
    description: "Custom sage green main counter with glowing semicircular light motifs, wooden bar stools, and fresh tropical foliage."
  }
];

export const MENU_CATEGORIES = [
  { id: "all", name: "All Items", icon: "✨" },
  { id: "coffee", name: "Artisanal Coffee & Cold Brews", icon: "☕" },
  { id: "burgers", name: "Gourmet Burgers & Toasties", icon: "🍔" },
  { id: "pizza", name: "Handcrafted Pizzas", icon: "🍕" },
  { id: "pasta", name: "Pasta & Appetizers", icon: "🍝" },
  { id: "beverages", name: "Shakes & Mocktails", icon: "🍹" },
  { id: "desserts", name: "Desserts & Bakery", icon: "🍰" }
];

export const MENU_ITEMS = [
  {
    id: "m1",
    name: "Sea~Sons Signature Hazelnut Cold Coffee",
    category: "coffee",
    price: 180,
    rating: 4.9,
    prepTime: "8 mins",
    isVeg: true,
    isBestseller: true,
    description: "Our famous thick cold brew blended with roasted hazelnut syrup, topped with mocha dust and creamy whip.",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m2",
    name: "Archway Special Tiramisu Latte",
    category: "coffee",
    price: 195,
    rating: 4.8,
    prepTime: "10 mins",
    isVeg: true,
    isChefSpecial: true,
    description: "Espresso layered with mascarpone cream flavor, cocoa powder, and dark chocolate drizzle.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m3",
    name: "Smokey Paneer & Bell Pepper Burger",
    category: "burgers",
    price: 210,
    rating: 4.8,
    prepTime: "12 mins",
    isVeg: true,
    isBestseller: true,
    description: "Char-grilled paneer patty coated in smokey BBQ glaze with melted cheddar, crunchy lettuce, and herb mayo.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m4",
    name: "Truffle Mushroom & Cheese Sandwich",
    category: "burgers",
    price: 220,
    rating: 4.9,
    prepTime: "10 mins",
    isVeg: true,
    isChefSpecial: true,
    description: "Sautéed button mushrooms in truffle oil butter with mozzarella grilled in sourdough bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m5",
    name: "Botanical Canopy Garden Pizza (10\")",
    category: "pizza",
    price: 340,
    rating: 4.9,
    prepTime: "15 mins",
    isVeg: true,
    isBestseller: true,
    description: "Thin crust pizza topped with San Marzano tomato sauce, fresh basil, bell peppers, olives, jalapenos, and mozzarella.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m6",
    name: "Quattro Formaggi (Four Cheese) Pizza",
    category: "pizza",
    price: 380,
    rating: 4.9,
    prepTime: "15 mins",
    isVeg: true,
    isChefSpecial: true,
    description: "Rich blend of Mozzarella, Processed Cheddar, Gouda, and Cream Cheese drizzled with chili honey.",
    image: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m7",
    name: "Pink Sauce Penne Pasta (Arrabbiata Mix)",
    category: "pasta",
    price: 260,
    rating: 4.7,
    prepTime: "14 mins",
    isVeg: true,
    isBestseller: false,
    description: "Penne tossed in a velvety combination of spicy tomato sauce and heavy parmesan cream sauce with garlic bread.",
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281288?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m8",
    name: "Loaded Peri-Peri Fries with Cheese Dip",
    category: "pasta",
    price: 160,
    rating: 4.8,
    prepTime: "8 mins",
    isVeg: true,
    isBestseller: true,
    description: "Crispy cut potatoes tossed in spicy African peri-peri seasoning with warm liquid cheese sauce.",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m9",
    name: "Mango Passionfruit Sparkler Mocktail",
    category: "beverages",
    price: 170,
    rating: 4.8,
    prepTime: "5 mins",
    isVeg: true,
    isBestseller: false,
    description: "Tropical Alphonso mango puree, passionfruit syrup, mint leaves, lime juice, and fizzy soda.",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m10",
    name: "Biscoff Cheesecake Shake",
    category: "beverages",
    price: 230,
    rating: 4.9,
    prepTime: "8 mins",
    isVeg: true,
    isBestseller: true,
    description: "Thick milk shake infused with authentic Lotus Biscoff spread, crushed Biscoff cookies, and vanilla gelato.",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m11",
    name: "Sizzling Chocolate Brownie with Ice Cream",
    category: "desserts",
    price: 190,
    rating: 4.9,
    prepTime: "7 mins",
    isVeg: true,
    isBestseller: true,
    description: "Freshly baked dense chocolate walnut brownie served on a hot sizzler plate with vanilla scoop and dark chocolate fudge.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "m12",
    name: "Nutella Waffle Tower",
    category: "desserts",
    price: 210,
    rating: 4.8,
    prepTime: "10 mins",
    isVeg: true,
    isChefSpecial: true,
    description: "Crispy Belgian waffle slathered with rich Nutella spread, banana slices, toasted almonds, and chocolate chips.",
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80"
  }
];

export const CUSTOMER_REVIEWS = [
  {
    id: 1,
    author: "Pranav Deshmukh",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 week ago",
    text: "Sea~Sons Cafe is literally the most aesthetic spot in Nashik right now! The archway corridor with neon glowing quotes and the rooftop hanging plants vibe are 10/10. Their Hazelnut Cold Coffee and Garden Pizza were incredible!",
    highlight: "Cold Coffee & Arch Ambiance"
  },
  {
    id: 2,
    author: "Sneha Kulkarni",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "2 weeks ago",
    text: "Came here for a date night with my partner and fell in love with the seating. The soft lighting, green arch windows, and table games like Jenga kept us entertained for hours. Pure veg menu with high quality food!",
    highlight: "Perfect Date Spot"
  },
  {
    id: 3,
    author: "Rohan & Friends",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "3 weeks ago",
    text: "The sage green counter aesthetic is so modern! Staff is super welcoming, music is soft and pleasing. Loved the Biscoff Cheesecake Shake and Peri Peri Fries.",
    highlight: "Great Food & Music"
  },
  {
    id: 4,
    author: "Ananya Joshi",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    date: "1 month ago",
    text: "We shot so many photos here for Instagram! The lighting in the arch corridor makes every photo look like a professional studio shot. Must visit cafe in Nashik!",
    highlight: "Instagrammer Paradise"
  }
];
