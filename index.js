function submitForm(e){
    event.preventDefault();
    
    let blew = document.getElementById('male');
    let blow = document.getElementById('female');
    let blueEl = document.getElementById('blue');
    let clearEl = document.getElementById('clear');

    let black = new Date(document.getElementById('tarehe').value);
    let male =['Kwasi', 'Kwabao', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    let female=['Akosua', 'Adowa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

    let block = black.getDay();
    
    if (blew.checked == true) {
        blueEl.innerText = "your name is : " + (male[block]);

    }else if (blow.checked == true) {
        blueEl.innerText = "your name is : " + (female[block]);
    }

}