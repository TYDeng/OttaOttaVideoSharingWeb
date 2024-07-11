import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePicker() {
    const [startDate, setStartDate] = useState(new Date()); // State to hold the selected date and time
  
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15} // Time selection intervals in minutes
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa" // Formatting date and time
      />
    );
  }
  
  export default DatePicker;
  