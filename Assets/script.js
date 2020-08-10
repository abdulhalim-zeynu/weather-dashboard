$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();
        // prevents default behavior from running
    })
})

// get the search value
var city = $("#city").val()
var searchText = city.val();
console.log(searchText);

// make the request to the weather api
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchText +"&appid=fd08d8de5e32f25e3e457ffa1d32c706"
$.ajax({
    url: queryURL,
    method: "GET",
})
    .then(res => {
        console.log(res);
    })

var cities = JSON.parse(localStorage.getItem('cities')) || [];
// if city doesn't exist in search history, then add it
if (cities.indexOf(searchText) === -1) {
    cities.push(searchText);
}
localStorage.setItem('cities', JSON.stringify(cities));
//listCities();

// clear the cities div for new results
$('#cities').html('');

//add all of the search results to the page
for (var i = 0; i < Response.length; i++) {
    $(`
        <div class="card">
        <h1>${Response[i].city.name}</h1>
        </div>
    `)
        .appendTo('#shows');
}
