import React from 'react'

export default function Mainsectioncommon(props) {
  return (
    <div  style={{height: "90vh", width: "95vw", display:"flex"}}>

<div className='leftsection' style={{ width: "50vw",  display: "flex", flexDirection: "column", justifyContent: "center", lineHeight: "1.4rem", marginLeft: "40px"}}> 

<h3 style={{fontFamily:"Bebas Neue", fontSize: "3.4rem" }}> {props.name} </h3>
<h2 style={{fontFamily:"Bebas Neue", fontSize: "3.4rem", color: "cyan" }}> AH DESIGNER </h2>
<p style={{fontFamily:"Saira Condensed", fontSize: "1.1rem" }}> WE are a team of talented Designers making Web Designs</p>
<button type="button" className="btn btn-outline-success" style={{width: "30vw", marginTop: "1vw", fontSize: "1rem"}}> {props.btn} </button>
 </div>

<div className='rightsection' style={{ width: "50vw",  display: "flex", justifyContent: "center", alignItems: "center"}}>

<img className='image' src={props.srcc} alt="" style={{ height: "35vw"}}/>

</div>
   
  
    </div>
    
  )
}
