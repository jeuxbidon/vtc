setTimeout(function() {
  const form = document.getElementById("form1");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  const form2 = document.getElementById("ResrvForm");
  form2.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}, 500);

async function calcDistance(option) {
    if (option == 1){
      var adresse1 = document.getElementById('autocomplete1').value;
      var adresse2 = document.getElementById('autocomplete2').value;
    } else {
      var adresse1 = document.getElementById('autocomplete3').value;
      var adresse2 = document.getElementById('autocomplete4').value;
    }
  
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
      1: 1.06,
      2: 1.16,
      3: 1.2
    };

    const nbPersonnes = {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
        6: 1,
        7: 1
      };
    
    // Calcul du tarif en fonction du type de véhicule et du nombre de personnes
    let tarif = tarifs[typeVehicule] * nbPersonnes[nbPers];
    
    // Calcul du tarif total en fonction de la distance
    const tarifTotal = tarif * distance;
    
    // Retourne le tarif arrondi à 2 décimales
    return Math.round(tarifTotal * 100) / 100;
  }

  var duree;
  var distance;
  var tarif;

  // Fonction appelée par le clic sur le bouton "Calculer tarif"
  async function afficherTarif() {
    // Récupération des valeurs du formulaire
    const typeVehicule = document.getElementById('typeVehicule').value;
    const nbPersonnes = document.getElementById('nbPersonnes').value;
    
    // Appel de la fonction calculerTarif() avec les valeurs du formulaire
    await calcDistance(1).then(res => {
      distance = res[0];
      duree = res[1];
      const distance2 = res[2];
      console.log(distance, duree, distance2);
      tarif = calculerTarif(typeVehicule, nbPersonnes, distance2);

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
  var res = document.getElementById('reservation');
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
    res.style.display = 'none';
    // Récupérer la nouvelle valeur sélectionnée
    var typeV = typeVehicule.value;

    // Utiliser la nouvelle valeur comme flag
    if (typeV === '1' || typeV === '2') {
      pers1.style.display = 'block';
      pers2.style.display = 'block';
      pers3.style.display = 'block';
      pers4.style.display = 'none';
      pers5.style.display = 'none';
      pers6.style.display = 'none';
      pers7.style.display = 'none';
    } else if (typeV === '3') {
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
  var res = document.getElementById('reservation');
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
    res.style.display = 'none';
    // Récupérer la nouvelle valeur sélectionnée
    var typeV2 = typeVehicule2.value;

    // Utiliser la nouvelle valeur comme flag
    if (typeV2 === '1' || typeV2 === '2') {
      pers11.style.display = 'block';
      pers12.style.display = 'block';
      pers13.style.display = 'block';
      pers14.style.display = 'none';
      pers15.style.display = 'none';
      pers16.style.display = 'none';
      pers17.style.display = 'none';
    } else if (typeV2 === '3') {
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

function reserver(){
  window.location.href = "tel:+33782690072";
  /*var adresse1 = document.getElementById('autocomplete1').value;
  var adresse2 = document.getElementById('autocomplete2').value;
  var typeVehicule = document.getElementById('typeVehicule').selectedIndex;
  var nbPersonnes = document.getElementById('nbPersonnes').selectedIndex;
  document.getElementById('autocomplete3').value = adresse1;
  document.getElementById('autocomplete4').value = adresse2;
  document.getElementById('voiture').selectedIndex = typeVehicule;
  document.getElementById('pers').selectedIndex = nbPersonnes;
  document.getElementById('totalDep').innerHTML = adresse1;
  document.getElementById('totalArr').innerHTML = adresse2;
  document.getElementById('totalDist').innerHTML = distance;
  document.getElementById('totalTem').innerHTML = duree;
  document.getElementById('totalPrix').innerHTML = tarif + " €";
  document.getElementById('p1').style.display = 'none';
  document.getElementById('p2').style.display = 'block'*/
}

setTimeout(function() {
  var res = document.getElementById('reservation');
  // Ajouter un écouteur d'événement pour l'événement 'change'
  document.getElementById('autocomplete1').addEventListener('change', function() {
    res.style.display = 'none';   
  });
  document.getElementById('autocomplete2').addEventListener('change', function() {
    res.style.display = 'none';   
  });
  document.getElementById('autocomplete3').addEventListener('change', async function() {
    setTimeout(async function() {
      // Récupération des valeurs du formulaire
      const voiture = document.getElementById('voiture').selectedIndex;
      const pers = document.getElementById('pers').selectedIndex;
      var adresse3 = document.getElementById('autocomplete3').value;
      var adresse4 = document.getElementById('autocomplete4').value;
      
      // Appel de la fonction calculerTarif() avec les valeurs du formulaire
      await calcDistance(2).then(res => {
        distance = res[0];
        duree = res[1];
        const distance2 = res[2];
        console.log(distance, duree, distance2);
        tarif = calculerTarif(voiture, pers, distance2);  
        if (tarif) {
          document.getElementById('totalDep').innerHTML = adresse3;
          document.getElementById('totalArr').innerHTML = adresse4;
          document.getElementById('totalDist').innerHTML = distance;
          document.getElementById('totalTem').innerHTML = duree;
          document.getElementById('totalPrix').innerHTML = tarif + " €";
        } else {
          document.getElementById('totalDep').innerHTML = null;
          document.getElementById('totalArr').innerHTML = null;
          document.getElementById('totalDist').innerHTML = null;
          document.getElementById('totalTem').innerHTML = null;
          document.getElementById('totalPrix').innerHTML = "0" + " €";
        }
      });
    }, 500);
  });
  document.getElementById('autocomplete4').addEventListener('change', async function() {
    setTimeout(async function() {
      // Récupération des valeurs du formulaire
      const voiture = document.getElementById('voiture').selectedIndex;
      const pers = document.getElementById('pers').selectedIndex;
      var adresse3 = document.getElementById('autocomplete3').value;
      var adresse4 = document.getElementById('autocomplete4').value;
      
      // Appel de la fonction calculerTarif() avec les valeurs du formulaire
      await calcDistance(2).then(res => {
        distance = res[0];
        duree = res[1];
        const distance2 = res[2];
        console.log(distance, duree, distance2);
        tarif = calculerTarif(voiture, pers, distance2);  
        if (tarif) {
          document.getElementById('totalDep').innerHTML = adresse3;
          document.getElementById('totalArr').innerHTML = adresse4;
          document.getElementById('totalDist').innerHTML = distance;
          document.getElementById('totalTem').innerHTML = duree;
          document.getElementById('totalPrix').innerHTML = tarif + " €";
        } else {
          document.getElementById('totalDep').innerHTML = null;
          document.getElementById('totalArr').innerHTML = null;
          document.getElementById('totalDist').innerHTML = null;
          document.getElementById('totalTem').innerHTML = null;
          document.getElementById('totalPrix').innerHTML = "0" + " €";
        }
      });
    }, 500);
  });
  document.getElementById('pers').addEventListener('change', async function() {
      // Récupération des valeurs du formulaire
    const voiture = document.getElementById('voiture').selectedIndex;
    const pers = document.getElementById('pers').selectedIndex;
    var adresse3 = document.getElementById('autocomplete3').value;
    var adresse4 = document.getElementById('autocomplete4').value;
    
    // Appel de la fonction calculerTarif() avec les valeurs du formulaire
    await calcDistance(2).then(res => {
      distance = res[0];
      duree = res[1];
      const distance2 = res[2];
      console.log(distance, duree, distance2);
      tarif = calculerTarif(voiture, pers, distance2);  
      if (tarif) {
        document.getElementById('totalDep').innerHTML = adresse3;
        document.getElementById('totalArr').innerHTML = adresse4;
        document.getElementById('totalDist').innerHTML = distance;
        document.getElementById('totalTem').innerHTML = duree;
        document.getElementById('totalPrix').innerHTML = tarif + " €";
      } else {
        document.getElementById('totalDep').innerHTML = null;
        document.getElementById('totalArr').innerHTML = null;
        document.getElementById('totalDist').innerHTML = null;
        document.getElementById('totalTem').innerHTML = null;
        document.getElementById('totalPrix').innerHTML = "0" + " €";
      }
    });
  });
  document.getElementById('voiture').addEventListener('change', async function() {
    document.getElementById('totalDep').innerHTML = null;
    document.getElementById('totalArr').innerHTML = null;
    document.getElementById('totalDist').innerHTML = null;
    document.getElementById('totalTem').innerHTML = null;
    document.getElementById('totalPrix').innerHTML = "0" + " €";
  });
}, 500);

function sendEmail() {
  sendEmailClient();
  sendEmailAdmin();
}

function sendEmailClient() {
  if (document.getElementById('email').value != '' && document.getElementById('prenom').value != '' && document.getElementById('nom').value != '' && document.getElementById('datetimepicker').value != '' &&
  document.getElementById('autocomplete3').value != '' && document.getElementById('autocomplete4').value != '' && tarif != null && tarif != 0 && tarif != undefined && document.getElementById('tel').value != '' &&
  document.getElementById('voiture').selectedIndex != 0 && document.getElementById('pers').selectedIndex != 0) {
    emailjs.init("NBI3pNCpzYJj5YBAj");
    emailjs.send("service_transport_rocha", "template_gfgqz75", {
      to_email: document.getElementById('email').value,
      prenom: document.getElementById('prenom').value,
      nom: document.getElementById('nom').value,
      date: document.getElementById('datetimepicker').value.substring(0, 10),
      heure: document.getElementById('datetimepicker').value.slice(-5),
      depart: document.getElementById('autocomplete3').value,
      arrivee: document.getElementById('autocomplete4').value,
      prix: tarif.toString() + " €"
   })
   .then(function(response) {
      console.log("SUCCESS", response);
   }, function(error) {
      console.log("FAILED", error);
   });
  } 
}

const refVoiture = ["STANDARD","BERLINE","VAN"];

function sendEmailAdmin() {
  if (document.getElementById('email').value != '' && document.getElementById('prenom').value != '' && document.getElementById('nom').value != '' && document.getElementById('datetimepicker').value != '' &&
  document.getElementById('autocomplete3').value != '' && document.getElementById('autocomplete4').value != '' && tarif != null && tarif != 0 && tarif != undefined && document.getElementById('tel').value != '' &&
  document.getElementById('voiture').selectedIndex != 0 && document.getElementById('pers').selectedIndex != 0) {
    emailjs.init("NBI3pNCpzYJj5YBAj");
    emailjs.send("service_transport_rocha", "template_57z5csj", {
      to_email: "guillaume.auxois@live.fr",
      prenom: document.getElementById('prenom').value,
      nom: document.getElementById('nom').value,
      voiture: refVoiture[document.getElementById('voiture').selectedIndex - 1],
      pers: document.getElementById('pers').value,
      datetime: document.getElementById('datetimepicker').value,
      depart: document.getElementById('autocomplete3').value,
      arrivee: document.getElementById('autocomplete4').value,
      prix: tarif.toString() + " €",
      tel: document.getElementById('tel').value,
      email: document.getElementById('email').value
   })
   .then(function(response) {
      console.log("SUCCESS", response);
   }, function(error) {
      console.log("FAILED", error);
   });
  } 
}

async function createStripeSession() {
  var stripe = Stripe('pk_test_51N3OEUJLCsfhQSHRtZUqKW2hxkXhRcFQSWSXICdvHy4ULwefRKrvjt2Cj91IgtUbRu6NdB6Z5pqZexPDChdrmfAP003wQngpxd');
  setTimeout(async function() {
      // Création d'une session de paiement
      const session = await stripe.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          name: 'Nom de l\'article',
          description: 'Description de l\'article',
          amount: 2000, // Prix en centimes d'euros
          currency: 'eur',
          quantity: 1,
        }],
        mode: 'payment',
        success_url: 'https://www.example.com/success',
        cancel_url: 'https://www.example.com/cancel',
      });
      //window.location.href = session.url;
  }, 500);
}