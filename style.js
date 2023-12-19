
const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdown = document.querySelectorAll(".countryselect")
let fromcurr= document.querySelector(".from select")
let tocurr= document.querySelector(".to select")
let output = document.querySelector(".countryselector2 input")
const btn = document.querySelector("button")

for(let select of dropdown){
    for(currCode in countryList){
        let newoption  = document.createElement("option");
        newoption.innerText= currCode;
        newoption.value= currCode;
        select.append(newoption)//important
if(select.name==="from" && currCode ==="USD"){
       newoption.selected="selected";
}else if(select.name==="to" && currCode ==="INR"){
    newoption.selected="selected";
}
        }
select.addEventListener("change",(evnt)=>{
    updateflag(evnt.target)
})
}

const updateflag=(element)=>{
    let currCode = element.value;
    let countryCode= countryList[currCode];
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img")
    img.src = newsrc;
}

btn.addEventListener ("click",async (evt)=>{
    evt.preventDefault();
    let amount= document.querySelector(".input")
    let evtvalue = amount.value;
    console.log(fromcurr.value,tocurr.value)
    const URL= `${BASE_URL}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`

let response = await fetch(URL);
let data = await response.json();
let rate = data[tocurr.value.toLowerCase()]

let finalamount = evtvalue * rate
output.value = `${finalamount}`// value not innertext since inner text is for msg and this is a input to value is required
})
