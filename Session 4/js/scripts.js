let heartEl  = document.getElementById('heart');
let healthEl = document.getElementById('health');
let hurtBtn  = document.getElementById('hurt');
let healBtn  = document.getElementById('heal');
let health   = parseInt(healthEl.innerText);

let hurt = (event) =>{
    // Min health = 0
    health = health <= 0 ? 0 : health - 1;
    setOutput(health);
}

let heal = (event) =>{
    // Max health = 10
    health = health >= 10 ? 10 : health + 1; 
    setOutput(health);
}

let setOutput = function (value){
    // HeartSprite.png width = 1000px
    // Each heart is 100px wide
    // Set background position's x coordinate to be health * 100. Leave the y coordinate alone.
    // BUG: I only made 10 images and should have made 11. To fix it, I use a ternary operator to make sure my minimum x pos is 100px, not 0 because 0 wouldn't display anything
    heartEl.style.backgroundPosition = health == 0 ? '100px 0px':`${(value * 100)}px 0px`;
    //Don't forget to update the text between the buttons!
    healthEl.innerText = health;
}
hurtBtn.addEventListener('click', hurt);
healBtn.addEventListener('click', heal);