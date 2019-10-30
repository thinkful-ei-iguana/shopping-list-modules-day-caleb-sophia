import item from './item.js';

const items = [];
let hideCheckedItems = false;

const findById = function(id) {
  return this.items.find(item => item.id === id);
};

const addItem = function(name) {
  try {
    item.validateName(name);
    const newItem = item.create(name)
    this.items.push(newItem);
  } catch (error) {
    console.error(`Cannot add item: ${error.message}`);
  }
};

const findAndToggleChecked = function(id) {
  const currentItem = this.findById(id);
  currentItem.checked = !currentItem.checked;
};

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const editingItem = this.findById(id);
    editingItem.name = newName;
  } catch (error) {
    console.error(`Cannot add item: ${error.message}`);
  }
};

const findAndDelete = function(id) {
  const index = this.items.findIndex(item => item.id === id);
  this.items.splice(index, 1);
};

const toggleCheckedFilter = function(){
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};