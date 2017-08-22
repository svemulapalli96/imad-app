console.log('Loaded!');

var element = document.getElementById('sasi');
element.innerHTML = "Shashikanth edited the Javascript in the console";

var img = document.getElementById('image');
img.onClick = function()
{
    img.style.marginLeft = '100px';
};