// constellationSearch();

// var divEl = document.getElementById('starchartSearch');

// function constellationSearch(userSearch)  {
//     $('#searchBtn').on('click', function async (event) {
//         var searchInput = $('#user-search').val().trim();

//         if (loggedIn) {
//             const response = await fetch('/api/constellation', {
//                 method: 'GET',
//                 body: JSON.stringify(constellationData),
//                 headers: {'Content-type': 'application/json'},
//             })
//             .then(function (data)
//             {
//                 console.log(data);
//                 var constellationResponse = data;
//                 $('#starchartSearch').empty();
//                 console.log(constellationResponse);

//             })
//         } else {
//             alert('Please Login');
//         };
//     });
// };

//const constellationId = 


// BETHS CODE TO REVIEW AND BLEND WITH ABOVE WHEN NOT SO TIRED
// Fetch constellation details based on ID
// async function fetchConstellationDetails(constellationId) {
//   const response = await fetch(`/api/constellation/${constellationId}`);
//   console.log(constellationId);
//   const data = await response.json();
//   console.log(data);
//   //return data;
//   const constellationName = document.querySelector(".constellation-name");
//   constellationName.textContent = data.constellation_name;
//     console.log(constellationName);
  
//     var star = data.stars[0].star_name;
//     console.log(star);
//   //data.stars.star_name.forEach((star) 
//    for (let i = 0; i < star.length; i++)  {
//     var star = data.stars[i].star_name;
//     console.log(star);
//     const starsList = document.querySelector(".stars-list");
//   starsList.innerHTML = "";
//     const starItem = document.createElement("li");
//     starItem.textContent = JSON.stringify(star);
//     starsList.appendChild(starItem);
//     console.log(starsList);
//   };
async function fetchConstellationDetails(constellationId) {
    const response = await fetch(`/api/constellation/${constellationId}`);
    const data = await response.json();
  
    const constellationName = document.querySelector(".constellation-name");
    constellationName.textContent = data.constellation_name;
  
    const starsList = document.querySelector(".stars-list");
    starsList.innerHTML = ""; 
  
    for (let i = 0; i < data.stars.length; i++) {
      const starName = data.stars[i].star_name;
      const starItem = document.createElement("li");
      starItem.textContent = starName;
      starsList.appendChild(starItem);
    }

    var factOne = data.facts[0].fact_name;
var factTwo = data.facts[0].fact_season;
var factThree = data.facts[0].fact_visibility;

console.log(factOne);
console.log(factTwo);
console.log(factThree);

// var fact = {
//   factOne,
//   factTwo,
//   factThree,
// };
var fact = {
    "Fact One": factOne,
    "Fact Two": factTwo,
    "Fact Three": factThree,
  };
console.log(fact);

const factsList = document.querySelector(".facts-list");
factsList.innerHTML = "";

for (const factKey in fact) {
  const factItem = document.createElement("li");
  factItem.textContent = `${factKey}: ${fact[factKey]}`;
  factsList.appendChild(factItem);
}

console.log(factsList);
  


//   var factOne = data.facts[0].fact_name;
//   console.log(factOne);

//   var factTwo = data.facts[0].fact_season;
//   console.log(factTwo);
  
//   var factThree = data.facts[0].fact_visibility;
//   console.log(factThree);

//   var fact = [
//     factOne,
//     factTwo,
//     factThree,
//   ];
//   console.log(fact);
// //   for (let i =0; i < fact; i++) {
//     const factsList = document.querySelector(".facts-list");
//   factsList.innerHTML = "";
//     const factItem = document.createElement("li");
//     factItem.textContent = JSON.stringify(factOne);
    
//     const factItemTwo = document.createElement("li");
//     factItemTwo.textContent = JSON.stringify(factTwo);

//     const factItemThree = document.createElement("li");
//     factItemThree.textContent = JSON.stringify(factThree);

//     factsList.appendChild(factItem, factItemTwo, factItemThree);
//     console.log(factsList);
//   }

}


// function updateConstellationDetails(constellation) {
//   const constellationName = document.querySelector(".constellation-name");
//   constellationName.textContent = data.constellation_name;
//     console.log(constellationName)
//   const starsList = document.querySelector(".stars-list");
//   starsList.innerHTML = "";
//   data.star.star_name.forEach((star) => {
//     const starItem = document.createElement("li");
//     starItem.textContent = star;
//     starsList.appendChild(starItem);
//   });

//   const factsList = document.querySelector(".facts-list");
//   factsList.innerHTML = "";
//   constellation.facts.forEach((fact) => {
//     const factItem = document.createElement("li");
//     factItem.textContent = fact;
//     factsList.appendChild(factItem);
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("constellationOption");
  selectEl.addEventListener("change", async function () {
    const selectedId = this.options[this.selectedIndex].value; // Get selected option value
    const selectedConstellation = await fetchConstellationDetails(selectedId);
   // updateConstellationDetails(selectedConstellation);
  });
});
