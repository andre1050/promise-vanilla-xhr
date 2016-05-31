function HttpRequest () {

    // PRIVATE
    var makeRequest = function(method, requestUrl, dataObject) {
        
        var dataObject = dataObject || "";

        return new Promise(function(resolve, reject) {

            var XHR = new XMLHttpRequest();
            
            XHR.open(method, requestUrl);

            XHR.onload = function() {
                // Resolve promise if status code is 200
                if (XHR.status === 200) {
                	try {
                        // If response is valid JSON, parse and resolve with JS object
                		var parsedJSON = JSON.parse(XHR.response);
				        resolve(parsedJSON);
				    } catch (e) {
                        // Otherwise, resolve with plain string
				        resolve(XHR.response);
				    }
                } else {
                    // Reject promise if status code is not 200
                    reject(XHR.statusText);
                }
            };

            XHR.onerror = function() {
                // Reject promise with generic HTTP error
                reject(Error("Couldn't connect to the remote server"));
            };

            XHR.send(dataObject);

        });

    };

    // PUBLIC
    // Options: 
    //  requestUrl [string]
    // Returns: Promise
    var get = function (requestUrl) {
    	return makeRequest("GET", requestUrl);
	};

    // PUBLIC
    // Options: 
    //  requestUrl [string]
    //  dataObject [object] (optional)
    // Returns: Promise
	var post = function (requestUrl, dataObject) {
		return makeRequest("POST", requestUrl, dataObject);
	};

    return {
    	get: get,
    	post: post
    }
    
}