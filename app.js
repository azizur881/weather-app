



// api.openweathermap.org/data/2.5/weather?q=dhaka &appid=d8079b120ab97274060f48992ad31e27


// d8079b120ab97274060f48992ad31e27


const weatherApi={
    
    key : "d8079b120ab97274060f48992ad31e27" ,
    baseUrl :"https://api.openweathermap.org/data/2.5/weather"
}

const   searchBox = document.getElementById('input1')
        searchBox.addEventListener('keypress',(event) =>{

        if(event.keyCode == 13){
            console.log(searchBox.value);
            getWeatherReport(searchBox.value);
        }
})

function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then (weather => {
        return weather.json();
    }).then(showReport);
}
function showReport(weather){
console.log(weather);

    let city = document.getElementById('city')
    city.innerHTML = `${weather.name} , ${weather.sys.country}`;
    
    
    let degree = document.getElementById('degree')
    degree.innerHTML = `${Math.round(weather.main.temp)}&deg; C`;

    let min = document.getElementById('max-min')
    min.innerHTML = `${Math.ceil(weather.main.temp_min)}&deg; C (min) /${Math.floor(weather.main.temp_max)}&deg; C (max)` ;

    let sky = document.getElementById('sky')
    sky.innerHTML = `${weather.weather[0].main}`
    
    let date = document.getElementById('date')
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate) 
} 

function dateManage(dateArg){
    let days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
    let months = ['january','february','march','april','may','june','july','august','september','october','november','december']


    let year = dateArg.getFullYear()
    let month = months[dateArg.getMonth()]
    let day = days[dateArg.getDay()]
    let date = dateArg.getDate()

    return `${date} ${month} ${day}, ${year} `
}
