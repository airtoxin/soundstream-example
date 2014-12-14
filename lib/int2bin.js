var Transform = require( 'stream' ).Transform;
var util = require( 'util' );

util.inherits( Int2Bin, Transform );
function Int2Bin () {
	Transform.call( this, { objectMode: true } );
	this._writableState.objectMode = true;
	this._readableState.objectMode = false;
};

Int2Bin.prototype._transform = function ( i, encode, callback ) {
	this.push( new Buffer( [ i ] ) );
	callback();
};

module.exports = Int2Bin;
