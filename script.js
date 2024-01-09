function LoadHtmlComponent (file,component) {    
    fetch(file)
        .then(response => response.text())
        .then(data => 
            {document.getElementById(component).innerHTML = data;}
            )
        .catch(error => {console.error('Error al cargar el contenido:', error)});
}

function DisableComponent(component){
    document.getElementById(component).innerHTML = "";
}


LoadHtmlComponent('componentes/header.html','header')
LoadHtmlComponent('componentes/menu.html','menu')
LoadHtmlComponent('componentes/n.miPerfil.html','contenido')
LoadHtmlComponent('componentes/footer.html','footer')