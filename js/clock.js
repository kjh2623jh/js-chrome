const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// setInterval(sayHello, 2000); // 2초마다 함수실행
// setTimeout(sayHello, 1000); // 1초 이후에 한 번 실행
getClock();
setInterval(getClock, 1000);