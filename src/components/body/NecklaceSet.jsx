const NecklaceSet = ({ card }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={card.src} alt={card.desc} className="w-full h-48 object-cover rounded-lg mb-3" />
      <h3 className="font-semibold text-gray-800 mb-2">{card.desc}</h3>
      <p className="text-sm text-gray-600 mb-2">{card.stars}</p>
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">{card.price}</span>
        <span className="text-sm text-gray-500 line-through">{card.oldPrice}</span>
        <span className="text-sm text-green-600">{card.discount}</span>
      </div>
    </div>
  );
};
export default NecklaceSet;