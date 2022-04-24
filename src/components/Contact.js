import React, {useState} from 'react'



export default function Contact() {
const [vall, setVall] = useState({
name: "",
phone: "",
mail: "",
msg: ""
});



const vallChange = (e)=>{
    const {name, value} = e.target;
      setVall((preValue)=>{
      return{ ...preValue,
       [name] : value
      }
      });
  }

const clickBtn = (e)=>{
    e.preventDefault();
    alert(`Your name is ${vall.name} ----- Your Phone No is: ${vall.phone} ----- Your Email Address is: ${vall.mail} `);

setVall({
 name: "",
phone: "",
mail: "",
msg: ""
})

}


  return (
    <div className='container' style={{display: "flex", justifyContent: "center", marginTop: "40px",alignItems: "center", flexDirection: "column", height: "90vh"}}>

    <div>
    <h3 style={{fontFamily:"Bebas Neue", fontSize: "2rem", color: "cyan"}}> Contact Us </h3>
    </div>
    
    <div  style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
    
   
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
    <input type="text" onChange={vallChange}  value = {vall.name} name = "name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "60vw"}}/>
  
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Ph #</label>
    <input type="number" onChange={vallChange} value = {vall.phone} name = "phone"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "60vw"}}/>
  
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={vallChange} value = {vall.mail} name = "mail"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "60vw"}}/>
  
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
  <textarea type="test" onChange={vallChange} value = {vall.msg} name = "msg"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{width: "60vw"}}></textarea>
 

  </div>

<div className="mb-3">

  <button type="submit" onClick={clickBtn} className="btn btn-primary">Submit</button>
  </div>
    
    </div>
    
    
    
        </div>
  )
}
