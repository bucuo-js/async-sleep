const tap = require("tap");

const sleep = require(".");

tap.test("sleep some time", async t => {
  const start = Date.now();
  await sleep(1000);
  const end = Date.now();

  const elapsed = end - start;

  console.log({ elapsed });

  t.assert(elapsed >= 1000 && elapsed <= 1010);
});
