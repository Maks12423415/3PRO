import { Card } from "@/components/ui/card"; // Import komponentów UI
import CarCard from "./CarCard"; // Import komponentu pojedynczej karty samochodu

export default function CarList({ data, onDelete, onUpdate, onToggleStatus }) {
  return (
    <div className="flex flex-wrap space-x-10 p-10 items-center gap-10">
      {/* Iteracja po danych samochodów i renderowanie komponentów CarCard */}
      {data.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
}
