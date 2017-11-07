var brit; 
var china; 
var y;
var y2; 

var pole = 900;
var poleW = 10; 
var poleOffest = 50;
var poleStart = 100; 
var date = "30th July, 1997"
var time; 

var movieArray = []

var movie; 

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
  //song_brit = loadSound("assets/god_save.mp3"); 
  //song_china = loadSound("assets/chinese_anthem.mp3"); 


  for (var i = 0; i < movieNames.length; i++){ 
    movie = createVideo("assets/" + movieNames[i]); 
    movieArray.push(movie); 
    movieArray[i].hide(); 
  } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);


}


function draw() {
  //background(255);
    //pole = windowHeight-100;


    background(y2, y2+100, y); 
  

    push(); 
    rect(-1,-1,windowWidth+1,51);
    fill(255);
    pop();

    push();

     if(mouseY > pole) {
        image(flag_hk, 0, 0 , 100, 50); 
        } else { 
        image(flag_brit_hk, 0, 0, 100, 50); 
        }
    pop();

    time = str(floor(map(y, poleStart, pole, 12, 23)))+":" + str(floor(map(y, poleStart, pole, 0, 59)))
 
    text(date, 115,40); 


  if(y < pole) {
    text(time, windowWidth-110,40); 
  } else { 
    time = "00:00"; 
    text(time, windowWidth-110,40); 
    }

 
    push(); 
    fill(0); 
    textSize(12); 
    text("Toggle flags with mouse", windowWidth/2-68, windowHeight-20); 
    pop(); 

    textSize(36); 
    line(0, 50, windowWidth,50, 0);
    line(100, 0, 100 , 50, 0);
    
    flag();
    videos();
    things();

}


function things() { 
  if (y > 100) {
    passport();
  } 

  if (y>200) { 
    stamps(); 
  } 

  if (y>300) { 
    money();
  } 

  if (y>400) { 
    image(socket, 100 , windowHeight-450, 150,150);
  }

  if (y>500) { 
    anthem(); 
  }
} 

function anthem() { 

  if (mouseY < pole) { 
    image(anthem_brit, windowWidth/2-400, windowHeight-800, 250,350); 
    //song_brit.play(); 
    } else { 
    image(anthem_chi, windowWidth/2-400 , windowHeight-800,250,350);
    //song_china.play();  
    }

}


function money() { 

  if (mouseY < pole) { 
    image(money_brit, windowWidth-300 , windowHeight-850, 300,300); 
    } else { 
    image(money_hk, windowWidth-300 , windowHeight-850,300,300); 
  }

}


function stamps() { 
   if (mouseY < pole) { 
    image(stamp_brit, windowWidth-500 , windowHeight-250, 300,300); 
    } else { 
    image(stamp_hk, windowWidth-500 , windowHeight-250,300,300); 
  }

}


function passport() { 
  img_x = 200; 
  img_y = windowHeight-300; 

  if (mouseY < pole) { 
    image(passport_brit, img_x , img_y, 200,300); 
    } else { 
    image(passport_hk, img_x , img_y, 200,300); 
  }

}


function flag(){ 

  imageW = 200; 
  imageH = 100; 
  pole = windowHeight-150;
    
  image(brit, windowWidth/2 - poleOffest-200, y, imageW, imageH); 
  //image(flag_brit_hk, windowWidth/2 - poleOffest-200, y + imageH + 20, imageW, imageH); 
  //image(flag_hk, windowWidth/2 + poleOffest, y2 + imageH + 20 , imageW, imageH); 
  image(china, windowWidth/2 + poleOffest, y2, imageW, imageH); 
  
  rect(windowWidth/2 - poleOffest-10, poleStart, poleW, pole); 
  rect(windowWidth/2 + poleOffest-10, poleStart, poleW, pole); 
  
   
      y = constrain(mouseY, poleStart,pole); 
      y2 = pole+imageH + y*-1; 


    
}

function videos() { 

    w = windowWidth; 

    if (mouseY > poleStart && mouseY<200) { 
    image(movieArray[0], 100, 100, 250, 170); 
    stroke(2);
    movieArray[0].loop(); 
    } else { 
    movieArray[0].pause();
  }
        
  if(mouseY > 110 && mouseY < 450) { 
    image(movieArray[1], 60, 290, 300, 200); 
    movieArray[1].loop();
    } else { 
    movieArray[1].pause();
  }
  
  if(mouseY > 125 && mouseY < 450) {
    image(movieArray[2], 250, 240, 230, 135); 
    movieArray[2].loop(); 
  } else { 
    movieArray[2].pause();
  }
  
  if (mouseY > 150 && mouseY<400) { 
    image(movieArray[5], w-550, 100, 450, 270); 
    movieArray[5].loop(); 
    } else { 
    movieArray[5].pause();
  }
  
  if(mouseY > 100 && mouseY < 200) {
    image(movieArray[4], 350, 500, 330, 235); 
    movieArray[4].loop(); 
  } else { 
    movieArray[4].pause();
  }
  
  if(mouseY > 150 && mouseY < 200) {
    image(movieArray[3], 220, 450, 230, 135); 
    movieArray[3].loop(); 
  } else { 
    movieArray[3].pause();
  }
  
  if(mouseY > 200 && mouseY < 500) {


    image(movieArray[20], w-950, windowHeight-900, 230, 135); 
    image(movieArray[14], w-800, windowHeight-1010, 230, 135); 
    image(movieArray[7], w-700, 500, 330, 235); 
    image(movieArray[15], 500, 600, 230, 135); 
    
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

   if (mouseY > 220 && mouseY < 520) {
    image(movieArray[16], 200, 650, 330, 235); 
    movieArray[16].loop(); 
  } else { 
    movieArray[16].pause();
  }

  if (mouseY > 220 && mouseY < 700) {
    image(movieArray[19], 400, 150, 300, 205); 
    movieArray[19].loop(); 
  } else { 
    movieArray[19].pause(); 
  }
  
  if (mouseY > 250 && mouseY < 520) {
    image(movieArray[17], w-700, 850, 330, 235); 
    movieArray[17].loop(); 
  } else { 
    movieArray[17].pause();
  }

  if (mouseY > 275 && mouseY < 700) {
    image(movieArray[18], 550, windowHeight-400, 330, 235); 
    movieArray[18].loop(); 
  } else { 
    movieArray[18].pause();
  }

  if(mouseY > pole) {
    image(movieArray[6], 250, 150, 230, 135); 
    movieArray[6].loop(); 
    date = "1st July, 1997";
    
  } else { 
    date = "30th June, 1997";
    movieArray[6].pause();
    
  }
  
  if(mouseY > 620) {
    image(movieArray[9], w-500, 400, 430, 335); 
    movieArray[9].loop(); 

  } else { 
    movieArray[9].pause(); 
  }
  
  if(mouseY > pole-40) {
    image(movieArray[8], w-490, 100, 250, 155); 
    image(movieArray[10], w-550, 300, 250, 155); 
    movieArray[8].loop(); 
    movieArray[10].loop();
  } else { 
    movieArray[8].pause();
    movieArray[10].pause();
  }

  if(mouseY > pole-30) {
    image(movieArray[11], 100, 330, 400, 255); 
    movieArray[11].loop();
  } else { 
    movieArray[11].pause();
  }

  if(mouseY > pole-20) {
    image(movieArray[12], 400, 550, 200, 155); 
    movieArray[12].loop();
  } else { 
    movieArray[12].pause();
  }

  if(mouseY > pole-10) {
    image(movieArray[13], 500, 650, 200, 155); 
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
  "21.mov"
  ] 
  

