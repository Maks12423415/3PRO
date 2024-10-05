export default function NameList({ imie, color, ok }) {
  // Ustawienie klasy zależnie od statusu "ok"
  var classname = "";

  if (ok) {
    classname = "pl-2 w-1/2 border-2 bg-green-500";
  } else {
    classname = "pl-2 w-1/2 border-2 bg-red-500";
  }

  return (
    <div className={`${color} ${classname}`}>
      {/* Wyświetlanie imienia */}
      <h1>{imie}</h1>
    </div>
  );
}
