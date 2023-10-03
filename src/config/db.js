const { Client } = require('pg')

const client = new Client({
    host: "localhost",
    port: 5432,
    database: "school",
    user: "postgres",
    password: "kinging"
})
client.connect((err) => {
if (err) {
    console.error("Error connecting to the database", err);
}else {
 console.log("connected to the database");
}
});

module.exports = client
 

// Destructuring

// const domain = {
//     life : "turkey",
//     kitchen: "utensils"
// }
// const { life, kitchen } = domain
// console.log(kitchen)