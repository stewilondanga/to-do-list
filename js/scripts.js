(function(){

  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');

  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)

  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false)

  function store() {
    window.localStorage.myitems = list.innerHTML;
  }

  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = '<li>Make a to do list</li>'+
                       '<li>Check off first thing on the list by clicking once on it</li>'+
                       '<li>Realize you have already accomplished 2 things in the list</li>'+
                       '<li>Double click on a task like this one to delete it</li>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();
