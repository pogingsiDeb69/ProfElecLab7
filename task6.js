document.addEventListener('DOMContentLoaded',function(){
    const parent = document.getElementById("parent");
const firstchild = parent.firstElementChild;
const nextsibling = firstchild.nextSibling;
const lastchild = parent.lastElementChild;
console.log(firstchild);
console.log(nextsibling);
console.log(lastchild);
});
