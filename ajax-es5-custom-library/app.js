// creating new HTTP object
const http = new easyHTTP;

/*

// GET POSTS

// fetching get prototype, passing url and creating callback function
http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post

// fetching get prototype, passing url and creating callback function
http.get('https://jsonplaceholder.typicode.com/posts/14', function(err,post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// GET POSTS END

*/

//POST POST
//create data 
const data = {
    title: 'Updated Post',
    body: 'This is a custom post'
  };

//create post. fetching post prototype

/*
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
    if(err) {
        console.log(err);
    } else {
        console.log(post);
     }
    });
*/    

//POST POST END

/*
//UPDATE POST 
http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err,post){
    if(err) {
        console.log(err);
    } else {
        console.log(post);
     }
    });

//UPDATE POST END
*/


//DELETE POST 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});

//DELETE POST END 



