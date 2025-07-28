const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// 1️⃣ Đọc file Excel
const workbook = XLSX.readFile('./src/i18n/translations.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

// 2️⃣ Chuyển sheet -> JSON array
const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

// 3️⃣ Tách header
const [header, ...data] = rows;

const vi = {};
const en = {};

data.forEach(row => {
  const [key, viValue, enValue] = row;
  if (!key) return;
  vi[key] = viValue || '';
  en[key] = enValue || '';
});

// 4️⃣ Ghi file .js với comment đầu file
const outputDir = path.resolve(__dirname, 'src/i18n/locales');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const warningVi = `/*\n⚠️ File này được tự động tạo. \nVui lòng chỉnh sửa string trong file Excel translations.xlsx và chạy lại lệnh:\nnode generate-locales.js.\n*/\n`;
const warningEn = `/*\n⚠️ This file is auto-generated. \nPlease update strings in the Excel file translations.xlsx and run:\nnode generate-locales.js again.\n*/\n`;

fs.writeFileSync(
  `${outputDir}/vi.js`,
  `${warningVi}module.exports = ${JSON.stringify(vi, null, 2)};`,
  'utf8'
);

fs.writeFileSync(
  `${outputDir}/en.js`,
  `${warningEn}module.exports = ${JSON.stringify(en, null, 2)};`,
  'utf8'
);

console.log(`✅ Generated ${Object.keys(vi).length} keys to vi.js & en.js`);
