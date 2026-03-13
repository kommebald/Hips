let cart=[]

function addToCart(name,price){

cart.push({name,price})

updateCart()

}

function updateCart(){

const list=document.getElementById("cart-items")
const totalElement=document.getElementById("cart-total")

list.innerHTML=""

let total=0

cart.forEach(item=>{

const li=document.createElement("li")

li.textContent=item.name+" - "+item.price+"€"

list.appendChild(li)

total+=item.price

})

totalElement.textContent=total.toFixed(2)+" €"

}

function toggleNutrition(id){

const el=document.getElementById(id)

if(el.style.display==="block"){
el.style.display="none"
}else{
el.style.display="block"
}

}

async function sendOrder(){

if(cart.length===0){
alert("Warenkorb ist leer!")
return
}
// TODO: HIER ändern oder env file benutzen
const webhook="WEBHOOK_URL"

let text="🛒 Neue HIPS Bestellung:\n"

cart.forEach(item=>{
text+=item.name+" - "+item.price+"€\n"
})

await fetch(webhook,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
content:text
})
})

alert("Bestellung gesendet!")

cart=[]

updateCart()

}
