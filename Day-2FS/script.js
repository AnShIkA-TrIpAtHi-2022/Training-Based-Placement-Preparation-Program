const head = document.getElementById('head');

console.log(head);

head.style.content='kuchh bhiiii';

head.style.color='red';
head.style.border='5px solid black';

const favCity = document.getElementsByClassName('favCity');

console.log(favCity);

for(let city of favCity){
    city.style.color='blue';
}

const btn = document.querySelector('#btn');
const para = document.createElement('p');
const para2 = document.createElement('p');
const cont = document.querySelector('.container');
cont.appendChild(para);
cont.appendChild(para2);

btn.addEventListener('click',()=>{
    console.log('Button clicked');
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then((res) => {
        return res.json();
    })
    .then((data) =>{
        console.log(data);
        para.innerText = data.setup;
        console.log(para);
        setTimeout(()=>{
            para2.innerText = data.punchline;
        },5000);
    })
    .catch((err) => {
        console.log(err);
    })
})


document.getElementById('searchBtn').addEventListener('click', ()=>{
    const query = document.getElementById('searchBar').value;
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = '';

    fetch("http://universities.hipolabs.com/search?country=United+States")
        .then(res => {
            return res.json();
        })
        .then(data => {
            data.filter((item)=>{
                if(item.country.equals(query){
                    resultsDiv.innerHTML += `<p>${item.name}</p>`;
                }
            })
        })
        .catch(err => {
            console.error(err);
        });
});
