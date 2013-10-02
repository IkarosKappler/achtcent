/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// Constructor
ACHTCENT.Object = function( id ) { 

    this.id = id;

}


// Define prototype
ACHTCENT.Object.prototype = new ACHTCENT.Object();
ACHTCENT.Object.prototype.constructor = ACHTCENT.Object;

// This function sets the object's ID.
ACHTCENT.Object.prototype.setID = function( newID ) {
    this.id = newID;
}

// This function simply returns the object's ID.
ACHTCENT.Object.prototype.getID = function() {
    return this.id;
}

// This function should be overridden by subclasses.
ACHTCENT.Object.prototype.__getClassName = function() {
    return "ACHTCENT.Object";
}

// A function for string serialization.
ACHTCENT.Object.prototype.__toString = function() {
    return "[" + this.__getClassName() + "]={ id=" + this.id + " }";
}