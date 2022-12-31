let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://www.boredapi.com/api/activity', true);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            console.log(JSON.parse(this.responseText));
        } else{
            console.log("Error processing Request")
        }
    }
}