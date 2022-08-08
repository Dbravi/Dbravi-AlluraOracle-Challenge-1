
const $d = document;

/*** Validar text-area ***/

const form = document.querySelector(".contact-form");
const inputs = document.querySelectorAll(".contact-form [required]");

inputs.forEach(input => {
    const span = document.createElement("span");
    span.id = input.name;
    span.textContent = input.title;
    span.classList.add("contact-form-error", "none");
    input.insertAdjacentElement("afterend", span)
})

document.addEventListener("keyup", (e) => {
    pattern = e.target.dataset.pattern;
    if (pattern && e.target.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec(e.target.value)
            ? document.getElementById(e.target.name).classList.add("is-active")
            : document.getElementById(e.target.name).classList.remove("is-active")
    }

    else if (document.querySelector("textarea").value == "") {
        document.getElementById(e.target.name).classList.remove("is-active")
    }
});


/*** Encriptador ***/
var chars = { 'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };

$d.addEventListener("click", (event) => {
    $text = $d.querySelector("textarea").value;
    if (event.target.matches("#Encriptar") && document.getElementById("texto").classList.value === "contact-form-error none") {
        $output = $text.replace(/[aeiou]/g, m => chars[m]);
        $d.getElementById("Output").textContent = $output;
        document.querySelector(".Output-nofound").classList.add("none")
        document.getElementById("copy-button").classList.remove("none")
        document.getElementById("Output").classList.add("Output-style")
    }
});

/*** Desencriptador ***/

var Dchars = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
$d.addEventListener("click", (event) => {
    $text = $d.querySelector("textarea").value;
    if (event.target.matches("#Desencriptar")) {
        $output = $text.replace(/ai|enter|imes|ober|ufat/g, m => Dchars[m]);
        $d.getElementById("Output").textContent = $output;
    }
});

/*** Copy to clipboard */

function copyToClipboard() {
    let output = document.getElementById("Output");
    let outputButton = document.getElementById("copy-button");
    navigator.clipboard.writeText(output.textContent).then(() => {
        const span = document.createElement("span");
        span.textContent = "Texto copiado!";
        outputButton.insertAdjacentElement("afterend", span)
        setTimeout(() => {
            span.textContent = " ";
        }, 2000);
    });
}

