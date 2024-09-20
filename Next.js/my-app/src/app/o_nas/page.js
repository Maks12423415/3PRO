import ConditionalDisplay from "@/components/ConditionalDisplay";

export default function o_nas() {
  return (
    <div>
      <h4>Flaga jest ustawiona na flase</h4>
      <ConditionalDisplay isVisible={false} />
    </div>
  );
}
