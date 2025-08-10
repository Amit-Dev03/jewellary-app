import nk1 from "../src/assets/necklace-set/nk1.jpeg";
import nk2 from "../src/assets/necklace-set/nk2.jpeg";
import nk3 from "../src/assets/necklace-set/nk-3.jpeg";
import nk4 from "../src/assets/necklace-set/nk-4.jpeg";

const necklaceArrList = [
  {
    src: nk1,
    spl: "Special Deal",
    desc: "Silver Plated AD Cocktail Necklace...",
    stars: "4.5 stars",
    rating: 4.5,
    price: "₹233",
    oldPrice: "₹433",
    discount: "45% off",
    line: "Buy any 4 and get ₹199",
  },
  {
    src: nk2,
    desc: "Gold Plated AD Cocktail Necklace...",
    stars: "4.1 stars",
    rating: 4.1,
    price: "₹233",

    oldPrice: "₹433",
    discount: "45% off",
    line: "Buy any 4 and get ₹199",
  },
  {
    src: nk3,
    spl: "Promoted",
    desc: "Diamond Plated AD Cocktail Necklace...",
    price: "₹233",
    stars: "3.9 stars",
    rating: 3.9,
    oldPrice: "₹433",
    discount: "45% off",
    line: "Buy any 4 and get ₹199",
  },
  {
    src: nk4,
    spl: "Special Deal",
    desc: "Platinum Plated AD Cocktail Necklace...",
    stars: "4.1 stars",
    rating: 4.1,
    price: "₹233",
    oldPrice: "₹433",
    discount: "45% off",
    line: "Buy any 4 and get ₹199",
  },
];

export const necklaceArr = [
  ...necklaceArrList,
  ...necklaceArrList,
  ...necklaceArrList,
  ...necklaceArrList,
];
