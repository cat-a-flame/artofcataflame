module.exports = {
    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    base64file: function (file) {
        const filepath = path.join(__dirname, `../src/${file}`)
        const mimeType = mime.getType(file)
        const buffer = Buffer.from(fs.readFileSync(filepath))

        return `data:${mimeType};base64,${buffer.toString('base64')}`
    }
}
