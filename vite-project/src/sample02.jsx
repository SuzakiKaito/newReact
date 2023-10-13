import {useState} from 'react'
import './sample02'

export default function Sample02(){

  const [state,setState] = useState({
    calc1:'',
    calc2:'',
    result:0
    // let add = calc1+calc2,
    // console:log()
  })


  return(
      <>
        <div className={"aaa"}>
            <input type="text" onChange={(e)=>{setState({...state,calc1:e.target.value})}} />
            <input type="text" onChange={(e)=>{setState({...state,calc2:e.target.value})}} />
            <p>{state.result}</p>
            <button 
            onClick={()=>{
              let num = Number(state.calc1)
              let num2 = Number(state.calc2)
              setState({...state,result:num+num2})}
              }>出力</button>
            {/* <button onClick={()=>setState(state.result)}>リセット</button> */}
        </div>
      </>
  )
}