
import "./card.css";
import game from '../img/gamepad-2.png'
import food from '../img/Food.png'
import shop from '../img/Shopping.png'
import car  from '../img/Trasnport.png'
import wallet  from '../img/bag.png'



const icons = { education: shop, selfcare: shop , salary: wallet ,  travel: car ,  entertainment: game ,  food: food ,  other: shop }
const currency = {PLN: 'zł', USD: "$", EUR: "€" }



function Card(data) {
  const { icon, sum, valyt, type, category, description, day } = data;
  return (
    <div className="card bg-white">
      <div className="flex text-left text-gray-950 space-x-4 ">
        <div className="flex justify-center bg-neutral-200 rounded-md ">
          <img className="mx-2 w-6 h-6 self-center" src={icons[category]} alt="icon" />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-base font-bold capitalize ">{description}</h1>
          <h1 className="text-xs text-zinc-500">{category}</h1>
        </div>
      </div>
      <div className="info text-right text-gray-500 ">
        <h1 className="font-base font-bold">{`${sum} ${currency[valyt]}`}</h1>
        <h1 className="text-zinc-500 text-xs">{day}</h1>
      </div>
    </div>
  );
};

export default Card;
