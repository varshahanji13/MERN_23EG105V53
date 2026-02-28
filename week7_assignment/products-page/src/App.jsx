import Products from "./components/Products.jsx";
function App()
{
      // Products (Parent)
      //       * Holds the products array
      //       * Loops through it with .map()
      //       * Passes each product down to the child


  return (
    <div className="text-center">

      <Products/>

    </div>

    
  )
}
export default App;