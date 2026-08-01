import "./styles/TituloCuerpoChildren.css";

import HeaderTituloCuerpoChildren from "./sections/HeaderTituloCuerpoChildren";
import CuerpoTituloCuerpoChildren from "./sections/CuerpoTituloCuerpoChildren";
import ChildrenTituloCuerpoChildren from "./sections/ChildrenTituloCuerpoChildren";

export default function TituloCuerpoChildren({
  title,
  description,
  children,
}) {
  return (
    <section className="TituloCuerpoChildren">

      <HeaderTituloCuerpoChildren
        title={title}
      />

      <CuerpoTituloCuerpoChildren
        description={description}
      />

      <ChildrenTituloCuerpoChildren>
        {children}
      </ChildrenTituloCuerpoChildren>

    </section>
  );
}
