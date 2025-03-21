const adventureData = [
  {
    category: "Gondola Rides",
    listings: [
      {
        id: 1,
        name: "Scenic Gondola Journey",
        price: "₹2000",
        description:
          "Enjoy a peaceful gondola ride with breathtaking mountain vistas.",
        location: "Himalayan Ranges",
        duration: "1 hour",
        availableSlots: 20,
        rating: 4.7,
        inclusions: ["Guide", "Safety Gear"],
        reviews: [
          { user: "Alice", comment: "Loved the panoramic views!", rating: 5 },
          { user: "Bob", comment: "Smooth and very scenic.", rating: 4 },
        ],
        imageUrl:
          "https://media1.thrillophilia.com/filestore/7q8mr927utv7g80x8x9sazhyx5ns_y38mi28pvfavegf1982ntnpbvj9n_Gulmarg%20Gondola%20Ride.jpg?w=400&dpr=2",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: false,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "SkyHigh Adventures",
          address: "123 Mountain Road, Manali, India",
          contact: "+91 9876543210",
          website: "https://skyhighadventures.example.com",
        },
      },
      {
        id: 2,
        name: "Luxury Gondola Experience",
        price: "₹2500",
        description:
          "Experience the luxury of a private gondola ride with exclusive services.",
        location: "Kashmir Valley",
        duration: "1 hour",
        availableSlots: 15,
        rating: 4.8,
        inclusions: ["Guide", "Refreshments", "Safety Gear"],
        reviews: [
          { user: "Carol", comment: "A premium experience!", rating: 5 },
          { user: "Dave", comment: "Worth every rupee.", rating: 4.5 },
        ],
        imageUrl:
          "https://www.jammukashmircablecar.com/pub/images/hero-banner-gulmarg-winter.webp",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: false,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "Mountain Luxury Rides",
          address: "45 Valley Lane, Srinagar, India",
          contact: "+91 9123456780",
          website: "https://mountainluxuryrides.example.com",
        },
      },
    ],
  },
  {
    category: "Trekking",
    listings: [
      {
        id: 3,
        name: "Mountain Trek Expedition",
        price: "₹3000",
        description:
          "Embark on a challenging mountain trek with expert guides.",
        location: "Himalayas",
        duration: "5 hours",
        availableSlots: 15,
        rating: 4.8,
        inclusions: ["Guide", "Meal", "Safety Gear"],
        reviews: [
          { user: "Charlie", comment: "Incredible adventure!", rating: 5 },
          {
            user: "Dana",
            comment: "Challenging but so rewarding.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjE2NTkxMjMvMDUyN2VlM2RjN2I4ZGMwNjUyNWIwZTZkZGU1MjlmOWEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=75",
        bookingDetails: {
          ageRequirement: "10+ years",
          difficulty: "Medium",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Nature Ventures",
          address: "89 Trail Path, Leh, India",
          contact: "+91 9988776655",
          website: "https://natureventures.example.com",
        },
      },
      {
        id: 4,
        name: "Forest Trail Trekking",
        price: "₹2800",
        description:
          "Explore lush forests and rugged trails with experienced guides.",
        location: "Sahyadri Hills",
        duration: "4.5 hours",
        availableSlots: 18,
        rating: 4.6,
        inclusions: ["Guide", "Snack Pack", "Safety Gear"],
        reviews: [
          { user: "Elena", comment: "The trails were magical.", rating: 4.5 },
          {
            user: "Faisal",
            comment: "Good pace and well-organized.",
            rating: 4,
          },
        ],
        imageUrl:
          "https://www.alltrails.com/_next/image?url=https%3A%2F%2Fimages.alltrails.com%2FeyJidWNrZXQiOiJhc3NldHMuYWxsdHJhaWxzLmNvbSIsImtleSI6InVwbG9hZHMvcGhvdG8vaW1hZ2UvNjE2NTkxMjMvMDUyN2VlM2RjN2I4ZGMwNjUyNWIwZTZkZGU1MjlmOWEuanBnIiwiZWRpdHMiOnsidG9Gb3JtYXQiOiJqcGVnIiwicmVzaXplIjp7IndpZHRoIjoxMDgwLCJoZWlnaHQiOjcwMCwiZml0IjoiY292ZXIifSwicm90YXRlIjpudWxsLCJqcGVnIjp7InRyZWxsaXNRdWFudGlzYXRpb24iOnRydWUsIm92ZXJzaG9vdERlcmluZ2luZyI6dHJ1ZSwib3B0aW1pc2VTY2FucyI6dHJ1ZSwicXVhbnRpc2F0aW9uVGFibGUiOjN9fX0%3D&w=3840&q=75",
        bookingDetails: {
          ageRequirement: "12+ years",
          difficulty: "Medium",
          equipmentProvided: false,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Trail Blazers",
          address: "202 Nature Drive, Pune, India",
          contact: "+91 9876501234",
          website: "https://trailblazers.example.com",
        },
      },
    ],
  },
  {
    category: "River Rafting",
    listings: [
      {
        id: 5,
        name: "White Water Rafting Adventure",
        price: "₹1500",
        description:
          "Experience the thrill of white-water rafting on challenging rapids.",
        location: "Pahalgam, Jammu & Kashmir",
        duration: "3 hours",
        availableSlots: 15,
        rating: 4.5,
        inclusions: ["Guide", "Safety Gear", "Equipment"],
        reviews: [
          { user: "Eve", comment: "Exciting and fun!", rating: 5 },
          { user: "Frank", comment: "Very well organized.", rating: 4 },
        ],
        imageUrl:
          "https://elginhall.com/blog/wp-content/uploads/2023/02/image-17.jpeg",
        bookingDetails: {
          ageRequirement: "14+ years",
          difficulty: "High",
          equipmentProvided: true,
          cancellationPolicy: "48 hours notice required",
        },
        company: {
          name: "Rapid River Rafting",
          address: "77 Riverbank Rd, Srinagar, India",
          contact: "+91 9123987654",
          website: "https://rapidrafting.example.com",
        },
      },
      {
        id: 6,
        name: "Extreme Rafting Experience",
        price: "₹1700",
        description:
          "For adrenaline junkies – take on extreme rapids with safety-first measures.",
        location: "Rishikesh, Uttarakhand",
        duration: "3.5 hours",
        availableSlots: 12,
        rating: 4.7,
        inclusions: ["Guide", "Safety Gear", "Helmet"],
        reviews: [
          { user: "Gary", comment: "Thrilling experience!", rating: 5 },
          {
            user: "Helen",
            comment: "A bit intense but very safe.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://elginhall.com/blog/wp-content/uploads/2023/02/image-17.jpeg",
        bookingDetails: {
          ageRequirement: "16+ years",
          difficulty: "High",
          equipmentProvided: true,
          cancellationPolicy: "48 hours notice required",
        },
        company: {
          name: "Adrenaline Rafting Co.",
          address: "55 Adventure Blvd, Rishikesh, India",
          contact: "+91 9988007766",
          website: "https://adrenalinerafting.example.com",
        },
      },
    ],
  },
  {
    category: "Camping",
    listings: [
      {
        id: 7,
        name: "Wilderness Camping",
        price: "₹2500",
        description:
          "Spend a night under the stars with our guided wilderness camping package.",
        location: "Spiti Valley",
        duration: "Overnight",
        availableSlots: 10,
        rating: 4.6,
        inclusions: ["Guide", "Meal", "Campfire", "Safety Gear"],
        reviews: [
          { user: "George", comment: "Peaceful and relaxing!", rating: 5 },
          { user: "Hannah", comment: "A must-try experience.", rating: 4.5 },
        ],
        imageUrl:
          "https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/16:9/w_2560%2Cc_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg",
        bookingDetails: {
          ageRequirement: "12+ years",
          difficulty: "Medium",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Camp Under Stars",
          address: "33 Forest Lane, Manali, India",
          contact: "+91 9876123450",
          website: "https://campunderstars.example.com",
        },
      },
      {
        id: 8,
        name: "Family Camping Experience",
        price: "₹2700",
        description:
          "Enjoy a family-friendly camping outing complete with activities and bonfire.",
        location: "Munnar, Kerala",
        duration: "Overnight",
        availableSlots: 8,
        rating: 4.7,
        inclusions: ["Guide", "Meal", "Campfire", "Kids Activity"],
        reviews: [
          { user: "Isha", comment: "Fun for the whole family!", rating: 5 },
          {
            user: "Jack",
            comment: "Well-organized and engaging.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://media.cntraveler.com/photos/607313c3d1058698d13c31b5/16:9/w_2560%2Cc_limit/FamilyCamping-2021-GettyImages-948512452-2.jpg",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Family Outdoors",
          address: "101 Leisure St, Kochi, India",
          contact: "+91 9123678901",
          website: "https://familyoutdoors.example.com",
        },
      },
    ],
  },
  {
    category: "Paragliding",
    listings: [
      {
        id: 9,
        name: "Soaring Paragliding Adventure",
        price: "₹3500",
        description:
          "Glide over picturesque landscapes on a guided paragliding flight.",
        location: "Bir Billing, Himachal Pradesh",
        duration: "45 minutes",
        availableSlots: 12,
        rating: 4.9,
        inclusions: ["Guide", "Helmet", "Photo Capture"],
        reviews: [
          { user: "Lara", comment: "An unforgettable experience!", rating: 5 },
          { user: "Mike", comment: "The views were spectacular.", rating: 4.5 },
        ],
        imageUrl:
          "https://induspg.b-cdn.net/wp-content/uploads/elementor/thumbs/DSC_0857-oibadgwuegsaxscstlibgjspi3wv9j6lfyqqd46bns.jpg",
        bookingDetails: {
          ageRequirement: "16+ years",
          difficulty: "Medium",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "SkyDare Paragliding",
          address: "78 Adventure Park, Bir, India",
          contact: "+91 9876453210",
          website: "https://skydare.example.com",
        },
      },
      {
        id: 10,
        name: "Sunset Paragliding Flight",
        price: "₹3800",
        description:
          "Experience the magic of a sunset flight with expert pilots.",
        location: "Nainital, Uttarakhand",
        duration: "1 hour",
        availableSlots: 10,
        rating: 4.8,
        inclusions: ["Guide", "Safety Gear", "Refreshments"],
        reviews: [
          { user: "Nina", comment: "Breathtaking sunset views!", rating: 5 },
          { user: "Oscar", comment: "Thrilling and safe.", rating: 4.5 },
        ],
        imageUrl:
          "https://induspg.b-cdn.net/wp-content/uploads/elementor/thumbs/DSC_0857-oibadgwuegsaxscstlibgjspi3wv9j6lfyqqd46bns.jpg",
        bookingDetails: {
          ageRequirement: "16+ years",
          difficulty: "Medium",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Sunset Flyers",
          address: "202 Sunset Blvd, Nainital, India",
          contact: "+91 9123556677",
          website: "https://sunsetflyers.example.com",
        },
      },
    ],
  },
  {
    category: "Wildlife Safari",
    listings: [
      {
        id: 11,
        name: "Jungle Safari Expedition",
        price: "₹4000",
        description:
          "Explore the wild on a guided jungle safari with up-close animal encounters.",
        location: "Jim Corbett National Park",
        duration: "4 hours",
        availableSlots: 10,
        rating: 4.8,
        inclusions: ["Guide", "Jeep", "Snacks"],
        reviews: [
          {
            user: "Peter",
            comment: "Saw so many animals in their natural habitat!",
            rating: 5,
          },
          { user: "Quincy", comment: "Well-organized and safe.", rating: 4.5 },
        ],
        imageUrl:
          "https://www.seawatersports.com/images/activies/slide/wildlife-safaris-in-kashmir-package.jpg",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "WildTrails Safari",
          address: "55 Nature Way, Nainital, India",
          contact: "+91 9988771122",
          website: "https://wildtrailssafari.example.com",
        },
      },
      {
        id: 12,
        name: "Desert Wildlife Safari",
        price: "₹4200",
        description:
          "Experience the thrill of a desert safari with unique wildlife sightings.",
        location: "Ranthambhore, Rajasthan",
        duration: "4.5 hours",
        availableSlots: 8,
        rating: 4.7,
        inclusions: ["Guide", "Jeep", "Beverages"],
        reviews: [
          {
            user: "Rita",
            comment: "A unique and exciting experience.",
            rating: 5,
          },
          { user: "Sam", comment: "Loved the desert vibe!", rating: 4.5 },
        ],
        imageUrl:
          "https://www.seawatersports.com/images/activies/slide/wildlife-safaris-in-kashmir-package.jpg",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Desert Horizons",
          address: "101 Desert Road, Jaipur, India",
          contact: "+91 9876001234",
          website: "https://deserthorizons.example.com",
        },
      },
    ],
  },
  {
    category: "Horse Riding",
    listings: [
      {
        id: 13,
        name: "Trail Horse Riding",
        price: "₹1800",
        description:
          "Enjoy a serene trail ride through scenic countryside paths.",
        location: "Rajasthan",
        duration: "2 hours",
        availableSlots: 14,
        rating: 4.5,
        inclusions: ["Guide", "Helmet"],
        reviews: [
          {
            user: "Tina",
            comment: "The best way to explore nature!",
            rating: 5,
          },
          { user: "Uma", comment: "Calming and fun.", rating: 4.5 },
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHIE7ibC2Oomcg7hE4GEzEHEI6fqfoDl_zQ&s",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: true,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "EquiRide Adventures",
          address: "12 Ranch Lane, Jodhpur, India",
          contact: "+91 9123450987",
          website: "https://equiride.example.com",
        },
      },
      {
        id: 14,
        name: "Beach Horse Riding",
        price: "₹2000",
        description:
          "Ride along the stunning coastline and feel the sea breeze.",
        location: "Goa",
        duration: "2.5 hours",
        availableSlots: 12,
        rating: 4.6,
        inclusions: ["Guide", "Helmet", "Refreshments"],
        reviews: [
          {
            user: "Vikram",
            comment: "Amazing experience by the beach!",
            rating: 5,
          },
          { user: "Wanda", comment: "Well-managed and safe.", rating: 4.5 },
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHIE7ibC2Oomcg7hE4GEzEHEI6fqfoDl_zQ&s",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: true,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "Coastal Rides",
          address: "89 Seaside Ave, Goa, India",
          contact: "+91 9876123098",
          website: "https://coastalrides.example.com",
        },
      },
    ],
  },
  {
    category: "Snow Activities",
    listings: [
      {
        id: 15,
        name: "Snowboarding & Skiing",
        price: "₹3000",
        description:
          "Hit the slopes with professional instructors for snowboarding and skiing.",
        location: "Manali, Himachal Pradesh",
        duration: "4 hours",
        availableSlots: 10,
        rating: 4.8,
        inclusions: ["Guide", "Equipment", "Safety Gear"],
        reviews: [
          {
            user: "Xander",
            comment: "Perfect for beginners and pros alike!",
            rating: 5,
          },
          { user: "Yara", comment: "Exhilarating and safe.", rating: 4.5 },
        ],
        imageUrl:
          "https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Sleigh-Riding-in-Kashmir.jpg",
        bookingDetails: {
          ageRequirement: "14+ years",
          difficulty: "Medium",
          equipmentProvided: true,
          cancellationPolicy: "24 hours notice required",
        },
        company: {
          name: "Snow Peak Adventures",
          address: "77 Alpine Road, Manali, India",
          contact: "+91 9123445566",
          website: "https://snowpeak.example.com",
        },
      },
      {
        id: 16,
        name: "Snowmobile Adventure",
        price: "₹3200",
        description:
          "Experience the thrill of riding a snowmobile over pristine snowfields.",
        location: "Gulmarg, Jammu & Kashmir",
        duration: "3 hours",
        availableSlots: 8,
        rating: 4.7,
        inclusions: ["Guide", "Safety Gear", "Helmet"],
        reviews: [
          { user: "Zara", comment: "Super fun and unique!", rating: 5 },
          {
            user: "Adrian",
            comment: "Adrenaline rush like no other.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Sleigh-Riding-in-Kashmir.jpg",
        bookingDetails: {
          ageRequirement: "16+ years",
          difficulty: "High",
          equipmentProvided: true,
          cancellationPolicy: "48 hours notice required",
        },
        company: {
          name: "Arctic Thrills",
          address: "202 Snowy Path, Gulmarg, India",
          contact: "+91 9988774455",
          website: "https://arcticthrills.example.com",
        },
      },
    ],
  },
  {
    category: "Garden and Park",
    listings: [
      {
        id: 17,
        name: "Botanical Garden Tour",
        price: "₹1200",
        description:
          "Take a guided tour through a beautiful botanical garden and learn about exotic flora.",
        location: "Lalbagh, Bangalore",
        duration: "2 hours",
        availableSlots: 25,
        rating: 4.6,
        inclusions: ["Guide", "Snacks"],
        reviews: [
          {
            user: "Rohan",
            comment: "Very informative and relaxing.",
            rating: 5,
          },
          {
            user: "Simran",
            comment: "A great escape into nature.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl8nB3F4lKfE8qaIcK_3TsLNMoudPwPMb8A&s",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: false,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "GreenScape Tours",
          address: "45 Garden St, Bangalore, India",
          contact: "+91 9123456677",
          website: "https://greenscapetours.example.com",
        },
      },
      {
        id: 18,
        name: "City Park Family Outing",
        price: "₹1000",
        description:
          "Enjoy a relaxed day at a sprawling city park complete with leisure activities for all ages.",
        location: "Central Park, New Delhi",
        duration: "3 hours",
        availableSlots: 30,
        rating: 4.5,
        inclusions: ["Guide", "Refreshments", "Play Area"],
        reviews: [
          { user: "Priya", comment: "Fun for the whole family!", rating: 5 },
          {
            user: "Rahul",
            comment: "Great facilities and clean park.",
            rating: 4.5,
          },
        ],
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSl8nB3F4lKfE8qaIcK_3TsLNMoudPwPMb8A&s",
        bookingDetails: {
          ageRequirement: "All ages",
          difficulty: "Easy",
          equipmentProvided: false,
          cancellationPolicy: "12 hours notice required",
        },
        company: {
          name: "City Leisure Co.",
          address: "99 Urban Blvd, New Delhi, India",
          contact: "+91 9876543211",
          website: "https://cityleisure.example.com",
        },
      },
    ],
  },
];

module.exports = adventureData;
