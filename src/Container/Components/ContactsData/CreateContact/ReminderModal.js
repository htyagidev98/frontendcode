import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Calendar from "react-calendar";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import "react-calendar/dist/Calendar.css";
import "./modal.css";
import { getReturnReminderData } from "../../../Redux/Slices/ContactSlice";
const ReminderModal = ({ reminder, closeModal }) => {
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState("");
  const {reminderModalData}= useSelector((state)=> state.contact);
  const [search, setSearch]= useState('');
  const dispatch = useDispatch();
  const onChange = (date) => {
    let today = new Date(date);
    let day = String(today.getDate());
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = today;
    let curMonth = month[d.getMonth()];
    const curyear = new Date();
    let year = curyear.getFullYear();
    let fullyear = curMonth + " " + day + ", " + year;
    setDate(fullyear);
  };


  const getModalData= (data)=>{
    dispatch(getReturnReminderData(data));
  }
  
  return (
    <div className="">
      <Modal show={reminder} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Set Reminder"
                className="bg-dark text-light"
                autoComplete="off"
                onChange={(e)=> setSearch(e.target.value)}
              />
            </Form.Group>
            <div className="">
              <ul className="bg_secondary text-white pb-3 pt-3 scroll_list">
                {
                  reminderModalData.filter((item)=>{
                    return search.toLowerCase()===''|| search.toUpperCase()==='' ? item: item.listName.toLowerCase().includes(search)||item.listName.toUpperCase().includes(search);
                  })
                  
                  
                  .map((curElm)=>{
                    return(
                      <div className="d-flex align-items-center mb-3 cursor" key={curElm.id} onClick={()=>getModalData(curElm) & closeModal() } >
                        <span className="span_gradiant"></span>
                        <li className="list_item ms-2">{curElm.listName}</li>
                      </div>
               
                    )
                  })
                }

                <div className="text-center mt-3">
                  <input
                    type="button"
                    className="btn btn-dark text-light"
                    value="Set New Reminder"
                    onClick={() => setShowCalender(!showCalender)}
                  />
                </div>
              </ul>
              <div className="text-center">
                {showCalender && (
                  <input
                    type="text"
                    placeholder="Event"
                    className="bg-dark text-light form-control"
                    value={date}
                  />
                )}
                {showCalender && (
                  <div>
                  <Calendar
                    className="w-100 pb-2 rounded f-bold"
                    onChange={onChange}
                    value={date}
                    />
                    <button className="btn btn-secondary mt-2" type="button">Cancel</button>
                    <button className="btn btn-dark ms-2 mt-2" type="button">Apply</button>
                   </div>                 
                )}
              </div>
            </div>

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ReminderModal;
