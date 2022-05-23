var card = []
function addImage(){
var firstName = document.getElementById("firstName").value
var lastName = document.getElementById("lastName").value 
var dob = document.getElementById("dob").value 
card = {firstName,lastName,dob}

var cardTemplate = '    <div class="card w-50">                                            '+
    '    <div class="card-body">'+
    '      <h5 class="card-title mb-3">Full name: '+ firstName +' '+ lastName +'</h5>'+
    '      <p class="card-text">'+ dob +'</p>'+
    '    </div>'+
    '  </div>'
    '</div>';

document.getElementById("addBlog").insertAdjacentHTML("afterbegin", cardTemplate);

function adder(card){
    for(let i=0;i<card.length;i++){
        card.push(card[i])
    }
    return card
}
console.log(adder(card))
}