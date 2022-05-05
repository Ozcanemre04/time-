let container =document.querySelector('.container')
let child = document.querySelector('.child')
let header = document.querySelector('header')
let childChild = document.querySelector('.ChildChild')
let footer = document.querySelector('footer')
let secondchild = document.querySelector('.secondChild')







function time(){
    let current_Date=new Date()
    let hours = current_Date.getHours()
  

    let minutes = current_Date.getMinutes()
    
    let secondes = current_Date.getSeconds()
    if(secondes<10||minutes<10||hours<10){
        secondchild.innerHTML=hours +":"+minutes+":"+"0"+secondes

    }
    else{
        secondchild.innerHTML=hours +":"+minutes+":"+secondes
    }

    let year = current_Date.getFullYear()
footer.innerHTML=year
//day
let day  =current_Date.getDay()
if(day===1){
    header.innerHTML="Mon"
}
if(day===2){
    header.innerHTML="Tues"
}
if(day===3){
    header.innerHTML="Wed"
}
if(day===4){
    header.innerHTML="Thurs"
}
if(day===5){
    header.innerHTML="fri"
}
if(day===6){
    header.innerHTML="Satur"
}
if(day===7){
    header.innerHTML="Sun"
}
let jour = document.querySelector('.jour')

let mois = document.querySelector('.mois')
//date
let date = current_Date.getDate()
if(date<10){
    
    jour.innerHTML="0"+date
}
else{
    jour.innerHTML=date
}
//months
let month = current_Date.getMonth()
mois.innerHTML=month
if(month===0){
    mois.innerHTML="Jan"
}
if(month===1){
    mois.innerHTML="Feb"
}
if(month===2){
    mois.innerHTML="mart"
}
if(month===3){
    mois.innerHTML="Apris"
}
if(month===4){
    mois.innerHTML="may"
}
if(month===5){
    mois.innerHTML="juny"
}
if(month===6){
    mois.innerHTML="jully"
}
if(month===7){
    mois.innerHTML="august"
}
if(month===8){
    mois.innerHTML="sept"
}
if(month===9){
    mois.innerHTML="oct"
}
if(month===10){
    mois.innerHTML="Nov"
}
if(month===11){
    mois.innerHTML="Dec"
}
}
setInterval(time,1000)
