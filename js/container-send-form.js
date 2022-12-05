for (let year = 1930; year <= 2022; year++) {
    let options = document.createElement("OPTION");
    document.getElementById("dateRange").appendChild(options).innerHTML = year;
}