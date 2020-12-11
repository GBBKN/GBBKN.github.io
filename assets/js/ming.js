var mainTatle = document.getElementById("mainTatle")
var mainSubTatle = document.getElementById("mainSubTatle")
var mainPicBox = document.getElementById("mainPicBox")
var mainPic = document.getElementById("mainPic")
var mainBnt = document.getElementById("mainBnt")
var mainVideoBox = document.getElementById("mainVideoBox")
var section1H = document.getElementById("section1H")
var section2H = document.getElementById("section2H")
var section1HL = document.getElementById("section1HL")
var section2HL = document.getElementById("section2HL")
var section1PL = document.getElementById("section1PL")
var section2PL = document.getElementById("section2PL")
var section1P = document.getElementById("section1P")
var section2P = document.getElementById("section2P")
var section1Pic = document.getElementById("section1Pic")
var section2Pic = document.getElementById("section2Pic")
var section1B = document.getElementById("section1B")
var section2B = document.getElementById("section2B")
var postId = document.getElementById("postId")
var embedcontainer1 = document.getElementById("embedcontainer1")
var embedcontainer2 = document.getElementById("embedcontainer2")
var embedcontainer3 = document.getElementById("embedcontainer3")
var subPosts1 = document.getElementById("subPosts1")
var subPosts2 = document.getElementById("subPosts2")

mainVideoBox.style.display = "none";
section1VideoBox.style.display = "none";
section2VideoBox.style.display = "none";
mainBnt.style.display = "none";
mainPicBox.style.display = "none";


function onReadingTab() {
  changeActive("readingTab")
  mainVideoBox.style.display = "none";
  section1VideoBox.style.display = "none";
  section2VideoBox.style.display = "none";
  postId.style.display = "block";
  subPosts1.style.display = "block";
  subPosts2.style.display = "block";
  embedcontainer1.style.display = "none";
  embedcontainer2.style.display = "none";
  embedcontainer3.style.display = "none";
  mainPicBox.style.display = "none";
  section1PL.style.display = "none";
  section2PL.style.display = "none";
  mainBnt.innerHTML="Full Story"
  changeSection2Reading()
  mainTatle.innerHTML = "Look Here";
  mainSubTatle.innerHTML = "What if the thing you see, the sound you hear is not so truthful."
  // mainPic.setAttribute("src","images/cat.jpg")
  mainPicBox.setAttribute('href', 'https://en.wikipedia.org/wiki/Optical_illusion')
  mainBnt.setAttribute('href', 'https://en.wikipedia.org/wiki/Optical_illusion')
  mainBnt.style.display = "none";
}

function onWatchingTab(){
  changeActive("watchingTab")
  mainVideoBox.style.display = "block";
  section1VideoBox.style.display = "block";
  section2VideoBox.style.display = "block";
  postId.style.display = "block";
  subPosts1.style.display = "none";
  subPosts2.style.display = "none";
  embedcontainer1.style.display = "block";
  embedcontainer2.style.display = "block";
  embedcontainer3.style.display = "block";
  mainPicBox.style.display = "none";
  section1PL.style.display = "none";
  section2PL.style.display = "none";
  mainBnt.innerHTML="Watch In New Tab"
  var turl = "https://drive.google.com/file/d/1dZzfTo8Nx8HK-IEaLxkrreXNlyjEwLxf/preview"
  var url = turl.replace("https://youtu.be","https://youtube.com/embed")
  
  mainTatle.innerHTML = "Video Presentation";
  mainSubTatle.innerHTML = "Super-spreading Modeling and Prediction"
  mainBnt.setAttribute('href', turl)
  mainVideoBox.setAttribute('src',url)
  changeSection2Watching()
  
}

function onListeningTab(){
  changeActive("listeningTab")
  mainVideoBox.style.display = "block";
  section1VideoBox.style.display = "block";
  section2VideoBox.style.display = "block";
  postId.style.display = "table";
  embedcontainer1.style.display = "block";
  embedcontainer2.style.display = "block";
  embedcontainer3.style.display = "block";
  mainPicBox.style.display = "none";
  section1PL.style.display = "none";
  section2PL.style.display = "none";
  mainBnt.innerHTML="Full Story"
  
  // mainTatle.innerHTML = "Listen Carefully";
  // mainSubTatle.innerHTML = "The Cult of Social Media Wellness, Debunked"
  // mainBnt.setAttribute('href', "https://soundcloud.com/user-944127072/the-cult-of-social-media-wellness-debunked")
  // mainVideoBox.setAttribute('src',"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/725542732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
  // changeSection2Listening()


}


function changeActive(tabName){
  document.getElementById("readingTab").classList.remove("active")
  document.getElementById("watchingTab").classList.remove("active")
  document.getElementById("listeningTab").classList.remove("active")
  document.getElementById(tabName).classList.add("active")
}

function changeSection2Reading(){
  section1HL.setAttribute('href','https://medium.com/@ming98/those-living-in-hurricane-alley-should-use-social-media-wisely-de0aaf823d4f')
  section2HL.setAttribute('href','https://medium.com/@ming98/how-booking-websites-empty-your-wallet-4fe4c7b102e')
  section1HL.innerHTML="Those Living in Hurricane Alley Should Use Social Media Wisely"
  section2HL.innerHTML="How Booking Websites Empty Your Wallet <br> <br>"
  section1PL.setAttribute('href','https://medium.com/@ming98/those-living-in-hurricane-alley-should-use-social-media-wisely-de0aaf823d4f')
  section2PL.setAttribute('href','https://medium.com/@ming98/how-booking-websites-empty-your-wallet-4fe4c7b102e')
  section1Pic.setAttribute('src','images/0_xsvtiBYJqYlHlxmL.jfif')
  section2Pic.setAttribute('src','images/DTZT7dBV4AAcZpS.jpg')
  section1P.innerHTML="Every year seems to bring stronger and stronger hurricanes. These storms keep us alert day and night. As we hear about an approaching hurricane, we turn to social media to see how everyone else is reacting. We see our friends fleeing town and running for their lives, or rushing to the nearby Walmart and emptying their inventory on bottled water. Then you start scrolling your screen, checking the weather forecast, and looking for the latest information. Now you have the sources, what should you trust?"
  section2P.innerHTML="No matter whether you travel on business or vacation, booking websites make everything easier for you. However, this convenience does not come free. A quote from Andrew Lewis states that “If you are not paying for the product, you are the product.” These websites are stealing from you in a way you never realized before. And here is some of the witchcraft you need to know."
  section1B.setAttribute('href','https://medium.com/@ming98/those-living-in-hurricane-alley-should-use-social-media-wisely-de0aaf823d4f')
  section2B.setAttribute('href','https://medium.com/@ming98/how-booking-websites-empty-your-wallet-4fe4c7b102e')
  section1B.innerHTML="Full Story"
  section2B.innerHTML="Full Story"
}

function changeSection2Watching(){
  // var urlt1="https://youtu.be/OQSMr-3GGvQ"
  // var urlt2="https://youtu.be/E0KLmBMSjDk"
  // var url1= urlt1.replace("https://youtu.be","https://youtube.com/embed")
  // var url2= urlt2.replace("https://youtu.be","https://youtube.com/embed")
  // section1HL.setAttribute('href',urlt1)
  // section2HL.setAttribute('href',urlt2)
  // section1HL.innerHTML="<br>Facebook's role in Brexit | Carole Cadwalladr <br> <br>"
  // section2HL.innerHTML="<br> Can we choose to fall out of love? | Dessa <br> <br>"
  // section1VideoBox.setAttribute('src',url1)
  // section2VideoBox.setAttribute('src',url2)
  // section1Pic.setAttribute('src','')
  // section2Pic.setAttribute('src','')
  // section1P.innerHTML="In an unmissable talk, journalist Carole Cadwalladr digs into one of the most perplexing events in recent times: the UK's super-close 2016 vote to leave the European Union. Tracking the result to a barrage of misleading Facebook ads targeted at vulnerable Brexit swing voters -- and linking the same players and tactics to the 2016 US presidential election -- Cadwalladr calls out the 'gods of Silicon Valley' for being on the wrong side of history and asks: Are free and fair elections a thing of the past?"
  // section2P.innerHTML="What's the best way to get over heartbreak? Rapper and writer Dessa came up with an unconventional approach after a chance viewing of Helen Fisher's TED Talk about the brains of the lovestruck. In a wryly funny talk, she describes how she worked with a neuroscientist to try to get her brain to fall out of love with her ex -- and shares wisdom about romance that she gained along the way."
  // section1B.setAttribute('href',urlt1)
  // section2B.setAttribute('href',urlt2)
  // section1B.innerHTML="Watch In New Tab"
  // section2B.innerHTML="Watch In New Tab"
}

function changeSection2Listening(){
  // section1HL.setAttribute('href','https://soundcloud.com/creativepeptalk/147-dont-chase-the-likes')
  // section2HL.setAttribute('href','https://soundcloud.com/ableton/smw_music_in_the_age_of_democratization')
  // section1HL.innerHTML="Don't Chase the Likes... <br><br>"
  // section2HL.innerHTML="Music In The Age of Democratization"
  // section1VideoBox.setAttribute('src',"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340083175&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
  // section2VideoBox.setAttribute('src',"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/169306315&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
  // section1P.innerHTML= "It’s so easy to get caught up chasing likes and followers, but should you let these numbers guide your creative career?"
  // section2P.innerHTML= "As part of Berlin's Social Media Week, Ninjatune founder and member of A/V group Coldcut, Matt Black and Gerhard Behles, CEO of Ableton and former member of Monolake were hosted by Peter Kirn, editor of createdigitalmusic.com"
  // section1B.setAttribute('href','https://soundcloud.com/creativepeptalk/147-dont-chase-the-likes')
  // section2B.setAttribute('href','https://soundcloud.com/ableton/smw_music_in_the_age_of_democratization')
}
