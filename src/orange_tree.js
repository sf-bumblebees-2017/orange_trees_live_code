var OrangeTree = function(args = {}){
  this.age = args.age || 0;
  this.height = 0;
  this.oranges = args.oranges || [];
}


OrangeTree.prototype.isMature = function () {
  return this.age >= 6;
}

OrangeTree.prototype.isDead = function () {
  return this.age >= 100;
}
OrangeTree.prototype.hasOranges = function () {
  return this.oranges.length > 0;
}