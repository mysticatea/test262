// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getuint32
description: >
  Return abrupt from ToNumber(byteOffset)
info: |
  24.2.4.12 DataView.prototype.getUint32 ( byteOffset [ , littleEndian ] )

  1. Let v be the this value.
  2. If littleEndian is not present, let littleEndian be false.
  3. Return ? GetViewValue(v, byteOffset, littleEndian, "Uint32").

  24.2.1.1 GetViewValue ( view, requestIndex, isLittleEndian, type )

  ...
  4. Let numberIndex be ? ToNumber(requestIndex).
  ...
---*/

var buffer = new ArrayBuffer(1);
var sample = new DataView(buffer, 0);

var bo1 = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var bo2 = {
  toString: function() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  sample.getUint32(bo1);
}, "valueOf");

assert.throws(Test262Error, function() {
  sample.getUint32(bo2);
}, "toString");
