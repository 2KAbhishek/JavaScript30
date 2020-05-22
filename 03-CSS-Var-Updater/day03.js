const inputs = document.querySelectorAll(".controls input");

function updateValue() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach((input) => input.addEventListener("change", updateValue));
inputs.forEach((input) => input.addEventListener("mousemove", updateValue));
