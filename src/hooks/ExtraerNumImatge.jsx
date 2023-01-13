

function ExtraerNumImatge(url) {
    const urlImg = String(url);
    const urlDividido = urlImg.split('/');
    const numero = urlDividido[5];
  return numero
}

export default ExtraerNumImatge