import { Suspense } from "react";
import "./App.css";
import DaisyNav from "./component/DaisyNav/DaisyNav";
import NavBar from "./component/NavBar/NavBar";
import PricingOptions from "./component/PricingOption/PricingOptions";

function App() {
  const pricingPromise = fetch("pricingData.json").then((res) => res.json());

  return (
    <>
      <header>
        <NavBar></NavBar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-neutral"></span>
          }
        >
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  );
}

export default App;
