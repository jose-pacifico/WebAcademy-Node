function createLink(filename) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

function createBack() {
    return `<a href='/'>VOLTAR</a><br>\n`;
}

module.exports = {
    createLink,
    createBack
}