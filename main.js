console.log('Hello')

let balance = parseFloat(document.getElementById("total").textContent)
let balanceElement= document.getElementById("total")


const calculateNoakhali = document.getElementById("noakhali-btn")
calculateNoakhali.addEventListener('click', function(){
    console.log('Kaj korteche')
    const noakhali= parseFloat(document.getElementById("noakhali").value)
    console.log(noakhali)
    balance= balance-noakhali
    console.log(balance)
    balanceElement.innerText= balance.toFixed(2)


})
const calculateFeni = document.getElementById("feni-btn")
calculateFeni.addEventListener('click', function(){
    console.log('Kaj korteche')

    const feni= parseFloat(document.getElementById("feni").value)

    console.log(feni)
    balance= balance-feni
    console.log(balance)
    balanceElement.innerText= balance.toFixed(2)

})
const calculateQuota = document.getElementById("quota-btn")
calculateQuota.addEventListener('click', function(){
    console.log('Kaj korteche')

    const quota= parseFloat(document.getElementById("quota").value)

    console.log(quota)
    balance= balance-quota
    console.log(balance)
    balanceElement.innerText= balance.toFixed(2)

})
