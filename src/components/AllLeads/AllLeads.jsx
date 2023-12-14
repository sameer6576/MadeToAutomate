import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function AllLeads({ leads }) {
  return (
    <div className="mt-8 p-8  ">
      <div className="text-left flex content-left justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">All Orders</h1>
          <p>A summary of your orders</p>
        </div>
        {/* <NewOrder/> */}
        <Button asChild>
          <Link to="/">Back</Link>
        </Button>
      </div>
      {leads.map((item, index) => (
        <Card className="flex m-8 bg-slate-200 hover:bg-slate-300" key={index}>
          <div className="flex justify-between w-[100%]">

            <CardHeader className="text-slate-800 w-[70%]">
              <CardTitle className="text-left">{item.Name[0]}</CardTitle>
              <CardDescription className="text-left">
                <strong>{item.text[0]}</strong>
              </CardDescription>

              <CardDescription className="flex justify-between">
                {`${item.quantity[1]} `}
                {`${item.quantity[0]} pieces`}
              </CardDescription>
            </CardHeader> 
          </div>
        </Card>
      ))}
    </div>
  );
}

export default AllLeads;
