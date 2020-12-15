// CREATE EVENT LISTENER

document.getElementById('button').addEventListener('click', loadData);


// LOAD DATA FUNCTION

function loadData() {

    // Create XHR OBJECT

    const xhr = new XMLHttpRequest();

    // Open Method

    xhr.open('GET', 'data.txt', true);


    // OPTIONAL - Used for spinner and loader

    xhr.onprogress = function () {
        if ('READYSTATE', xhr.readyState);

    };


    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById('output').innerHTML =
                `<h3>${this.responseText}</h3>`
        };
    };


    // OLDER WAY OF GETTING DATA  

    // xhr.onreadystatechange = function () {
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }


    // WHEN YOU HAVE ERROR
    xhr.onerror = function () {
        console.log('Request Error');
    }
    xhr.send();


    // HTTP STATUSES

    // 200: "OK"
    // 403: "FORBIDDEN"
    // 404: "NOT FOUND"


    // READY STATE VALUES

    //  0: Request not initialized 
    //  1: Server connection established
    //  2: Request Received 
    //  3: Processing Request
    //  4: Request finished and response is ready
}