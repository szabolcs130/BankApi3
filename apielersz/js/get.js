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


var alma;
getSzemely().then(data =>feltolt(data));

function feltolt(params) {
    alma=params;
    console.log("alma");
    var tarolo=document.getElementById("tarolo");
   

    alma.forEach(element => {
        var kistarolo=document.createElement("div");
        kistarolo.classList.add("kistarolo");
    tarolo.appendChild(kistarolo);

        var id=document.createElement("div");
        id.textContent=element['id'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=element['nev'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=element['szamla'];
        kistarolo.appendChild(id);
        var id=document.createElement("div");
        id.textContent=element['tilt'];
        kistarolo.appendChild(id);
        console.log(element['id']);
        console.log(element['nev']);
        console.log(element['szamla']);

        console.log(element['tilt']==1? "true":"false"); 
    });


}