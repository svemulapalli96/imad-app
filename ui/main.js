console.log('Loaded!');

var element = document.getElementById('sasi');
element.innerHTML = "Shashikanth edited the Javascript in the console";

var img = document.getElementById('image');

var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
    
}





img.onclick = function()
{
    var interval = setInterval(moveRight,50);
};

