const parse = require('csv-parse/lib/sync');
const fs = require('fs-extra');
const path = require('path');


(async () => {
  const content = await fs.readFile(path.resolve(__dirname, './sample.csv'), { encoding: 'utf-8' });

  const records = parse(content, {
    columns: true,
    skip_empty_lines: true
  });

  console.log(records);

  for(const record of records) {
    console.log(record.policyID);
  }

  console.log(records.map(record => record.point_latitude));
})();
