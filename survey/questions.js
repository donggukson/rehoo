/* 상담 도구의 data/flow.json 에서 만든 파일. 손으로 고치지 않는다 (배포도구/사전설문_만들기.py). */
window.SURVEY_STAGES = [
 {
  "id": "intro",
  "title": "일정과 예산",
  "lead": "집과 일정, 생각하시는 예산을 여쭙니다.",
  "questions": [
   {
    "key": "own",
    "kind": "single",
    "label": "이 집은 어떤 집인가요?",
    "options": [
     {
      "value": "새로 샀음"
     },
     {
      "value": "살 예정 (계약 전)"
     },
     {
      "value": "아직 알아보는 중"
     },
     {
      "value": "살고 있는 집"
     }
    ]
   },
   {
    "key": "d_close",
    "kind": "date",
    "label": "잔금일은 언제인가요?",
    "help": "집을 넘겨받는 날입니다. 정해지지 않았으면 비워 두세요.",
    "show_if": "own!=살고 있는 집"
   },
   {
    "key": "d_move",
    "kind": "date",
    "label": "언제 입주하고 싶으세요?",
    "show_if": "own!=살고 있는 집"
   },
   {
    "key": "d_start",
    "kind": "date",
    "label": "공사는 언제 시작하고 싶으세요?",
    "show_if": "own=살고 있는 집"
   },
   {
    "key": "d_end",
    "kind": "date",
    "label": "언제까지 끝나야 하나요?",
    "show_if": "own=살고 있는 집"
   },
   {
    "key": "decider",
    "kind": "single",
    "label": "인테리어를 어떻게 할지는 누가 결정하시나요?",
    "options": [
     {
      "value": "본인"
     },
     {
      "value": "배우자와 함께"
     },
     {
      "value": "부모님 등 다른 분도"
     }
    ]
   },
   {
    "key": "budget",
    "kind": "single",
    "label": "생각하시는 예산은 어느 정도인가요?",
    "help": "가전을 뺀 공사 전체 금액입니다.",
    "options": [
     {
      "value": "7천만 원 이하"
     },
     {
      "value": "7천만 ~ 1억"
     },
     {
      "value": "1억 ~ 1.5억"
     },
     {
      "value": "1.5억 ~ 2억"
     },
     {
      "value": "2억 이상"
     },
     {
      "value": "아직 정하지 않음"
     }
    ]
   },
   {
    "key": "other_quote",
    "kind": "single",
    "label": "다른 곳에서 견적을 받으셨나요?",
    "help": "받으셨다면 같은 범위로 맞춰 비교해 드립니다.",
    "options": [
     {
      "value": "아직"
     },
     {
      "value": "1곳"
     },
     {
      "value": "2곳 이상"
     }
    ]
   },
   {
    "key": "lead_src",
    "kind": "single",
    "label": "저희를 어떻게 알게 되셨나요?",
    "options": [
     {
      "value": "소개"
     },
     {
      "value": "인쇼 카페"
     },
     {
      "value": "오늘의집 등 플랫폼"
     },
     {
      "value": "사내 커뮤니티"
     },
     {
      "value": "기타"
     }
    ]
   },
   {
    "key": "newly",
    "kind": "multi",
    "label": "해당하는 것이 있으면 골라 주세요.",
    "options": [
     {
      "value": "신혼"
     },
     {
      "value": "처음 마련한 내 집"
     },
     {
      "value": "해당 없음"
     }
    ]
   }
  ]
 },
 {
  "id": "life",
  "title": "생활",
  "lead": "어떻게 사시는지 여쭙니다. 답에 따라 설계가 달라집니다.",
  "questions": [
   {
    "key": "household",
    "kind": "single",
    "label": "혼자 사시나요, 가족과 함께 사시나요?",
    "options": [
     {
      "value": "혼자"
     },
     {
      "value": "가족과 함께"
     }
    ]
   },
   {
    "key": "members",
    "kind": "single",
    "label": "가족은 모두 몇 분인가요?",
    "help": "본인을 포함한 수입니다.",
    "show_if": "household=가족과 함께",
    "options": [
     {
      "value": "2명"
     },
     {
      "value": "3명"
     },
     {
      "value": "4명"
     },
     {
      "value": "5명 이상"
     }
    ]
   },
   {
    "key": "with_who",
    "kind": "multi",
    "label": "함께 사는 분을 모두 골라 주세요.",
    "show_if": "household=가족과 함께",
    "options": [
     {
      "value": "배우자"
     },
     {
      "value": "자녀"
     },
     {
      "value": "부모님·조부모님",
      "label": "어른 (부모님·조부모님)"
     },
     {
      "value": "그 밖의 가족",
      "label": "형제자매 등 그 밖의 가족"
     }
    ]
   },
   {
    "key": "child_n",
    "kind": "single",
    "label": "자녀는 몇 명인가요?",
    "show_if": "household=가족과 함께&with_who~자녀",
    "options": [
     {
      "value": "1명"
     },
     {
      "value": "2명"
     },
     {
      "value": "3명"
     },
     {
      "value": "4명 이상"
     }
    ]
   },
   {
    "key": "child_sex",
    "kind": "single",
    "label": "자녀의 성별이 서로 다른가요?",
    "show_if": "household=가족과 함께&with_who~자녀&child_n!=1명",
    "options": [
     {
      "value": "같습니다",
      "label": "같습니다 (아들만 또는 딸만)"
     },
     {
      "value": "다릅니다",
      "label": "다릅니다 (아들과 딸)"
     }
    ]
   },
   {
    "key": "kids",
    "kind": "multi",
    "label": "자녀의 나이를 알려 주세요.",
    "help": "해당하는 것을 모두 골라 주세요.",
    "show_if": "household=가족과 함께",
    "options": [
     {
      "value": "출산 예정"
     },
     {
      "value": "걷기 전"
     },
     {
      "value": "초등 입학 전"
     },
     {
      "value": "초등학생"
     },
     {
      "value": "중등 이상",
      "label": "중학생 이상"
     },
     {
      "value": "자녀 계획 있음"
     },
     {
      "value": "해당 없음"
     }
    ]
   },
   {
    "key": "stay",
    "kind": "single",
    "label": "이 집에 얼마나 사실 계획인가요?",
    "options": [
     {
      "value": "2~3년"
     },
     {
      "value": "5년 안팎"
     },
     {
      "value": "10년 이상"
     },
     {
      "value": "아직 계획 없음"
     }
    ]
   },
   {
    "key": "work",
    "kind": "single",
    "label": "근무 형태는 어떠신가요?",
    "options": [
     {
      "value": "주간 근무"
     },
     {
      "value": "교대 근무 있음"
     },
     {
      "value": "재택이 많음"
     }
    ]
   },
   {
    "key": "cook",
    "kind": "single",
    "label": "요리는 얼마나 하시나요?",
    "options": [
     {
      "value": "거의 안 함"
     },
     {
      "value": "보통"
     },
     {
      "value": "많이 함"
     }
    ]
   },
   {
    "key": "cook_how",
    "kind": "single",
    "label": "주로 어떤 요리를 하시나요?",
    "show_if": "cook=많이 함",
    "options": [
     {
      "value": "매일 굽고 볶음"
     },
     {
      "value": "국·찌개·찜 위주"
     },
     {
      "value": "베이킹·오븐 요리"
     }
    ]
   },
   {
    "key": "meal",
    "kind": "single",
    "label": "식사는 주로 어떻게 하세요?",
    "show_if": "cook=거의 안 함",
    "options": [
     {
      "value": "배달·포장이 많음"
     },
     {
      "value": "밖에서 먹고 들어옴"
     },
     {
      "value": "간단히 차려 먹음"
     }
    ]
   },
   {
    "key": "guests",
    "kind": "single",
    "label": "손님은 얼마나 오시나요?",
    "options": [
     {
      "value": "자주 오심"
     },
     {
      "value": "가끔 오심"
     },
     {
      "value": "거의 없음"
     }
    ]
   },
   {
    "key": "kitchen_style",
    "kind": "single",
    "label": "주방은 어느 쪽이 좋으세요?",
    "show_if": "guests=자주 오심&cook!=매일 굽고 볶음&cook!=많이 함|guests=자주 오심&cook!=매일 굽고 볶음&cook_how!=매일 굽고 볶음|guests=가끔 오심&cook!=매일 굽고 볶음&cook!=많이 함|guests=가끔 오심&cook!=매일 굽고 볶음&cook_how!=매일 굽고 볶음",
    "options": [
     {
      "value": "보여 주는 아일랜드",
      "desc": "손님이 모이는, 보기 좋은 주방"
     },
     {
      "value": "숨기는 주방과 다이닝",
      "desc": "식탁이 주인공, 조리 공간은 가림"
     },
     {
      "value": "지금 구조 그대로",
      "desc": "배치는 두고 마감만 새로"
     }
    ]
   },
   {
    "key": "stuff",
    "kind": "single",
    "label": "옷과 짐은 많은 편인가요?",
    "options": [
     {
      "value": "보통"
     },
     {
      "value": "많음"
     }
    ]
   },
   {
    "key": "rooms",
    "kind": "multi",
    "label": "거실·주방·안방 말고, 방은 어떻게 쓰실 계획인가요?",
    "help": "해당하는 것을 모두 골라 주세요.",
    "options": [
     {
      "value": "아이 방"
     },
     {
      "value": "서재·작업실"
     },
     {
      "value": "드레스룸"
     },
     {
      "value": "손님방·부모님 방"
     },
     {
      "value": "취미실"
     }
    ]
   },
   {
    "key": "hobby",
    "kind": "multi",
    "label": "집에서 즐기시는 것이 있나요?",
    "help": "해당하는 것을 모두 골라 주세요.",
    "options": [
     {
      "value": "주류",
      "label": "와인·위스키 등 주류"
     },
     {
      "value": "자전거"
     },
     {
      "value": "악기"
     },
     {
      "value": "큰 장비",
      "label": "캠핑·골프 등 큰 장비"
     },
     {
      "value": "없음"
     }
    ]
   },
   {
    "key": "liquor",
    "kind": "multi",
    "label": "주로 어떤 술을 즐기시나요?",
    "show_if": "hobby~주류",
    "options": [
     {
      "value": "와인"
     },
     {
      "value": "위스키"
     },
     {
      "value": "그 밖의 술",
      "label": "그 밖의 술 (전통주·맥주 등)"
     }
    ]
   },
   {
    "key": "instrument_room",
    "kind": "single",
    "label": "악기는 전용 공간이 필요하신가요?",
    "show_if": "hobby~악기",
    "options": [
     {
      "value": "전용 공간이 필요"
     },
     {
      "value": "가끔 연주하는 정도"
     }
    ]
   },
   {
    "key": "pet",
    "kind": "single",
    "label": "반려동물이 있나요?",
    "options": [
     {
      "value": "없음"
     },
     {
      "value": "강아지"
     },
     {
      "value": "고양이"
     },
     {
      "value": "강아지와 고양이"
     }
    ]
   }
  ]
 },
 {
  "id": "space",
  "title": "공간 쓰임",
  "lead": "욕실, 가구, 가전을 어떻게 쓰실지 여쭙니다.",
  "questions": [
   {
    "key": "bath_use",
    "kind": "multi",
    "label": "욕실은 주로 어떻게 쓰시나요?",
    "help": "해당하는 것을 모두 골라 주세요.",
    "options": [
     {
      "value": "반신욕",
      "label": "반신욕으로 하루를 마무리"
     },
     {
      "value": "아이 씻기기",
      "label": "아이를 씻기는 자리가 필요"
     },
     {
      "value": "샤워 위주",
      "label": "샤워만 빠르게"
     },
     {
      "value": "어르신 사용",
      "label": "부모님·어르신이 쓰심"
     },
     {
      "value": "청소가 쉬워야",
      "label": "청소가 쉬워야 함"
     },
     {
      "value": "화장·준비",
      "label": "화장과 외출 준비를 여기서"
     }
    ]
   },
   {
    "key": "bathtub",
    "kind": "single",
    "label": "욕조는 꼭 필요하신가요?",
    "options": [
     {
      "value": "꼭 필요"
     },
     {
      "value": "있으면 좋음"
     },
     {
      "value": "필요 없음"
     }
    ]
   },
   {
    "key": "show_hide",
    "kind": "single",
    "label": "물건과 소품은 어떻게 두고 싶으세요?",
    "options": [
     {
      "value": "전부 숨김",
      "label": "전부 문 뒤로 숨기고 싶음"
     },
     {
      "value": "몇 점만",
      "label": "고른 몇 점만 보이게"
     },
     {
      "value": "진열",
      "label": "좋아하는 물건은 보이게 진열"
     }
    ]
   },
   {
    "key": "furniture",
    "kind": "single",
    "label": "가구는 어떤 구성으로 완성할까요?",
    "options": [
     {
      "value": "기본 (주방 + 붙박이장)",
      "desc": "주방과 붙박이장을 깔끔하게 새로"
     },
     {
      "value": "디자인 가구 추가",
      "desc": "책장·장식장·드레스룸·화장대를 공간에 맞춰 제작"
     }
    ]
   },
   {
    "key": "appliance",
    "kind": "single",
    "label": "가전은 어떻게 하시나요?",
    "help": "가전 값은 공사비와 따로입니다.",
    "options": [
     {
      "value": "새로 구입 (공사와 별도)",
      "label": "새로 구입"
     },
     {
      "value": "일부만 교체"
     },
     {
      "value": "지금 쓰는 가전 유지"
     }
    ]
   },
   {
    "key": "keep_fridge",
    "kind": "single",
    "label": "계속 쓰실 냉장고는 어떤 형태인가요?",
    "show_if": "appliance=지금 쓰는 가전 유지|appliance=일부만 교체",
    "options": [
     {
      "value": "빌트인",
      "label": "빌트인 (장과 같은 깊이)"
     },
     {
      "value": "일반형",
      "label": "일반형 (장보다 튀어나옴)"
     },
     {
      "value": "냉장고는 새로 구입"
     },
     {
      "value": "잘 모름"
     }
    ]
   },
   {
    "key": "keep_washer",
    "kind": "single",
    "label": "계속 쓰실 세탁기는 어떤 형태인가요?",
    "show_if": "appliance=지금 쓰는 가전 유지|appliance=일부만 교체",
    "options": [
     {
      "value": "통돌이",
      "label": "통돌이 (위로 여는 형태)"
     },
     {
      "value": "드럼"
     },
     {
      "value": "드럼 + 건조기"
     },
     {
      "value": "세탁기는 새로 구입"
     }
    ]
   },
   {
    "key": "appl_list",
    "kind": "multi",
    "label": "공사 뒤에 쓰실 가전을 모두 골라 주세요.",
    "help": "전기 선과 자리를 공사 전에 잡아야 해서 여쭙니다. 지금 쓰시는 것과 새로 사실 것 모두입니다.",
    "options": [
     {
      "value": "인덕션"
     },
     {
      "value": "식기세척기"
     },
     {
      "value": "오븐",
      "label": "오븐·스팀오븐"
     },
     {
      "value": "건조기"
     },
     {
      "value": "의류관리기"
     },
     {
      "value": "로봇청소기"
     },
     {
      "value": "시스템에어컨"
     },
     {
      "value": "해당 없음"
     }
    ]
   }
  ]
 },
 {
  "id": "house",
  "title": "지금 집",
  "lead": "지금 집의 상태와 불편한 점을 여쭙니다.",
  "questions": [
   {
    "key": "sash",
    "kind": "single",
    "label": "지금 샷시 상태는 어떤가요?",
    "options": [
     {
      "value": "양호"
     },
     {
      "value": "외풍·결로 있음"
     },
     {
      "value": "모름 (측정 필요)"
     }
    ]
   },
   {
    "key": "living_now",
    "kind": "single",
    "label": "지금 그 집에 살고 계신가요?",
    "help": "살면서 하는 공사는 하지 않습니다.",
    "show_if": "own=새로 샀음&move_future!=예",
    "options": [
     {
      "value": "살고 있음"
     },
     {
      "value": "비어 있음",
      "label": "비어 있음 (입주 전)"
     }
    ]
   },
   {
    "key": "temp_home",
    "kind": "single",
    "label": "공사하는 동안 나가서 지내실 곳은 구하셨나요?",
    "help": "공사 기간에는 집을 비워 주셔야 합니다.",
    "show_if": "own=살고 있는 집|living_now=살고 있음",
    "options": [
     {
      "value": "구했음"
     },
     {
      "value": "알아보는 중"
     },
     {
      "value": "아직 못 구함"
     }
    ]
   },
   {
    "key": "pain",
    "kind": "multi",
    "label": "지금 집에서 불편했던 것, 그리고 앞으로 살 집에서 걱정되는 것은 무엇인가요?",
    "help": "해당하는 것을 모두 골라 주세요.",
    "options": [
     {
      "value": "결로·곰팡이"
     },
     {
      "value": "욕실 습기"
     },
     {
      "value": "겨울 외풍"
     },
     {
      "value": "수납 부족"
     },
     {
      "value": "소음"
     },
     {
      "value": "분리수거 자리",
      "label": "분리수거할 자리가 없음"
     },
     {
      "value": "현관 수납",
      "label": "현관에 유모차·신발 둘 곳이 없음"
     },
     {
      "value": "옷 정리",
      "label": "옷이 밖에 나와 정리가 안 됨"
     },
     {
      "value": "조명",
      "label": "조명이 예쁘지 않거나 어두움"
     },
     {
      "value": "콘센트 부족",
      "label": "콘센트가 모자라거나 자리가 안 맞음"
     },
     {
      "value": "빨래 말릴 곳",
      "label": "빨래를 널고 말릴 곳이 없음"
     },
     {
      "value": "주방이 좁음",
      "label": "주방이 좁고 조리대가 모자람"
     },
     {
      "value": "환기·냄새",
      "label": "음식 냄새가 잘 안 빠짐"
     },
     {
      "value": "여름 더위",
      "label": "여름에 덥고 에어컨이 잘 안 닿음"
     },
     {
      "value": "청소가 힘듦",
      "label": "청소하기 힘든 곳이 많음"
     }
    ]
   },
   {
    "key": "pain_note",
    "kind": "text",
    "label": "그 밖에 불편했거나 걱정되는 것을 편하게 적어 주세요.",
    "help": "예: 아침에 화장실이 겹친다 / 택배 둘 곳이 없다"
   }
  ]
 }
];
window.SURVEY_HOLIDAYS = {"2026-12-25": "성탄절", "2027-01-01": "신정", "2027-02-06": "설 연휴", "2027-02-07": "설날", "2027-02-08": "설 연휴", "2027-02-09": "대체공휴일(설날)", "2027-03-01": "삼일절", "2027-05-01": "노동절", "2027-05-03": "대체공휴일(노동절)", "2027-05-05": "어린이날", "2027-05-13": "부처님오신날", "2027-06-06": "현충일", "2027-07-17": "제헌절", "2027-07-19": "대체공휴일(제헌절)", "2027-08-15": "광복절", "2027-08-16": "대체공휴일(광복절)", "2027-09-14": "추석 연휴", "2027-09-15": "추석", "2027-09-16": "추석 연휴", "2027-10-03": "개천절", "2027-10-04": "대체공휴일(개천절)", "2027-10-09": "한글날", "2027-10-11": "대체공휴일(한글날)", "2027-12-25": "성탄절", "2027-12-27": "대체공휴일(크리스마스)", "2028-01-01": "신정", "2028-01-25": "설 연휴", "2028-01-26": "설날", "2028-01-27": "설 연휴", "2028-03-01": "삼일절", "2028-05-01": "노동절", "2028-05-02": "부처님오신날", "2028-05-05": "어린이날", "2028-06-06": "현충일", "2028-07-17": "제헌절", "2028-08-15": "광복절", "2028-10-02": "추석 연휴", "2028-10-03": "개천절 · 추석", "2028-10-04": "추석 연휴", "2028-10-09": "한글날", "2028-12-25": "성탄절"};
