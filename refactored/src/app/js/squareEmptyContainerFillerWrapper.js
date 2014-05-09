eqEd.SquareEmptyContainerFillerWrapper = function(symbolSizeConfig) {
    eqEd.Wrapper.call(this, symbolSizeConfig); // call super constructor.

    this.domObj = this.buildDomObj();


    this.sideLength = 0.6;

    // Set up the width calculation
    var width = 0;
    this.properties.push(new Property(this, "width", width, {
        get: function() {
            return width;
        },
        set: function(value) {
            width = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.fontSize];
            return this.sideLength * fontHeight;
        },
        updateDom: function() {
            this.domObj.updateWidth(this.width);
        }
    }));

    // Set up the topAlign calculation
    var topAlign = 0;
    this.properties.push(new Property(this, "topAlign", topAlign, {
        get: function() {
            return topAlign;
        },
        set: function(value) {
            topAlign = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.fontSize];
            return 0.5 * this.sideLength * fontHeight;
        },
        updateDom: function() {}
    }));

    // Set up the bottomAlign calculation
    var bottomAlign = 0;
    this.properties.push(new Property(this, "bottomAlign", bottomAlign, {
        get: function() {
            return bottomAlign;
        },
        set: function(value) {
            bottomAlign = value;
        },
        compute: function() {
            var fontHeight = this.symbolSizeConfig.height[this.parent.fontSize];
            return 0.5 * this.sideLength * fontHeight;
        },
        updateDom: function() {}
    }));
};
(function() {
    // subclass extends superclass
    eqEd.SquareEmptyContainerFillerWrapper.prototype = Object.create(eqEd.Wrapper.prototype);
    eqEd.SquareEmptyContainerFillerWrapper.prototype.constructor = eqEd.SquareEmptyContainerFillerWrapper;
    eqEd.SquareEmptyContainerFillerWrapper.prototype.buildDomObj = function() {
        return new eqEd.WrapperDom(this,
            '<div class="wrapper squareEmptyContainerFillerWrapper"></div>')
    }
})();