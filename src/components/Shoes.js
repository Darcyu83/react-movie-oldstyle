import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function BrandLink() {
  return <h1>BrandLink</h1>;
}

function AShoes({ brand, ...props }) {
  console.log("brand===", brand);
  let [params] = useSearchParams();
  console.log("params===", params);
  let aa = params.getAll("brand");
  console.log("aa===", aa);
  let isActive = aa.includes(brand);
  console.log("isActive===", isActive);

  console.log(params);

  return <h1>A Shoes Brand : {brand}</h1>;
}
export default function Shoes() {
  let [filter, setFilter] = useSearchParams();

  console.log("filter===", filter.get("filter"));
  return (
    <div>
      {/* <h1>Shoes Brand: {brand.toUpperCase()}</h1> */}

      <input
        type="text"
        value={filter.get("filter")}
        onChange={(e) => {
          let filter = e.target.value;
          if (filter) {
            console.log(e.target.value);
            setFilter({ filter });
          } else {
            setFilter({});
          }
        }}
      />
      <AShoes brand={filter.get("filter")} />
    </div>
  );
}
