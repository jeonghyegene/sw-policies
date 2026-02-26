import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Screen Policy Wiki",
  description: "Screen Policy Documentation for 성원애드피아",
  lang: "ko-KR",
  themeConfig: {
    search: {
      provider: "local",
    },
    nav: [{ text: "홈", link: "/" }],
    sidebar: [
      {
        text: "고객센터",
        collapsed: false,
        items: [
          { text: "고객센터 메인", link: "/고객센터_메인_Screen_Policy" },
          { text: "공지사항", link: "/공지사항_Screen_Policy_Final" },
          { text: "문의 내역", link: "/문의_내역_Screen_Policy" },
          { text: "오시는길", link: "/오시는길_Screen_Policy" },
          { text: "자료실", link: "/자료실_Screen_Policy_Final" },
          { text: "자주묻는질문", link: "/자주묻는질문_Screen_Policy_Final" },
        ],
      },
      {
        text: "마이페이지",
        collapsed: true,
        items: [
          { text: "고객관리", link: "/고객관리_Screen_Policy_Final" },
          { text: "등급별 현황 카드", link: "/등급별_현황_카드_Screen_Policy" },
          { text: "리뷰 관리", link: "/리뷰_관리_Screen_Policy" },
          { text: "마이페이지 포인트내역", link: "/마이페이지_포인트내역_Screen_Policy_Final" },
          { text: "배송지 관리", link: "/배송지_관리_Screen_Policy_Final" },
          { text: "성원머니 통합", link: "/성원머니_통합_Screen_Policy" },
          { text: "세금계산서 발급", link: "/세금계산서_발급_Screen_Policy_Final" },
          { text: "현금영수증 발급", link: "/현금영수증_발급_Screen_Policy" },
          { text: "회원정보 수정", link: "/회원정보_수정_Screen_Policy" },
        ],
      },
      {
        text: "공통 및 기타",
        collapsed: true,
        items: [
          { text: "검색", link: "/검색_Screen_Policy_Final" },
        ],
      },
    ],
  },
});
