let imgDiv = document.getElementById("imageDiv");

let URLapi =
  "https://api.thecatapi.com/v1/images/search?api_key=live_RdyXu1mfoCOSFYky4mg95uSgb6IYUAxzYwJCcwYIx1slU2KfchgIiJ5P3Dl9CISg";


function GetImage(){
    async function ApiCat(){
        let RandomImage = await fetch(URLapi);
        let Image = await RandomImage.json();
        let ImageURL = Image[0].url;


        if(Image[0].breeds.name){
            console.log(Image[0].breeds.name)
        }
        
        imgDiv.innerHTML = `<img src="${ImageURL}" alt="A random Cat Image fetched using API" height = "80%" width "80%">`
        
    }
    ApiCat()
}

GetImage()

