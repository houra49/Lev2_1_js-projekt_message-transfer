function gibNachricht() {
    const text = document.getElementById("text")
    const frage = document.getElementById("frage")
    const nachricht = document.getElementById("nachricht")
    if (text.value == "") {
        nachricht.innerHTML = "Gib Bitte eine Nachricht ein!"
    } else {
        frage.innerHTML = text.value
        nachricht.innerHTML = ""
    }
}