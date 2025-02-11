'use strict';



const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);


for(let i = 0 ; i < btnsOpenModal.length ; i++){
    btnsOpenModal[i].addEventListener('click', function() {
        // console.log('button was clicked');
        modal.classList.remove('hidden'); //dont use . to remove classes
        overlay.classList.remove('hidden'); 


    });

    btnCloseModal.addEventListener('click', function() {
        modal.classList.add('hidden'); //dont use . to add classes
        overlay.classList.add('hidden');
        

    });

    overlay.addEventListener('click', function() {
        modal.classList.add('hidden'); //dont use . to add classes
        overlay.classList.add('hidden');
        

    });  //we can still make a function and then calling that fuction on both the eventhandlers  that can make our code more effective and clean 


    


}

//global events are keyboard events that are used on whole document :
document.addEventListener('keydown', function(e){ //calling this function so that it can return an orgument to the bowser as a document 
    // console.log(e);


    if(e.key === 'Escape') {
        if (!modal.classList.contains('hidden')){

            modal.classList.add('hidden'); // using esc key to close modal 
        overlay.classList.add('hidden');

        }
    }

});

