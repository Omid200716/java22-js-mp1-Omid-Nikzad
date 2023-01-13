// skappat en array med 5 element
//
const list = ['Rad 1', 'Rad 2', 'Rad 3', 'Rad 4', 'Rad 5'];

//skappat två variablar en som bestämma färg en som bestämma size och ge de en värde.
let
listColor = 120
listSize = 13;

const divList = document.createElement('divList');
document.body.append(divList);
// divList styling 
divList.style.width = '70%';
divList.style.display = 'flex';
divList.style.justifyContent = 'center';
divList.style.flexFlow = 'column';
divList.style.marginLeft = 'auto';
divList.style.marginRight = 'auto';

//for loopen som går igenom alla indexer i array
// och skappat en h1 element och lägg till så det so visas i h1 element är  min array lista. 

for (let i = 0; i < list.length; i++) {
    const h1 = document.createElement('h1');
    divList.append(h1);
    h1.innerText = `${list[i]}`;
    h1.style.textAlign = 'center';
    h1.style.color = ' #6e6ef7';
    h1.style.background = `hsl(${listColor}, 90%, 85%)`;
    listColor += 20;
    h1.style.fontSize = `${listSize}px`;
    listSize = listSize + 7;
}
// skappat en till  divContainer och lägg i body

const divContainer = document.createElement('divList');
document.body.append(divContainer);

//styling och positionering 
divContainer.style.display = 'flex';
divContainer.style.justifyContent = 'center';
divContainer.style.gap = '10rem';
divContainer.style.marginTop = '3rem';
divContainer.style.marginLeft = 'auto';
divContainer.style.marginRight = 'auto';
divContainer.style.padding = '4rem';
divContainer.style.border = '2px solid black';
divContainer.style.width = '60%';

//tre arrays list för listor
const
    listNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
reversList = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
stringList = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

//skappat en loop för min divcontainer som kör tre gånger och innehåller tre divar och styling 

for (let i = 0; i < 3; i++) {
    const divNumber = document.createElement('divList');
    divContainer.append(divNumber);

    divNumber.style.background = '#a8a8f0';
    divNumber.style.padding = '20px';
    divNumber.style.display = 'flex';
    divNumber.style.flexFlow = 'column';
    divNumber.style.width = '150px';

    // skappat en loop inuti en loop och skappat 10 p element på varje div  
    for (let j = 0; j < 10; j++) {
        //styling i första div 
        if (i == 0) {
            const numListP = document.createElement('p');
            numListP.innerText = `${listNumber[j]}`;
            numListP.style.background = 'black';
            numListP.style.color = 'white';
            numListP.style.textAlign = 'left';
            numListP.style.margin = '0';
            
            numListP.style.fontSize = '25px';
            divNumber.append(numListP);
            // gör så att varannan p får vit background och svart text färg
            if (j % 2 == 1) {
                numListP.style.background = 'white';
                numListP.style.color = 'black';
            }
            // gär att ett nummer får samma background som div listan
            if (listNumber[j] == 4) {
                numListP.style.background = '#a8a8f0';
            }
        }

        if (i == 1) {
            const reversListP = document.createElement('p');
            reversListP.innerText = `${reversList[j]}`;
            reversListP.style.background = 'white';
            reversListP.style.color = 'black';
            reversListP.style.textAlign = 'center';
            reversListP.style.margin = '0';
            
            reversListP.style.fontSize = '25px';
            divNumber.append(reversListP);
            if (j % 2 == 1) {
                reversListP.style.background = 'black';
                reversListP.style.color = 'white';
            }

            if (reversList[j] == 8) {
                reversListP.style.background = '#a8a8f0';
            }
        }

        if (i == 2) {
            const stringListP = document.createElement('p');
            stringListP.innerText = `${stringList[j]}`;
            stringListP.style.background = 'black';
            stringListP.style.color = 'white';
            stringListP.style.textAlign = 'right';
            stringListP.style.margin = '0';
           
            stringListP.style.fontSize = '25px';
            divNumber.append(stringListP);

            if (j % 2 == 1) {
                stringListP.style.background = 'white';
                stringListP.style.color = 'black';
            }

            if (stringList[j] == 'sex') {
                stringListP.style.background = '#a8a8f0';
            }
        }

    }

}