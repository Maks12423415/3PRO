//imports
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PocketBase from "pocketbase";

export default function CarCard(car) {
  const pb = new PocketBase("http://172.16.15.149:8080");
  return (
    <Card className={"w-[300px] h-[400px]"}>
      <CardHeader>
        <CardTitle>
          <Image
            src={pb.files.getUrl(car, car.Zdj)}
            alt={car.Zdj}
            width={300}
            height={200}
          />
        </CardTitle>
        <CardDescription>{car.Model}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{car.Marka}</p>
      </CardContent>
      <CardFooter>
        <p></p>
      </CardFooter>
    </Card>
  );
}
