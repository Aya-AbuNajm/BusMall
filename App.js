'use strict';


let leftImage , middleImage, rightImage;
let imgCount=[];

let allProducts=[];

let votesOfChar=[];
let imageChart=[];

let specialImg = ['', '', ''];
let productsTag = [ 'chair', 'shark', 'sweep', 'tauntaun','bag',  'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors','banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'unicorn', 'water-can', 'wine-glass'];
// DOM 

let leftImageElement , middleImageElement, rightImageElement;
leftImageElement=document.getElementById('leftImage');
rightImageElement=document.getElementById('rightImage'); 
middleImageElement=document.getElementById('middleImage');


let botton=document.getElementById('botton');
let newBotton=document.getElementById('newBotton');

let parent=document.getElementById('report');


let maxRound=25;


let userAttempts=0;


let vChart = [];
let ImgChart = [];
// ====== Constructor ===================

function Prodct (name,path,TimeImageShown)
{
    this.name=name;
    this.path=path;
    this.TimeImageShown=TimeImageShown;
    allProducts.push(this);
    this.votes=0;


}

Products.allProducts = [];

for (let i = 0; i < productsName.length; i++) {
    if (productsTag[i] === 'sweep') {
        new Products(productsTag[i], `Asset/${productsTag[i]}.png`, 0);
    } else {
        new Products(productsTag[i], `Asset/${productsTag[i]}.jpg`, 0);

    }

}





localStorage.setItem('Products', JSON.stringify(Products.allProducts));
    JSON.parse(localStorage.getItem('Products'));
    let imageList = document.getElementById('imgBar');
for (let i = 0; i < productsName.length; i++) {

    let li = document.createElement('img');
    li.setAttribute('class', 'imgbar');
    if (productsTag[i] === 'sweep') {
        li.setAttribute('src', `Asset/${productsTag[i]}.png`);
    } else {
        li.setAttribute('src', `Asset/${productsTag[i]}.jpg`);
    }
    
    imageList.appendChild(li);
    
}






console.log(allProducts);

function random()
{
    return Math.floor(Math.random() * allProducts.length);
}

function render()
{
    leftImage=random();
    middleImage=random();
    rightImage=random();

    do
    {
        middleImage=random();
        rightImage=random();
    }while(leftImage===middleImage || middleImage===rightImage || leftImage===rightImage )



    leftImageElement.src=allProducts[leftImage].path;
    middleImageElement.src=allProducts[middleImage].path;
    rightImageElement.src=allProducts[rightImage].path;
    
   
       allProducts[leftImage].TimeImageShown= allProducts[leftImage].TimeImageShown + 1;
       allProducts[middleImage].TimeImageShown= allProducts[middleImage].TimeImageShown + 1;
       allProducts[rightImage].TimeImageShown= allProducts[rightImage].TimeImageShown + 1;
        
       


}

render();


leftImageElement.addEventListener('click',UserClick);
middleImageElement.addEventListener('click',UserClick);
rightImageElement.addEventListener('click',UserClick);

function UserClick(event) {


    userAttempts++;
    if(userAttempts<maxRound)
    {
        
        if (event.target.section==='leftImage') {
            allProducts[leftImage].votes=allProducts[leftImage].votes + 1; 
        } 
        else if(event.target.section==='middleImage') {
            allProducts[middleImage].votes=allProducts[middleImage].votes + 1; 
        }
        else {
            allProducts[rightImage].votes=allProducts[rightImage].votes + 1; 
        }
    }else{
        leftImageElement.removeEventListener('click', UserClick);
        middleImageElement.removeEventListener('click', UserClick);
        rightImageElement.removeEventListener('click', UserClick);
    }
 
    console.log(userAttempts);
    console.log(allProducts);
    render();


}

botton.addEventListener('click',result);

function result(event)
{
    
   
    for (let i = 0; i < allProducts.length; i++) {
        votesOfChart[i]=(allProducts[i].votes);
        imageChart[i]=(allProducts[i].TimeImageShown);
      
    }
    
    

}

// lab 12 add chart

















// lab localStorage

function local() {

    let data = JSON.stringify(Products.allProducts);

    localStorage.setItem('in', data);
}


function getElement() {
    let stringObj = localStorage.getItem('in');

    let obj = JSON.parse(stringObj);

    if (obj !== null) {
        Products.allProducts = obj;
    }
    render();
}




newBotton.addEventListener('click', function () {
    vChart = [];
    ImgChart = [];

    localStorage.clear();
    resetChart();
    location.reload();
});

console.log(location);

console.log(specialImg);

getElement();


