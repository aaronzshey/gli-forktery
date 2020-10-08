var alias = project.activeLayer.children;
globalThis.alias = project.activeLayer.children;

// start here:

//radius2 =  radius1/1.5 - bounded between 20 to 10

function createStar(point, radii) {
  var kyuu = new Path.Star({
    center: point,
    strokeColor: "white",
    strokeWidth: 2,
    points: 4,
    radius1: radii,
    radius2: radii / 2
  });
  kyuu.smooth();
}

tool.minDistance = 25;


tool.onMouseMove = function(event) {
  var rad = Math.random() * 40; //new rand number every event fired
  createStar([event.point.x, event.point.y], rad);
};
