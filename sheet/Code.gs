// 리후 대표 조사 과제 → Google 시트 기록용 Apps Script (v2: 대표별 탭)
// 설치: 시트 → 확장 프로그램 → Apps Script → 기존 코드 지우고 이 파일 붙이기 → 저장
//       배포 → 배포 관리 → 연필 → 버전 '새 버전' → 액세스 '모든 사용자' → 배포 (URL은 그대로)
const PEOPLE = ['이기헌', '백효인'];
const HEADER = ['저장시각', '가설/질문', '내용', '입력값·근거·의견', '판정', '그때의 결론', 'raw'];

function sheetFor_(who) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const name = PEOPLE.includes(who) ? who : '기타';
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); }
  if (sh.getLastRow() === 0) { sh.appendRow(HEADER); sh.setFrozenRows(1); }
  return sh;
}

// 페이지의 '시트에 저장' → 그 대표의 탭에 가설 14행 + 안쪽 답변 행 추가
function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  const rows = body.rows || [];
  const byWho = {};
  rows.forEach(r => { (byWho[r.who] = byWho[r.who] || []).push([r.ts, r.hid, r.title, r.inputs, r.status, r.pos, r.raw]); });
  let added = 0;
  Object.keys(byWho).forEach(who => {
    const sh = sheetFor_(who);
    sh.getRange(sh.getLastRow() + 1, 1, byWho[who].length, HEADER.length).setValues(byWho[who]);
    added += byWho[who].length;
  });
  return ContentService.createTextOutput(JSON.stringify({ ok: true, added }))
    .setMimeType(ContentService.MimeType.JSON);
}

// 페이지의 '시트에서 불러오기' → 두 대표 탭을 합쳐 JSON으로
function doGet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const rows = [];
  PEOPLE.forEach(who => {
    const sh = ss.getSheetByName(who);
    if (!sh || sh.getLastRow() < 2) return;
    sh.getDataRange().getValues().slice(1).forEach(r => {
      rows.push({ ts: r[0] instanceof Date ? r[0].toISOString() : String(r[0]), who, hid: r[1], title: r[2], inputs: r[3], status: r[4], pos: r[5], raw: r[6] });
    });
  });
  return ContentService.createTextOutput(JSON.stringify({ rows }))
    .setMimeType(ContentService.MimeType.JSON);
}
