var card = []
function addCard(){
var firstName = document.getElementById("fname").value
var lastName = document.getElementById("lname").value 
var dob = document.getElementById("dateBirth").value 
card = {firstName,lastName,dob}

var cardTemplate = 
    '    <div class="card" style="margin-left: 500px; margin-top: 100px; width: 40rem;">'+                                            
    '    <div class="card-body">'+
    '      <h5 class="card-title">Full name: '+ firstName +' '+ lastName +'</h5>'+
    '      <p class="card-text">'+ lastName +'</p>'+
    '      <p class="card-text">'+ dob +'</p>'+
    '    </div>'+
    '  </div>'
    '</div>';

document.getElementById("addBlog").insertAdjacentHTML("afterbegin", cardTemplate);

// function adder(card){
//     for(let i=0;i<card.length;i++){
//         card.push(card[i])
//     }
//     return card
// }
// console.log(adder(card))
}