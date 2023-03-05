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
//let items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello 2';
//for(var i=0;i<items.length;i++){
   // items[i].style.fontWeight="bold";
//}
//items[i].style.fontWeight='bold';
//items[2].style.backgroundColor='green';


//GETELEMENTSBYTAGNAME
//var li=document.getElementsByTagName('li');
//li[1].textContent='Hello 2';
//li[1].style.fontWeight='bold';
//li[1].style.backgroundColor='yellow';
//for(var i=0;i<li.length;i++){
   // li[i].style.backgroundColor='#f4f4f4';
//}
//li.document.createElement(li);
//let list = document.getElementById('items');
//let li =document.createElement('li');
//li.className = 'list-group-item';
//li.document.createTextNode='Item 5';
//li. appendChild (document.createTextNode('Item 5'))
//list.appendChild(li);
//console.log('li');

//QUERYSELECTOR

//var header=document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';

//var input=document.querySelector('input');
//input.value='Hello World';

//var submit=document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item=document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem=document.querySelector
//('.list-group-item:last-child');
//lastItem.style.color='blue';

let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display='none';

let secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

//QUERYSELECTORALL
//var titles=document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent='Hello';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

//for(var i=0;i<odd.length;i++){
    //odd[i].getElementsByClassName.backgroundColor='#f4f4f4';
    //even[i].getElementsByClassName.backgroundColor='#ccc';
//}



