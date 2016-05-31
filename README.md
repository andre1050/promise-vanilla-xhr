# Vanilla Promises

Simple JavaScript method to make XHR requests (GET and POST) and return promises using vanilla JS.

#### Sample GET request:

`
var http = new HttpRequest();
http.get("server/testGet.php")
.then(function (response) {
    // Returns a JS object if the server responded with a valid JSON string
    // Or just a string if otherwise
    console.log(response);
})
.catch(function (error) {
    console.error("HTTP Error: ", error);
});
`

#### Sample POST request:

`
var http = new HttpRequest();
var postData = { firstName: "Andre", lastName: "Silva" };
http.post("server/testPost.php", postData)
.then(function (response) {
    // Returns a JS object if the server responded with a valid JSON string
    // Or just a string if otherwise
    console.log(response);
})
.catch(function (error) {
    console.error("HTTP Error: ", error);
});
`