import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('bdt');
  const [convertedAmount, setConvertedAmount] = useState(0);

// Currency info coming from the API through my custom Hook
  const currencyInfo = useCurrencyInfo(from);
  let imgUrl =
    "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      Hello
    </div>
  );
}

export default App;
