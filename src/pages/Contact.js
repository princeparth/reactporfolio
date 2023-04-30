import React from 'react'
import NavBar from '../components/NavBar'
function Contact() {
return (
    <>
    <NavBar/>


     <div className='intro' >
      <h1 className='us'> Contact Us :-</h1>
      

      <form>
        
      <div className="mb-1">
          <label for="fname" className="form-label">Name</label>
          <input type="text" className="form-control" id="fname" placeholder='your name..'/>
          
        </div>
        <div className="mb-2">
          <label for="useremail" className="form-label">Email address</label>
          <input type="email" className="form-control" id="useremail" placeholder='your email..'/>
          </div>
       
        <div className="mb-3">
          <label for="userphoneno." className="form-label">phoneno.</label>
          <input type="phoneno." className="form-control" id="userphoneno" placeholder='your number..'/>
        </div>
        <div className="mb-4">
          <label for="useremail" className="form-label">enquire</label>
          <input type="enquire" className="form-control" id="useremail" placeholder='your enquire..'/>
          
        </div>
       
        <div className="mb-5"  id = "form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">i want to work with you</label>
        </div>
        <button type="submit" className="btn btn-sm">Submit</button>
 </form> 
 
            
            

              

           

    </div>
      
    </>
  )
}

export default Contact;