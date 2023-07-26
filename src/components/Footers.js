import React from 'react'
import mainLogo from '../images/main-logo.webp'
import { AiFillFacebook, AiFillHeart, AiFillInstagram, AiFillStar, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import appstore from '../images/appstore.png'
import { FaSnapchatGhost } from 'react-icons/fa'

const Footers = () => {
  return (
    <>

    <section className='bg-bookbtn text-sm text-btnClr mt-5  mb-32'>

    <div className='py-5 relative  ps-5'>

    <div className='flex flex-col md:flex-row'>

    <div className='w-1/2  md:h-1/6 lg:w-1/6  '>

    <a href="" className='decoration-0 '>

    <span className='inline-block overflow-hidden m-0 p-0 relative'>
 
     <img src={mainLogo} alt="mainLogo" className='object-contain w-28 h-28  min-w-full max-w-full min-h-full max-h-full ' />

    </span>

    </a>

  

  <div className='md:hidden'>
    <h2 className='font-normal lg:tracking-widest text-xl md:text-lg md:max-w-xs'>
        GET THE RIGHT GUIDANCE WITH US
    </h2>
    </div>

    <div className='hidden md:block'>
    <h2 className='font-normal lg:tracking-widest text-xl md:text-2xl md:max-w-xs'>
        GET THE <br />RIGHT GUIDANCE <br /> WITH US
    </h2>
    </div>

    <div className='gap-2 mb-3 items-start flex-wrap flex flex-col'>
    
     <div className='rounded bg-white gap-2 py-3 px-3  mb-2 mt-3 items-center shadow-sm inline-flex'>
        <p className='text-sm text-black m-0'>
            TrustPilot 
        </p>

        <p className='bg-darkBlue rounded text-white gap-2 py-1 px-2 m-0 items-center flex'>
          4.7 <AiFillStar className='ms-2 text-yellow-600'/>
        </p>

     </div>

     <div className='rounded bg-white gap-2 py-3 px-2 mb-2 mt-3 items-center shadow-sm inline-flex'>
        <p className='text-sm text-black m-0'>
            Career&nbsp;Karma
        </p>

        <p className='bg-darkBlue rounded text-white gap-2 py-1 px-2 m-0 items-center flex'>
          4.6 <AiFillStar className='ms-2 text-yellow-600'/>
        </p>
     </div>


    </div>

    

    </div>

    

   
        <div className='mb-4 md:-ms-20  md:1/4 lg:ms-20
         lg:w-1/4 flex flex-col  '>
           
           <div></div>
         <h4 className='font-bold mb-1 text-lg  relative'>
            Online & Distance <br /> MBA
         </h4>

         <div className='border-2 border-red-400  mb-3 w-40 md:w-48 '>

         </div>
          

         <ul className='list-none pl-0 mt-0 mb-4'>


         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Finance</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Marketing</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>HR</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Operations</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Information&nbsp;Technology</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Buisness&nbsp;Analytics</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Healthcare&nbsp;Management</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>International&nbsp;Buisness&nbsp;Analytics</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Logistics And Supply Chain</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Data&nbsp;Science</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Data&nbsp;Science&nbsp;and&nbsp;Analytics</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Retail</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Entrepreurship&nbsp;and&nbsp;Leadership</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Financial&nbsp;Markets</a></li>
         <li className='pb-1'><a href="" className='text-btnClr decoration-0'>View All</a></li>
         

       

         </ul>


         <div className='mb-4 lg:w-1/4 lg:hidden'>
           
           <h4 className='font-bold mb-1 text-lg  relative'>
              Online & Distance   <br />  Best colleges
           </h4>
  
           <div className='border-2 border-red-400  mb-3 w-44'>
  
           </div>
            
  
           <ul className='list-none pl-0 mt-0 mb-4'>
  
  
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Executive MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>M.Tech</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Sc</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Global MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Part-Time MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance B.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BA Honours</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>View All</a></li>
           
  
         
  
           </ul>
  
          </div>

        </div>


        <div className='mb-4 md:1/4 md:ms-10 lg:w-1/4 flex flex-col'>
           
           <h4 className='font-bold mb-1 text-lg  relative'>
              Online & Distance <br /> UG courses
           </h4>
  
           <div className='border-2 border-red-400  mb-3 w-44 md:w-40'>
  
           </div>
            
  
           <ul className='list-none pl-0 mt-0 mb-4'>
  
  
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Btech for working</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Professionals</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>BTech After Dipolma</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online B.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Part-Time B.Tech</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online B.Com Honours</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance B.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BA Honours</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>View All</a></li>
           
  
         
  
           </ul>

           <div className='mb-4 lg:w-full '>
           
           <h4 className='font-bold mb-1 text-lg  relative'>
              Online & Distance <br /> PG courses
           </h4>
  
           <div className='border-2 border-red-400  mb-3 w-44'>
  
           </div>
            
  
           <ul className='list-none pl-0 mt-0 mb-4'>
  
  
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Executive MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>M.Tech</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Sc</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Global MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Part-Time MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance B.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BA Honours</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>View All</a></li>
           
  
         
  
           </ul>
  
          </div>


  
          </div>



          <div className='mb-4 hidden md:hidden lg:block lg:w-1/4 '>
           
           <h4 className='font-bold mb-1 text-lg  relative'>
              Online & Distance   <br />  Best colleges
           </h4>
  
           <div className='border-2 border-red-400  mb-3 w-44'>
  
           </div>
            
  
           <ul className='list-none pl-0 mt-0 mb-4'>
  
  
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Executive MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>M.Tech</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online M.Sc</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online MA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BBA Dual</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online Global MBA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Part-Time MCA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance B.Com</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Distance BA</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>Online BA Honours</a></li>
           <li className='pb-1'><a href="" className='text-btnClr decoration-0'>View All</a></li>
           
  
         
  
           </ul>
  
          </div>

        
      
          

</div>


    <div className='flex flex-wrap flex-col mx-3 md:mx-0 my-5 md:flex-row md:justify-between'>

    <div className='md:w-1/5'>

    <p className='font-poppins'>Download The App</p>

     <div className='flex gap-2 flex-col '>

     <a href="" className='decoration-0'>
        <span className=' inline-block overflow-hidden  py-4 relative max-w-full'>
            <img src={appstore} className='w-32  block m-auto' alt="" />
        </span>
     </a>

     </div>

    </div>


    <div className='md:w-1/3 flex flex-col items-start'>

   <p className='pt-2'>

   India has a net of 9.6 Million students that will enroll in online education by the end of 2023. Still, the online education sector in India is unorganized and students face a lot of difficulties in getting information on it. College Vidya aims to tackle the current difficulties of students. College Vidya is India's first online platform that brings you all the online universities at a single platform. College Vidya provides unbiased information about every online course and the university providing this course.

   </p>

    <p>
    The online portal of College Vidya is aimed to complete information to the students about every aspect of online education without being biased.
    </p>

    <p>
    College Vidya gives the power to the students to get the best universities in online education. College Vidya's compare feature gives the comparison of every online university on the various parameters such as E-learning system, EMI, Faculties, and fees.
    </p>

    </div>


  <div className='md:w-1/3 flex-shrink-0'>

  <p>
     contact us :
  </p>

  <a href="" className=''>info@collegevidya.com</a>

  <div className='mt-3'>

  <ul className='flex'>
    <li className='me-2'><AiFillFacebook size={30}/></li>
    <li className='me-2'><AiFillTwitterCircle size={30}/></li>
    <li className='me-2'><AiFillInstagram size={30}/></li>
    <li className='me-2'><AiFillYoutube size={30}/></li>
    <li className='me-2'><FaSnapchatGhost size={30}/></li>
  </ul>

  </div>

  <div className='mt-5 relative'>
   <button className='text-white border-2 border-white px-5 py-3'>1800-420-5757</button>
    <button className='bg-blue-700 text-white px-2 rounded-full absolute left-10 -top-2'>Toll free</button>
  </div>


  </div>



    </div>


  <div className='flex flex-wrap mt-4 '>

  <ul className='flex flex-wrap'>

 

  <div className='flex justify-between space-x-7 my-3 '>
  <div>
  <li><a href="" className='decoration-0'>About us</a></li>
  </div>
  <div>
  <li><a href="" className='decoration-0'>Blog</a></li>
  </div>
  <div>
  <li><a href="" className='decoration-0'> Become Buisness Associate</a></li>
  </div>
  </div>

  <div className='flex justify-between space-x-7 my-3 md:mx-3'>
  <li><a href="" className='decoration-0'>Cv coporate</a></li>
  <li><a href="" className='decoration-0'>sitemap</a></li>
  <li><a href="" className='decoration-0'>contact us</a></li>
  <li><a href="" className='decoration-0'> CV checklist</a></li>
  </div>

  <div className='flex justify-between space-x-7 my-3'>
  <li><a href="" className='decoration-0'>important videos</a></li>
  <li><a href="" className='decoration-0'>our trust</a></li>
  <li><a href="" className='decoration-0'> careers</a></li>
  </div>

  </ul>

  </div>

  <div className='border-b-2  pb-4 me-5'>

  </div>


 <div className='my-5 '>
    <p className='text-center text-red-100 text-sm '>
        <span className='mb-3 '>
         <a href="">
            Terms & Conditions
         </a>

        </span>

        <span className='mb-3 '>
         <a href="">
           /  Refund Policy
         </a>

        </span>

        <span className='mb-3 '>
         <a href="">
           /  Our Policy
         </a>

        </span>
    </p>

<p className='text-start mt-4 mx-2 md:pe-10'>
The intend of College Vidya is to provide unbiased precise information & comparative guidance on Universities and its Programs of Study to the Admission Aspirants. The contents of the College vidya Site, such as Texts, Graphics, Images, Blogs, Videos, University Logos, and other materials contained on College vidya Site (collectively, “Content”) are for information purpose only. The content is not intended to be a substitute for in any form on offerings of its Academia Partner. Infringing on intellectual property or associated rights is not intended or deliberately acted upon. The information provided by College Vidya on www.collegevidya.com or any of its mobile or any other applications is for general information purposes only. All information on the site and our mobile application is provided in good faith with accuracy and to the best of our knowledge, however, we make nor representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, completeness of any information on the Site or our mobile application. College vidya & its fraternity will not be liable for any errors or omissions and damages or losses resultant if any from the usage of its information.
</p>

<p className='text-center text-lg mt-5 text-red-100'>
 @ 2023 college vidya, inc.All Rights Reserved
</p>

<div  className=' text-center mx-auto'>
<p className='flex items-center text-lg py-5 ms-10 md:ms-[200px] lg:ms-[400px]'>
    Build with <AiFillHeart size={20}  className='mx-2 text-red-700'/> Made in India
</p>
</div>


 </div>




    </div>

    </section>
      
    </>
  )
}

export default Footers
