/**
 *  This module is for mocking ws library in browsers
 */

let WebSocket

window.WebSocket.prototype.removeAllListeners = () => { }

module.exports = WebSocket || window.WebSocket
