import { useState } from "react"

export default function App() {
  // const [count, setCount] = useState(0)

  const [state,setState] = useState(0)

  // const plusButton = () =>{
  //   setState (state+1)
  // }

  // const minusbutton = () =>{
  //   setState (state-1)
  // }

  return (
    <>
      
        <p>{state}</p>
        {/* returnの中で変数などを使うときは{}を使う */}
        <button onClick={() => setState(state + 1)}>plus</button>
        <button onClick={() => setState(state - 1)}>minus</button>
    </>
  )
}


