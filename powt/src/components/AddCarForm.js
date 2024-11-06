import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function AddCarForm({ save, setZdjecie, setDane }) {
  return (
    <Card className="w-[300px] h-[400px]">
      <CardContent className="justify-center items-center flex h-[400px]">
        <Sheet>
          <SheetTrigger>
            <FilePlus size={180} />
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[40vh]">
            <SheetHeader>
              <SheetTitle>Add a new car</SheetTitle>
              <SheetDescription>
                <Card className="flex flex-wrap w-[400px] gap-2">
                  <Label>Marka</Label>
                  <Input
                    onChange={(e) =>
                      setDane((prev) => ({ ...prev, Marka: e.target.value }))
                    }
                    placeholder="Marka..."
                  />
                  <Label>Model</Label>
                  <Input
                    onChange={(e) =>
                      setDane((prev) => ({ ...prev, Model: e.target.value }))
                    }
                    placeholder="Model..."
                  />
                  <Label>Image</Label>
                  <Input
                    type="file"
                    onChange={(e) => setZdjecie(e.target.files[0])}
                  />
                  <Button onClick={save}>Save</Button>
                </Card>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
}
