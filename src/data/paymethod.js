export const paymethodsCard = [
  {
    id: 1,
    paymethod: 'card',
    tile: "카드선택",
    payDepth: [
      {
        id: 1,
        name: "삼성카드",
      },
      {
        id: 2,
        name: "현대카드",
      },
      {
        id: 3,
        name: "롯데카드",
      },
      {
        id: 4,
        name: "신한카드",
      },
    ],
  },
  {
    id: 2,
    paymethod: 'card',
    tile: "할부선택",
    payDepth: [
      {
        id: 1,
        name: "일시불",
      },
      {
        id: 2,
        name: "2개월",
      },
      {
        id: 3,
        name: "3개월(무이자)",
      },
      {
        id: 1,
        name: "4개월",
      },
    ],
  },
];

export const paymethodsPay = [
  { id: 1, paymethod: 'pay', title: "카카오페이" },
  { id: 2, paymethod: 'pay', title: "토스페이" },
  { id: 3, paymethod: 'pay', title: "네이버페이" },
];

export const paymethodsBank = [
  {
    id: 1,
    paymethod: 'bank',
    title: "입금은행 선택",
    payDepth: [
      {
        id: 1,
        name: "국민은행",
      },
      {
        id: 2,
        name: "신한은행",
      },
      {
        id: 3,
        name: "하나은행",
      },
      {
        id: 4,
        name: "기업은행",
      },
      {
        id: 5,
        name: "농협은행",
      },
    ],
  },
  {
    id:2,
    paymethod: 'bank',
    title: '입금자명'
  }
];
