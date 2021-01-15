//canvas는 html요소, 픽셀을 컨트롤할수 있게 해줌
const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

//css사이즈 외에도 픽셀 사이즈를 따로 지정해줘야됨 css와 같은 크기로
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
//같은 원리로 html뿐 아니라 캠버스 자체 색을 하얀색으로 700 700 맞춰서 초기화
ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false; //클릭된 상태인지 체크
let filling = false; //fill 모드인지 paint 모드인지 체크

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){//항상 마우스를 따라다니면서 그릴 준비함
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{//클릭되는 순간 원래 마우스 위치부터 이동한곳까지 그림을 그림
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleRangeChange(event){
    ctx.lineWidth = event.target.value;
}

function handleModeClick(){
    if(filling){
        filling = false;
        mode.innerText = "Fill";
    }else{
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick(){
    if(filling)
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
}

function handleCM(event){
    event.preventDefault(); //이벤트 막기
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    //a태그의 href에 그림 url 넣고 다운로드 속성 넣으면 다운받아짐
    const link = document.createElement("a");
    link.href = image;
    link.download = "amezing art[✨]";
    link.click();
    //save버튼이 클릭되면 안보이는 a태그 만들고 a태그가 클릭되게함
    //a가 클릭되면 현재 이미지를 url로 다운받음
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange);//스크롤로 크기 정할때 발생하는 이벤트는 input
}

if(mode){
    mode.addEventListener("click", handleModeClick);
}

if(saveBtn){
    saveBtn.addEventListener("click", handleSaveClick);
}