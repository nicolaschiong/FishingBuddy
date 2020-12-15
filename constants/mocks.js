const categories = [
  {
    id: "rod",
    name: "Rod",
    tags: ["products", "recommend", "shop"],
    count: 147,
    image: require("../assets/icons/rod.png")
  },
  {
    id: "net",
    name: "Net",
    tags: ["products", "shop"],
    count: 16,
    image: require("../assets/icons/net.png")
  },
  {
    id: "reel",
    name: "Reel",
    tags: ["products", "recommend"],
    count: 68,
    image: require("../assets/icons/reel.png")
  },
  {
    id: "lure",
    name: "Lure",
    tags: ["products", "shop"],
    count: 17,
    image: require("../assets/icons/lure.png")
  },
  {
    id: "bait",
    name: "Bait",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/bait.png")
  },
  {
    id: "thread",
    name: "Thread",
    tags: ["products", "shop"],
    count: 47,
    image: require("../assets/icons/thread.png")
  }
];

const products = [
  {
    id: 1,
    name: "16 Best Plants That Thrive In Your Bedroom",
    description:
      "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
    tags: ["Interior", "27 m²", "Ideas"],
    images: [
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      // showing only 3 images, show +6 for the rest
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png"),
      require("../assets/images/plants_1.png"),
      require("../assets/images/plants_2.png"),
      require("../assets/images/plants_3.png")
    ]
  }
];

const explore = [
  // images
  require("../assets/images/explore_1.png"),
  require("../assets/images/explore_2.png"),
  require("../assets/images/explore_3.png"),
  require("../assets/images/explore_4.png"),
  require("../assets/images/explore_5.png"),
  require("../assets/images/explore_6.png")
];

const profile = {
  username: "fishing-buddy",
  location: "Philippines",
  email: "contact@fishingbuddy.app",
  avatar: require("../assets/images/avatar.png"),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false
};

const campings = [
  {
    id: 1,
    type: 'rv',
    name: 'Camping Paradise',
    description: 'Popular spot for trekkers.',
    rating: 4.9,
    distance: 2.9,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1525811902-f2342640856e?fit=crop&w=900&h=600&q=130',
    latlng: {
      latitude: 37.79335,
      longitude: -122.4424,
    }
  },
  {
    id: 2,
    type: 'tent',
    name: 'Lake Florida',
    description: 'This is for all sunset lovers.',
    rating: 4.9,
    distance: 2.9,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1506535995048-638aa1b62b77?fit=crop&w=900&h=600&q=130',
    latlng: {
      latitude: 37.78865,
      longitude: -122.4324,
    }
  },
];

export { categories, explore, products, profile, campings };
