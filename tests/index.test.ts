import { describe, it } from 'node:test';
import assert from 'node:assert';
import { AgentWaf } from '../src/index.js';

describe('AgentWaf', () => {
  it('should initialize', async () => {
    const instance = new AgentWaf();
    await instance.initialize();
    assert.ok(instance);
  });

  it('should execute successfully', async () => {
    const instance = new AgentWaf();
    const result = await instance.execute({ test: 'data' });
    assert.strictEqual(result.success, true);
  });
});
