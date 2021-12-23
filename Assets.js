let sprites = {};
let assetsStillLoading = 0;

function assetsLoadingLoop(callback){
  if(assetsStillLoading) {
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    callback();
  }
}

// This function once it finishes to load all assets is going to activate the callback function
function loadAssets(callback) {
  function loadSprite(fileName) {
    assetsStillLoading++;
    let spriteImage = new Image();
    spriteImage.src = "./assets/sprites/" + fileName;
    spriteImage.onLoad = function() {
      assetsStillLoading--;
    }
    return spriteImage;
  }
  sprites.background = loadSprite('spr_background4.png');
  sprites.stick = loadSprite('spr_stick.png');
  assetsLoadingLoop(callback);
}