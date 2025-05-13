import { useEffect } from "react";

const fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change to `false` to test the error handling
      if (success) {
        resolve({ message: "Data fetched successfully!", data: [1, 2, 3, 4] });
      } else {
        reject("Error: Unable to fetch data.");
      }
    }, 2000);
  });
};

const PromiseExample = () => {
  useEffect(() => {
    fetchDataPromise()
      .then((data) => {
        console.log("Resolved:", data);
      })
      .catch((error) => {
        console.error("Rejected:", error);
      });
  }, []);

  return <h2>Check the console for Promise results!</h2>;
};

export default PromiseExample;
