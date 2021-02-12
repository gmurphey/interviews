var assert = require('assert');

describe('InventoryList', function () {
  it('can add items', function () {
    var list = inventoryList();
    list.add('Shirt');
    list.add('Trouser');
    assert.deepStrictEqual(list.getList(), { "Shirt": 1, "Trouser": 1 });
  });

  it('can add multiple items at once', function () {
    var list = inventoryList();

    list.add('Shirt');
    list.add('Shirt', 2);

    assert.deepStrictEqual(list.getList(), { "Shirt": 3 });
  });

  it('can remove items', function () {
    var list = inventoryList();

    list.add('Shirt');
    list.add('Trouser');

    list.remove('Shirt');

    assert.deepStrictEqual(list.getList(), { "Trouser": 1 });
  });

  it('can accept items not in the list to remove', function () {
    var list = inventoryList();

    list.add('Shirt');
    list.remove('Trousers');

    assert.deepStrictEqual(list.getList(), { "Shirt": 1 });
  });

  it('can remove multiple items at once', function () {
    var list = inventoryList();

    list.add('Shirt', 3);
    list.remove('Shirt', 2);
  });

  it('can accept an initial list', function() {
    var initialList = { "Shirt": 1 };
    var list = inventoryList(initialList);

    list.add('Shirt');

    assert.deepStrictEqual(list.getList(), { "Shirt": 2 });
    assert.deepStrictEqual(initialList, { "Shirt": 1 });
  });
});