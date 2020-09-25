var assert = require('assert');


describe('InventoryList', function () {
  it('Testcase 1', function () {
    var list = inventoryList();
    list.add('Shirt')
    list.add('Trouser')
    assert.deepStrictEqual(list.getList(), ['Shirt', 'Trouser'])

    list.remove('Shirt')
    assert.deepStrictEqual(list.getList(), ['Trouser'])
  });


  it('Testcase 2', function () {
    var list = inventoryList();
    list.add('Shirt')
    list.remove('Trouser')
    assert.deepStrictEqual(list.getList(), ['Shirt']);
  });

  it('Testcase 3', function () {
    var list = inventoryList();
    list.add('Shoes')
    list.add('Basket')
    list.remove('Basket')
    list.remove('Curtains')
    assert.deepStrictEqual(list.getList(), ['Shoes'])
  });

  it('Testcase 4', function () {
    var list = inventoryList();
    assert.deepStrictEqual(list.getList(), [])

    list.add('Curtains')
    list.add('Paint')
    assert.deepStrictEqual(list.getList(), ['Curtains','Paint'])

    list.add('Pillow')
    list.remove('Paint')
    assert.deepStrictEqual(list.getList(), ['Curtains','Pillow'])
  });

  it('Testcase 5', function () {
    var list = inventoryList();

    list.add('Curtains')
    list.add('Paint')
    list.add('Pillow')
    list.remove('Curtains')
    assert.deepStrictEqual(list.getList(), ['Paint', 'Pillow'])

    list.remove('Glass')
    list.remove('Bedsheet')
    assert.deepStrictEqual(list.getList(), ['Paint', 'Pillow'])
  });

  it('Testcase 6', function () {
    var list = inventoryList();

    list.add('Books')
    assert.deepStrictEqual(list.getList(), ['Books'])

    list.add('Furniture')
    list.add('Wine')
    list.remove('Furniture')
    list.remove('Wine')

    assert.deepStrictEqual(list.getList(), ['Books'])
  });

  it('Testcase 7', function () {
    var list = inventoryList();

    list.add('Paper')
    list.add('Tissues')
    list.add('Glass')
    list.add('Spoon')
    assert.deepStrictEqual(list.getList(), ['Paper','Tissues','Glass','Spoon'])

    list.remove('Paper')
    list.remove('Tissues')
    list.remove('Glass')
    list.remove('Spoon')
    list.remove('Refrigerator')
    list.remove('Liquidwash')

    assert.deepStrictEqual(list.getList(), [])
  });

  it('Testcase 8', function () {
    var list = inventoryList();

    assert.deepStrictEqual(list.getList(), [])

    list.add('Paper')
    list.add('Tissues')
    list.add('Glass')
    assert.deepStrictEqual(list.getList(), ['Paper','Tissues','Glass'])

    list.remove('Glass')
    list.add('Spoon')
    list.add('Refrigerator')
    assert.deepStrictEqual(list.getList(), ['Paper','Tissues','Spoon','Refrigerator'])

    list.remove('Spoon')
    list.remove('Tissues')

    assert.deepStrictEqual(list.getList(), ['Paper','Refrigerator'])
  });

  it('Testcase 9', function () {
    var list = inventoryList();

    list.add('Paper')
    list.add('Paper')
    list.add('Glass')
    list.add('Glass')
    assert.deepStrictEqual(list.getList(), ['Paper','Glass'])
  });

});