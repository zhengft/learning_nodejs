const yaml = require('js-yaml');
const fs = require('fs');


function main(params) {
  try {
    const doc = yaml.safeLoad(fs.readFileSync(params.path, 'utf8'));

    const tasks = Object.keys(doc.pre_build_tasks);
    console.log(tasks);

  } catch (e) {
    console.log(e);
  }
}

main({'path': 'yaml/tasks.yaml'});
