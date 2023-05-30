import React from 'react'
import './ContactUs.css'
import { Button } from 'react-bootstrap'

function ContactUs() {
  return (
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-6">
    <div className="row mt-5 justify-content-center">
        <div className="col-5 w-100">
        <p className='Contact_h'>

        お問い合わせ種別
        </p>
        
        <select class="form-select Contact_input" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </div>
    </div> 
    
   <div className="row ">
   <p className='Contact_h my-4'>
お名前（フリガナ
</p>
    <div className="col-md-6 mb-3 mb-md-0">

    

<div className='w-100'>



<input type="text" className='w-100 Contact_input' id="fname" name="fname" placeholder='アン' />

</div>
  

    </div>
    <div className="col-md-6 ">



<input type="text" id="fname" className='w-100  Contact_input' name="fname" placeholder='名' />


</div>
   </div>  


   <div className="row  mt-4">
  
    <div className="col-md-6 mb-3 mb-md-0">

    

<div className='w-100'>



<input type="text" className='w-100 Contact_input' id="fname" name="fname" placeholder='セイ' />

</div>
  

    </div>
    <div className="col-md-6 ">



<input type="text" id="fname" className='w-100  Contact_input' name="fname" placeholder='メイ' />


</div>
   </div> 

   <div className="row ">
   <p className='Contact_h my-4'>
   メールアドレス
</p>
    <div className="col-md-12 ">

    

<div className='w-100'>



<input type="text" className='w-100 Contact_input' id="fname" name="fname" placeholder='elunub3@gmail.com' />

<p className='mt-2 Contact_P'>
ドメイン指定受信をご利用の場合は、「@name.co.jp」からのメールが受信できるよう設定を行ってください。
</p>

</div>
  

    </div>
   
   </div> 

   <div className="row  mt-4">
   <p className='Contact_h'>

   お問い合わせ内容
        </p>
  <div className="col-md-12 ">

  



<textarea id="w3review" className='Contact_input w-100' name="w3review" rows="8"  placeholder='お問い合わせ内容を記入ください。'>
</textarea>




  </div>
 
 </div> 



{/* button  */}

 <div className="row ">
 
    <div className="col-md-12 ">

    

<div className='my-4'>

<Button className='w-100 contact_btn'> 内容を確認する </Button>



</div>
  

    </div>
   
   </div> 

    </div>
  </div>


    





  </div>
  )
}

export default ContactUs



// <p className='Contact_h'>
// お名前（フリガナ
// </p>

// <input type="text" id="fname" name="fname" placeholder='アン' />