export const menuItems = [
  { title: "NEW ARRIVALS" },
  {
    title: "BABY",
    subCategories: {
      girlsClothing: {
        title: "Girl clothing",
        items: [
          "Dresses",
          "Outerwear",
          "Sweaters",
          "Outfit sets",
          "Tops",
          "Pants",
          "Sleepwear",
          "Basics",
          "Skirts",
          "Swim",
        ],
      },
      girlsAccessories: {
        title: "Girl Accessories",
        items: [
          "Hair Accessories",
          "Socks",
          "Shoes",
          "Handbag",
          "Jewellery",
          "Accessories",
        ],
      },
      boysClothing: {
        title: "Boys clothing",
        items: [
          "T-shirts",
          "Outerwear",
          "Sweaters",
          "Outfit Sets",
          "Belts",
          "Pants",
          "Sleepwear",
          "Basics",
          "Swim",
        ],
      },
      boysAccessories: {
        title: "Boys Accessories",
        items: ["Socks", "Shoes", "Bibs", "Mittens"],
      },
      months: {
        title: "Months",
        items: [
          "0-3 months",
          "3-6 months",
          "6-9 months",
          "9-12 Months",
          "12-18 Months",
          "18-24 Months",
        ],
      },
      babyEssentials: {
        title: "Baby Essentials",
        items: [
          "Body & Skin Care",
          "Oral Care",
          "Pacifiers & Teethers",
          "Sleeping Bags",
          "Milestones",
        ],
      },
    },
  },
  {
    title: "KIDS",
    subCategories: {
      girlsClothing: {
        title: "Girl clothing",
        items: [
          "Dresses",
          "Outerwear",
          "Sweaters",
          "Outfit sets",
          "Tops",
          "Pants",
          "Sleepwear",
          "Basics",
          "Skirts",
          "Swim",
        ],
      },
      girlsAccessories: {
        title: "Girl Accessories",
        items: [
          "Hair Accessories",
          "Socks",
          "Shoes",
          "Handbag",
          "Jewellery",
          "Accessories",
        ],
      },
      boysClothing: {
        title: "Boys clothing",
        items: [
          "T-shirts",
          "Outerwear",
          "Sweaters",
          "Outfit Sets",
          "Belts",
          "Pants",
          "Sleepwear",
          "Basics",
          "Swim",
        ],
      },
      boysAccessories: {
        title: "Boys Accessories",
        items: ["Socks", "Shoes", "Bibs", "Mittens"],
      },
    },
  },
  {
    title: "STORES",
    subCategories: [
      "Torito",
      "Valita",
      "Hepta",
      "coldwel Baby",
      "Spices up",
      "Zohra world",
      "24 Figs",
      "Baby ccino",
      "Baby moon",
      "Baby & Rattle",
      "Body Babu",
      "Moon light",
      "Ecolizer",
      "Bumbum",
      "Caza bammbino",
      "Cotton Tale",
      "Carrio",
      "Donaldo",
      "Eco 8",
      "Glee Gooz",
      "Goz",
      "Jamo",
      "Papio",
      "Bubblezone",
      "Pecasso",
      "Halio",
      "Narita",
      "Colw",
      "Cow New",
      "Shareit",
      "Joma",
      "Haia fashion",
      "Baby blue",
      "Pinky world",
      "Pinky world",
    ],
  },
  {
    title: "SALE",
  },
  // Add more sections and subcategories as needed
];

export const menuItemsV2 = [
  {
    title: "MAIN MENU",
    parent: "",
    items: ["NEW ARRIVALS", "BABY", "KIDS", "STORES", "SALE"],
  },
  { title: "NEW ARRIVALS", parent: "MAIN MENU", items: [] },
  {
    title: "BABY",
    parent: "MAIN MENU",
    items: [
      "Girl clothing",
      "Girl Accessories",
      "Boys clothing",
      "Boys Accessories",
      "Months",
      "Baby Essentials",
    ],
  },
  {
    title: "Girl clothing",
    parent: "BABY",
    items: [
      "Dresses",
      "Outerwear",
      "Sweaters",
      "Outfit sets",
      "Tops",
      "Pants",
      "Sleepwear",
      "Basics",
      "Skirts",
      "Swim",
    ],
  },
  {
    title: "Girl Accessories",
    parent: "BABY",
    items: [
      "Dresses",
      "Outerwear",
      "Sweaters",
      "Outfit sets",
      "Tops",
      "Pants",
      "Sleepwear",
      "Basics",
      "Skirts",
      "Swim",
    ],
  },
  {
    title: "Boys clothing",
    parent: "BABY",
    items: [
      "T-shirts",
      "Outerwear",
      "Sweaters",
      "Outfit Sets",
      "Belts",
      "Pants",
      "Sleepwear",
      "Basics",
      "Swim",
    ],
  },
  {
    title: "Boys Accessories",
    parent: "BABY",
    items: ["Socks", "Shoes", "Bibs", "Mittens"],
  },
  {
    title: "Months",
    parent: "BABY",
    items: [
      "0-3 months",
      "3-6 months",
      "6-9 months",
      "9-12 Months",
      "12-18 Months",
      "18-24 Months",
    ],
  },
  {
    title: "Baby Essentials",
    parent: "BABY",
    items: [
      "Body & Skin Care",
      "Oral Care",
      "Pacifiers & Teethers",
      "Sleeping Bags",
      "Milestones",
    ],
  },
  {
    title: "KIDS",
    parent: "MAIN MENU",
    items: [
      "Girl clothing",
      "Girl Accessories",
      "Boys clothing",
      "Boys Accessories",
    ],
  },
  {
    title: "Girl clothing",
    parent: "KIDS",
    items: [
      "Dresses",
      "Outerwear",
      "Sweaters",
      "Outfit sets",
      "Tops",
      "Pants",
      "Sleepwear",
      "Basics",
      "Skirts",
      "Swim",
    ],
  },
  {
    title: "Girl Accessories",
    parent: "KIDS",
    items: [
      "Hair Accessories",
      "Socks",
      "Shoes",
      "Handbag",
      "Jewellery",
      "Accessories",
    ],
  },
  {
    title: "Boys clothing",
    parent: "KIDS",
    items: [
      "T-shirts",
      "Outerwear",
      "Sweaters",
      "Outfit Sets",
      "Belts",
      "Pants",
      "Sleepwear",
      "Basics",
      "Swim",
    ],
  },
  {
    title: "Boys Accessories",
    parent: "KIDS",
    items: ["Socks", "Shoes", "Bibs", "Mittens"],
  },
  {
    title: "STORES",
    parent: "MAIN MENU",
    items: [
      "Torito",
      "Valita",
      "Hepta",
      "coldwel Baby",
      "Spices up",
      "Zohra world",
      "24 Figs",
      "Baby ccino",
      "Baby moon",
      "Baby & Rattle",
      "Body Babu",
      "Moon light",
      "Ecolizer",
      "Bumbum",
      "Caza bammbino",
      "Cotton Tale",
      "Carrio",
      "Donaldo",
      "Eco 8",
      "Glee Gooz",
      "Goz",
      "Jamo",
      "Papio",
      "Bubblezone",
      "Pecasso",
      "Halio",
      "Narita",
      "Colw",
      "Cow New",
      "Shareit",
      "Joma",
      "Haia fashion",
      "Baby blue",
      "Pinky world",
      "Pinky world",
    ],
  },
  { title: "SALE", parent: "MAIN MENU", items: [] },
];
