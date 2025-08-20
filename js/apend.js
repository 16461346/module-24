let mainContainer=document.getElementById('main_container');
// console.log(mainContainer);

// let placeSection=document.createElement('section');

// //h1 create
// let h1=document.createElement('h1');
// h1.innerText="This Line Create With appned";

// //ul list korbo baba
// let ul=document.createElement('ul');

// //li  add kore dibo
// let li1=document.createElement("li");
// li1.innerText="This My Apended Li ONE"




// mainContainer.appendChild(placeSection);
// placeSection.appendChild(h1);
// placeSection.appendChild(ul);
// ul.appendChild(li1);

// Ouporer tar sortcut 

let booksection=document.createElement('section')
booksection.innerHTML=`
<h1> This Book Section</h1>
<ul>
    <li> Bangla</li>
    <li> Engilish</li>
    <li> Math</li>
    <li> Biology</li>
    <li> chemestry</li>
    <ul> 
        <li>ICT</li>
    </ul>
</ul>
`
mainContainer.appendChild(booksection);


