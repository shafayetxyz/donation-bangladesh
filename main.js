
let balance = parseFloat(document.getElementById("total").textContent)
let balanceElement= document.getElementById("total")


function calculation(inputId, displayId, title) {
    const inputValue = parseFloat(document.getElementById(inputId).value);

    if(isNaN(inputValue) || inputValue>balance || inputValue==="" || inputValue<=0){
        alert("Invalid Input")
        return       
    }

    balance = balance - inputValue;
    balanceElement.innerText = balance.toFixed(2);

    let displayValue = parseFloat(document.getElementById(displayId).textContent);
    let displayElement = document.getElementById(displayId);

    const updatedValue = inputValue + displayValue;
    displayElement.innerText = updatedValue.toFixed(2);

    const modal = document.getElementById("my_modal_1")
    modal.showModal()

    const titleText= document.getElementById(title).textContent

    history(inputId, inputValue, titleText)
}

function history(inputId, inputValue, titleText) {
    const historyContainer = document.getElementById("history");

    const historyItem = document.createElement("div");
    const gmt= new Date().toLocaleString()

    
    historyItem.innerHTML = `
        <p>${inputValue.toFixed(2)} Taka is Donated for ${titleText}</p>
        <p>Date: ${gmt}</p>
    `;

    historyContainer.insertBefore(historyItem, historyContainer.lastChild);
}


// const calculateNoakhali = document.getElementById("noakhali-btn")
// calculateNoakhali.addEventListener('click', function(){
//     console.log('Kaj korteche')
//     const noakhali= parseFloat(document.getElementById("noakhali").value)
//     console.log(noakhali)
//     balance= balance-noakhali
//     console.log(balance)
//     balanceElement.innerText= balance.toFixed(2)
//     let noakhaliValue= parseFloat(document.getElementById("noakhaliValue").textContent)
//     let noakhaliElement= document.getElementById("noakhaliValue")
//     noakhaliValueUpdate=noakhali+noakhaliValue
//     noakhaliElement.innerText=noakhaliValueUpdate.toFixed(2)
// })



const calculateNoakhali = document.getElementById("noakhali-btn");
calculateNoakhali.addEventListener('click', function() {
    calculation("noakhali", "noakhaliValue", "donateNoakhali");
});

const calculateFeni = document.getElementById("feni-btn")
calculateFeni.addEventListener('click', function() {
    calculation("feni", "feniValue", "donateFeni");
});

const calculateQuota = document.getElementById("quota-btn")
calculateQuota.addEventListener('click', function() {
    calculation("quota", "quotaValue", "donateQuota");
});




