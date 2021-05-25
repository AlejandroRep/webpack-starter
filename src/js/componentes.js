import '../css/componentes.css';//importancia  de css
// import webpacklogo from '../assets/img/webpack-logo.png';

//funcion de flecha
export const saludar= ( nombre )=> {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerHTML = `Hola, ${nombre}`;
    document.body.append(h1);

    //img
    // console.log(webpacklogo);  
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img ); 
}

 