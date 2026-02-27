import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sungwon Wiki",
  description: "통합 지식 베이스 및 화면 정책서 for 성원애드피아",
  lang: "ko-KR",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [
      { text: "홈", link: "/" },
      { text: "지식 창고", link: "/documents/knowledge/00_INDEX", activeMatch: "/documents/knowledge/" },
      { text: "화면 정책", link: "/documents/고객센터_메인_Screen_Policy", activeMatch: "^/documents/(?!knowledge/).*" },
      {
        text: "버전",
        items: [{ text: "v1.0.0 (Current)", link: "/changelog" }],
      },
    ],
    sidebar: {
      "/": [
        {
          text: "메뉴 탐색",
          items: [
            { text: "홈", link: "/" },
            { text: "지식 창고", link: "/documents/knowledge/00_INDEX" },
            { text: "화면 정책", link: "/documents/고객센터_메인_Screen_Policy" },
            { text: "버전 로그", link: "/changelog" }
          ]
        }
      ],
      "/documents/knowledge/": [
        {
          text: "지식 창고",
          collapsed: false,
          items: [
            { text: "00. INDEX", link: "/documents/knowledge/00_INDEX" },
            { text: "01. 프로젝트 개요", link: "/documents/knowledge/01_project_overview" },
            { text: "02. 주문 프로세스", link: "/documents/knowledge/02_order_process" },
            { text: "03. 생산 프로세스", link: "/documents/knowledge/03_production_process" },
            { text: "04. 자재 관리", link: "/documents/knowledge/04_material_management" },
            { text: "05. 정산/재무", link: "/documents/knowledge/05_settlement_finance" },
            { text: "06. 회원 등급", link: "/documents/knowledge/06_member_grade" },
            { text: "07. 관리자 시스템", link: "/documents/knowledge/07_admin_system" },
            { text: "08. 그룹웨어", link: "/documents/knowledge/08_groupware" },
            { text: "09. 고객 서비스", link: "/documents/knowledge/09_customer_service" },
          ],
        },
      ],
      "/documents/": [
        {
          text: "고객센터",
          collapsed: false,
          items: [
            { text: "고객센터 메인", link: "/documents/고객센터_메인_Screen_Policy" },
            { text: "공지사항", link: "/documents/공지사항_Screen_Policy_Final" },
            { text: "문의 내역", link: "/documents/문의_내역_Screen_Policy" },
            { text: "오시는길", link: "/documents/오시는길_Screen_Policy" },
            { text: "자료실", link: "/documents/자료실_Screen_Policy_Final" },
            { text: "자주묻는질문", link: "/documents/자주묻는질문_Screen_Policy_Final" },
          ],
        },
        {
          text: "마이페이지",
          collapsed: true,
          items: [
            { text: "고객관리", link: "/documents/고객관리_Screen_Policy_Final" },
            { text: "등급별 현황 카드", link: "/documents/등급별_현황_카드_Screen_Policy" },
            { text: "리뷰 관리", link: "/documents/리뷰_관리_Screen_Policy" },
            { text: "마이페이지 포인트내역", link: "/documents/마이페이지_포인트내역_Screen_Policy_Final" },
            { text: "배송지 관리", link: "/documents/배송지_관리_Screen_Policy_Final" },
            { text: "성원머니 통합", link: "/documents/성원머니_통합_Screen_Policy" },
            { text: "세금계산서 발급", link: "/documents/세금계산서_발급_Screen_Policy_Final" },
            { text: "현금영수증 발급", link: "/documents/현금영수증_발급_Screen_Policy" },
            { text: "회원정보 수정", link: "/documents/회원정보_수정_Screen_Policy" },
          ],
        },
        {
          text: "공통 및 기타",
          collapsed: false,
          items: [
            { text: "검색", link: "/documents/검색_Screen_Policy_Final" },
            { text: "확인 필요사항 정리", link: "/documents/확인필요사항_정리" }
          ],
        },
      ],
    },
  },
});
