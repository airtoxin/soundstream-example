var Readable = require( 'stream' ).Readable;
var util = require( 'util' );

util.inherits( Count, Readable );
function Count () {
	Readable.call( this, { objectMode: true } );
	this._i = 0;
};

Count.prototype._read = function () {
	this.push( this._i );
	this._i++;
};

module.exports = Count;
