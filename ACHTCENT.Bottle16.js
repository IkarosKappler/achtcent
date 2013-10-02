/**
 * @author Ikaros Kappler
 * @date 2013-10-02
 * @version 1.0.0
 **/

// The constructor
ACHTCENT.Bottle16 = function( id ) {
    
    ACHTCENT.Object.call();

    this.setID( id )
    this.setName( "bottle(16)" );
    this.setDepositValue( 16 );

}

ACHTCENT.Bottle16.prototype = new ACHTCENT.Depositable();
ACHTCENT.Bottle16.prototype.constructor = ACHTCENT.Bottle16;


// This function should be overridden by subclasses.
ACHTCENT.Bottle16.prototype.__getClassName = function() {
    return "ACHTCENT.Bottle16";
}