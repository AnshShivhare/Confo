import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const AddConf = () => {
    const [name, setName] = useState();
    const [time, setTime] = useState();
    const [day, setDay] = useState();
    const navigate = useNavigate()
  
    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4001/createUser", {name,time,day})
            .then(result => {
            console.log(result)
            navigate('/home')
    })
            .catch(err => console.log(err));
    };
  return (
 <>
    <div>
            <div className=''>
                <div className=''>
                    <h2 className='text-center'>
                        Add Conference Details
                    </h2>
                    <form onSubmit={Submit}>
                        <div>
                            <label htmlFor="">Conference Name</label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="" >Conference Time</label>
                            <input
                                type="text"
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div >
                            <label htmlFor="">Conference Day</label>
                            <input
                                type="text"
                                onChange={(e) => setDay(e.target.value)}
                            />
                        </div>
                        <div className='text-center'>
                            <button type="submit">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
 </>
  )
}

export default AddConf