
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".item-menu.dropdown");
    const overlay = document.getElementById("overlay");

    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            overlay.classList.add("active");
        });

        item.addEventListener("mouseout", () => {
            overlay.classList.remove("active");
        });
    });
});


function openTab(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}

function showFilter() {
    const formFilter = document.getElementById("form-filter");
    const overlayFiler = document.getElementById("overlay-filter");
    overlayFiler.classList.add("active");
    formFilter.style.display = "block";
}

function hideFilter(event) {
    const formFilter = document.getElementById("form-filter");
    const searchInput = document.getElementById("search-input");
    const overlayFiler = document.getElementById("overlay-filter");

    if (
        event.target !== searchInput &&
        !formFilter.contains(event.target)
    ) {
        overlayFiler.classList.remove("active");
        formFilter.style.display = "none";
    }
}

document.addEventListener("click", function (event) {
    hideFilter(event);
});

document
    .getElementById("search-input")
    .addEventListener("click", function (event) {
        event.stopPropagation();
    });

document
    .getElementById("form-filter")
    .addEventListener("click", function (event) {
        event.stopPropagation();
    });