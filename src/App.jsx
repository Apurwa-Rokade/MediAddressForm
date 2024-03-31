import "./App.css";
import Address from "./Components/Address";
import { ValidateFR } from "./Components/Schema/ValidateFR";
import { ValidateGB } from "./Components/Schema/ValidateGB";

function App() {
  return (
    <>
      <h1 className="h1">Work Address</h1>
      <Address Parentvalidation={ValidateGB} name="work" />
      <h1 className="h1">Residential Address</h1>
      <Address Parentvalidation={ValidateFR} name="Residential" />
    </>
  );
}

export default App;
