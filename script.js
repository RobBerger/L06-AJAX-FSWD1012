let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'http://www.boredapi.com/api/activity', true);
myRequest.send();

myRequest.onreadystatechange = function(){
    if (this.readyState == 4) {
        if (this.status == 200) {
            // Parse the response to a variable
            let myResponse = JSON.parse(this.responseText);
            
            // Create a div container element
            let myDiv = document.createElement('div');

            // Create a paragraph element and add the innerHTML
            let activityTag = document.createElement('p');
            activityTag.innerHTML = "Activity Name: " + myResponse.activity;

            // Create another paragraph element and add the innerHTML
            let participantsTag = document.createElement('p');
            participantsTag.innerHTML = "Number of Participants: " + myResponse.participants;

            // Append the paragraph tags to the created div element
            myDiv.appendChild(activityTag);
            myDiv.appendChild(participantsTag);

            // Add the div element to the body of the document.
            document.body.appendChild(myDiv);
        } else {
            console.log("Error processing Request")
        }
    }
}