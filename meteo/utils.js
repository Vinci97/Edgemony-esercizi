const qS = (type)=> document.querySelector(type);
const cE = (element)=> document.createElement(element);


const meteoCardGen = (data) => {
    const cardEl = cE('div');
    cardEl.className = "Container";


    const city = cE('h1');
    city.textContent= data.name;
    city.className= 'name';
    const Temp = cE('h1');
    Temp.textContent = `${data.main.temp}°`;
    const tempMin = cE('h5');
    tempMin.textContent = ` ${data.main.temp_min}°`;
    const tempMax = cE('h5');
    tempMax.textContent = ` ${data.main.temp_max}°`;
    const humidity = cE('p');
    humidity.textContent = `humidity: ${data.main.humidity}%`
    const pressure = cE('p');
    pressure.textContent = `pressure: ${data.main.pressure}hPa`
    const wind = cE('p');
    wind.textContent = `wind: ${data.wind.speed}m/s da ${data.wind.deg}°`
    const coord = cE('p');
    coord.textContent = `lat ${data.coord.lat} / lon ${data.coord.lon}°`
    const sunrise = cE('p');
    sunrise.textContent = `alba ${new Date(data.sys.sunrise).getUTCHours()}:${new Date(data.sys.sunrise).getUTCMinutes()} `;
    const sunset = cE('p');
    sunset.textContent = `tramonto ${new Date(data.sys.sunset).getUTCHours()}:${new Date(data.sys.sunset).getUTCMinutes()}`;
    

    const contCity = cE('div');
    contCity.className = "contCity";
    const constTemp = cE('div');
    constTemp.className = "contTemp";
    const constWind = cE('div');
    constWind.className = "contWind";
    const constPosition = cE('div');
    constPosition.className = "contPosition";

    const divTemp = cE('div');
    divTemp.className= "divTemp";
    const tempMinMax = cE('div');
    tempMinMax.className= "tempMinMax"


    const separation1 = cE('div');
    separation1.className = ('separation1')
    const separation2 = cE('div');
    separation2.className = ('separation2')
    const separatonTemp = cE('div');
    separatonTemp.className = ('separatonTemp')
    const contBody = cE('div');
    contBody.className = ('contBody')

    contCity.append(city)
    divTemp.appendChild(Temp)
    tempMinMax.append(tempMin,separatonTemp,tempMax)
    constTemp.append(divTemp,tempMinMax)
    constWind.append(humidity,pressure,wind)
    constPosition.append(coord,sunrise,sunset)
    contBody.append(constTemp,separation1,constWind,separation2,constPosition)
    cardEl.append(contCity,contBody)
    return cardEl
};
export{meteoCardGen,qS}