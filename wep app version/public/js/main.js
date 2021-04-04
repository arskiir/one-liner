const updateOutput = (text) => {
    let oneLiner = "";
    if (text) oneLiner = makeOneLine(text);
    document.getElementById("one-liner").value = oneLiner;
};

const copy = () => {
    const oneLinerTextArea = document.getElementById("one-liner");
    oneLinerTextArea.select();
    document.execCommand("copy");
    alert("Copied the text: " + oneLinerTextArea.value);
};

const makeOneLine = (text) => {
    let processed_string = "";
    for (let char of text.replace("\\n", "\\\\n")) {
        if (char == '"') {
            processed_string += '\\"';
            continue;
        }
        if (char == "\n") {
            processed_string += "\\n";
            continue;
        }
        if (char == "\t") {
            processed_string += "\\t";
            continue;
        }
        processed_string += char;
    }
    return processed_string;
};

const exampleCode =
    "#include <iostream>\n\nint main()\n{\n\tstd::cout << \"Hello World!\\n\";\n}\n\n// breaks when \"\\\\\\...n\" is hardcoded (number of '\\' is more than 2 next to 'n')";
const exampleCodeNode = document.createTextNode(exampleCode);

const resetIfDefault = (code) => {
    if (code === exampleCode) {
        document.getElementById("raw-code").value = "";
        updateOutput();
    }
};

const showDefaultIfBlank = (code) => {
    if (code.trim() === "") {
        document.getElementById("raw-code").value = exampleCode;
        updateOutput(exampleCode);
    }
};

// ! run these after DOMContentLoaded
const textareas = document.getElementsByTagName("textarea");
const count = textareas.length;
for (var i = 0; i < count; i++) {
    textareas[i].onkeydown = function (e) {
        if (e.key == 9 || e.which == 9) {
            e.preventDefault();
            var s = this.selectionStart;
            this.value =
                this.value.substring(0, this.selectionStart) +
                "\t" +
                this.value.substring(this.selectionEnd);
            this.selectionEnd = s + 1;
        }
    };
}

document.getElementById("raw-code").value = exampleCode;
updateOutput(exampleCode);
// ! run above after DOMContentLoaded
