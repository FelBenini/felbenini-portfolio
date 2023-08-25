'use client'
import React, { useEffect, useState } from 'react'

const birthday = new Date(2002, 10, 18, 8, 33, 40)

const AgeTime = () => {
    const [age, setAge] = useState(calculateAge(birthday)) 
    useEffect(() => {
        const intervalId = setInterval(() => {
            setAge(calculateAge(birthday));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>{age}</>
    )
}

function calculateAge(birthDate: Date) {
    const currentDate = new Date();
  
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();
    let hours = currentDate.getHours() - birthDate.getHours();
    let minutes = currentDate.getMinutes() - birthDate.getMinutes();
    let seconds = currentDate.getSeconds() - birthDate.getSeconds();
  
    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const daysInLastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += daysInLastMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }
  
    return `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  }

export default AgeTime