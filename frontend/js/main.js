$(document).ready(function () {
    const modalLogin = document.getElementById('modalLogin');
    var btnShowModal = document.querySelectorAll('.show-modal');
    btnShowModal.forEach((btn) => {
        btn.addEventListener('click', handleShowModal)
    });

    async function handleShowModal(e) {
        try {
            e.preventDefault();
            const url = e.currentTarget.dataset.attr;
            const response = await fetch(url);
            const html = await response.text();
            modalLogin.querySelector('.modal-body-wrapper').innerHTML = html;
        } catch (e) {
            console.log("handleShowModal", e);
        }
    }

    $('.single-item').slick({
        infinite: true,
        arrows: true
    });
})