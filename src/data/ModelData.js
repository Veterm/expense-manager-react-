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
    day: "14/05/2023",
    icon: game,
  },
  {
    id: 2,
    description: 'Shampoo',
    sum: "69",
    valyt: 'PLN' ,
    type: "expense",
    category: "selfcare",
    day: "13/05/2023",
    icon: shop,
  },
  {
    id: 3,
    description: 'Work',
    sum: "7000",
    valyt: "USD",
    type: "income",
    category: "salary",
    day: "14/05/2023",
    icon: wallet,
  },
  {
    id: 4,
    description: 'Zakopane',
    sum: "250",
    valyt: "EUR",
    type: "expense",
    category: "travel",
    day: "14/05/2023",
    icon: car,
  },
  {
    id: 5,
    description: 'Pizza',
    sum: "60",
    valyt: "PLN",
    type: "expense",
    category: "entertainment",
    day: "20/05/2023",
    icon: food,
  },
  
  
];

export default data;