window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
    ) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}