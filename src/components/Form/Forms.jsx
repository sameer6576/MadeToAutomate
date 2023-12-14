import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Forms = ({ setOrders }) => {
  const [formData, setFormData] = useState({
    Name: "",
    desc: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new product data to the parent component
    // Rese t the form fields
    setFormData({
      name: "",
      productId: "",
      quantity: 0,
    });
  };

  useEffect(() => {
    const newOrder = formData
    setOrders([...Orders]);
  }, [formData]);

  return (
    <div>
      <h1 className="font-bold ">Add New Orders</h1>
      <form
        className="p-8 flex flex-col gap-4 justify-between"
        onSubmit={handleSubmit}
      >
        <label className="flex  justify-around p-2 my-auto content-center align-center">
          Name:
          <input
            className="p-2 rounded-md"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="flex  justify-around p-2 my-auto content-center align-center ">
          Product ID:
          <input
            className="p-2 rounded-md"
            type="text"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="flex  justify-around p-2 my-auto content-center align-center ">
          Quantity:
          <input
            className="p-2 rounded-md"
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <Button type="submit">Add Product</Button>
      </form>
    </div>
  );
};

export default Forms;
