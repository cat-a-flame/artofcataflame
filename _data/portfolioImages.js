const fs = require('fs');
const path = require('path');

module.exports = () => {
  const dir = path.join(__dirname, '..', 'src', 'images', 'illustrations');
  return fs.readdirSync(dir)
    .filter(file => /\.(jpe?g|png|gif)$/i.test(file))
    .map(file => {
      const filePath = path.join(dir, file);
      return {
        src: `/src/images/illustrations/${file}`,
        filePath,
        name: path.parse(file).name,
        mtime: fs.statSync(filePath).mtime
      };
    })
    .sort((a, b) => b.mtime - a.mtime)
    .map(({ mtime, ...img }) => img);
};
