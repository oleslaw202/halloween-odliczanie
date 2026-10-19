const dataPrzyjazdu = new Date(2026, 9, 25, 0, 0, 0);
const sekundy = document.getElementById("sekundy");
const minuty = document.getElementById("minuty");
const godziny = document.getElementById("godziny");
const dni = document.getElementById("dni");
const dateValues = [sekundy, minuty, godziny, dni];

function update(){
    dateValues.forEach(value => {
        let splitted = value.innerText.split(":");
        let newValue = dataPrzyjazdu.getTime() - Date.now();
        switch(value){
            case dateValues[0]:
                newValue = Math.ceil(newValue / 1000);
                break;
            case dateValues[1]:
                newValue = Math.ceil(newValue / 1000 / 60);
                break;
            case dateValues[2]:
                newValue = Math.ceil(newValue / 1000 / 60 / 60);
                break;
            case dateValues[3]:
                newValue = Math.ceil(newValue / 1000 / 60 / 60 / 24);
                
                break;
        }
        splitted[1] = newValue.toFixed();
        value.innerText = splitted.join(": ");
    });
}

update();
setInterval(update, 1000);

