// Event Listener to load BUTTON 1
document.getElementById('button1').addEventListener('click', loadCustomer);

// Event Listener to load BUTTON 2
document.getElementById('button2').addEventListener('click', loadCustomer2);



// BUTTON 1 FUNCTION
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'AjaxJson.json', true)

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText)

            const customer = JSON.parse(this.responseText);

            const outPut = `
            <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
            </ul>
            `

            document.getElementById('customer').innerHTML = outPut;

        }
    }


    xhr.send();

}



// BUTTON 2 FUNCTION
function loadCustomer2(e) {
    xhr = new XMLHttpRequest;

    xhr.open('GET', 'AjaxJsons.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            // console.log(this.responseText);

            const customers = JSON.parse(this.responseText);

            let outPut = '';

            customers.forEach(function (customer) {
                outPut += `
                <ul>
                <li>id: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>
                `
            });

            document.getElementById('customers').innerHTML = outPut;
        }
    }

    xhr.send();
}