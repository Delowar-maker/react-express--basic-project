import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import ValidationHelper from "../utility/ValidationHelper.js";
import FullScreenLoader from "./FullScreenLoader";

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
    let res = await axios.get(`${ValidationHelper.API_BASE()}/product-list`);

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

  const AddToCart = async (id) => {
    try {
      let res = await axios.post(
        `${ValidationHelper.API_BASE()}/create-cart/${id}`,
        ValidationHelper.tokenHeader()
      );

      if (res.data["msg"] === "success") {
        toast.success("Request Success");
      } else {
        toast.error("Request Failed");
      }
    } catch (error) {
      ValidationHelper.Unauthorized(error.response.status);
    }
  };
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
                  <button onClick={() => AddToCart(item["id"])}>
                    Add To Cart
                  </button>
                  {/* <p>{item.body}</p> */}
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
