/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// The constructor
IKRSACHTCENT.ACHTCENT.Depositable = function( id,
				 name,
				 depositValue 
			       ) {
    
    //ACHTCENT.Object.call();

    this.setID( id );
    this.setName( name );
    this.setDepositValue( depositValue );

};


IKRSACHTCENT.ACHTCENT.Depositable.prototype = new IKRSACHTCENT.ACHTCENT.Object();
//ACHTCENT.Depositable.prototype.constructor = ACHTCENT.Depositable;

IKRSACHTCENT.ACHTCENT.Depositable.prototype.setDepositValue = function( value ) {
    this.depositValue = value;
};

IKRSACHTCENT.ACHTCENT.Depositable.prototype.getDepositValue = function() {
    return this.depositValue;
};

IKRSACHTCENT.ACHTCENT.Depositable.prototype.setName = function( newName ) {
    this.name = newName;
};

IKRSACHTCENT.ACHTCENT.Depositable.prototype.getName = function() {
    return this.name;
};

// This function should be overridden by subclasses.
IKRSACHTCENT.ACHTCENT.Depositable.prototype.__getClassName = function() {
    return "ACHTCENT.Depositable";
};

IKRSACHTCENT.ACHTCENT.Depositable.prototype.__toString = function() {
    return "[" + this.__getClassName() + "]={ id=" + this.getID() + ", name=" + this.getName() + ", depositValue=" + this.getDepositValue() + " }";
};