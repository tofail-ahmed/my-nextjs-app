
import Counter from "@/component/Counter";
// import 'daisyui/dist/full.css';


const HomePage =async () => {
  const res=await fetch("http://localhost:5000/shoes");
  const shoes= await res.json();
  console.log(shoes)
  return (
    <div className="">
      <h1 className="text-center">Welcome to nextJS App: Home page</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mx-auto">
        {
          shoes.slice(0,6).map((shoe)=>
          <div key={shoe.id} className="card w-80 bg-base-100 shadow-xl mx-auto">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{shoe.title}</h2>
    <p>{shoe.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          )
        }
      </div>
    </div>
  );
};

export default HomePage;
