var Transform = require( 'stream' ).Transform;
var util = require( 'util' );

util.inherits( Repeat, Transform );
function Repeat () {
	Transform.call( this, { objectMode: true } );
	this.queue = [];
	this.queueSize = 4000;
};

Repeat.prototype._transform = function ( i, encode, callback ) {
	if ( this.queue.length < this.queueSize ) {
		this.queue.push( i );
		this.push( i );
	} else {
		while ( this.queue.length !== 0 ) {
			this.push( this.queue.shift() );
		}
		this.push( i );
	}
	callback();
};

module.exports = Repeat;
