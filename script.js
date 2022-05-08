let container =document.querySelector('.container')
let child = document.querySelector('.child')
let header = document.querySelector('header')
let childChild = document.querySelector('.ChildChild')
let footer = document.querySelector('footer')
let secondchild = document.querySelector('.secondChild')







function time(){
    let current_Date=new Date()
    let hours = current_Date.getHours()
    
    let min = current_Date.getMinutes()
    let sec = current_Date.getSeconds()
   let hour= document.querySelector('#hours')
   
   let minute= document.querySelector('#minutes')
   
    let seconde= document.querySelector('#seconde');
   
    minute.innerHTML=min;
    seconde.innerHTML=sec

if(hour.innerHTML<10){
  hour.innerHTML="0"+hours;
    
}
if(hour.innerHTML>10){
    hour.innerHTML=hours
}

if(minute.innerHTML<10){
    minute.innerHTML="0"+min;
}
if(seconde.innerHTML<10){
    seconde.innerHTML="0"+sec;
}


  hour.addEventListener('click',()=>{
    hour.classList.toggle('active')
      if(hour.classList.contains('active')){
          if(hours>12){
              document.querySelector("#PmOrAm").innerHTML="Pm"
              hour.innerHTML=hours-12
              
      }
      else {
        document.querySelector("#PmOrAm").innerHTML="Am"
         hour.innerHTML=hours
      }}
      else{
        document.querySelector("#PmOrAm").innerHTML="";
          hour.innerHTML=hours

      }
  })
  
//year
    let year = current_Date.getFullYear()
footer.innerHTML=year
//day
// let day  =current_Date.getDay()
let dayName=current_Date.toLocaleString("en-us",{weekday:'short'})
header.innerHTML=dayName

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
//let month = current_Date.getMonth()
let monthName=current_Date.toLocaleString('en-us',{month:"short"})
mois.innerHTML=monthName

}

setInterval(time,1000)
