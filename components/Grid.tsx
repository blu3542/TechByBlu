import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"; // Combined imports
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      {" "}
      <BentoGrid>
        {gridItems.map(
          ({
            id,
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem // Properly closed the map function call
              key={id} // Added key attribute
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
