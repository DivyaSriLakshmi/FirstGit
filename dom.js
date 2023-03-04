// Examine the document object //

// console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GetElementById
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
//let tit=document.getElementsByClassName('title');
//tit[0].style.fontWeight="bold";
//tit[0].style.color='green';
let items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
items[1].textContent='Hello 2';
for(var i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
//items[i].style.fontWeight='bold';
items[2].style.backgroundColor='green';




