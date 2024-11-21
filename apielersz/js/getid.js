window.onload=function(){
    var elkuld=document.getElementById("elkuld");
    elkuld.addEventListener("click",megnyom);
}

async function getSzemelyId(getid) {
    console.log(`https://localhost:7019/api/szemely/${getid}`);
    try {
        const response = await fetch(`https://localhost:7019/api/szemely/${getid}`, {
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

function megnyom() {
         var idKiszed = document.getElementById("idInput").value; 
         document.getElementById("idInput").value=""; 
         getSzemelyId(idKiszed).then(data2 =>feltolt(data2));

         
}
function feltolt(params) {
  var  alma=params;
    console.log(alma);
    var tarolo=document.getElementById("tarolo");
   

   // alma.forEach(element => {
        var kistarolo=document.createElement("div");
        kistarolo.classList.add("kistarolo");
    tarolo.appendChild(kistarolo);

        var id=document.createElement("div");
        id.textContent=alma['id'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=alma['nev'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=alma['szamla'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=alma['tilt'];
        kistarolo.appendChild(id);
   // });
} 