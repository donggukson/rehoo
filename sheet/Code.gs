// 리후 대표 조사 과제 + WL 인테리어 랩 사전 설문 → Google 시트 기록용 Apps Script (v3)
// 설치: 시트 → 확장 프로그램 → Apps Script → 기존 코드 지우고 이 파일 붙이기 → 아래 SURVEY_KEY 에 암호 적기 → 저장
//       배포 → 배포 관리 → 연필 → 버전 '새 버전' → 액세스 '모든 사용자' → 배포 (URL은 그대로)
const PEOPLE = ['이기헌', '백효인'];
const HEADER = ['저장시각', '가설/질문', '내용', '입력값·근거·의견', '판정', '그때의 결론', 'raw'];

// 사전 설문 응답을 내려받을 때 쓰는 암호. Apps Script 편집기에서만 적는다 (깃에는 빈 값으로 둔다).
// 비어 있으면 응답은 쌓이기만 하고, 받기 페이지(survey/get.html)에서는 내려받을 수 없다.
const SURVEY_KEY = '';
const SURVEY_TAB = '사전설문';
const SURVEY_HEADER = ['받은 시각', '응답 번호', '고객 · 단지', '연락처 · 요약', '상태', '', 'raw'];

function sheetFor_(who) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const name = PEOPLE.includes(who) ? who : who === SURVEY_TAB ? SURVEY_TAB : '기타';
  let sh = ss.getSheetByName(name);
  if (!sh) { sh = ss.insertSheet(name); }
  if (sh.getLastRow() === 0) { sh.appendRow(name === SURVEY_TAB ? SURVEY_HEADER : HEADER); sh.setFrozenRows(1); }
  return sh;
}
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

// 페이지의 '시트에 저장' → 그 대표의 탭에 줄 추가. 사전 설문은 '사전설문' 탭에 한 고객이 한 줄.
// 받기 페이지는 { action: 'survey', key } 를 보내 응답 목록을 받는다.
function doPost(e) {
  const body = JSON.parse(e.postData.contents || '{}');
  if (body.action === 'survey') return surveyList_(body.key);
  const rows = body.rows || [];
  const byWho = {};
  rows.forEach(r => { (byWho[r.who] = byWho[r.who] || []).push([r.ts, r.hid, r.title, r.inputs, r.status, r.pos, r.raw]); });
  let added = 0;
  Object.keys(byWho).forEach(who => {
    const sh = sheetFor_(who);
    const start = sh.getLastRow() + 1;
    // 고객이 적은 글이 수식으로 읽히지 않게 글자 칸으로 둔다
    sh.getRange(start, 1, byWho[who].length, HEADER.length).setNumberFormat('@').setValues(byWho[who]);
    added += byWho[who].length;
  });
  return json_({ ok: true, added });
}

// 사전 설문 응답 목록. 암호가 맞을 때만 돌려준다. 예전 코드로 받아 '기타' 탭에 쌓인 응답도 함께 찾는다.
function surveyList_(key) {
  if (!SURVEY_KEY) return json_({ ok: false, error: 'no_key' });
  if (String(key || '') !== SURVEY_KEY) { Utilities.sleep(1500); return json_({ ok: false, error: 'bad_key' }); }
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const surveys = [];
  [SURVEY_TAB, '기타'].forEach(name => {
    const sh = ss.getSheetByName(name);
    if (!sh || sh.getLastRow() < 2) return;
    sh.getDataRange().getValues().slice(1).forEach(r => {
      const raw = String(r[6] || '');
      if (raw.indexOf('"wl-presurvey"') < 0) return;
      try { surveys.push(JSON.parse(raw)); } catch (err) { /* 깨진 줄은 건너뛴다 */ }
    });
  });
  return json_({ ok: true, surveys });
}

// 페이지의 '시트에서 불러오기' → 두 대표 탭을 합쳐 JSON으로 (사전 설문은 여기로 나가지 않는다)
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
  return json_({ rows });
}
