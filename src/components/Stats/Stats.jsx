import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

const stats = {};

function Stats({ orders, leads }) {
  const totalQuantity = orders.reduce((accumulator, item) => {
    // The quantity is stored at index 0 in the 'quantity' array

    return accumulator + item.quantity[0];
  }, 0);
  const totalOrders = orders.reduce((accumulator, item) => {
    // The quantity is stored at index 0 in the 'quantity' array

    return accumulator + 1;
  }, 0);
  const totalLeads = leads.reduce((accumulator, item) => {
    // The quantity is stored at index 0 in the 'quantity' array

    return accumulator + 1;
  }, 0);
  console.log(totalQuantity);
  const initialStats = {
    totalOrders: [0, "Total Orders"],
    newStocks: [0, "New Stocks"],
    deadStocks: [0, "Dead Stocks"],
    totalLeads: [0, "Total Leads"],
    totalRevenue: [0, "Total Revenue"],
  };
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    setStats({
      ...stats,
      totalOrders: [totalOrders, "Total Orders"],
      newStocks: [totalQuantity, "New Stocks"],
      totalLeads: [totalLeads, "Total Leads "],
    });
  }, [orders]);

  const updateStats = () => {
    // Updating the state with new values
    setStats({
      totalOrders: stats.totalOrders + 1, // Increment totalOrders by 1
      newStocks: stats.newStocks + 1, // Increment newStocks by 1
      stockValues: [...stats.stockValues, 42], // Add a new value (e.g., 42) to stockValues
    });
  };
  return (
    <div className="flex flex-col justify-between mt-8 sm:flex-row">
      {Object.entries(stats).map(([key, value]) => (
        <Card
          className="w-[100%] h-[200px] text-center content-center  sm:w-[200px]"
          key={key}
        >
          <CardHeader className=" h-[100%] flex justify-around ">
            <CardTitle className="text-5xl text-slate-800">
              {value[0]}
            </CardTitle>
            <CardDescription className="text-slate-800  font-bold text-xl">
              {value[1]}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default Stats;
