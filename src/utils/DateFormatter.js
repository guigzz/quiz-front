/** Get a human readable date from a unix timestamp in second
* @param {int} t a Unix timestamp in second 
*/
export default function format(t) {
 const date = new Date(t*1000);
 // Year part from the timestamp
 const year = date.getFullYear();
 // month part from the timestamp
 const month = "0" + (date.getMonth() + 1);
 // day part from the timestamp
 const day = "0" + date.getDate();
 // Hours part from the timestamp
 const hours = date.getHours();
 // Minutes part from the timestamp
 const minutes = "0" + date.getMinutes();
 // Seconds part from the timestamp
 const seconds = "0" + date.getSeconds();
 
 // Will display time in 10:30:23 format
 return `${year}/${month.substr(-2)}/${day.substr(-2)} ${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;
}