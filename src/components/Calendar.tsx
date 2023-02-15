import { timeStamp } from 'console';
import React, { useEffect, useState } from 'react'

interface CalendarProps{
    timeStamp:number;
}

const Calendar = ({ timeStamp }:CalendarProps) => {

const [currentDate , setCurrentDate] = useState(new Date())

 const weekDayArray = ['sun','mon','tue','wed','the','fri','sat'];

 const months = [
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
    "December"
 ];

 useEffect(() =>{
    if(timeStamp){
        setCurrentDate(new Date(timeStamp))
    }
 },[timeStamp]);

 const getDates  = (inputDate : Date) =>{
    let date = new Date(inputDate);
    let year = date.getFullYear();
    let month = date.getMonth();

    const monthStartDate = new Date(year,month,1);
    const monthFirstDay = monthStartDate.getDate();
    let calendarArray = [];
    let i = 0;
    while(i < 35){
        let calendarDate = new Date(year,month,1 - monthFirstDay + i);
        calendarArray.push(calendarDate);
        i++;
    }
    return calendarArray;
 }

 const renderDate = (date:Date) => {
    const DateText = date.getDate();
    const dateDay =weekDayArray[date.getDate()];
    let weekEnd = dateDay === "Sat" || dateDay === "Sun" ? "Weekend" : "";
    const today =
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear()
        ? "currentDate"
        : "";
 
  return (
    <div className={`Date ${weekEnd} ${today}`} key={date.getTime()}>
    {DateText}
  </div>
  )
}
const changeMonth = (type:string) =>{
    let newDate = new Date(currentDate);
    if(type === "DEC"){
        newDate.setMonth(newDate.getMonth() - 1);
        setCurrentDate(newDate)
    }else{
        newDate.setMonth(newDate.getMonth() + 1);
        setCurrentDate(newDate)
    }
}
return(
    <div className="MainContainer">
      <div className="filters">
        <div
          className="areo left"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            changeMonth("DEC");
          }}
        />
        <div className="fullDate">{`${currentDate.getDate()} - ${
          months[currentDate.getMonth()]
        } - ${currentDate.getFullYear()}`}</div>
        <div
          className="areo right"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            changeMonth("INC");
          }}
        />
      </div>
      <div className="DateContainer">
        {weekDayArray.map((day) => (
          <div className="weekday" key={day}>
            {day}
          </div>
        ))}
        {getDates(currentDate).map((date) => renderDate(date))}
      </div>
    </div>
)



}







export default Calendar;