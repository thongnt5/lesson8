import React,{ useState,useEffect } from 'react'
import Calendar from "react-calendar"
import './App.css'

function App() {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() =>{
    console.log('date thay doi' + date);
    setSelectedDate(date);

  },[date]);

  return (
    <div>
      {selectedDate && 
      <div>
       <p className='date'>Thời gian: {selectedDate.toLocaleTimeString()}</p>
       <p className='date'>Ngày: {selectedDate.toLocaleDateString()}</p>
      </div>
      }
     <Calendar 
      value={date}
      onChange={setDate}
     />
    </div>
  )
}

export default App
