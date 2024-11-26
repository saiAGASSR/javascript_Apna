import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./productTab.jsx"
import Activity from "./Activity.jsx"
import AmazonCard from "./AmazonCard.jsx"



function Description(){
  return <h3> I am Description  </h3>
}



function App() {

  return    <>

      <h1>BlockBustur Deals are Live now Shop Now </h1>
      <div className="App">
          <AmazonCard   idx = {0} />
          <AmazonCard   idx = {1} />
          <AmazonCard   idx = {2} />
          <AmazonCard   idx = {3} />
      </div>


        {/* <Activity  userName="Sai" textColor="green" /> */}
        {/* <ProductTab /> */}
        {/* <ProductTab /> */}
        {/* <ProductTab /> */}

    </>
    // <div>

    // <Title/>
    // <Description/>

    // <Title/>
    // <Description/>

    // </div>
    

  
  // (
  //   // <>
  //   //   <h1>Hello World</h1>
  //   //   <p>Hello World</p>
  //   //   <button>Hello World</button>
  //   // </>
  // )
}

export default App;
