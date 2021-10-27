function highPrice() {
    let ourList = new XMLHttpRequest();
    ourList.open('GET', "http://3.21.225.172:8080/api/realestate/all");
    ourList.onload = function () {
    const ourData = JSON.parse(ourList.responseText);
    renderHTML(ourData);
    };
    ourList.send();
}

function renderHTML(data){
    let ourHome = "0";
    let number = "";
    let ourInfo = "";
    for (let i = 0; i < data.length; i++){
        number = data[i].price;
        if (number >= ourHome) {
            ourHome = number;
            ourInfo = data[i];
            var ii = i;
        } else {
            ourHome = ourHome;

        }

        document.getElementById("featuredHome").innerHTML= '<a <img  src="http://3.21.225.172:8080/api/' + ourInfo.imageurl + '"></a><br><h3><b>$' + ourHome.toLocaleString() + "</b></h3><p><b>Address:</b>" + ourInfo.street + ", " + ourInfo.city + ", " + ourInfo.state + "  " + ourInfo.zip + "</p><p><b>Year Built: </b>" + ourInfo.yrblt.slice(0,4) + "</p><p> <b>Bathrooms: </b>" + ourInfo.baths + " <b>Bedrooms: </b>" + ourInfo.beds + '</p>';

        }
}



window.onload = highPrice;


