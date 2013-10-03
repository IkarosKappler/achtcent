/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// The constructor
ACHTCENT.Depositable = function( id,
				 name,
				 depositValue 
			       ) {
    
    ACHTCENT.Object.call();

    this.setID( id );
    this.setName( name );
    this.setDepositValue( depositValue );

}


ACHTCENT.Depositable.prototype = new ACHTCENT.Object();
ACHTCENT.Depositable.prototype.constructor = ACHTCENT.Depositable;

ACHTCENT.Depositable.prototype.setDepositValue = function( value ) {
    this.depositValue = value;
}

ACHTCENT.Depositable.prototype.getDepositValue = function() {
    return this.depositValue;
}

ACHTCENT.Depositable.prototype.setName = function( newName ) {
    this.name = newName;
}

ACHTCENT.Depositable.prototype.getName = function() {
    return this.name;
}

// This function should be overridden by subclasses.
ACHTCENT.Depositable.prototype.__getClassName = function() {
    return "ACHTCENT.Depositable";
}

ACHTCENT.Depositable.prototype.__toString = function() {
    return "[" + this.__getClassName() + "]={ id=" + this.getID() + ", name=" + this.getName() + ", depositValue=" + this.getDepositValue() + " }";
}