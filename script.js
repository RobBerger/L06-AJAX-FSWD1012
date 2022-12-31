let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://www.boredapi.com/api/activity', true);
myRequest.send();

myRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        // Response was received
    } else {
        // Not ready yet
    }
}