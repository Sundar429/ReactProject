// import { ChildrenComponent } from "./components/ChildrenComponent"
// import { FirstComponents } from "./components/FirstComponents"
// import { SecondComponents } from "./components/SecondComponents"
// import { ThirdComponents } from "./components/ThirdComponents"

import { ArraySample } from "./components/ArraySample"
import { FunctionSample } from "./components/FunctionSample"
import { MultiType } from "./components/MultiType"
import { SampleColor } from "./components/SampleColor"
import { UserCard } from "./components/UserCard"


function App() {
 
// const items=[
//   {id:1,name:"Item1"},
//   {id:2,name:"Item2"},
//   {id:3,name:"Item3"}
// ]

const handleClick=()=>{
  alert("Button Clicked")
}
  return (
    <>
      {/* <div>Hello Sundar using React</div>
      <FirstComponents/>
      <SecondComponents/> */}
      {/* <ThirdComponents name="sundar" age={23} isMarried={false} />
      <ThirdComponents name="vijay" age={49} isMarried={true} />
      <ThirdComponents name="dhoni" age={40} isMarried={true} />
      <ChildrenComponent>
        <p>This is a sample para1</p>
        <p>This is a sample para2</p>
      </ChildrenComponent> */}
      {/* <ArraySample items={items}/> */}
      {/* <SampleColor color="yellow"/> */}
      {/* <MultiType value ="Sundar"/>
      <MultiType value ={23}/>
      <MultiType value ={true}/> */}
      {/* <div>
        <h1>Parent Component</h1>
        <FunctionSample handleClick={handleClick}/>
      
      </div> */}
      <UserCard/>
    
    </>
  )
}

export default App
