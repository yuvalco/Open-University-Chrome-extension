(function() {
    
    let table = document.getElementsByClassName('content_tbl')[0];
    let cell = table.firstElementChild.childNodes

    cell.forEach(element => {
        if(element.tagName == 'TR')
        {
            let nodes = element.childNodes;
            
            // node 6 is where the cell of the status.
            if (nodes[6].innerText === 'נדחה' || nodes[6].innerText === 'הוחלף')
                nodes[6].parentNode.remove();
        
            
            // nodes.forEach (row =>{
            //     if (row.innerText == 'נדחה' || row.innerText == 'הוחלף')
            //         row.parentNode.remove()
            // });
        }
    });

    // changeCSS('style.css' , 1);
    // changeImages();

})();


function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("body").item(0).replaceChild(newlink, oldlink);
}

function changeImages()
{
    let images = document.getElementsByTagName("img");
    console.log(images);
    images.forEach(image => {
        // image.setAttribute("src" , "ishur_adpasa_mine.gif");
    });
    console.log("wow");
    
}