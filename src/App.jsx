import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies)
  {()=>{console.log("puppy id: ", puppy.id)}}

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)

  return (
    <>
{ 

puppies.map((puppy) => {
  return <p className="pupName" onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
})


}
{ featPupId && <p className="featPupId">{featPupId}</p> }

{featPupId && (
        <div>
          <h2 className="featPupName">{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}



    </>
  )


}


export default App
