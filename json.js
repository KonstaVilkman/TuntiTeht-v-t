//-------------------- Korona status ----------------
  var getJSON = function(url, callback) {

   var xhr = new XMLHttpRequest();
   xhr.open('GET', url, true);
   xhr.responseType = 'json';

   xhr.onload = function(){
     
      var status = xhr.status;

       if (status == 200){
        callback(null, xhr.response);
      } else {
         callback(status);
    }
  }; 

  xhr.send();
};

/////////// Tästä alaspäin alkoi etäkoulu /////////////////

getJSON('https://api.apify.com/v2/key-value-stores/jEFt5tgCTMfjJpLD3/records/LATEST?disableRedirect=true', function(err, data) {
    if (err != null) {
      console.error(err)
    } else {
        console.log(`${data.infected}`);
    }
});

  getJSON('https://api.apify.com/v2/datasets/BDEAOLx0DzEW91s5L/items?format=json&clean=1',function(err, data) {
  let taulukko = `<table width="80%" style="border:2px solid black">`
  const history = data.map(function(day){
  
  if (day.confirmedCases != undefined && day.lastUpdatedAtApify != undefined){
   console.log(`Confirmed: ${day.confirmedCases}`);
   taulukko = taulukko + `<tr><td>${day.lastUpdatedAtApify.split('T')[0]}</td><td>Infections</td><td>${day.confirmedCases}</td></tr>`;
  } else if (day.testedCases != undefined && day.lastUpdatedAtApify != undefined){
     console.log(`Tested: ${day.testedCases}`);
     taulukko = taulukko + `<tr><td>${day.lastUpdatedAtApify.split('T')[0]}</td><td>Infections</td><td>${day.testedCases}</td></tr>`;
  } else if (day.infected != undefined && day.lastUpdatedAtApify != undefined){
     console.log(`Infected: ${day.infected}`);
     taulukko = taulukko + `<tr><td>${day.lastUpdatedAtApify.split('T')[0]}</td><td>Infections</td><td>${day.infected}</td></tr>`;
  } else{
     console.log(`${day.lastUpdatedAtApify} No data`);
     if(day.lastUpdatedAtApify != undefined){
     taulukko = taulukko + `<tr><td>${day.lastUpdatedAtApify.split('T')[0]}</td><td>Infections</td><td>No data</td></tr>`;
    }
  }
}); 

taulukko = taulukko + `</table>`
document.body.innerHTML=taulukko;
});
