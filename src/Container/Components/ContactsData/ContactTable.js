import React, { useState } from 'react'
import Sidebar from '../../Sidebar/Sidebar'
import tableImage from '../../assets/images/ByeWind.png';
import './contacttable.css';
import {FiEdit2} from 'react-icons/fi';
import {AiOutlineDelete, AiOutlineArrowDown, AiOutlineQuestionCircle} from 'react-icons/ai';
import ContactModal from './CreateContact/ContactModal';
const ContactTable = () => {
  const [tableData, setTableData]= useState(
    [
      {
       img:tableImage, 
       name:'Emilia Barone',
       username:'@olivia',
       location:'Roma',
       role:'Product Designer',
       email:'olivia@untitledui.com',
       rating:'4',
       tags:[
        {
          tag:'Design',
          color:'#F9F5FF'
        },
        {
          tag:'product',
          color:'#EFF8FF'
        },
        {
          tag:'marketing',
          color:'#E5F1C3'
        },
       ] 
      },

      {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'2',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'3',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'5',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'6',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'3',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'2',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'3',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'4',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'2',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       },

       {
        img:tableImage, 
        name:'Emilia Barone',
        username:'@olivia',
        location:'Roma',
        role:'Product Designer',
        email:'olivia@untitledui.com',
        rating:'2',
        tags:[
          {
            tag:'Design',
            color:'#F9F5FF'
          },
          {
            tag:'product',
            color:'#EFF8FF'
          },
          {
            tag:'marketing',
            color:'#E5F1C3'
          },
         ]   
       }
    ]
  )

  const [contactModal, setContactModal] = useState(false)
  
  const contactModalHandler=()=>{
    setContactModal(true);
  }

  const closeReminder=()=>{
    setContactModal(false)
  }
  return (
    <div>
      <section className='contact_table_wrapper' >
        <div className="sidebar_wrapper">
          <Sidebar />
        </div>  
        <main className='mainContent'>
          <div className="table_data">
          <ContactModal  /> 
          <div className='buttton_table text-end mt-3'>
            <button className='btn' onClick={()=>contactModalHandler()}   >Create New</button>
          </div>
            <table className='table'>
              
            <thead>
                <tr>
                
                  <th><input type="checkbox" className='me-2'/> Name</th>
                  <th>Location <AiOutlineArrowDown/></th>
                  <th>Role <AiOutlineQuestionCircle /></th>
                  <th>Email Address</th>
                  <th>Tags</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {
                tableData.map((curElm, index)=>{
                  return(
                    <tr key={index}>
                      <td>  <div className='img_table_parent'><input type="checkbox" className='me-2' /><img src={curElm.img} alt="tableImage" className='img-fluid' /> <div className="ms-2"><span className='contact_name_style'>{curElm.name}</span> <span className='contact_user_name_style'>{curElm.username}</span> </div></div> </td>
                      <td><span className='location_style'>{curElm.location}</span> </td>
                      <td><span className='role_style'>{curElm.role} </span> </td>
                      <td><span className='email_style'>{curElm.email}</span> </td>
                      <td>{curElm.tags.map((tags, tagIndex)=><span key={tagIndex} className='text-capitalize'><span className='tag_child_data' style={{backgroundColor:tags.color}}>{tags.tag}</span> </span>)} <span className='span_table_plus'>+{curElm.rating}</span> </td>
                      <td colSpan={2}><span className='d-flex justify-content-between align-items-center cursor'><AiOutlineDelete /><FiEdit2  /> </span> </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
             
          </div>
          
        </main>
        {
          contactModal && <ContactModal contactModal={contactModal} closeReminder={closeReminder} />
        }
      </section>
    </div>
  )
}

export default ContactTable
