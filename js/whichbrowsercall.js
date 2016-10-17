var APIloaded = false;

function loadAPI(ua, callbackFunction){
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
request.open('GET', 'https://api.whichbrowser.net/rel/detect.js', true);
request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');  // Tells server that this call is made for ajax purposes.
                                                                 // Most libraries like jQuery/Prototype/Dojo do this
request.setRequestHeader('User-Agent', ua);
request.send(null);
}


function customCallAPI(ua){
  return loadAPI(ua, function(){return WhichBrowser.prototype.toJSON()});
}

function defaultCallAPI(){
  return customCallAPI(window.navigator.userAgent);
}

function bindToBrowserDetected(callbackFunction){
  return loadAPI(window.navigator.userAgent, callbackFunction);
}


