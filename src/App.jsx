import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";
import MyButton from "./components/MyButton";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // Currency info coming from the API through my custom Hook
  const currencyInfo = useCurrencyInfo(from);
  // console.log(currencyInfo);
  const options = Object.keys(currencyInfo);
  // const options = ['Option 1', 'Option 2', 'Option 3'];
  // console.log(options);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  let imgUrl =
    "https://images.pexels.com/photos/2224374/pexels-photo-2224374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  return setFrom(currency);
                }}
                onAmountChange={(amount) => {
                  return setAmount(amount);
                }}
                selectedCurrency={from}
              />
            </div>
            <div className="relative left-40 bottom-8 w-full h-0.5">
              <MyButton text="Swap" onClick={swap} />
            </div>

            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                amountDisabled={true}
                onCurrencyChange={(currency) => {
                  return setTo(currency);
                }}
                // onAmountChange={(amount) => {
                //   return setAmount(amount);
                // }}
                selectedCurrency={to}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white h-12 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
