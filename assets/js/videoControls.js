function accionPlay()
{
    if(!medio.paused && !medio.ended) 
    {
        medio.pause();
        play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
    }
    else
    {
        medio.play();
        play.value='||';
    document.body.style.backgroundColor = 'grey';
    }
}
function accionReiniciar()
{
    if(!medio.paused && !medio.ended)
    {
        medio.play();
        medio.currentTime = 0;
        play.value = '||';
        document.body.style.backgroundColor = 'grey';
    }
    
//Usar propiedad .currentTime
//Reproducir el vídeo
//Cambiar el valor del botón a ||
}
function accionRetrasar()
{
    if(!medio.paused && !medio.ended)
    {
        if( medio.currentTime > 5)
        {
            medio.currentTime -= 5;
        }
        else
        {
            medio.currentTime = 0;
        }
        document.body.style.backgroundColor = 'grey';
    }
    //Usar propiedad .curentTime
//Contemplar que no existen valores negativos
}
function accionAdelantar()
{
    if(!medio.paused && !medio.ended)
    {
        if( medio.currentTime < medio.duration)
        {
            medio.currentTime += 5;
        }   
        document.body.style.backgroundColor = 'grey';
    }
//Contemplar que no existen valores mayores a medio.duration	
}
function accionSilenciar()
{
    if (!medio.muted)
    {
        silenciar.value = 'sonorizar';
    }
    else{
        silenciar.value= 'silenciar';
    }
    medio.muted = !medio.muted;   
    //Utilizar medio.muted = true; o medio.muted = false;
}
function accionMasVolumen()
{
    if (medio.volume < 1)
    {
        medio.volume += 0.1;
    }
    //Contemplar que el valor máximo de volumen es 1
}
function accionMenosVolumen()
{
    if (medio.volume > 0.10000000000000014)
    {
        medio.volume -= 0.1;
    }
    else
    {
        medio.volume = 0.0;
    }
    //Contemplar que el valor mínimo de volumen es 0
}

function iniciar() 
{
    
    medio=document.getElementById('medio');
    play=document.getElementById('play');
    reiniciar=document.getElementById('reiniciar');
    retrasar=document.getElementById('retrasar');
    adelantar=document.getElementById('adelantar');
    silenciar=document.getElementById('silenciar');

    play.addEventListener('click', accionPlay);
    reiniciar.addEventListener('click', accionReiniciar);
    retrasar.addEventListener('click', accionRetrasar);
    adelantar.addEventListener('click', accionAdelantar);
    silenciar.addEventListener('click', accionSilenciar);
    menosVolumen.addEventListener('click', accionMenosVolumen);
    masVolumen.addEventListener('click', accionMasVolumen);
} window.addEventListener('load', iniciar, false);