

const AllShoesPage = async () => {
  const res = await fetch("http://localhost:5000/shoes",{
      cache:"no-store"
  });
  const shoes = await res.json();
//   console.log(shoes);
  return (
    <div>
      <h1 className="text-center text-4xl text-pink-600 font-bold underline ">
        All Shoes Page
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="card w-80 mx-auto bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-pink-400">
                {shoe.title}
                <div className="badge badge-secondary">${shoe.price}</div>
              </h2>
              <p className="text-pink-400">{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-outline btn-secondary">
                  Buy Now
                </button>
                <button className="btn btn-outline btn-secondary">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
