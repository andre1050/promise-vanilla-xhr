# Promise Vanilla XHR (PVX.js)

JavaScript helper method to make XHR calls (GET and POST) and return promises, all using vanilla JavaScript.

Response is parsed into a JS object if the server returns a valid JSON string.

I have intentionally not used a specific wrapper for this module to keep the code clean and avoid making assumptions on your architecture. It is easy enough to adapt for either AMD, CommonJS or ES6. If you need it to work on all of these, take a look at the  [UMD](https://github.com/umdjs/umd) wrapper.

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
var data = { firstName: "Andre", lastName: "Silva" };

pvx.post("server/testPost.php", data)
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.error("HTTP Error: ", error);
});
```
