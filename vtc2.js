setTimeout(function() {
  const form = document.getElementById("form1");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}, 500);

async function calcDistance() {
    var adresse1 = document.getElementById('autocomplete1').value;
    var adresse2 = document.getElementById('autocomplete2').value;
  
    var directionsService = new google.maps.DirectionsService();
    var directionsRenderer = new google.maps.DirectionsRenderer();

    return new Promise((resolve, reject) => {
      directionsService.route({
        origin: adresse1,
        destination: adresse2,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: true,
        provideRouteAlternatives: false,
        avoidFerries: false,
      }, function(response, status) {
        if (status === 'OK') {
          directionsRenderer.setDirections(response);
          var distance = response.routes[0].legs[0].distance.text;
          var distance2 = response.routes[0].legs[0].distance.value / 1000;
          var duree = response.routes[0].legs[0].duration.text;
          resolve([distance, duree, distance2]);
        } else {
          reject('Directions request failed due to ' + status);
        }
      });
    });
  }
  
  function calculerTarif(typeVehicule, nbPers, distance) {
    // Tarif de base en euros par kilomètre pour chaque type de véhicule
    const tarifs = {
      1: 0.5,
      2: 0.3
    };

    const nbPersonnes = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7
      };
    
    // Calcul du tarif en fonction du type de véhicule et du nombre de personnes
    let tarif = tarifs[typeVehicule] * nbPersonnes[nbPers];
    
    // Calcul du tarif total en fonction de la distance
    const tarifTotal = tarif * distance;
    
    // Retourne le tarif arrondi à 2 décimales
    return Math.round(tarifTotal * 100) / 100;
  }

  // Fonction appelée par le clic sur le bouton "Calculer tarif"
  async function afficherTarif() {
    // Récupération des valeurs du formulaire
    const typeVehicule = document.getElementById('typeVehicule').value;
    const nbPersonnes = document.getElementById('nbPersonnes').value;
    
    // Appel de la fonction calculerTarif() avec les valeurs du formulaire
    await calcDistance().then(res => {
      const distance = res[0];
      const duree = res[1];
      const distance2 = res[2];
      console.log(distance, duree, distance2);
      const tarif = calculerTarif(typeVehicule, nbPersonnes, distance2);

      // Affichage du tarif dans la div "tarif"
      var res = document.getElementById('reservation');
      if (tarif) {
        document.getElementById('cout').innerHTML = "<strong> Coût du Trajet : " + tarif.toString() + " Euros </strong>";
        document.getElementById('resultat').innerHTML = "Estimation: " + duree.toString() +"<br>Distance: " + distance.toString();
        res.style.display = 'block';
      } else {
        res.style.display = 'none';
      }
    });
  }
  
// Récupérer l'élément <select> par son ID
setTimeout(function() {
  var typeVehicule = document.getElementById('typeVehicule');
  var nbPersonnes = document.getElementById('nbPersonnes');
  var pers1 = document.getElementById('pers1');
  var pers2 = document.getElementById('pers2');
  var pers3 = document.getElementById('pers3');
  var pers4 = document.getElementById('pers4');
  var pers5 = document.getElementById('pers5');
  var pers6 = document.getElementById('pers6');
  var pers7 = document.getElementById('pers7');

  // Ajouter un écouteur d'événement pour l'événement 'change'
  typeVehicule.addEventListener('change', function() {
    nbPersonnes.value = "";
    // Récupérer la nouvelle valeur sélectionnée
    var typeV = typeVehicule.value;

    // Utiliser la nouvelle valeur comme flag
    if (typeV === '1') {
      pers1.style.display = 'block';
      pers2.style.display = 'block';
      pers3.style.display = 'block';
      pers4.style.display = 'none';
      pers5.style.display = 'none';
      pers6.style.display = 'none';
      pers7.style.display = 'none';
    } else if (typeV === '2') {
      pers1.style.display = 'block';
      pers2.style.display = 'block';
      pers3.style.display = 'block';
      pers4.style.display = 'block';
      pers5.style.display = 'block';
      pers6.style.display = 'block';
      pers7.style.display = 'block';
    } else {
      pers1.style.display = 'none';
      pers2.style.display = 'none';
      pers3.style.display = 'none';
      pers4.style.display = 'none';
      pers5.style.display = 'none';
      pers6.style.display = 'none';
      pers7.style.display = 'none';
    }
  });
}, 500);

setTimeout(function() {
  var typeVehicule2 = document.getElementById('voiture');
  var nbPersonnes2 = document.getElementById('pers');
  var pers11 = document.getElementById('pers11');
  var pers12 = document.getElementById('pers12');
  var pers13 = document.getElementById('pers13');
  var pers14 = document.getElementById('pers14');
  var pers15 = document.getElementById('pers15');
  var pers16 = document.getElementById('pers16');
  var pers17 = document.getElementById('pers17');

  // Ajouter un écouteur d'événement pour l'événement 'change'
  typeVehicule2.addEventListener('change', function() {
    nbPersonnes2.value = "";
    // Récupérer la nouvelle valeur sélectionnée
    var typeV2 = typeVehicule2.value;

    // Utiliser la nouvelle valeur comme flag
    if (typeV2 === '1') {
      pers11.style.display = 'block';
      pers12.style.display = 'block';
      pers13.style.display = 'block';
      pers14.style.display = 'none';
      pers15.style.display = 'none';
      pers16.style.display = 'none';
      pers17.style.display = 'none';
    } else if (typeV2 === '2') {
      pers11.style.display = 'block';
      pers12.style.display = 'block';
      pers13.style.display = 'block';
      pers14.style.display = 'block';
      pers15.style.display = 'block';
      pers16.style.display = 'block';
      pers17.style.display = 'block';
    } else {
      pers11.style.display = 'none';
      pers12.style.display = 'none';
      pers13.style.display = 'none';
      pers14.style.display = 'none';
      pers15.style.display = 'none';
      pers16.style.display = 'none';
      pers17.style.display = 'none';
    }
  });
}, 500);
