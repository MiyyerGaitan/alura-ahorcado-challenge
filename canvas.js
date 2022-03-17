let words = ["computador", "raton", "monitor", "parlantes"];

let input = document.querySelector('#input-nueva-palabra');

document.querySelector('#nueva-palabra').onclick = function () {
    event1(input.value);
}

function event1 (word) {
    r = /[^a-z ]/;
    if (r.test(word))
    {
        alert("Solo letras minúsculas sin acento ni caracteres especiales");
    }
    else if (word == "") {
        alert("Por favor escriba una palabra");
    }
    else {
        review_word(word);
    }
}

function review_word (word) {
    for (let item of words){
        if (word == item){
            alert("La palabra ya se encuentra agregada")
        }
    }
    words.push(word); 
}
