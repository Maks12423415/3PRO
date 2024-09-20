function ConditionalDisplay({ isVisible }) {
  return (
    <div>
      {" "}
      {isVisible ? (
        <p>Treść widoczna, bo isVisible jest prawdziwe</p>
      ) : (
        <p>Brak danych do wyświetlenia</p>
      )}
    </div>
  );
}
export default ConditionalDisplay;
