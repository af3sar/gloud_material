const fullDate = new Date().toString();
const dateOnly = new Date().toDateString();
const timeOnly = new Date().toTimeString();
const isoFormat = new Date().toISOString();

console.log("Full Date:", fullDate);
console.log("Date Only:", dateOnly);
console.log("Time Only:", timeOnly);
console.log("ISO Format:", isoFormat);

const today = new Date();

const day = today.getDate();        //day (1-31)
const month = today.getMonth() + 1; //month (0-11, so we add 1)
const year = today.getFullYear();   //Full year (e.g., 2025)

const hours = today.getHours();       //hours (0-23)
const minutes = today.getMinutes();   //minutes (0-59)
const seconds = today.getSeconds();   //seconds (0-59)

const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
console.log("Formatted Date and Time:", formattedDateTime);