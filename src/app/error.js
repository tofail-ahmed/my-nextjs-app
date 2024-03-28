"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div>
      <h1 className="text-4xl text-red-500 text-center">
        Something went wrong!!!
      </h1>
      <h1 className="text-4xl text-red-500 text-center">{error.message}</h1>
     <button onClick={()=>reset()} className="btn btn-outline btn-secondary">Try Again</button>
    </div>
  );
};

export default ErrorPage;
