'use strict';


let leftImage , middleImage, rightImage;
let imgCount=[];

let allProducts=[];

let votesOfChar=[];
let imageChart=[];

let leftImageElement , middleImageElement, rightImageElement;
leftImageElement=document.getElementById('leftImage');
rightImageElement=document.getElementById('rightImage');
middleImageElement=document.getElementById('middleImage');


let botton=document.getElementById('botton');

let parent=document.getElementById('result');


let maxRound=25;


let userAttempts=0;


function Prodct (name,path,TimeImageShown)
{
    this.name=name;
    this.path=path;
    this.TimeImageShown=TimeImageShown;
    allProducts.push(this);
    this.votes=0;


}

new Prodct('bag','Asset/bag.jpg',0);
new Prodct('banana','Asset/banana.jpg',0);
new Prodct('bathroom','Asset/bathroom.jpg',0);
new Prodct('boots','Asset/boots.jpg',0);
new Prodct('breakfast','Asset/breakfast.jpg',0);
new Prodct('bubblegum','Asset/bubblegum.jpg',0);
new Prodct('dog-duck','Asset/dog-duck.jpg',0);
new Prodct('dragon','Asset/dragon.jpg',0);
new Prodct('pen','Asset/pen.jpg',0);
new Prodct('pet-sweep','Asset/pet-sweep.jpg',0);
new Prodct('scissors','Asset/scissors.jpg',0);
new Prodct('tauntaun','Asset/tauntaun.jpg',0);
new Prodct('unicorn','Asset/unicorn.jpg',0);
new Prodct('water-can','Asset/water-can.jpg',0);
new Prodct('wine-glass','Asset/wine-glass.jpg',0);

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




function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: productName,
            datasets: [{
                label: '# of Votes',
                data: votesOfChart,
                backgroundColor: [
                    'gray'
                ],
                borderColor: [
                    'black'
                ],
                borderWidth: 1
            },
            {
                label: '# of img showen',
                backgroundColor: 'white',
                borderColor: 'black',
                data: shownImageChart
            }]
        },

        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}


