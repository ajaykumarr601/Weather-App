import{myApi} from './api js'
const apikey= myApi();

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.
        getCurrentPosition((position)=>{
            let lon= position.coords.longitude;
            let lat= position.coords.latitude;

            const url= `http://api.openweathermap.org/data/2.5/
            weather?q=delhi&appid= e181d6fd13d5dd0d9b99437e3477c62f`;

            fetch(url).then(res=>{
                return res.json()
            }).then((data)=>{
                console.log(data);
                weatherReport(data)
            })
        })

        function weatherReport(data){
            var urlcast= `http://api.openweathermap.org/data/2.5/forecast?q=${data.name}&` + `appid= e181d6fd13d5dd0d9b99437e3477c62f`;

            fetch(urlcast).then(res=>{
                return res.json()
            }).then((forecast)=>{
                console.log(forecast);
                hourforecast(forecast);
                dayforecast(forecast);
                document.getElementById('city').
                innerText= data.name+ ','+ data.sys.
                country;

                document.getElementById('Temperature').
                innerText= Math.floor(data.main.temp -
                    273)+ ' °C';

                    document.getElementById('clouds').
                    innerText= data.weather[0].description;

                    let icon= data.weather[0].icon;
                    let iconurl= "http://api.openweathermap.org/img/w" + icon + ".png";
                    document.getElementById('img').src=iconurl;

                   

                
            })

        }

    }
})

function hourforecast(){

}
 function dayforecast(forecast){

 }
