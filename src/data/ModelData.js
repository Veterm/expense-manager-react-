import game from'./../img/gamepad-2.png'
import food from './../img/Food.png'
import shop from './../img/Shopping.png'
import car  from './../img/Trasnport.png'
import wallet  from './../img/bag.png'

const data = [
  {
    id: 1,
    description: 'Book',
    sum: "45",
    valyt: "EUR",
    type: "expense",
    category: "education",
    day: "14/06/2023",
    icon: game,
  },
  {
    id: 2,
    description: 'Book',
    sum: "45",
    valyt: "EUR",
    type: "expense",
    category: "education",
    day: "14/06/2023",
    icon: game,
  },
  {
    id: 3,
    description: 'Shampoo',
    sum: "69",
    valyt: 'USD' ,
    type: "expense",
    category: "selfcare",
    day: "14/06/2023",
    icon: shop,
  },
  {
    id: 4,
    description: 'Work',
    sum: "7000",
    valyt: "USD",
    type: "income",
    category: "salary",
    day: "14/06/2023",
    icon: wallet,
  },
  {
    id: 5,
    description: 'Work',
    sum: "10000",
    valyt: "USD",
    type: "income",
    category: "salary",
    day: "19/06/2023",
    icon: wallet,
  },
  {
    id: 6,
    description: 'Work',
    sum: "6000",
    valyt: "USD",
    type: "income",
    category: "salary",
    day: "19/06/2023",
    icon: wallet,
  },
  {
    id: 7,
    description: 'Zakopane',
    sum: "250",
    valyt: "EUR",
    type: "expense",
    category: "travel",
    day: "19/06/2023",
    icon: car,
  },
  {
    id: 8,
    description: 'Pizza',
    sum: "60",
    valyt: "PLN",
    type: "expense",
    category: "entertainment",
    day: "20/06/2023",
    icon: food,
  },
  {
    id: 9,
    description: 'Pizza',
    sum: "60",
    valyt: "PLN",
    type: "expense",
    category: "entertainment",
    day: "20/06/2023",
    icon: food,
  },
  
];

export default data;