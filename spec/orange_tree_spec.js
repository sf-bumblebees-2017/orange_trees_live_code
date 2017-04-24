describe("an orange tree", function() {
  var tree;

  beforeEach(function() {
    tree = new OrangeTree();
  });

  it("has an age", function () {
    expect(tree.age).toEqual(0);
  });
  it("has a height", function () {
    expect(tree.height).toEqual(0);
  });
  it("has a collection of oranges", function () {
    expect(tree.oranges).toEqual([]);
  });

  describe("reporting whether it's mature", function() {
    var matureTree;
    var immatureTree;

    beforeEach(function() {
      matureTree = new OrangeTree({ age: 10 });
      immatureTree = new OrangeTree({ age: 0 });
    });

    it("is mature if it has reached fruit-bearing age", function () {
      expect(matureTree.isMature()).toEqual(true);
    });
    it("is not mature if it has not reached fruit-bearing age", function () {
      expect(immatureTree.isMature()).toEqual(false);
    });
  });

  describe("reporting whether it's dead", function() {
    var deadTree;
    var aliveTree;

    beforeEach(function() {
      deadTree = new OrangeTree({ age: 100 });
      aliveTree = new OrangeTree({ age: 99 });
    });

    it("is dead if it's reached the maximum age for an orange tree", function () {
      expect(deadTree.isDead()).toEqual(true);
    });

    it("is not dead if it's not reached the maximum age for an orange tree", function () {
      expect(aliveTree.isDead()).toEqual(false);
    });
  });

  describe("reporting whether it has oranges", function() {
    var treeWithOranges;

    beforeEach(function() {
      treeWithOranges = new OrangeTree({ oranges: [new Orange()] });
    });
    it("has oranges if it's collection of oranges is not empty", function () {
      expect(treeWithOranges.hasOranges()).toEqual(true);
    });
    it("has no oranges if it's collection of oranges is empty");
  });

  describe("passing a growing season", function() {
    describe("when it's alive", function() {
      it("gets older");

      describe("when the tree is shorter than the maximum height for an orange tree", function() {
        it("grows taller");
      });

      describe("when the tree has reached the maximum height for an orange tree", function() {
        it("does not grow");
      });

      describe("when it's mature", function() {
        it("produces oranges");
      });

      describe("when it's not mature", function() {
        it("does not produce fruit");
      });
    });

    describe("when it's dead", function() {
      it("does not get older");
      it("does not grow");
      it("does not produce fruit");
    });
  });

  describe("picking an orange", function() {
    describe("when the tree has oranges", function() {
      it("returns one of its oranges");
      it("no longer has the returned orange in its collection of oranges");
    });

    describe("when the tree has no oranges", function() {
      it("returns undefined");
    });
  });
});
