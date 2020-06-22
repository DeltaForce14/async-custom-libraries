
// we do not need XMLHttp object as we did with AJAX
class EasyHTTP {

    // make http get request
    // map response to json
    //returning data and error
    get(url){
        return new Promise((resolve, reject) => {

            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

    // make http post request 
    // when we are using post we need to create method
    post(url, data){
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // make put request
    put(url, data){
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));

        });
    }

    // make delete request 
    delete(url){
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(() => resolve('User deleted'))
                .catch(err => reject(err));
        })
    }

};

