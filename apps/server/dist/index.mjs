import express from 'express';

// @repo/constants — shared constants


// ../../packages/constants/src/user.ts
var USERNAME_MIN = 100;

// index.ts
var app = express();
app.use(express.json());
var PORT = 5e3;
app.listen(PORT, () => {
  console.log(USERNAME_MIN);
  console.log(`Listening at port ${PORT}`);
});
var index_default = app;

export { index_default as default };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map