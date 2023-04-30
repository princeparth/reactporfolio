import React from 'react'
import NavBar from '../components/NavBar'

function Common(props) {
  return (
    <>
    <NavBar/>

      <section id = "header" className='header'>
        
  
       <div className='col'> 
    <div className='row'> <h1>{props.name} <strong className='brand'>SharmaIndustries :</strong></h1>
      <h2 className='fline'> We are team of  taking developers making a websities.Paragraphs are medium-sized units of writing, longer than sentences, but shorter than sections, chapters, or entire works. Because they connect the “small” ideas of individual sentences to a “bigger” idea, paragraph structure is essential to any writing for organization, flow, and comprehension. 
      </h2>
      
      <div className="buttons">
             
             <a href={props.visit}><button className="btn"> contact me</button></a> 
       </div>
       </div>
       <div className='web2'>
        <img src={props.imgsrc} className="weba2" alt=' img'/>
       </div>
</div>
</section>
</>
  )
}

export default Common