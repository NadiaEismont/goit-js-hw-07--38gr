const findLiItems = document.querySelectorAll("li.item");
console.log(`В списке ${findLiItems.length} категории.`);

findLiItems.forEach(findLiItem => {
    const textOfH2 = findLiItem.querySelector("h2").textContent;
    console.log(`Категория: ${textOfH2}`);

    const elements = findLiItem.querySelectorAll('li');
    console.log(`Количество элементов: ${elements.length}`);

})