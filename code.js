var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["801cdaf0-29af-4d82-a691-05a0dfac7e96","b1d5d953-d15d-411b-8705-2ea4d43d56cf","f07f7c62-9116-4956-8938-a558c1053b19","bdf036a8-f6ed-49a5-bc66-b9940e49e353","1e9c8fbe-5d26-4a7b-a73a-282d01911201","ba8604cd-7e6b-46c4-9207-3feb080f5200","502fed9f-5382-4fbd-960e-c2252a45025f","b3f93567-97f6-407b-bb08-4fd47473f030","c63582fa-cd9e-494e-a70b-12f924ceb0e1","fa161905-54b0-4c57-a7ad-9a3d036cccc5","b13c08df-1504-4f52-8a0f-0aa04bc8da6d","93000f06-339c-495d-a8ac-ac7b872e0644"],"propsByKey":{"801cdaf0-29af-4d82-a691-05a0dfac7e96":{"name":"1","sourceUrl":null,"frameSize":{"x":630,"y":630},"frameCount":2,"looping":true,"frameDelay":5,"version":"UmfoO2zvUfj1GvxRFoPW2LT7Sc0JxwHI","loadedFromSource":true,"saved":true,"sourceSize":{"x":630,"y":1260},"rootRelativePath":"assets/801cdaf0-29af-4d82-a691-05a0dfac7e96.png"},"b1d5d953-d15d-411b-8705-2ea4d43d56cf":{"name":"2","sourceUrl":null,"frameSize":{"x":630,"y":630},"frameCount":2,"looping":true,"frameDelay":3,"version":"Xf0Xrm9PHeZnN6AZlKzrjGhnbXP.WWgJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":630,"y":1260},"rootRelativePath":"assets/b1d5d953-d15d-411b-8705-2ea4d43d56cf.png"},"f07f7c62-9116-4956-8938-a558c1053b19":{"name":"bg","sourceUrl":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/f07f7c62-9116-4956-8938-a558c1053b19.png","frameSize":{"x":418,"y":200},"frameCount":1,"looping":true,"frameDelay":4,"version":"C9uNfm7aTRUJTDP8Pcrr0tNwPJvyw1us","loadedFromSource":true,"saved":true,"sourceSize":{"x":418,"y":200},"rootRelativePath":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/f07f7c62-9116-4956-8938-a558c1053b19.png"},"bdf036a8-f6ed-49a5-bc66-b9940e49e353":{"name":"3","sourceUrl":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/bdf036a8-f6ed-49a5-bc66-b9940e49e353.png","frameSize":{"x":630,"y":630},"frameCount":1,"looping":true,"frameDelay":4,"version":".C_BGcnbpY9xYz9qUOJKafwvwM6_Ju2s","loadedFromSource":true,"saved":true,"sourceSize":{"x":630,"y":630},"rootRelativePath":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/bdf036a8-f6ed-49a5-bc66-b9940e49e353.png"},"1e9c8fbe-5d26-4a7b-a73a-282d01911201":{"name":"5","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"JwJ3lhDACqcLFM.kSbD2N3CgPfdRM7eQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/1e9c8fbe-5d26-4a7b-a73a-282d01911201.png"},"ba8604cd-7e6b-46c4-9207-3feb080f5200":{"name":"6","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"bOGVHmtT8z5bLyRSsWn_jS26_3QkZ.71","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ba8604cd-7e6b-46c4-9207-3feb080f5200.png"},"502fed9f-5382-4fbd-960e-c2252a45025f":{"name":"7","sourceUrl":null,"frameSize":{"x":680,"y":678},"frameCount":1,"looping":true,"frameDelay":12,"version":"6RzTIm_twev3cA9RlMsXgloE..wyiNod","loadedFromSource":true,"saved":true,"sourceSize":{"x":680,"y":678},"rootRelativePath":"assets/502fed9f-5382-4fbd-960e-c2252a45025f.png"},"b3f93567-97f6-407b-bb08-4fd47473f030":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"c63582fa-cd9e-494e-a70b-12f924ceb0e1":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"fa161905-54b0-4c57-a7ad-9a3d036cccc5":{"name":"bullet","sourceUrl":null,"frameSize":{"x":626,"y":351},"frameCount":1,"looping":true,"frameDelay":12,"version":"swKNg3_C6WdhUeNwMG8R3e1TUTK50E9z","loadedFromSource":true,"saved":true,"sourceSize":{"x":626,"y":351},"rootRelativePath":"assets/fa161905-54b0-4c57-a7ad-9a3d036cccc5.png"},"b13c08df-1504-4f52-8a0f-0aa04bc8da6d":{"name":"Lion","sourceUrl":null,"frameSize":{"x":66,"y":118},"frameCount":3,"looping":true,"frameDelay":12,"version":"LMY_mp1J0xg0qelPKukIF.tddFtEBiP4","loadedFromSource":true,"saved":true,"sourceSize":{"x":132,"y":236},"rootRelativePath":"assets/b13c08df-1504-4f52-8a0f-0aa04bc8da6d.png"},"93000f06-339c-495d-a8ac-ac7b872e0644":{"sourceSize":{"x":626,"y":351},"frameSize":{"x":626,"y":351},"frameCount":1,"frameDelay":4,"name":"lala","sourceUrl":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/93000f06-339c-495d-a8ac-ac7b872e0644.png","size":30477,"version":"wuAK01ujmdz5GjyOkeK_bB2yQlPmTfoo","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/WLip-cA49K7_wyDMw2yTiSlT2dtLTTVnxfxM60V29JU/93000f06-339c-495d-a8ac-ac7b872e0644.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg  = createSprite(200 ,200 ,400 ,400);
bg.setAnimation("bg");
bg.scale = 2 ;
bg.visible = false ;

var bg2 = createSprite(200 ,200 ,400 ,400);
bg2.setAnimation("bg");
bg2.scale = 2 ;
bg2.visible = false ;

var screenp1 = createSprite(200 ,200);
screenp1.setAnimation("3");
screenp1.scale = 0.5;

var b1 = createSprite(53 ,47);
b1.setAnimation("5");

var ground = createSprite(200,390,800,20);
ground.shapeColor = "rgb(255, 203, 101)" ;

var b2 = createSprite(350 ,47);
b2.setAnimation("6");

var trex = createSprite(10,340);
trex.setAnimation("2");
trex.scale = 0.25 ;
trex.visible = false ;

var uni = createSprite(350,200);
uni.setAnimation("1");
uni.scale = 0.35 ;
uni.visible = false ;

var invicollider = createSprite(200,100,400,4);
invicollider.visible = false;

var CloudsGroup = createGroup();
var EnemyGroup = createGroup();
var LionGroup = createGroup();
var bulletGroup = createGroup();


function draw() 
{
  
  uni.y = World.mouseY ;
  
  if(ground.x<0)
        {
    
     
    ground.x= ground.width/2;
        }
  
  trex.bounceOff(invicollider);
  trex.collide(ground);
  
  background("white");
  if(mousePressedOver( b1)){
    b2.velocityX = -9 ;
    b1.velocityX = 9 ;
    screenp1.velocityY = 10 ;
    bg.visible = true ;
    trex.visible = true ;
  }
  
  if(mousePressedOver( b2)){
    b2.destroy();
    b1.destroy();
    screenp1.velocityY = 10 ;
    uni.visible = true ;
    screenp1.velocityY = -10 ;
    ground.shapeColor = "pink" ;
  }
  
  if(ground.shapeColor == "pink"){
    
            SpawnLion();

    
  }
  
  if(trex.isTouching(EnemyGroup))
  {
    
   trex.destroy();
   ground.destroy();
   bg.destroy();

  }
  

  if(keyDown("space"))
    {
      trex.velocityY = -15;

    }
    
   if(screenp1.y>400){
     
       spawnEnemy();
  spawnClouds();
   }  
   

   
       if (keyDown("LEFT_ARROW"))
  {
    SpawnBullet(uni.x);
  }
  
    if (bulletGroup.isTouching(LionGroup))
  {
    LionGroup.destroyEach();
    bulletGroup.destroyEach();
  } 
 
  drawSprites();
}

function spawnEnemy() {
  if(World.frameCount % 60 === 0) {
    var Enemy = createSprite(250,350,10,40);
    Enemy.velocityX = -10 ;
    Enemy.scale =0.35 ;
    var rand = randomNumber(1,2);
    Enemy.setAnimation("enemy" + rand);
    Enemy.debug=true;

    Enemy.lifetime = 70;
   EnemyGroup.add(Enemy);
  }
}


function spawnClouds() {
  if (World.frameCount % 60 === 0) {
    var  Clouds = createSprite(355,200,40,10);
     Clouds.scale = 0.10 ;
     Clouds.setAnimation("7");
     Clouds.velocityX = -3;
    
     Clouds.lifetime = 134;
    
    Clouds.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
   CloudsGroup.add(Clouds);
  }
  
}

function SpawnLion() {
  var Lion = createSprite(randomNumber(0, 255), 0, 10, 10);
  Lion.setAnimation("Lion")        ;
  Lion.velocityY = 5;
  Lion.lifetime = 500;
 LionGroup.add(Lion);
  Lion.scale=0.5;
}


function SpawnBullet() {
  var bullet= createSprite(100, 100, 5, 10);
  bullet.setAnimation("bullet");
  bullet.scale=0.05;
  bullet.y = uni.y;
  bullet.x = uni.x;                                           
  bullet.velocityX = -10 ;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
