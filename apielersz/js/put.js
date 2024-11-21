var alma;
window.onload=function() {
    var kivalaszt=document.getElementById("kivalasztPut");
    kivalaszt.addEventListener("change",valaszt);
    var kuldes=document.getElementById("putkuld");
    kuldes.addEventListener("click",elkuldesput);
    frissit();
}
async function getSzemely() {
    try {
        const response = await fetch('https://localhost:7019/api/szemely', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            alert('Hiba: ' + response.statusText);
        }else{
            alert("Siker GET");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        alert('Fetch hiba:', error);
    }
}
function frissit() {
    getSzemely().then(data =>feltolt(data));
}

//var alma;
function feltolt(params) {
     alma=params;
     var kivalaszt=document.getElementById("kivalasztPut");
    kivalaszt.innerHTML="";
 
     alma.forEach(element => {
         var option=document.createElement("option");
         option.value=element['id'];
         option.textContent=element['id']+" "+element['nev']+" "+element['szamla']+" "+element['tilt'];
         kivalaszt.appendChild(option);
     });
 }
function valaszt() {
    console.log(alma);
    var kivalaszt=document.getElementById("kivalasztPut").value;
    var id = document.getElementById("id"); 
    var nev=document.getElementById("nev");
    var szamla=document.getElementById("szamla");
    var tilt=document.getElementById("tilt");

    alma.forEach(element => {
        if(element['id']==kivalaszt){
            id.value=element['id'];
            nev.value=element['nev'];
            szamla.value=element['szamla'];
            tilt.value=element['tilt'];

        }    
    });
    
//elkuldes();    
}
function elkuldesput() {
    var idKiszed = document.getElementById("id").value; 
    var nevKiszed = document.getElementById("nev").value; 
    var szamlaKiszed = parseInt(document.getElementById("szamla").value); 
    var tiltKiszed = document.getElementById("tilt").value=="true"?true:false;
   
    document.getElementById("id").value=""; 
    document.getElementById("nev").value=""; 
    document.getElementById("szamla").value=""; 
    document.getElementById("tilt").value ="";
  


updateSzemely(idKiszed,{ id:idKiszed,nev: nevKiszed,szamla:szamlaKiszed, tilt: tiltKiszed });
}

async function updateSzemely(id, ujszemely) {
    try {
        const response = await fetch(`https://localhost:7019/api/Szemely/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ujszemely) 
        });

        if (!response.ok) {
            throw new Error('Hiba PUT: ' + response.statusText);
        }
        frissit();
        alert("Beszurva");
    } catch (error) {
        alert('Hiba PUT:', error);
    }
}