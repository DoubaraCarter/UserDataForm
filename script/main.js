//Url and option
const url = "./script/api.json"
const option = {
  meathod : 'GET',
  header : {
      "Content-type" : 'application/json'
  }
}
// States and LGA
let theState = document.getElementById("state");
let localArea = document.getElementById("LGA");
//async Fetch
async function post(){
  const response = await fetch(url , option)
  const data = await response.json()
  console.log(data)
//Select for loop to get the states
  for (let i = 0; i < Object.keys(data[0]).length; i++) {
    let s = document.createElement("option");
    s.innerText = Object.keys(data[0])[i];
    theState.append(s);
  }
//LGA for loop to get the Local Government Area
  theState.addEventListener("change", () => {
    localArea.innerHTML = '<option selected disabled value="">Choose...</option>';
    localArea.innerHTML += "<option>...</option>";
    for (let i = 0; i < data[0][theState.value].length; i++) {
      let s = document.createElement("option");
      s.innerText = data[0][theState.value][i];
      localArea.append(s);
    }

  });
}
//Function to call fetch
post()

// Function to add cards on user input
function addCard(e) {
  e.preventDefault();
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let dob = document.getElementById("dateBirth").value;
  let state = document.getElementById("state").value;
  let lga = document.getElementById("LGA").value;
  let gender = document.querySelector('input[type=radio][name=gender]:checked').value;
  

  let cardTemplate =
        `<div class="card mx-3 my-3 col-4">
            <div class="card-body">
                <h5 class="card-title text-primary ">Full name: <span class="text-dark">${lastName} ${firstName} </span></h5>
                <p class="card-text fw-bold text-primary ">Date of Birth: <span class="text-dark">${dob} </span> </p>
                <p class="card-text fw-bold text-primary ">State: <span class="text-dark">${state} </span> </p>
                <p class="card-text fw-bold text-primary ">LGA: <span class="text-dark">${lga} </span> </p>
                <p class="card-text fw-bold text-primary ">Gender: <span class="text-dark">${gender} </span> </p>
            </div>
        </div>`;

    container.innerHTML += cardTemplate;
}

addForm.addEventListener("submit", addCard);


// Tab contents to show
let tabs = document.querySelectorAll('[data-tab-value]')
let tabInfos = document.querySelectorAll('[data-tab-info]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabValue);

        tabInfos.forEach(tabInfo => {
            tabInfo.style.display = 'none'
        })
        target.style.display = "block";
    })
})
