
let btnplus = document.querySelectorAll('.plus');
let btnmoin = document.querySelectorAll('.moin');
let total = document.querySelector('.total');
let deletes = document.querySelectorAll(".zebla");
let quantitys = (document.querySelectorAll(".qty"));
let hearts = Array.from(document.querySelectorAll(".coeur"));
let prices = (document.querySelectorAll(".prix"));
let troisp = Array.from(document.querySelectorAll(".troisp"));
let produit = Array.from(document.querySelectorAll(".produit")); 
let parents = Array.from(document.querySelectorAll("#parent"));



// btnplus1.addEventListener ('click', ajout);

// function ajout() {
//      document.querySelector('.qty').value = parseInt(document.querySelector('.qty').value) +1;
    
// }

// btnmoin1.addEventListener('click', reduire);
// function reduire() {
//     if (num.value>0) {
//         num.value = parseInt(num.value) -1;
    
        
//     }   
    
// }
// function ajout() {
//       document.querySelectorAll('.qty').value = parseInt(document.querySelectorAll('.qty').value)+1;
//       }

for (let i = 0; i < btnplus.length; i++) {
    btnplus[i].addEventListener('click',function(){
       btnmoin[i].previousElementSibling.innerText++ 
       calculsomme()
        
    })
    }
    for (let i = 0; i < btnmoin.length; i++) {
        btnmoin[i].addEventListener('click',function(){
            if (btnmoin[i].previousElementSibling.innerText>0 ) {
                btnmoin[i].previousElementSibling.innerText--
            }   
            calculsomme()  
        })   
    }

    for(let i in hearts){
        hearts[i].addEventListener("click",function(){
            if(hearts[i].getAttribute('src') == "/cont/heart-solid.svg")
            hearts[i].setAttribute('src','/cont/png shih.png');
            else
            hearts[i].setAttribute('src','/cont/heart-solid.svg');
        });

    }
    console.log(deletes)
    for(let i in deletes){
    deletes[i].addEventListener("click",function(){
        deletes[i].parentElement.parentElement.parentElement.remove();
        calculsomme()
      
    });
}




function calculsomme() {
    let quantitys = (document.querySelectorAll(".qty"));
    let prices = (document.querySelectorAll(".prix"));
    let total = document.querySelector('#total');
    var som = 0
    for (let i = 0; i<prices.length;i++){ 

        som = som + prices[i].innerHTML * quantitys[i].innerHTML
     }
     total.innerHTML = som

    
}


    


   




    


   



    

    
        

  



        
        
        