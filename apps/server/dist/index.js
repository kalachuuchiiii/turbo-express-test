'use strict';

var express = require('express');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var express__default = /*#__PURE__*/_interopDefault(express);

// @repo/constants — shared constants


// ../../packages/constants/src/user.ts
var USERNAME_MIN = 100;

// index.ts
var app = express__default.default();
app.use(express__default.default.json());
var PORT = 5e3;
app.listen(PORT, () => {
  console.log(USERNAME_MIN);
  console.log(`Listening at port ${PORT}`);
});
var index_default = app;

module.exports = index_default;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map