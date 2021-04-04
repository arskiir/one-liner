const updateOutput = (text) => {
    const oneLiner = makeOneLine(text);
    document.getElementById("one-liner").value = oneLiner;
};

const makeOneLine = (text) => {
    let processed_string = "";
    for (let char of text) {
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
