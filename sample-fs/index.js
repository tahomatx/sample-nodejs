const fs = require('fs-extra');
const path = require('path');


(async () => {
  const content = await fs.readFile(path.resolve(__dirname, './sample.csv'), { encoding: 'utf-8' });
  console.log(content);
})();
