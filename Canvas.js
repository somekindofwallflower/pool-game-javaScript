function Canvas2D() {
  this._canvas = document.getElementById("screen");
  this._canvasContext = this._canvas.getContext('2d');
}

Canvas2D.prototype.clear = function() {
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

Canvas2D.prototype.drawImage = function(image, position) {
  this._canvasContext.drawImage(image, position.x, position.y)
}

let Canvas = new Canvas2D();
