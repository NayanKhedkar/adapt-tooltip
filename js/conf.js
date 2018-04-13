define(function(require) {

    // Used to determine configurable properties
    var CONF = {
    	'MAX_WIDTH':340,     //when windows width is less than tooltip outer width * PADDINGFACTOR
    	'ANIMATE_TOP':5,     //animate tooltip-box when appear
    	'DURATION':5,        //animation duration
    	'PADDINGFACTOR':1.5,
    	'POSIONFROMTEXT':20, //position of tooltip form hover text
    	'EASING':"linear"
    };

    return CONF;

});
