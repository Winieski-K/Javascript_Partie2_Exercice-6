function changeImageOnHover(imgRef) {
  // change les images au survol
  document.getElementById(imgRef).src = 'assets/img/' + imgRef + '_2.jpg';
}
function changeImageOnUnhover(imgRef) {
  // change les images à l'arrêt du survol
  document.getElementById(imgRef).src = 'assets/img/' + imgRef + '.jpg';
}
