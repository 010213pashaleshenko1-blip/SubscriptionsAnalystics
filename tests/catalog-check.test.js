const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const appPath = path.join(__dirname, '..', 'app.js');
const source = fs.readFileSync(appPath, 'utf8');
const catalogStart = source.indexOf('const CATALOG =');
const stateStart = source.indexOf('// ========== STATE ==========', catalogStart);

assert.ok(catalogStart >= 0, 'CATALOG not found in app.js');
assert.ok(stateStart > catalogStart, 'STATE marker not found in app.js');

const sandbox = {};
vm.runInNewContext(`${source.slice(catalogStart, stateStart)}\nthis.CATALOG = CATALOG; this.PRESET_PRICES = PRESET_PRICES;`, sandbox);
const { CATALOG, PRESET_PRICES } = sandbox;

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
  return match;
}

function assertPreset(key, price, period = 'monthly') {
  assert.ok(PRESET_PRICES[key], `Expected preset price for ${key}`);
  assert.strictEqual(PRESET_PRICES[key].price, price, `${key}: wrong preset price`);
  assert.strictEqual(PRESET_PRICES[key].period, period, `${key}: wrong preset period`);
}

assertMatch('Kling AI Pro', { name: 'Kling AI Pro', category: 'ai' });
assertMatch('PixVerse Pro', { name: 'PixVerse Pro', category: 'ai' });
assertMatch('Roblox Premium', { name: 'Roblox Plus', category: 'gaming' });
assertMatch('Roblox Plus 500', { name: 'Roblox Plus 500', category: 'gaming' });
assertMatch('Roblox Plus 1000', { name: 'Roblox Plus 1000', category: 'gaming' });
assertMatch('Roblox Plus 2000', { name: 'Roblox Plus 2000', category: 'gaming' });

assertPreset('kling ai pro', 35);
assertPreset('pixverse pro', 10);
assertPreset('roblox plus 500', 4.99);
assertPreset('roblox plus 1000', 9.99);
assertPreset('roblox plus 2000', 19.99);

const catalogPrices = Object.entries(CATALOG).filter(([, item]) => Object.prototype.hasOwnProperty.call(item, 'price'));
assert.strictEqual(catalogPrices.length, 0, `CATALOG should contain service metadata only, not prices: ${catalogPrices.map(([key]) => key).join(', ')}`);
assert.ok(Object.keys(PRESET_PRICES).length >= 40, 'Expected embedded prices for known subscriptions');
assert.ok(source.includes('if (match) {\n        const preset = applyPresetPrice(match, force);'), 'Known services must use embedded prices before internet lookup');
assert.ok(source.includes('findOnlinePrice(name, null)'), 'Unknown services should use online price lookup');

console.log(`✅ Checks passed. Services: ${Object.keys(CATALOG).length}, embedded prices: ${Object.keys(PRESET_PRICES).length}.`);
