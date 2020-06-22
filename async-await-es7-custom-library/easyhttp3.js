
// we do not need XMLHttp object as we did with AJAX
class EasyHTTP {

    // make http get request
    // map response to json
    //returning data and error
    async get(url){
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // make http post request 
    // when we are using post we need to create method
    async post(url, data){
        
        const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

        const resData = await response.json();
        return resData;
 
        };
    

    // make put request
    async put(url, data){

            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const resData = await response.json();
            return resData;
        };
    

    // make delete request 
    async delete(url){
        
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await response.json();
        return resData;
    }

};

