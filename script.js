const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let prices=document.querySelectorAll(".prices")
let sum=0
prices.forEach((price)=>{
	sum+=Number(price.innerText)
})
let tr=document.createElement("tr")
let td = document.createElement("td")
let table=document.querySelector("table")
tr.id="ans"
td.textContent=sum
table.appendChild(tr)
tr.appendChild(td)