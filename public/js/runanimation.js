var alias = globalThis.alias;
const oF = function() {
  if (!alias) {return;};
  for (var i = 0; i < alias.length; i++) {
    alias[i].rotate(10);
    alias[i].scale(0.9);
    alias[i].position.y += 2;
    if (alias[i].bounds.width <= 3 || alias[i].bounds.height <= 3) {
      alias[i].remove();
      //alias[i]=undefined;
    }
  }
};

setInterval(oF, 33)