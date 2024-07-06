import axios from "axios";
import { useEffect, useState } from "react";
import FullScreenLoader from "./FullScreenLoader";
import ValidationHelper from "../utility/ValidationHelper.js";

const ProductList = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     await CallProductList();

  //     console.log(data);
  //   })();
  // }, []);
  useEffect(() => {
    const fetchData = async () => {
      await CallProductList();
    };

    fetchData();
  }, []);

  const CallProductList = async () => {
    let res = await axios.get(
        `${ValidationHelper.API_BASE()}/product-list`
    );

    let productList = res.data["data"];
    setData(productList);
    console.log(productList);
  };
  // const CallProductList = async () => {
  //   let res = await axios.get(`${ValidationHelper.API_BASE}/product-list`);

  //   let productList = res.data["data"];
  //   setData(productList);
  //   console.log(productList);
  // };

  // const CallProductList = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${ValidationHelper.API_BASE()}/product-list`
  //     );
  //     const productList = response.data["data"];
  //     setData(productList);
  //     console.log(productList);
  //   } catch (error) {
  //     if (typeof axios === "undefined") {
  //       console.error("axios is not defined");
  //     } else {
  //       console.error(error);
  //     }
  //   }
  // };
  return (
    <div>
      {data == null ? (
        <FullScreenLoader />
      ) : (
        <div className="container">
          <div className="row">
            <h1>Hello</h1>
            {data.map((item, i) => (
              <div className="col-3 p-3 p-1" key={item.id}>
                <div className="card p3">
                  <img className="w-100" alt="" src={item["image"]} />
                  <h5>
                    {" "}
                    Price: $
                    {item["discount"] === 0 ? (
                      <span>{item["price"]}</span>
                    ) : (
                      <span>
                        <strike>
                          <span>{item["price"]}</span>
                        </strike>
                        {item["discount_price"]}{" "}
                      </span>
                    )}
                  </h5>
                  <h2>{item["title"]}</h2>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
