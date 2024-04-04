document.addEventListener('DOMContentLoaded',function(){
    const parent = document.getElementById("parent");
const firstchild = parent.firstElementChild;
const nextsibling = firstchild.nextSibling;
const lastchild = parent.lastElementChild;
console.log(firstchild.nodeName);
console.log(nextsibling.nodeName);
console.log(lastchild.nodeName);
});
