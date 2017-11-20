module.exports = function (RED) {
    "use strict";
    function FccDecrypt(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        this.on('input', function (msg) {
            msg.payload.payload_decrypted = "f00";
            node.send(msg);
        });
    }
    RED.nodes.registerType("fcc-decrypt", FccDecrypt);
};
