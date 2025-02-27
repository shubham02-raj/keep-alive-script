import https from 'https'; 
import http from 'http'; 

const BACKENDS = [
  'https://food-del-tomato-backend-d7x6.onrender.com', 
  'https://food-del-tomato-backend-stripe.onrender.com/health' 
];

const INTERVAL = 5 * 60 * 1000; // Ping every 5 minutes

const pingServers = () => {
  BACKENDS.forEach((URL) => {
    const client = URL.startsWith('https') ? https : http;
    client.get(URL, (res) => {
      console.log(`Pinged ${URL} - Status Code: ${res.statusCode}`);
    }).on('error', (err) => {
      console.error(`Error pinging ${URL}:`, err.message);
    });
  });
};

setInterval(pingServers, INTERVAL);
pingServers(); // Ping immediately on start
console.log(`Keep-alive script started, pinging servers every ${INTERVAL / 60000} minutes.`);






// import fetch from "node-fetch";

// const keepAlive = () => {
//   fetch("https://food-del-tomato-backend-d7x6.onrender.com")
//     .then(res => console.log("Ping successful", res.status))
//     .catch(err => console.error("Ping failed", err));
// };

// setInterval(keepAlive, 5 * 60 * 1000); // Ping every 5 minutes
// keepAlive(); // Ping immediately on start

