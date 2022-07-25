let alltotal = 0;
function gledajSada(dugme){

    let price = dugme.parentElement.children[3]
    
    price = price.innerText
    price = price.substring(1)
    price = parseInt(price)
    
   /* let drugo = document.querySelector('.drugo')
    drugo = drugo.innerText
    drugo = drugo.substring(1)
    drugo= parseInt(drugo) */
    let moviecost = document.querySelector('.moviecost');

    let moviename = dugme.parentElement.children[2]

    
    
    alltotal += price;
    moviename= moviename.innerText

    moviecost.innerHTML += `<div class="elbrisanje"><h2>${moviename}</h2> <h6>costs:<h6> <h3><span>${price}$</span></h3>
                            <button onclick="stop(this)">Remove</button></div > 
                        `
    let ukupan = document.querySelector('.total');
    ukupan = ukupan.innerText= `TOTAL: ${alltotal}$`                       
    
    dugme.innerText = `watching`;
    dugme.setAttribute ('disabled', 'true');

}

function stop(remove_dugme) {

    
let brisanje = remove_dugme.closest('.elbrisanje');
let price = brisanje.querySelector('h3 span').innerText
let moviename = brisanje.querySelector('h2').innerText
let movielist = document.querySelectorAll('.movie')

price = parseInt(price)

alltotal -= price;

let ukupan = document.querySelector('.total');
    ukupan = ukupan.innerHTML = `TOTAL: ${alltotal}$`  

brisanje.remove()  

   movielist.forEach(function(film) {
    let nekiname = film.querySelector('.ime').innerText;

    if(nekiname === moviename) {
        film.querySelector('.dugme').removeAttribute('disabled');
        film.querySelector('.dugme').innerText = 'watch';
    }
         console.log(film)

   });

}