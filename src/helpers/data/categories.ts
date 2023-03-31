const categories = [
  {
    id: 1,
    img: "https://mebellka.ru/wp-content/uploads/c/9/5/c95b36652e791e428d57dd2c2e8b46a9.jpeg",
    title: "Бытовая химия",
    type: "household-chemicals",
    to: "/catalog/household-chemicals",
  },
  {
    id: 2,
    img: "https://image.4meee.com/article/309841/eNThWhjXQzXNFdKCEStnKC9dwoN1ytUgsCQ4UqgL.jpeg",
    title: "Косметика и гигиена",
    type: "cosmetics-and-hygiene",
    to: "/catalog/cosmetics-and-hygiene",
  },
  {
    id: 3,
    img: "https://www.bytovaya-himiya.ru/wp-content/uploads/2019/07/Professionalnaya-himiya-dlya-klininga-450x450.jpg",
    title: "Товары для дома",
    type: "products-for-home",
    to: "/catalog/products-for-home",
  },
  {
    id: 4,
    img: "https://sun6-20.userapi.com/s/v1/if1/eZNgUn_hLd6i5RyNijuKBpcQJC_g6IisVAycFv70-J91VIVMhrRBKz1vaO7joPItiZxf9Jhw.jpg?size=1591x1592&quality=96&crop=238,86,1591,1593&ava=1",
    title: "Товары для детей и мам",
    type: "products-for-mothers-and-children",
    to: "/catalog/products-for-mothers-and-children",
  },
  {
    id: 5,
    img: "https://sun6-23.userapi.com/s/v1/if1/Am6cKS3-wI_sam7YT2c3hJgQU6NQHObnDQGB6k5TXne2u3u-VUvn_aO31QAM-0jCJ6XJ7x60.jpg?size=680x680&quality=96&crop=149,0,680,680&ava=1",
    title: "Посуда",
    type: "dishes",
    to: "/catalog/dishes",
  }
];

export type CategoryType = typeof categories[0];
export { categories };