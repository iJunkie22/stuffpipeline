var APIloaded = false;

/*function loadAPI(ua, callbackFunction){
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    var DONE = this.DONE || 4;
    if (this.readyState === DONE){
        eval(this.response);
        APIloaded = true;
        var wb = new WhichBrowser();
        callbackFunction(wb.toJSON());
    }
};
request.open('GET', 'http://api.whichbrowser.net/rel/detect.js', true);
//request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');  // Tells server that this call is made for ajax purposes.
                                                                 // Most libraries like jQuery/Prototype/Dojo do this
//request.setRequestHeader('Origin', 'https://api.whichbrowser.net')
request.setRequestHeader('User-Agent', ua);
request.setRequestHeader('Host', 'api.whichbrowser.net')
request.send(null);
}*/

function loadAPI() {
  var ns = document.createElement('script');
  ns.id = 'whichbrowser-injector';
  ns.src = 'http://api.whichbrowser.net/rel/detect.js';
  
  document.body.insertBefore(ns, document.getElementById('wb-runner'));
  APIloaded = true;
}



/*
function customCallAPI(ua){
  return loadAPI(ua, function(){return WhichBrowser.prototype.toJSON()});
}

function defaultCallAPI(){
  return customCallAPI(window.navigator.userAgent);
}

function bindToBrowserDetected(callbackFunction){
  return loadAPI(window.navigator.userAgent, callbackFunction);
}*/
/*
// fdgdfg
function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    //if ("withCredentials" in xhr){
      if (true){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", "https://api.whichbrowser.net/rel/detect.js");
if (request){
  request.setRequestHeader('User-Agent', window.navigator.userAgent);
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    request.onload = function() {
        console.log("onload" + request.response);
    };
    request.onreadystatechange = function(){var DONE = this.DONE || 4;
    if (this.readyState === DONE){console.log(this);console.log(this.getAllResponseHeaders());}};
    request.send(null);
}
*/