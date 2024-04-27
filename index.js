//MODEL
let listeArticles = [
    {
        nom:"casque",
        prix:10000,
        image:"image/image.jpg"
        
    },
    {
        nom:"montre",
        prix:5000,
        image:"image/1 (2).jpg"
    },
    {
        nom:"écouteur",
        prix: 2000 ,
        image:"image/1.jpg"
    },
]


//VIEW

function rafraîchir() {
    let parent = document.getElementById("accessoire")
    for( let i in listeArticles){
        let produit = document.createElement("div")
        produit.setAttribute("class", "carte")

        let divImg = document.createElement("div")
        divImg.setAttribute("class", "img")

        let img = document.createElement("img")
        img.setAttribute("src",listeArticles[i].image )

        let title = document.createElement("titre")
        title.setAttribute("class", "titre")
        title.innerText=listeArticles[i].nom
        let coût = document.createElement("prix")
        coût.setAttribute("class","prix")
        coût.innerText=listeArticles[i].prix



        divImg.appendChild(img)
        divImg.appendChild(title)
        divImg.appendChild(coût)

        produit.appendChild(divImg)

        parent.appendChild(produit)
      
    }
}


//CONTROLLER








rafraîchir()