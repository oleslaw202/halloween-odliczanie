const dataPrzyjazdu = new Date(2026, 9, 25, 11, 30, 0);
const sekundy = document.getElementById("sekundy");
const minuty = document.getElementById("minuty");
const godziny = document.getElementById("godziny");
const dni = document.getElementById("dni");
const dateValues = [sekundy, minuty, godziny, dni];

const timer = document.getElementById("timer");

const countdownDiv = document.getElementById("countdown");
const countdownTimer = document.getElementById("countdown").querySelector("h1");

const piosenka = document.getElementById("piosenka");

function update(){
    let timerSplit = timer.innerText.split(" ");
    dateValues.forEach(value => {
        let splitted = value.innerText.split(":");
        let newValue = dataPrzyjazdu.getTime() - Date.now();
        switch(value){
            case dateValues[0]:
                newValue = Math.ceil(newValue / 1000);
                timerSplit[4] = newValue % 60;
                if(newValue <= 10 && newValue >= 0) {
                    countdownDiv.hidden = false;
                    countdownTimer.innerText = newValue;
                } else if(newValue < 0) {
                    countdownDiv.hidden = false;
                    countdownDiv.style.backgroundImage = `url("rainbow.gif")`;
                    countdownDiv.style.opacity = 0.25;
                    countdownTimer.hidden = true;
                    countdownDiv.querySelector("img").hidden = false;
                    if(piosenka.paused == true) {
                        piosenka.play();
                    }
                }
                break;
            case dateValues[1]:
                newValue = newValue / 1000 / 60;
                if(newValue >= 0) {
                    newValue = Math.floor(newValue);
                } else {
                    newValue = Math.ceil(newValue);
                }
                timerSplit[3] = newValue % 60;
                break;
            case dateValues[2]:
                newValue = newValue / 1000 / 60 / 60;
                if(newValue >= 0) {
                    newValue = Math.floor(newValue);
                } else {
                    newValue = Math.ceil(newValue);
                }
                timerSplit[2] = newValue % 24;            
                break;
            case dateValues[3]:
                newValue = newValue / 1000 / 60 / 60 / 24;
                if(newValue >= 0) {
                    newValue = Math.floor(newValue);
                } else {
                    newValue = Math.ceil(newValue);
                }
                timerSplit[1] = newValue;
                break;
        }
        splitted[1] = newValue.toFixed();
        value.innerText = splitted.join(": ");
    });
    timerSplit[4] += "s";
    timerSplit[3] += "m";
    timerSplit[2] += "g";
    timerSplit[1] += "d";
    timer.innerText = timerSplit.join(" ");
}

let timeDiff = Date.now() / 1000;
function check() {
    if(parseInt(timeDiff) < parseInt(Date.now() / 1000)) {
        timeDiff = parseInt(Date.now() / 1000);
        update();
    }
}

update();
setInterval(check, 10); 
