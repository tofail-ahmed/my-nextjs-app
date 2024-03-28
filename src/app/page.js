
import Counter from "@/component/Counter";
import Link from "next/link";
// import 'daisyui/dist/full.css';


const HomePage =async () => {
  const res=await fetch("http://localhost:5000/shoes",{
    next:{
      revalidate:30
    }
  });
  const shoes= await res.json();
  // console.log(shoes)
  return (
    <div className="text-center">
      <h1 className="text-center">Welcome to nextJS App: Home page updated</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mx-auto">
        {
          shoes.slice(0,6).map((shoe)=>
          <div key={shoe.id} className="card w-80 mx-auto bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title text-pink-400">
      {shoe.title}
      <div className="badge badge-secondary">${shoe.price}</div>
    </h2>
    <p className="text-pink-400">{shoe.description}</p>
    <div className="card-actions justify-end">
    <button className="btn btn-outline btn-secondary">Buy Now</button>
    <button className="btn btn-outline btn-secondary">Details</button>
    </div>
  </div>
</div>
          )
        }
      </div>
      <Link  href="/allshoes"> <button className="btn btn-outline btn-secondary my-4">See All</button></Link>

    </div>
  );
};

export default HomePage;
