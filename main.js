
const allButtons = document.querySelectorAll(".button");
const displayVal = document.querySelector(".display");
console.log(allButtons);
console.log(displayVal);

for(let eachButton of allButtons){ 

    eachButton.addEventListener('click', function(e){
            if(eachButton.innerText === 'C'){
                //clear the display
                displayVal.innerText = '';
            }
            else if(eachButton.innerText === '='){
                //eval display then push to display
                displayVal.innerText = eval(displayVal.innerText);
            }
            else{
                //add button press to display string
                displayVal.innerText += eachButton.innerText;
            }
        }
        );
    };

console.log(clr.innerText);


