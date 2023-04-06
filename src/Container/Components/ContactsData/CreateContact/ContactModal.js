import React, {useEffect, useState} from "react";
import Modal from "react-bootstrap/Modal";
import { addReminderArray,clearReturnModalData } from "../../../Redux/Slices/ContactSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReminderData from "../../../services/ReminderData";
import "./modal.css";
import ReminderModal from "./ReminderModal";
import {useDispatch, useSelector} from 'react-redux';

const ContactModal = ({ contactModal, closeReminder }) => {
  const dispatch = useDispatch();
   const[reminder, setReminder]= useState(false);
   const{returnModalData}= useSelector((state)=> state.contact);
   const[formData, setFormData]= useState({
    fname:"",
    uname:"",
    birthday:"",
    location:"",
    occupation:"",
    reminder:"",
    company:"",
    email:"",
    textarea:"",


   })

   const fetchReminder=()=>{
      setReminder(true);
      dispatch(addReminderArray(ReminderData));
   
  }

  const closeModal=()=>{
    setReminder(false);
  }


  const handleInput=(event)=>{
    const {name, value}= event.target;
    setFormData((preVal)=>{
      return{
        ...preVal,
        [name]:value
      };
    });
  };

  const handleSubmit=async(e)=>{
     e.preventDefault();
     const{fname,
     uname,
     birthday,
     location,
     occupation,
     reminder,
     company,
     email,
     textarea,}=formData
     const res = await fetch("/contact/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
     fname,
     uname,
     birthday,
     location,
     occupation,
     reminder,
     company,
     email,
     textarea,
      }),
    });
    const data = await res.json();
       if(res.status===422){
        toast.error('Invalid fields')
       } else if(res.status===500){
         toast.error('Internal  Server Error');
       } else{
        toast.success('Contact Create Successfully')
       }
    
     dispatch(clearReturnModalData());
     closeReminder();
     
  }
  
  

  return (
    <div>
    <ToastContainer/>
    {
      reminder && <ReminderModal reminder={reminder}  closeModal={closeModal} />
    }
    <div className="">
      <Modal show={contactModal} onHide={closeReminder} className="">
        <Modal.Header closeButton>
          <Modal.Title>Contact-Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="modal-body">
        <div className="form_container">
          <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="row">
              <div className="col-4">
                <div className="form-group mb-2">
                  <label htmlFor="fname">First Name</label>
                  <input
                    
                    type="text"
                    name="fname"
                    id="fname"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.fname}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group mb-2">
                  <label htmlFor="uname">User Name</label>
                  <input
                    type="text"
                    name="uname"
                    id="uname"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.uname}
                    onChange={handleInput}

                  />
                </div>
              </div>
              <div className="col-4">
                <div className="form-group mb-2">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    type="date"
                    name="birthday"
                    id="birthday"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.birthday}
                    onChange={handleInput}
                      
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group mb-2">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.location}
                    onChange={handleInput}

                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="occupation">Occupation </label>
                  <input
                    type="text"
                    name="occupation"
                    id="occupation"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.occupation}
                    onChange={handleInput}

                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group mb-3 ">
                 
                <label htmlFor="reminder">Set Reminder</label>
                  <input 
                    type="datetime-loca"
                    name="reminder"
                    id="reminder"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={returnModalData.listName}
                    onFocus={handleInput}
                    onClick={()=>fetchReminder()}
                  />
                </div>
               
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label htmlFor="company">Company </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.company}
                    onChange={handleInput}

                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.email}
                    onChange={handleInput}

                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group mb-2">
                  <label htmlFor="textarea">How did we meet</label>
                  <textarea
                    type="text"
                    name="textarea"
                    id="textarea"
                    className="form-control"
                    autoComplete="off"
                    required
                    value={formData.textarea}
                    onChange={handleInput}

                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="textarea">Tags</label>
                </div>
              </div>
            </div>
            <div className="text-end">
             <button type="submit" className="btn btn-dark">
          Save
        </button>
        </div>
          </form>
        </div>
      </div>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  );
};

export default ContactModal;
