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
  if (CATALOG[lower]) return { key: lower, ...CATALOG[lower] };

  let bestMatch = null;
  let bestKey = null;
  let bestScore = 0;
  for (const [key, val] of Object.entries(CATALOG)) {
    if (lower.includes(key)) {
      const score = key.length;
      if (score > bestScore) { bestScore = score; bestKey = key; bestMatch = val; }
    }
    if (key.includes(lower) && lower.length >= 3) {
      const score = lower.length;
      if (score > bestScore) { bestScore = score; bestKey = key; bestMatch = val; }
    }
  }
  return bestMatch ? { key: bestKey, ...bestMatch } : null;
}

function assertMatch(input, expected) {
  const match = findMatch(input);
  assert.ok(match, `Expected ${input} to match catalog`);
  for (const [key, value] of Object.entries(expected)) {
    assert.strictEqual(match[key], value, `${input}: expected ${key}=${value}, got ${match[key]}`);
  }
}

assertMatch('Kling AI Pro', { name: 'Kling AI Pro', category: 'ai' });
assertMatch('PixVerse Pro', { name: 'PixVerse Pro', category: 'ai' });
assertMatch('Roblox Premium', { name: 'Roblox Plus', category: 'gaming' });
assertMatch('Roblox Plus 500', { name: 'Roblox Plus 500', category: 'gaming' });
assertMatch('Roblox Plus 1000', { name: 'Roblox Plus 1000', category: 'gaming' });
assertMatch('Roblox Plus 2000', { name: 'Roblox Plus 2000', category: 'gaming' });

const hardcodedPrices = Object.entries(CATALOG).filter(([, item]) => Object.prototype.hasOwnProperty.call(item, 'price'));
assert.strictEqual(hardcodedPrices.length, 0, `Catalog must not contain default prices: ${hardcodedPrices.map(([key]) => key).join(', ')}`);
assert.ok(source.includes('findOnlinePrice'), 'Online price lookup function is missing');
assert.ok(source.includes('PRICE_LOOKUP_SOURCES'), 'Online price sources are missing');
assert.ok(source.includes('https://klingai.com/pricing'), 'Kling pricing source is missing');
assert.ok(source.includes('https://www.roblox.com/premium/membership'), 'Roblox pricing source is missing');
assert.ok(!source.includes('price: 19.99'), 'Default 19.99 price must not be hardcoded');

console.log(`✅ Catalog checks passed. Services: ${Object.keys(CATALOG).length}. Prices are looked up online, not hardcoded.`);
