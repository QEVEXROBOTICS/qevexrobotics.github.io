function choose(id, button) {
    for (e of document.getElementsByClassName("team")) {
        e.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
    for (e of document.getElementsByClassName("choice")) {
        e.classList.remove("checked");
    }
    document.getElementById(button).classList.add("checked");
}