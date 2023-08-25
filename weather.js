 let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
 let API_key = "a361d178ac18023ee49c65fa1b335658";

 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    city.innerHTML=search;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;

    if(type.innerHTML == "Clouds"){
        image.src="clear.jpg"
    }
    input.value=""
 }

 function myFun(){
    search=input.value;
    data(search)
 }
 