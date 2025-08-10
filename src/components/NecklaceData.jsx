// NecklaceData.jsx
import { useParams } from "react-router-dom";
import { necklaceArr } from "../../utils/necklaceSetData";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { additem, removeitem, clearCart } from "../../utils/cartSlice";
const NecklaceData = () => {
  // Get the id from the URL parameters
  const { id } = useParams(); // This gets the 'id' from /necklace/:id

  const [necklace, setNecklace] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(additem());
  };
  const handleRemoveCart = () => {
    dispatch(removeitem());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    const fetchNecklaceData = () => {
      try {
        setLoading(true);

        // Convert id to number and get the necklace
        const necklaceIndex = parseInt(id);
        const foundNecklace = necklaceArr[necklaceIndex];

        if (foundNecklace) {
          setNecklace(foundNecklace);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching necklace data:", error);
        setLoading(false);
      }
    };

    // Only fetch if id exists
    if (id) {
      fetchNecklaceData();
    }
  }, [id]); // Re-run when id changes

  // Not found state
  if (!necklace) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">
            Necklace not found
          </h2>
          <p className="text-gray-500">
            The necklace you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Display the necklace data
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/*  necklace display code  */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold mb-4">{necklace.desc}</h1>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={necklace.src}
                alt={necklace.desc}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              {necklace.spl && (
                <div className="bg-red-500 text-white px-3 py-1 rounded inline-block">
                  {necklace.spl}
                </div>
              )}

              <div>
                <span className="text-2xl font-bold">{necklace.price}</span>
                <span className="text-lg text-gray-500 line-through ml-2">
                  {necklace.oldPrice}
                </span>
                <span className="text-green-600 font-semibold ml-2">
                  {necklace.discount}
                </span>
              </div>

              <div>
                <p className="text-gray-600">{necklace.stars}</p>
                <p className="text-sm text-gray-500">{necklace.line}</p>
              </div>

              <button
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors mr-1"
                onClick={() => handleAddCart(necklace)}
              >
                Add to Cart
              </button>
              <button
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors m-2"
                onClick={() => handleRemoveCart(necklace)}
              >
                Remove
              </button>
              <button
                className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors ml-1"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NecklaceData;
