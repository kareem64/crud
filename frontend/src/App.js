
import { BrowserRouter, Route, Routes }from "react-router-dom"

import AddProduct from "./pages/AddProduct";
import Update from "./pages/Update";
import AllProducts from "./pages/AllProducts";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllProducts/>}/>
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
