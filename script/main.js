var card = []
function addCard(){
var firstName = document.getElementById("firstName").value
var lastName = document.getElementById("lastName").value 
var dob = document.getElementById("dob").value 
var state = document.getElementById("state").value
var local = document.getElementById("LGA").value
card = {firstName,lastName,dob,state,local}

var cardTemplate = 
    '    <div class="card w-50">                                            '+
    '    <div class="card-body">'+
    '      <h5 class="card-title mb-3">Full name: '+ firstName +' '+ lastName +'</h5>'+
    '      <p class="card-text">Date of Birth:'+ dob +'</p>'+
    '      <p class="card-text">State'+ state +'</p>'+
    '      <p class="card-text">LGA'+ local +'</p>'+
    '    </div>'+
    '  </div>'
    '</div>';

document.getElementById("card").innerHTML = cardTemplate;

// document.getElementById("addForm").insertAdjacentHTML("afterbegin", cardTemplate);

function adder(card){
    for(let i=0;i<card.length;i++){
        card.push(card[i])
    }
    return card
}
// console.log(adder(card))
}