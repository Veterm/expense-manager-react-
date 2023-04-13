import { useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import Card from "./Card/Card";
import Modal from "./modal/Modal";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  let tabsContent = [
    {
      name: "All",
      content: getTransactionsFor(),
    },
    {
      name: "Revenue",
      content: getTransactionsFor("income"),
    },
    {
      name: "Expenses",
      content: getTransactionsFor("expense"),
    },
  ];

  function getTransactionsFor(type) {
    return data.filter(x => type ? x.type == type : true);
  }

  return (
    <div>
    <Tabs data={tabsContent} />
    <Modal/>
    </div>
    )
}

export default App;
