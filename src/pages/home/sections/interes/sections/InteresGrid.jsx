import InteresCard
from "./InteresCard";

import "../styles/InteresGrid.css";

export default function InteresGrid({
  items
}) {

  return (

    <div className="interes-grid">

      {
        items.map((item) => (

          <InteresCard
            key={item.id}
            item={item}
          />

        ))
      }

    </div>

  );
}