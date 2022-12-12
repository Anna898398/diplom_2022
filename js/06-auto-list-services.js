function myreadMoreFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myReadBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "+ Показать больше";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "- Скрыть";
        moreText.style.display = "block";
    }
}