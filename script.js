const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let prices=document.querySelectorAll(".price")
	let sum=0
	prices.forEach((price)=>{
		sum+=Number(price.innerText)
	})
	let tr = document.createElement("tr");
	let td= document.createElement("td");
	td.innerText=sum
	tr.appendChild(td)
	let table=document.querySelector("table")
	table.appendChild(tr)
};

getSumBtn.addEventListener("click", getSum);

