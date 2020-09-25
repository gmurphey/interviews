var assert = require('assert');


describe('VerifyInput', function () {
  it('Testcase 1', function () {
    assert.strictEqual(makeInputVerifier(5, 10)(7), 'Input is in range')
  });

  it('Testcase 2', function () {
    assert.strictEqual(makeInputVerifier(5, 10)(9), 'Input is in range')
  });

  it('Testcase 3', function () {
    assert.strictEqual(makeInputVerifier(0, 100)(1), 'Input is in range')
  });

  it('Testcase 4', function () {
    assert.strictEqual(makeInputVerifier(0, 100)(-5), 'Input is less than minimum value')
  });

  it('Testcase 5', function () {
    assert.strictEqual(makeInputVerifier(-100, -50)(-200), 'Input is less than minimum value')
  });

  it('Testcase 6', function () {
    assert.strictEqual(makeInputVerifier(-100, -50)(-1), 'Input is more than maximum value')
  });

  it('Testcase 7', function () {
    assert.strictEqual(makeInputVerifier(-100, -50)(-70), 'Input is in range')
  });

  it('Testcase 8', function () {
    assert.strictEqual(makeInputVerifier(0, 0)(0), 'Input is in range')
  });

  it('Testcase 9', function () {
    assert.strictEqual(makeInputVerifier(-80, -60)(-60), 'Input is in range')
  });

  it('Testcase 10', function () {
    assert.strictEqual(makeInputVerifier(-6, 15)(16), 'Input is more than maximum value')
  });

  it('Testcase 11', function () {
    assert.strictEqual(makeInputVerifier(-6, 15)(15), 'Input is in range')
  });

  it('Testcase 12', function () {
    assert.strictEqual(makeInputVerifier(-70, 90)(-70), 'Input is in range')
  });

  it('Testcase 13', function () {
    assert.strictEqual(makeInputVerifier(-70, 90)(-71), 'Input is less than minimum value')
  });

});