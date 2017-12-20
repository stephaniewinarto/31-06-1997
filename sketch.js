var brit; 
var china; 
var y;
var y2; 
var pole;
var poleW; 
var poleOffest;
var poleStart; 
var date = "30th July, 1997"
var time; 
var movieArray = []
var movie; 
var w; 
var h; 

var _topBorderHeight; 

function preload() { 
  brit = loadImage("assets/brit.png"); 
  china = loadImage("assets/china.jpg");
  passport_brit = loadImage("assets/hk_brit.png");
  passport_hk = loadImage("assets/hk_pass.png"); 
  money_brit = loadImage("assets/brit_money.png"); 
  money_hk = loadImage("assets/hk_money.png"); 
  stamp_hk = loadImage("assets/post_hk.png"); 
  stamp_brit = loadImage("assets/post_brit.png"); 
  socket = loadImage("assets/socket.png"); 
  anthem_brit = loadImage("assets/god_save.png"); 
  anthem_chi = loadImage("assets/chi_anth.png"); 
  flag_hk = loadImage("assets/flag_hk.png"); 
  flag_brit_hk = loadImage("assets/flag_hk_brit.png"); 

  for (var i = 0; i < movieNames.length; i++){ 
    movie = createVideo("assets/" + movieNames[i]); 
    movieArray.push(movie); 
    movieArray[i].hide(); 
  } 
}

function setup() {
  w = windowWidth; 
  h = windowHeight;

  pole = h-(h/4);
  poleW = h/108; 
  poleOffest = h/21.6;
  
  _topBorderHeight = h/17.3; 

  poleStart = _topBorderHeight + (h/10.8);

  createCanvas(windowWidth, windowHeight);


}


function draw() {
  //background(255);
    //pole = windowHeight-100;


    background(y2, y2+100, y); 
  

    push(); 
    rect(-1,-1,w+1,_topBorderHeight);
    fill(255);
    pop();

    push();

     if(mouseY > pole) {
        image(flag_hk, 0, 0 , h/9, _topBorderHeight); 
        } else { 
        image(flag_brit_hk, 0, 0, h/9, _topBorderHeight); 
        }
    pop();

    time = str(floor(map(y, poleStart, pole, 12, 23)))+":" + str(floor(map(y, poleStart, pole, 0, 59)))
 
    text(date, (h/9)+(h/80),(_topBorderHeight)-(h/80)); 


  if(y < pole) {
    text(time, w-(w/12),(_topBorderHeight)-(h/80)); 
  } else { 
    time = "00:00"; 
    text(time, w-(w/12),(_topBorderHeight)-(h/80)); 
    }

 
    push(); 
    fill(0); 
    textSize(12); 
    text("Toggle flags with mouse", windowWidth/2-68, windowHeight-20); 
    pop(); 

    textSize(h/22); 
    line(0, (_topBorderHeight)-1, w, (_topBorderHeight)-1, 0);
    line(h/9, 0, h/9 , (_topBorderHeight)-1, 0);
    
    flag();
    videos();
    things();

}


function things() { 
  if (y > h/6.5) {
    passport();
  } 

  if (y>h/5.4) { 
    stamps(); 
  } 

  if (y>h/3.6) { 
    money();
  } 

  if (y>h/2.7) { 
    image(socket, w/19, h/2, h/7.2, h/7.2);
  }

  if (y>h/2.16) { 
    anthem(); 
  }
} 

function anthem() { 

  if (mouseY < pole) { 
    image(anthem_brit, w/3.4, h/3.7, h/5, h/4); 
    //song_brit.play(); 
    } else { 
    image(anthem_chi, w/3.4, h/3.7, h/5, h/4);
    //song_china.play();  
    }

}


function money() { 

  if (mouseY < pole) { 
    image(money_brit, w/1.2 , h/6.8, h/3.6, h/3.6); 
    } else { 
    image(money_hk, w/1.2 , h/6.8, h/3.6, h/3.6); 
  }

}


function stamps() { 
   if (mouseY < pole) { 
    image(stamp_brit, w/1.4 , h/1.2, h/3.6, h/3.6); 
    } else { 
    image(stamp_hk, w/1.4 , h/1.2, h/3.6, h/3.6); 
  }

}


function passport() { 

  if (mouseY < pole) { 
    image(passport_brit, w/9.6 , h/1.4, h/5, h/3.6); 
    } else { 
    image(passport_hk, w/9.6 , h/1.4, h/5, h/3.6); 
  }

}


function flag(){ 

  imageH = (h/10.8); 
  imageW = imageH*1.8; 

  
  y = constrain(mouseY, poleStart, pole+(imageH*0.61)); 
  y2 = pole+(imageH*0.6)+(y*(-1)+(imageH*1.64)); 
    
  image(brit, windowWidth/2 - poleOffest-imageW-poleW, y, imageW, imageH); 
  //image(flag_brit_hk, windowWidth/2 - poleOffest-200, y + imageH + 20, imageW, imageH); 
  //image(flag_hk, windowWidth/2 + poleOffest, y2 + imageH + 20 , imageW, imageH); 
  image(china, windowWidth/2 + poleOffest, y2, imageW, imageH); 
  
  rect(windowWidth/2 - poleOffest-poleW, poleStart, poleW, pole); 
  rect(windowWidth/2 + poleOffest-poleW, poleStart, poleW, pole); 

}

function videos() { 

    w = windowWidth; 

    if (mouseY > poleStart && mouseY<(h/5.4)) { 
    image(movieArray[0], w/19, h/11, w/7.7, w/10); 
    stroke(2);
    movieArray[0].loop(); 
    } else { 
    movieArray[0].pause();
  }
        
  if(mouseY > (h/9.8) && mouseY < (h/2.4)) { 
    image(movieArray[1], w/32, h/3.7, w/6.4, w/7.4); 
    movieArray[1].loop();
    } else { 
    movieArray[1].pause();
  }
  
  if(mouseY > (h/8.6) && mouseY < (h/2.4)) {
    image(movieArray[2], w/7.7, h/4.5, w/8.4, w/10); 
    movieArray[2].loop(); 
  } else { 
    movieArray[2].pause();
  }
  
  if (mouseY > (h/7.2) && mouseY<(h/2.7)) { 
    image(movieArray[5], w/1.4, h/10.8, w/4.3, w/6); 
    movieArray[5].loop(); 
    } else { 
    movieArray[5].pause();
  }
  
  if(mouseY > (h/10.1) && mouseY < (h/5.4)) {
    image(movieArray[4], w/5.5, h/2.16, w/5.8, w/7.6); 
    movieArray[4].loop(); 
  } else { 
    movieArray[4].pause();
  }
  
  if(mouseY > (h/7.2) && mouseY < (h/5.4)) {
    image(movieArray[3], w/8.7, h/2.4, w/8.3, w/10); 
    movieArray[3].loop(); 
  } else { 
    movieArray[3].pause();
  }
  
  if(mouseY > (h/5.4) && mouseY < (h/2.16)) {


    image(movieArray[20], w/2, h/6, w/8.4, w/10); 
    image(movieArray[14], w/1.7, h/15.4, w/8.4, w/10); 
    image(movieArray[7], w/1.6, h/2.16, w/4.8, w/7.6); 
    image(movieArray[15], w/3.8, h/1.8, w/8.4, w/10); 
    
    movieArray[20].loop(); 
    movieArray[7].loop(); 
    movieArray[15].loop(); 
    movieArray[14].loop(); 
  } else { 
    movieArray[20].pause(); 
    movieArray[14].pause(); 
    movieArray[7].pause();
    movieArray[7].pause();

  }

   if (mouseY > (h/4.9) && mouseY < (h/2)) {
    image(movieArray[16], w/9.7, h/2, w/6.8, w/7.6); 
    movieArray[16].loop(); 
  } else { 
    movieArray[16].pause();
  }

  if (mouseY > (h/4.9) && mouseY < (h/1.5)) {
    image(movieArray[19], w/4.8, h/7.2, w/5.4, w/7.2); 
    movieArray[19].loop(); 
    image(movieArray[23], w/3.5, h/1.6, w/5.8, w/6.6); 
    movieArray[23].loop(); 
  } else { 
    movieArray[19].pause(); 
    movieArray[23].pause();
  }
  
  if (mouseY > (h/4.3) && mouseY < (h/2)) {
    image(movieArray[17], w/1.6, h/1.3, w/5.8, w/6.6); 
    movieArray[17].loop(); 
  } else { 
    movieArray[17].pause();
  }

  if (mouseY > (h/3.9) && mouseY < (h/1.5)) {
    image(movieArray[18], w/3.55, h/1.6, w/4.8, w/6.6); 
    movieArray[18].loop(); 
  } else { 
    movieArray[18].pause();
  }

  if(mouseY > pole) {
    image(movieArray[6], w/7.7, h/7.2, w/7.4, w/10); 
    image(movieArray[24], w/1.6, h/1.6, w/4.5, w/5.5); 
    movieArray[6].loop(); 
    movieArray[24].loop(); 
    date = "1st July, 1997";
    
  } else { 
    date = "30th June, 1997";
    movieArray[6].pause();
    movieArray[24].pause(); 

    
  }
  
  if(mouseY > (h/1.74)) {
    image(movieArray[9], w/1.7, h/2.7, w/4.5, w/5.2); 

    movieArray[9].loop(); 

  } else { 
    movieArray[9].pause();
  }

  if(mouseY > h/1.7) {
    image(movieArray[21], w/1.35, h/1.55, w/6.4, w/7.3); 
    movieArray[21].loop(); 

  } else { 
    movieArray[21].pause();  
  }
  
  if(mouseY > pole-40 && mouseY < pole) {
    image(movieArray[8], w/1.34, h/10.8, w/7.7, w/9); 
    image(movieArray[10], w/1.4, h/3.6, w/6.7, w/9); 
    movieArray[8].loop(); 
    movieArray[10].loop();
  } else { 
    movieArray[8].pause();
    movieArray[10].pause();
  }

  if(mouseY > pole-30 && mouseY < pole) {
    image(movieArray[11], w/19.2, h/3.3, w/3.8, w/6.3); 
    movieArray[11].loop();
  } else { 
    movieArray[11].pause();
  }

  if(mouseY > pole-20 && mouseY < pole ) {
    image(movieArray[12], w/4.8, h/2, w/6.6, w/9); 
    image(movieArray[22], w/7.4, h/8.6, w/4.8, w/5.54); 
    movieArray[12].loop();
    movieArray[22].loop();
  } else { 
    movieArray[12].pause();
    movieArray[22].pause();
  }

  if(mouseY > pole-10 && mouseY < pole) {
    image(movieArray[13], w/3.8, h/1.6, w/9.6, w/9); 
   
    movieArray[13].loop();
  } else { 
    movieArray[13].pause();
  }
  
}

var movieNames = [
  "1_1.mov", 
  "2_1.mov",
  "3_1.mov", 
  "4_1.mov",
  "5_1.mov", 
  "6_1.mov",
  "7_1.mov", 
  "8_1.mov",
  "9_1.mov", 
  "10.mov", 
  "11.mov",
  "12.mov", 
  "13.mov",
  "14.mov",
  "15.mov", 
  "16.mov",
  "17.mov",
  "18.mov", 
  "19.mov", 
  "20.mov", 
  "21.mov",
  "22.mov", 
  "23.mov", 
  "24.mov",
  "25.mov"
  ] 
  

