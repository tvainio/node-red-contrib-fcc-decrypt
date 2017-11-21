module.exports = function (RED) {
  "use strict";
  const lora = require("lora-data-decryptor");
  function FccDecrypt(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    this.name = config.name || null;

    this.on('input', function (msg) {
      var key = msg.payload.AppSKey || config.AppSKey;
      var address = msg.payload.DevAddr || config.DevAddr;
      msg.payload.payload_hex = Buffer.from(lora.decrypt(msg.payload.payload_hex, msg.payload.sequenceCounter, key, address)).toString('hex');
      node.send(msg);
    });
  }

  RED.nodes.registerType("fcc-decrypt", FccDecrypt);
};
