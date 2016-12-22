window.onload = function() {

    var text = document.getElementById('greeting').textContent;
    document.getElementById('greeting').style.display = "none";

    var letters = document.getElementById('letters');
    var animate = '';

    for (i=0; i<text.length; i++) {
        var randomLetter = Math.round( Math.random() * 1 );
        animate = animate + '<span class="text-fall"' + 'style="animation: fall 20s infinite ' + randomLetter + i*50 + 'ms;">' + text[i] + '</span>'
    }
    
    letters.innerHTML = animate;

}
