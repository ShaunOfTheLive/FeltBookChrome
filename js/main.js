document.body.className = "fullbleed"
var li = document.getElementsByClassName('_li')[0]
var bluebar = document.getElementById("pagelet_bluebar");
var nav = document.createElement("nav");
var navWrapper = document.createElement("div");
navWrapper.className = "nav-wrapper"
navWrapper.innerHTML =
'<img src="http://scharlachrot.com/images/facebook-white-256.png" height="30px"> \
<div>Facebook</div> \
<input placeholder="Search for people, places and things" class="search" type="text"> \
<input placeholder="Search for people, places and things" class="searchmobile" type="text"> \
<a href="#!"> \
<div class="account"> \
    <div class="avatar" style="background-image: url(https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/1554507_10203892436861295_5967994955969268628_n.jpg?oh=1833357327c9137465475a394a340a29&oe=564C0E1C)"></div> \
    <div class="accountname">Connor Kirkby</div> \
</div> \
</a> \
<div class="interactions"> \
<a href="#!"><i class="material-icons">message</i></a> \
<a href="#!"><i class="material-icons">people</i></a> \
<a href="#!"><i class="material-icons">public</i></a> \
</div>'

nav.appendChild(navWrapper)
globalContainer = document.getElementById("globalContainer");
li.removeChild(bluebar);
document.body.insertBefore(nav, li);

