const emoji = '⚡';

function replaceTextOnPage() {
    const elements = document.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        for (let j = 0; j < element.childNodes.length; j++) {
            const node = element.childNodes[j];

            if (node.nodeType === 3) {
                let text = node.nodeValue;
                const replacedText = text.replace("Rust", `${emoji} <span class="blazing-fast">Blazing Fast</span>`);

                if (replacedText !== text) {
                    const newElement = document.createElement('span');
                    newElement.innerHTML = replacedText;
                    element.replaceChild(newElement, node);
                }
            }
        }
    }
}

window.onload = replaceTextOnPage;
