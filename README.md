# Promise Vanilla XHR (PVX.js)

JavaScript helper method to make XHR calls (GET and POST) and return promises, all using vanilla JavaScript.

Response is parsed into a JS object if the server returns a valid JSON string.

[Check native support for Promises](http://caniuse.com/#feat=promises)

#### Sample GET request:

```
var pvx = new PVX();

pvx.get("server/testGet.php")
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.error("HTTP Error: ", error);
});
```

#### Sample POST request:

```
var pvx = new PVX();
var postData = { firstName: "Andre", lastName: "Silva" };

pvx.post("server/testPost.php", postData)
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.error("HTTP Error: ", error);
});
```
