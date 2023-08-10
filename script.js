marked.setOptions({
    breaks: true,
});

const updatePreview = () => {
    document.getElementById("preview").innerHTML = marked.parse(document.getElementById("editor").value);
};

const defaultProps = () => {
    let defaultText = `# Pallab Welcomes You

## .md Previewer

[Source Code](https://github.com/pallab-nandi/markdown-previewer-fcc)

<dl>
    <dt>Greetings!</dt>
    <dd>How was your day, buddy?</dd>
</dl>

Thank \`GOD\` for everything!

\`\`\`\`
function(todo) {
    console.log("Eat, Code, Sleep");
}
\`\`\`\`

Contributors:
- [Pallab Nandi](https://pallab-nandi.github.io)

> FreeCodeCamp Task ![FreeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

**Bye bye**`;
    document.getElementById("editor").value = defaultText;
    document.getElementById("preview").innerHTML = marked.parse(defaultText);
}
