function openMenu(e){
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('menue-content').style.display = 'block';
}

function closeMenu(e){
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('menue-content').style.display = 'none';
}

function replaceImg(newSrc){
    document.getElementById('variants-pic').setAttribute("src", newSrc)
}

function changeVariants() {
    if(window.outerWidth <= 1100) {
        document.getElementById('variants').style.display = 'none';
        document.getElementById('variants-mobile').style.display = 'block';
    } else {
        document.getElementById('variants').style.display = 'block';
        document.getElementById('variants-mobile').style.display = 'none';
    }
  }
  
  window.onresize = changeVariants;
  setTimeout(() => changeVariants(), 500);