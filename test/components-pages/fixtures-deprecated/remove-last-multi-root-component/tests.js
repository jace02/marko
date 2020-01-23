var expect = require("chai").expect;

it("should remove the child nodes", function() {
    var component = window.testComponent;
    var el = component.getEl("root");

    expect(el.children.length).to.equal(2);
    component.toggle();
    component.forceUpdate();
    component.update();
    expect(el.children.length).to.equal(0);
    component.toggle();
    component.forceUpdate();
    component.update();
    expect(el.children.length).to.equal(2);
});
