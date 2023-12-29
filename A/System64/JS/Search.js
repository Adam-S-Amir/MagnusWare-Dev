function Search() {
    hidemenu();

    let Splash = document.createElement("div");
    let Close = document.createElement("button");
    let Programs = document.createElement("div");
    let Search_Input = document.createElement("input");

    Splash.id = "Search_Splash";
    Close.id = "Search_Close";
    Programs.id = "Search_Programs";
    Search_Input.id = "Search_Input";

    Close.innerHTML = "X";
    Search_Input.placeholder = "Search..."

    Close.onclick = function () {
        Splash.style.backgroundColor = "rgba(79, 101, 125, 0)";
        Splash.remove();
    }

    function createIcon(options) {
        const icon = document.createElement('div');
        icon.classList.add('desktop-icon');

        if (options.src) {
            const image = document.createElement('img');
            image.classList.add('icon');
            image.src = options.src;
            icon.appendChild(image);
        }

        if (options.title) {
            const title = document.createElement('div');
            title.classList.add('title');
            title.innerText = options.title;
            icon.appendChild(title);
        }

        if (options.ondblclick) {
            icon.addEventListener('click', () => {
                Splash.remove();
                options.ondblclick();
            });
        }

        return icon;
    }

    let iconOptions = [];

    games.forEach(item => getMenuInfo(item));

    function getMenuInfo(menuName) {
        let itemName, func, ico;
        // Iterate through the menuItems array to find the menu item with the given name
        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i][0] === menuName) {
                itemName = menuItems[i][0].replace(/\|\||\|/g, '').replace(/<br>/g, ' ');
                func = menuItems[i][1].replace('javascript:', '');
                ico = menuItems[i][2];
                if (itemName) {
                    const option = {
                        title: itemName,
                        src: ico,
                        ondblclick: function () {
                            // Perform action based on the item name
                            eval(func);
                        },
                    };
                    iconOptions.push(option);
                } else {
                    // Log a message if the menu item is not found
                    console.log(`Menu Item "${menuName}" not found.`);
                }
                // No need to return here, just break out of the loop
                break;
            }
        }
    }
    // Function to filter and display icons by title
    function filterIconsByTitle(searchText) {
        Programs.innerHTML = ''; // Clear the existing icons

        for (const options of iconOptions) {
            if (options.title.toLowerCase().includes(searchText.toLowerCase())) {
                const icon = createIcon(options);
                Programs.appendChild(icon);
            }
        }
    }

    // Example: Search by title

    Search_Input.addEventListener('input', function () {
        const searchText = Search_Input.value;
        filterIconsByTitle(searchText);
    });

    document.body.appendChild(Splash);
    Splash.appendChild(Close);
    Splash.appendChild(Programs);
    Splash.appendChild(Search_Input);
    for (const options of iconOptions) {
        const icon = createIcon(options);
        Programs.appendChild(icon);
    }
}
//# sourceURL=MagnusWare
