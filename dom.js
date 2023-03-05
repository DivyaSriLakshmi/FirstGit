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

//let thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';

//let secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';

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

//TRAVERSING THE DOM

var itemList=document.querySelector('#items');
//PARENT NODE
//console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//childNodes
//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
itemList.children[1].getElementsByClassName.backgroundColor='yellow';

//FirstChild
//console.log(itemList.firstChild);
//FirstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello 1';

//nextSibling
//console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
itemList.previousElementSibling.getElementsByClassName.color='green';

//CreateElement

//Create a div

var newDiv=document.createElement('div');
//Add Class
newDiv.className='Hello';
//Add Id
newDiv.id='Hello 1';
//Add Attribute
newDiv.setAttribute('title','Hello Div');
//Create a TextNode
var newDivText=document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize='30px';

container.insertBefore(newDiv,h1);

let parentnode = document.getElementById('items');
parentnode.innerHTML = '<li class="list-group-item">Hello World</li>' + parentnode.innerHTML
