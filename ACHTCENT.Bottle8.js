/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// The constructor
ACHTCENT.Bottle8 = function( id ) {
    
    ACHTCENT.Object.call();

    this.setID( id )
    this.setName( "bottle(8)" );
    this.setDepositValue( 8 );

}

ACHTCENT.Bottle8.prototype = new ACHTCENT.Depositable();
ACHTCENT.Bottle8.prototype.constructor = ACHTCENT.Bottle8;


// This function should be overridden by subclasses.
ACHTCENT.Bottle8.prototype.__getClassName = function() {
    return "ACHTCENT.Bottle8";
}