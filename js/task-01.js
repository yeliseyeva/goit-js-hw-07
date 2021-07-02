const categories = document.querySelector('#categories');
console.log(`В списке ${categories.children.length} категории.`);

const items = categories.children;

for (const item of items) {
    const animals = item.lastElementChild.children;
    console.log(`Категория: ${item.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${animals.length}`)
}