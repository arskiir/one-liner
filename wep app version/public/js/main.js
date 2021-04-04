const updateOutput = (text) => {
    const oneLiner = makeOneLine(text);
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
