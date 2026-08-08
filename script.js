
const closedTinBox = document.getElementById('closed-tin-box');
const clickSound = document.getElementById('click-sound');

closedTinBox.addEventListener('click', () => {

    if(clickSound){
        clickSound.currentTine=0.1; 
        clickSound.play();
        console.log("Sound is playing!");
    }else{
        console.error("Click sound element not found!");
    }

});
