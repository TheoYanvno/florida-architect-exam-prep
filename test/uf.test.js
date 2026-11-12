import { test } from 'node:test';
import assert from 'node:assert/strict';
import { UF_RESOURCES, UF_GROUPS } from '../src/lib/uf.js';

test('every UF resource has a title, details, a place and an https source', () => {
  const ids = new Set();
  for (const r of UF_RESOURCES) {
    assert.ok(!ids.has(r.id), r.id); ids.add(r.id);
    assert.ok(r.title && r.detail.length > 60 && r.where, r.id);
    assert.match(r.url, /^https:\/\//, r.id);
    assert.ok(UF_GROUPS.includes(r.group));
  }
  assert.ok(UF_RESOURCES.some(r => r.id === 'ipal') && UF_RESOURCES.some(r => r.id === 'afa'));
});
