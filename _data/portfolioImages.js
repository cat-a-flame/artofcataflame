const fs = require('fs');
const path = require('path');

module.exports = () => {
  const dir = path.join(__dirname, '..', 'src', 'images', 'illustrations');
  return fs.readdirSync(dir)
    .filter(file => /\.(jpe?g|png|gif)$/i.test(file))
    .map(file => ({
      src: `/src/images/illustrations/${file}`,
      filePath: path.join(dir, file),
      name: path.parse(file).name
    }));
};
