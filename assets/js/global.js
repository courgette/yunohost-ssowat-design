document.addEventListener('DOMContentLoaded', function() {
  var liMenu = document.querySelectorAll('#apps a'),
      colors = ['bluebg','purplebg','redbg','orangebg','greenbg','darkbluebg','lightbluebg','yellowbg','lightpinkbg'],
      addMailAlias = document.getElementById('add-mailalias'),
      addMaildrop = document.getElementById('add-maildrop');
  [].forEach.call(liMenu, function(el, i) {
    var text = el.textContent,
        splitText = text.split("");

    el.classList.add(colors[i]);
    el.querySelector('.first-letter').setAttribute('data-first-letter',splitText[0]+splitText[1]);
  });

  addMailAlias.addEventListener('click', function(){
    console.log('test');
    /*var inputAlias = document.querySelector('.mailalias-input:first');
    this.insertBefore(inputAlias.cloneNode(true), null);*/
  });

  addMaildrop.addEventListener('click', function(){
    console.log('test');
    /*var inputDrop = document.querySelector('.maildrop-input:first');
    this.insertBefore(inputDrop.cloneNode(true), null);*/
  });
});