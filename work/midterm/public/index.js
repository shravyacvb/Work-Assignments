"use strict";
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-bar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const inputs = document.querySelectorAll('input[required]');
let submitButton = document.getElementById('submit-button');
const requiredSet = [];

let requiredFields = document.querySelectorAll('input[required]');
if(requiredFields.length != null || requiredFields != undefined){
    requiredFields.forEach(requiredInput => {
        requiredInput.addEventListener('change', (event) => {
            const name = document.getElementById(event.target.id);

            let str = name.value;
            let empty = (str === null || str.match(/^ *$/) !== null);
            let index = -1;
            for (let i = 0; i < requiredSet.length; i++)
            {
                if (requiredSet[i] == event.target.id)
                {
                    index = i;
                    break;
                }
            }
            if (!empty) 
            {
                if(index == - 1)
                {
                    requiredSet.push(event.target.id)
                }
            }
            else if(index != -1)
            {
                requiredSet.splice(index, 1);
            }
                submitButton.disabled = requiredSet.length < requiredFields.length;
        });
    });

}

if(submitButton != null){
    submitButton.addEventListener('click', (event) => {
        if(!submitButton.disabled){
            event.preventDefault();
            window.location.href = "./filledForm.html";
        }
    });
}




