let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://www.boredapi.com/api/activity', true);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            // Response was received and was successful
        } else {
            // Reponse was received but there might have been a problem
        }
    } else {
        // Not ready yet
    }
}