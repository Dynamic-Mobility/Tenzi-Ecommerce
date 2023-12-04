export const categories = [
  {
    id: 1,
    name: "Fruits and Vegetables",
    children: [
      {
        id: 1,
        name: "Fruits",
      },
      {
        id: 2,
        name: "Vegetables",
      },
    ],
  },
  {
    id: 2,
    name: "Meat and Fish",
    children: [
      {
        id: 1,
        name: "Fresh Meat",
      },
      {
        id: 2,
        name: "Fish",
      },
    ],
  },
  {
    id: 3,
    name: "Snacks",
    children: [
      {
        id: 1,
        name: "Chocolates",
      },
      {
        id: 2,
        name: "Crisps",
      },
      {
        id: 3,
        name: "Noodles",
      },
      {
        id: 4,
        name: "Sauce",
      },
    ],
  },
  {
    id: 4,
    name: "Home & Cleaning",
    children: [
      {
        id: 1,
        name: "Air Freshener",
      },
      {
        id: 2,
        name: "Cleaning Products",
      },
      {
        id: 3,
        name: "Laundry",
      },
      {
        id: 4,
        name: "Kitchen Accessories",
      },
    ],
  },
  {
    id: 5,
    name: "Cooking",
    children: [
      {
        id:1,
        name: "Oil",
      },
      {
        id:2,
        name: "Rice",
      },
      {
        id:3,
        name: "Salt and Sugar",
      },
      {
        id:4,
        name: "Spices",
      },
    ],
  },
];

export const products = [
    {
        id: 1,
        name: 'Apple',
        image: './images/apple.png',
        price: 200,
        discount: '10% off'
    },
    {
        id: 2,
        name: 'Avocado',
        image: './images/ova.png',
        price: 300,
        discount: '13% off'
    },
    {
        id: 3,
        name: 'Orange',
        image: './images/orange.png',
        price: 100,
        discount: '20% off'
    },
    {
        id: 4,
        name: 'Apple',
        image: './images/apple.png',
        price: 300,
        discount: '30% off'
    },
    {
        id: 5,
        name: 'Avocado',
        image: './images/ova.png',
        price: 200,
        discount: '22% off'
    },
    {
        id: 6,
        name: 'Orange',
        image: './images/orange.png',
        price: 200,
        discount: '7% off'
    },
    {
        id: 7,
        name: 'Apple',
        image: './images/apple.png',
        price: 200,
        discount: '17% off'
    },

]

export const random = [
  {
    id: 1,
    image: './images/orange1.jpg',
    name: 'Orange',
    price: 'ksh 200',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nam porro inventore facere doloribus corrupti fugiat, minima sequi pariatur maxime saepe recusandae accusamus, cum hic libero deserunt.',
    availability: 'In Stock',
    Category: 'Organic Fruits',
  }
]

export const delivery = [
  {
    period: "Express Delivery",
    time: "90 min express delivery"
  },
  {
    period: "Morning",
    time: "8:00 AM - 11:00 AM"
  },
  {
    period: "Noon",
    time: "11: 00 AM - 2:00 PM"
  },
  {
    period: "Afternoon",
    time: "2: 00 PM - 5:00 PM"
  },
  {
    period: "Evening",
    time: "5: 00 PM - 8:00 PM"
  }
]
export const orders = [
  {
    id: 1,
    trackingNumber: "256282",
    total: 'ksh 3947',
    orderDate: '12/3/2023',
    status: 'pending',
    shippingAddress: 'Church road, Westlands',
  },
  {
    id: 2,
    trackingNumber: "256072",
    total: 'ksh 3947',
    orderDate: '10/3/2023',
    status: 'delivered',
    shippingAddress: 'Kangemi, Nairobi',
  },
]