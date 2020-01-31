
const allButtons = document.querySelectorAll(".button");
const displayVal = document.querySelector(".display");
console.log(allButtons);
console.log(displayVal);

for(let eachButton of allButtons){ 

    eachButton.addEventListener('click', function(e){
            if(eachButton.value == 'C'){
                //clear the display
                displayVal.innerText = '';
            }
            else if(eachButton.value == '='){
                //eval display then push to display
                displayVal.innerText = eval(displayVal.inerText);
            }
            else{
                //add button press to display string
                displayVal.innerText += eachButton.innerText;
            }
        }
        );
    };



