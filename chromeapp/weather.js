const COORDS = 'coords';

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
        //객체 생성시 집어넣으려는 변수명과 
        //생성하려는 변수명이 같을때 이렇게 사용 가능
    };
    saveCoords(coordsObj);
}

function handleGeoError(){
    console.log('위치 정보를 읽을 수 없습니다');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    } else {
        //getWeather
    }
}

function init(){
    loadCoords();
}
init();