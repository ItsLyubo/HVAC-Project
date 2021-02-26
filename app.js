// function select elements

const selectElement = (d) => document.querySelector(d);


// open menu on click

selectElement  ('.show').addEventListener('click', () => {
    selectElement ('.nav-list').classList.add ('active');
});


// close menu on click


selectElement  ('.hide').addEventListener ('click', () => {
    selectElement ('.nav-list').classList.remove ('active');
});




