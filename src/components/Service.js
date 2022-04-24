import React,{useState, useEffect} from 'react'
// import Data from './Data';


export default function Service() {
    const [dat, setdat] =useState([]);

const Data = [
{
name:  "Web Designing",
description : "We will make responsive and eye catche web site design and unlimited revisions untill the customer will satisfy",
img: "https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
},

{
    name:  "Banner Designing",
    description : "We will make an eye catche banner and poster design and unlimited revisions untill the customer will satisfy",
    img: "https://img.freepik.com/free-photo/improve-innovation-motivation-progress-reform-concept_53876-132146.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
    },


    
{
    name:  "Flyer Designing",
    description : "We will make best and eye catche flyer design and provide unlimited revisions untill the customer will satisfy",
    img: "https://img.freepik.com/free-photo/male-graphic-designer-holding-color-swatch_1170-2929.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
    },


    
{
    name:  "2d Explainer Videos",
    description : "We will make best and eye catche 2d Animated Explainer video with unlimited revisions untill the customer will satisfy",
    img: "https://img.freepik.com/free-photo/young-woman-working-animation-studio_23-2149207994.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
    },



    {
        name:  "3d Animation",
        description : "We will make best and eye catche 3d Animation with unlimited revisions untill the customer will satisfy",
        img: "https://img.freepik.com/free-photo/shoulder-shot-young-game-developer-working-from-home-while-his-girlfriend-walks-backgorund_482257-22386.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
        },

        
        
{
    name:  "Logo Designing",
    description : "We will make best and eye catche logo designs with unlimited revisions untill the customer will satisfy",
    img: "https://img.freepik.com/free-photo/logo-be-creative-inspiration-design-concept_53876-132620.jpg?size=626&ext=jpg&uid=R36971962&ga=GA1.2.1749564066.1614758758"
    },


]



useEffect(() => {

  return () => {
    setdat(Data)
  }
})









  return (
    <div className='container' style={{display: "flex", justifyContent: "center", marginTop: "40px",alignItems: "center", flexDirection: "column"}}>

<div>
<h3 style={{fontFamily:"Bebas Neue", fontSize: "2rem", color: "cyan"}}> Our Services </h3>
</div>

<div  style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center" }} >

{
dat.map((val)=>{

return(
<div className="card" style={{width: "18rem", marginRight: "30px", marginBottom: "30px"}}>
  <img src= {val.img} className="card-img-top" alt="image" style={{height: "200px"}}/>
  <div className="card-body">
    <h5 className="card-title">{val.name}</h5>
    <p className="card-text">{val.description}</p>
    <button type="button" className="btn btn-outline-success" > Ckeck Now </button>
  </div>
</div>
)

})
}


</div>



    </div>
  )
}
