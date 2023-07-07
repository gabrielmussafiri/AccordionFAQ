import AccordionItems from "./AccordionItems";

export default function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItems
          title={el.title}
          text={el.text}
          num={index}
          key={index}
        />
      ))}
    </div>
  );
}
