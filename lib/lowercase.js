var through2 = require('through2')

module.exports = function(n) {

    var count = 0

    return new through2.obj(function(row, enc, callback) {

        this.push(row)
        callback()
    })
}