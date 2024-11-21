window.onload=function() {
    var kivalaszt=document.getElementById("kivalaszt");
    kivalaszt.addEventListener("change",valaszt);
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
        alert('Fetch hiba get:', error);
    }
}
function frissit() {
    getSzemely().then(data =>feltolt(data));
}


function feltolt(params) {
   var alma=params;
    var kivalaszt=document.getElementById("kivalaszt");
   kivalaszt.innerHTML="";

    alma.forEach(element => {
        var option=document.createElement("option");
        option.value=element['id'];
        option.textContent=element['id']+" "+element['nev']+" "+element['szamla']+" "+element['tilt'];
        kivalaszt.appendChild(option);
    });
}
function valaszt() {
    var idKiszed = document.getElementById("kivalaszt").value; 
    if (confirm("Biztos vagy benne?")) {
        deleteSzemely(idKiszed);
    } else {
        alert("Visszavonva");
    }
    
}

async function deleteSzemely(getid) {
    try {
        const response = await fetch(`https://localhost:7019/api/szemely/${getid}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('DELETE hiba: ' + response.statusText);
        }
        frissit();
        alert("Torolve");
    } catch (error) {
        alert('DELETE hiba:', error);
    }
}
async function getSzemelyId(getid) {
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

