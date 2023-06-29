fetch("data/category.json")
    .then(response => response.json())
    .then(
        data => insertToCategoryMenu(data)
    );

function insertToCategoryMenu(catagoryFile)
{
 const optionfrag = document.createDocumentFragment();
 for (const key in catagoryFile.category)
 {
    const li = document.createElement('li');
    const category =catagoryFile.category[key]
    console.log(category);
    sHtml = `<a class="dropdown-item" href='index.php?category="${category}"'>${category}</a>`;
    li.innerHTML = sHtml;
    optionfrag.appendChild(li);

 }
 document.getElementById("categoryMenu").appendChild(optionfrag);
}   