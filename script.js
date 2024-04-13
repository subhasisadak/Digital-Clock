let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hhRotate = 30*hh + mm/2;
    let mmRotate = 6*mm + ss/10;
    let ssRotate = 6*ss;

    hr.style.transform = `rotate(${hhRotate}deg)`;
    mn.style.transform = `rotate(${mmRotate}deg)`;
    sc.style.transform = `rotate(${ssRotate}deg)`;
}

setInterval(displayTime, 1000);