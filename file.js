
$(document).ready(function(){
  $("#btn").click(function(){
  $(".info").slideToggle("slow");
  });
  var wid = document.querySelector(".w")
  var ip = document.querySelector(".ipa")
  var percent = Math.random();
  var randa = " In Ruwan Yaki Sauka A Zubar Da Ruwan Randar Asake Gwadawa."
  let batteryIsCharging = false;
  navigator.getBattery().then((battery) => {
  batteryIsCharging = battery.charging;
  batterylevel = battery.level;
  battery.addEventListener('levelchange', () => {
  batterylevel = Math.floor(battery.level*100) + "%";
  });
  });
  
 $(".connect").click( function()
  {
  var inputs = document.getElementById('input');
  if(wid.value == "" || ip.value == "")
  {
  alert("Rubuta Sunan Randa Da Adadin Liter da Akeso")
  }
  else if(Math.floor(batterylevel*100) < 50 )
  {
    alert("Wayar Nan Bazata Iya Diban Ruwa Da "+Math.floor(batterylevel*100) +"% Ba, Ayi Mata Caji.")
  }
  else if(percent < 0.4)
  {
    alert("Amatsa Kusa Da Randar Da Taku "+ percent.toFixed(1)+randa);
    location.reload()
  }
  else
  {
  alert("Inagafa Akwai Matsala, Aduba Digon Sama Ko Ya Dauke!!!")
  location.reload()
  }
  });
  
   $("#btn").click(function(){
   $("html, body").css("background","#f2f2f2");
   $(".project, #btn").css("boxShadow","none")
  
  });
  });