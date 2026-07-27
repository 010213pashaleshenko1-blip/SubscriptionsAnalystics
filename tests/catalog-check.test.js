const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const appPath = path.join(__dirname, '..', 'app.js');
const source = fs.readFileSync(appPath, 'utf8');
const catalogStart = source.indexOf('const CATALOG =');
const catalogEnd = source.indexOf('// ========== STATE ==========', catalogStart);

assert.ok(catalogStart >= 0, 'CATALOG not found in app.js');
assert.ok(catalogEnd > catalogStart, 'CATALOG end marker not found in app.js');

const sandbox = {};
vm.runInNewContext(`${source.slice(catalogStart, catalogEnd)}\nthis.CATALOG = CATALOG;`, sandbox);
const { CATALOG } = sandbox;

function findMatch(name) {
  const lower = name.toLowerCase().trim();
  if (CATALOG[lower]) return CATALOG[lower];

  let bestMatch = null;
  let bestScore = 0;
  for (const [key, val] of Object.entries(CATALOG)) {
    if (lower.includes(key)) {
      const score = key.length;
      if (score > bestScore) { bestScore = score; bestMatch = val; }
    }
    if (key.includes(lower) && lower.length >= 3) {
      const score = lower.length;
      if (score > bestScore) { bestScore = score; bestMatch = val; }
    }
  }
  return bestMatch;
}

function assertMatch(input, expected) {
  const match = findMatch(input);
  assert.ok(match, `Expected ${input} to match catalog`);
  for (const [key, value] of Object.entries(expected)) {
    assert.strictEqual(match[key], value, `${input}: expected ${key}=${value}, got ${match[key]}`);
  }
}

assertMatch('Kling AI Pro', { name: 'Kling AI Pro', category: 'ai', price: 35, period: 'monthly' });
assertMatch('PixVerse Pro', { name: 'PixVerse Pro', category: 'ai', price: 10, period: 'monthly' });
assertMatch('Roblox Premium', { name: 'Roblox Plus', category: 'gaming' });
assertMatch('Roblox Plus 500', { name: 'Roblox Plus 500', category: 'gaming', price: 4.99, period: 'monthly' });
assertMatch('Roblox Plus 1000', { name: 'Roblox Plus 1000', category: 'gaming', price: 9.99, period: 'monthly' });
assertMatch('Roblox Plus 2000', { name: 'Roblox Plus 2000', category: 'gaming', price: 19.99, period: 'monthly' });

const priced = Object.values(CATALOG).filter(item => typeof item.price === 'number');
assert.ok(priced.length >= 40, `Expected at least 40 services with catalog prices, got ${priced.length}`);

console.log(`✅ Catalog checks passed. Services: ${Object.keys(CATALOG).length}, priced: ${priced.length}`);
