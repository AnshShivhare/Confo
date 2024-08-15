import React, { useState,useEffect }  from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';

const UpdateConf = () => {
    const {id} = useParams()
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [day, setDay] = useState();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:4001/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setTime(result.data.time)
            setDay(result.data.day)
        })
        .catch(err => console.log(err))
      },[])

const Update =(e) =>{
    e.preventDefault();
    axios.put("http://localhost:4001/updateUser/"+id, {name,time,day})
        .then(result => {
        console.log(result)
        navigate('/home')
})
        .catch(err => console.log(err));
}

  return (
    <div>
    <div >
       <div >
       <h2 >
           Update Conference Details
       </h2>
       <form onSubmit={Update}>
       
      
      <div >
      <label  >Conference Name</label>
           <input type="text" 
           value={name}  onChange={(e) => setName(e.target.value)} />
      </div>
       <div >
       <label >Conference Time</label>
                            <input
                                type="text"
           value={time}   onChange={(e) => setTime(e.target.value)}/>
           
       </div>
       <div >
       <label >Conference Day</label>
                            <input
                                type="text"
            value={day} onChange={(e) => setDay(e.target.value)}
           />
       </div>
      <div >
       <button type="submit">UPDATE</button>
       </div>
   </form>


       </div>
     </div>
   </div>
  )
}

export default UpdateConf