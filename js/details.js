function homeDisplay() {
    let listingRequest = new XMLHttpRequest();
    listingRequest.open('GET', 'http://3.21.225.172:8080/api/realestate/all')
    listingRequest.onload = function () {
        const listingData = JSON.parse(listingRequest.responseText);
        renderHTML1(listingData);
        console.log(listingData)
    };
    listingRequest.send();

}

function renderHTML1(data) {
    let ii = 0;
    let url = "http://3.21.225.172:8080/api/"
    $("#details").html("")
    for (let i = 0; i < data.length; i++) {
        let homePrice = data[i].price;
        let card =
            '<div class= "col-md-4 text-center" id="card1" style=""><div class="card" style="width:400px">'
            + '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '" style="width:100%">'
            + '<div class="card-body">'
            + '<h5 class="darkblue"> ' + data[i].street + ", " + data[i].city + ", " + data[i].state + "  " + data[i].zip + '</h5>'
            + '<p><b>$' + homePrice.toLocaleString() + "</b></p><p><b> Listing Agent: </b>" + data[i].listing + "<br> " + data[i].phone + "</p>"
            + '</div></div>'
        if (ii < 12) {
            $("#details").append(card);
            ii++;
        }
        console.log(card);
    }
}

window.onload = homeDisplay

function homeSearch() {
    let listingRequest1 = new XMLHttpRequest();
    listingRequest1.open('GET', 'http://3.21.225.172:8080/api/realestate/all')
      listingRequest1.onload = function () {
        const ourData = JSON.parse(listingRequest1.responseText);
        renderHtml2(ourData);
    };
    listingRequest1.send();

    function renderHtml2(data) {
        const minAmt = parseInt(document.getElementById("min").value);
        const maxAmt = parseInt(document.getElementById("max").value);
        let url = "http://3.21.225.172:8080/api/"
        $("#details").html("")
        for (let i = 0; i < data.length; i++) {
            let homePrice = data[i].price;

            if (isNaN(maxAmt)) {
                let maxLimit = 1000000000;
            } else {
                let maxLimit = maxAmt;
                console.log(maxLimit)
            }
            ;

            if (isNaN(minAmt)) {
                let minLim = 0;
            } else {
                let minLim = minAmt;

            }
            ;

            if ((data[i].price >= minLim) && (data[i].price <= maxLimit)) {

                let card =
                    '<div class= "col-md-3 text-center" id="card1"><div class="card" style="width:400px">'
                    + '<img class="card-img-top" src="http://3.21.225.172:8080/api/' + data[i].imageurl + '" style="width:100%">'
                    + '<div class="card-body">'
                    + '<h5 class="lightblue"> ' + data[i].street + ", " + data[i].city + ", " + data[i].state + "  " + data[i].zip + '</h5>'
                    + '<p><b>$' + homePrice.toLocaleString() + "</b></p><p><b> Listing Agent: </b>" + data[i].listing + " " + data[i].phone + '</p>'
                    + '</div></div>'
                $("#details").append(card);
            } else {
                console.log("error");
            }

            console.log(card)
        }
    }

}


function renderCust(data) {
    console.log(data)
    $("#custDetails").html("")
    for (let i = 0; i < data.length; i++) {
        let card =
            '<div class= "col-md-3 text-center" id="card1"><div class="card" style="width:400px">'
            + '<div class="card-body">'
            + '<p><b>' + data[i].fname + "<br>" + data[i].lname + "<br>" + data[i].email + "<br>" + data[i].phone + '</b></p>'
            + '</div></div>'
        $("#custDetails").append(card);
    }

}


function showCustomer() {
    let listingRequest1 = new XMLHttpRequest();
    listingRequest1.open('GET', 'http://localhost:8081/customer/all')
    listingRequest1.onload = function () {
        const ourData = JSON.parse(listingRequest1.responseText);
        renderCust(ourData);
    };
    listingRequest1.send();

}




