// ES5 Object Oriented Library

//constructor, XML object
function easyHTTP(){
    this.http = new XMLHttpRequest();
};

// Make Http GET Request
// url from library
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function(){
        //this keyword in if statements has local scope. we need to set self above so we can capture 'this'. 
        if(self.http.status === 200){
            //null is if we have an error
            callback(null, self.http.responseText);
        } else {
            // status gives us the error code
            callback("Error: " + self.http.status);
        }

    };

    this.http.send();
};

// Make Http POST Request
// submit data to be processed to a specific source
easyHTTP.prototype.post = function(url, data, callback) {

    this.http.open('POST', url, true);
    //set content type
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function() {
        // we don't need to check the status as we are doing the post request
        callback(null, self.http.responseText);
    }


    //we need to send data as a JSON string
    this.http.send(JSON.stringify(data));
};

// Make Http PUT Request
// update specific source 
easyHTTP.prototype.put = function(url, data, callback){

    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);

    }

    this.http.send(JSON.stringify(data));
};

// Make Http DELETE Request
easyHTTP.prototype.delete = function(url,callback) {
    this.http.open('DELETE', url, true);
  
    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200) {
        callback(null, 'Post Deleted');
      } else {
        callback('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }