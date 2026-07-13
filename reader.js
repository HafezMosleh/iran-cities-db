const fs = require('fs');
const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
console.log("Iran Cities DB loaded!");
console.log(`Total Provinces: ${db.provinces.length}`);
db.provinces.forEach(p => console.log(`- ${p.name}: ${p.cities.length} cities`));
