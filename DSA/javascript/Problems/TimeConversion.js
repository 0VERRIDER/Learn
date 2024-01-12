function formatTime(n) {
    return n.toString().padStart(2, "0");
}

function convertTime(s) {
    const meridiem = s.slice(-2);
    const time = s.slice(0,-2);
    const [hour, minute, seconds] = time.split(":").map(Number);
    let newHour = hour;
    
    if(meridiem.toUpperCase() === "AM" && hour === 12) {
        newHour = 0;
    } else if(meridiem.toUpperCase() === "PM") {
        newHour = hour === 12 ? hour : hour + 12;
    }

    console.log(`${formatTime(newHour)}:${formatTime(minute)}:${formatTime(seconds)}`)
}

convertTime("12:40:22AM")