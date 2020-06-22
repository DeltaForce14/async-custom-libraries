// setting up new EasyHTTP

const http = new EasyHTTP;

/*
// Getting users from JSON Placeholder
// We are using promise in easyhttp2 so we needto use .then and .catch again
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(err => console.log("ERROR:", err));



// Post data    
// User data
const data = {
    name: "Mary Peggy",
    username: "peggysue",
    email: "peggy@email.com"
}

http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));  */



// Update User data

const data = {
    name: "Mary Peggy",
    username: "peggysue",
    email: "peggy@email.com"
}

http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

   
/*
// Delete User 

http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));

     */
