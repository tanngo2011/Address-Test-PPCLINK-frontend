import React from "react";

function SearchOutput({ search }) {
  return (
    <>
      {search?.map((name, i) => (
        <div key={i}>
          {name}
        </div>
            
      ))}
    </>
  );
}

export default SearchOutput;
