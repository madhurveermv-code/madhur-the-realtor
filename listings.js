/*
  LISTINGS — this is the ONLY file you need to touch to add, remove, or update a property.

  Copy one block below, change the values, keep the commas. Then commit and push
  to GitHub — Cloudflare Pages redeploys automatically within a minute or two.

  Fields:
    tag          Short category label shown at the top of the card (e.g. "Land parcel", "Villa")
    title        Short name for the property
    location     Where it is (village / area)
    size         Land or plot size, as you'd say it to a buyer
    price        The asking price, shown on the card. Only put a real, confirmed number here.
    description  1-2 sentences, plain language, no claims you haven't verified
    status       What stage it's at right now (e.g. "Available, site visit on request" or "Under offer")
    image        Path to the photo, e.g. "images/naina-tikkar.jpg" — drop the matching file into
                 an "images" folder next to this one. Leave as null if you don't have a photo yet;
                 the card will show a "Photo coming soon" placeholder instead of a broken image.
*/
window.LISTINGS = [
  {
    tag: "Land parcel",
    title: "Naina Tikkar Hilltop Parcel",
    location: "Naina Tikkar",
    size: "19 Bigha 11 Biswa",
    price: "₹1 crore per bigha",
    description: "A rare, large-format land parcel in the hills of Naina Tikkar, just one kilometre off the main highway. Sweeping 180-degree views across the valley, with a natural water source already on the land, a real advantage for any tourism or resort development. The slope is gentle throughout, making it easier to build on than most parcels in the belt.",
    status: "Available, site visit on request",
    image: "images/naina-tikkar.jpg"
  },
  {
    tag: "Villa",
    title: "3-Bedroom Villa, Dochi",
    location: "Dochi, Kasauli",
    size: "9 Biswa",
    price: "₹5 crore",
    description: "A well-appointed 3-bedroom villa in Dochi, close to Kasauli, built on 9 biswa. A ready option for a family holiday home or a quieter retirement base in the hills.",
    status: "Available, site visit on request",
    image: "images/villa-dochi-3bhk.jpg"
  },
  {
    tag: "Land parcel",
    title: "Land Parcel, Dochi-Chakki More Road",
    location: "Dochi-Chakki More Road",
    size: "1 Bigha 5 Biswa",
    price: "₹2.5 crore",
    description: "A 1 bigha 5 biswa parcel on Dochi-Chakki More Road, with a wide, open view toward Chandigarh and good road access.",
    status: "Available, site visit on request",
    image: null
  },
  {
    tag: "Land parcel",
    title: "Land Parcel, Jagjeet Nagar",
    location: "Jagjeet Nagar",
    size: "2 Bigha 3 Biswa",
    price: "₹4.30 crore",
    description: "A 2 bigha 3 biswa parcel in Jagjeet Nagar with a wide, open view, outside Town & Country Planning and Municipal Committee limits.",
    status: "Available, site visit on request",
    image: null
  },
  {
    tag: "Villa",
    title: "Luxury Villa, Gated Society, Dochi",
    location: "Dochi, Kasauli",
    size: "10 Biswa",
    price: "₹10 crore",
    description: "A 4-bedroom luxury villa in a gated society in Dochi, with a jacuzzi, heated pool, sauna, and a private theatre room.",
    status: "Available, site visit on request",
    image: "images/villa-dochi-luxury.jpg"
  },
  {
    tag: "Villa",
    title: "6-Bedroom Villa, Chabbal",
    location: "Chabbal",
    size: "7 Biswa",
    price: "₹4 crore",
    description: "A spacious 6-bedroom villa in Chabbal, built on 7 biswa. Suited to a large family home or a short-term rental operation with several rooms to let.",
    status: "Available, site visit on request",
    image: null
  },
  {
    tag: "Land parcel",
    title: "Land Parcel, Jagjeet Nagar (On Road)",
    location: "Jagjeet Nagar",
    size: "6 Biswa",
    price: "₹10 lakh per biswa (₹60 lakh total)",
    description: "A smaller, 6 biswa parcel directly on the road in Jagjeet Nagar, a lower entry point into the same belt as the larger Jagjeet Nagar parcel.",
    status: "Available, site visit on request",
    image: null
  },
  {
    tag: "Land parcel",
    title: "42 Bigha Panoramic Land Parcel, Parwanoo",
    location: "Taksal, Parwanoo",
    size: "42 Bigha",
    price: "₹31.50 crore",
    description: "A large-format 42 bigha land parcel in Taksal, Parwanoo, sitting at roughly 5,000 ft with panoramic, uninterrupted views across the valley. Suited to a resort, tourism project, or a larger housing development given its scale.",
    status: "Available, site visit on request",
    image: null
  }
];
