// 리후 가설검증 설계기 → Google 시트 기록용 Apps Script
// 설치: 시트 열기 → 확장 프로그램 → Apps Script → 기존 코드 지우고 이 파일 붙이기 → 저장
//       배포 → 새 배포 → 유형 '웹 앱' → 실행 계정 '나' → 액세스 '모든 사용자' → 배포 → 웹 앱 URL 복사
const SHEET_NAME = '기록';
const HEADER = ['저장시각', '기록자', '가설', '질문', '입력값', '판정', '그때의 결론', 'raw'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) { sh = ss.insertSheet(SHEET_NAME); }
  if (sh.getLastRow() === 0) { sh.appendRow(HEADER); sh.setFrozenRows(1); }
  return sh;
}

// 페이지의 '시트에 저장' → 가설 10개를 10행으로 추가
function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  const sh = sheet_();
  const rows = (body.rows || []).map(r => [r.ts, r.who, r.hid, r.title, r.inputs, r.status, r.pos, r.raw]);
  if (rows.length) sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADER.length).setValues(rows);
  return ContentService.createTextOutput(JSON.stringify({ ok: true, added: rows.length }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 페이지의 '시트에서 불러오기' → 전체 기록을 JSON으로
function doGet() {
  const sh = sheet_();
  const v = sh.getDataRange().getValues().slice(1);
  const rows = v.map(r => ({ ts: r[0] instanceof Date ? r[0].toISOString() : String(r[0]), who: r[1], hid: r[2], title: r[3], inputs: r[4], status: r[5], pos: r[6], raw: r[7] }));
  return ContentService.createTextOutput(JSON.stringify({ rows }))
    .setMimeType(ContentService.MimeType.JSON);
}
