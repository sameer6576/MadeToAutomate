import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function NewOrder() {
    const handleInputChange = (event) => {
      setUserInput(event.target.value);
    };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">New Order</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Name</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Name</Label>
              <Input
                id="width"
                defaultValue="Sameer"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Description</Label>
              <Input
                id="maxWidth"
                defaultValue="desc"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Quantity</Label>
              <Input
                id="height"
                defaultValue="1"
                className="col-span-2 h-8"
              />
            </div>

          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
