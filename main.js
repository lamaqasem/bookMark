const formBookmark = document.querySelector(".form-bookmark");
console.log(formBookmark);
const removeall= document.querySelector(".removeall");
const sites= JSON.parse(localStorage.getItem("Sites"))||[];
displaySites();

formBookmark.onsubmit = function(e){
    e.preventDefault();
    const site = {
        siteName :document.querySelector(".siteName").value ,
        sitUrl :document.querySelector(".siteUrl").value ,
        email :document.querySelector(".email").value ,
        pass :document.querySelector(".pass").value ,
    }
 sites.push(site);
 localStorage.setItem("Sites",JSON.stringify(sites));
 formBookmark.reset();
 displaySites();

}

function displaySites (){
    const result = sites.map(function(site,index){
        return `
        <tr>
        <td>${site.siteName}</td>
        <td>${site.siteUrl}</td>
        <td>${site.email}</td>
        <td>${site.pass}</td>
        <td> <button onclick='removeBookmark(${index})'>Delete</button> </td>
        </tr>
        `  
}).join('');

document.querySelector(".data").innerHTML=result;
}

function removeBookmark(id){
    sites.splice(id,1);
    localStorage.setItem("Sites",JSON.stringify(sites));
    displaySites();

}

removeall.onclick=function(){
    localStorage.removeItem("Sites");
    sites=[];
    displaySites();
}