const buttonChange = document.querySelector('button');
const inputChange = document.querySelector('input');
buttonChange.disabled = true;
inputChange.addEventListener('input', function(e){
    if(inputChange.value){
        buttonChange.disabled = false;
    } else {
        buttonChange.disabled = true;
    }
});

var dict = {};
buttonChange.addEventListener('click' , function myFunction(e) {
    e.preventDefault();
    var la = inputChange.value;

    if(dict[la] !== undefined){
        ++dict[la];
    } else {
        dict[la] = 1;
    }

    document.querySelector(".info__report").innerHTML = 'The count for '+la+' is ' + dict[la].toString();
});




