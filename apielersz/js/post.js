window.onload = function betolt() {
     var kuld = document.getElementById("kuld");
     kuld.addEventListener("click", megnyom); 
     
 }
 
function megnyom() {
         var idKiszed = document.getElementById("id").value; 
         var nevKiszed = document.getElementById("nev").value; 
         var szamlaKiszed = parseInt(document.getElementById("szamla").value); 
         var tiltKiszed = document.getElementById("tilt").value=="true"?true:false;
         
         document.getElementById("id").value=""; 
         document.getElementById("nev").value=""; 
         document.getElementById("szamla").value=""; 
         document.getElementById("tilt").value ="";
       
 
 createSzemely({ id:idKiszed,nev: nevKiszed,szamla:szamlaKiszed, tilt: tiltKiszed });
}
async function createSzemely(szemely) {

        try {
            const response = await fetch('https://localhost:7019/api/Szemely', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(szemely)
            });
    
            if (!response.ok) {
                throw new Error('Post hiba: ' + response.statusText);
            }
    
            const postelem = await response.json();
           alert("Elkuldve: "+postelem['id']+" "+postelem['nev']+" "+postelem['szamla']+" "+postelem['tilt']);
        } catch (error) {
           alert('Post hiba:', error);
        }
}
    