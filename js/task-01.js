const categoryEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoryEl.children.length}`);

const getCategories = [...categoryEl.children].map((item) => {
    console.log(`Category ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});