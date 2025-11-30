import "./index.css"

import { Comp1 } from "./components/Comp1.jsx"
import Comp2 from "./components/Comp2.jsx"
import { Comp3 } from "./components/Comp3.jsx/index.js"
import Comp4 from "./components/Comp4.jsx/index.js"

const App = () => {
  let data = "data"
  function add(n1, n2) {
    return n1 + n2
  }

  add(10, 20)

  let newStyle = {
    color: "yellow",
    backgroundColor: "black"
  }

  return (
    <>
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>this is element 1</h1>
      <h1 style={newStyle}>this is element 2</h1>
      <h1>this is element 3</h1>
      <h1>this is element 4 {1000 + 2000}</h1>
      <h1>{data}</h1>
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <Comp4 />
      <Comp1 name="Kalyani Rode" age="21" koiBhi="kuch bhi value but in string" />
    
      <input type="text" name="" value="" placeholder="" />
    </>
  )
}

export default App
