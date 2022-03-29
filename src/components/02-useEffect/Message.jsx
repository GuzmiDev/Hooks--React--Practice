import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const { x, y } = coords;

  useEffect(() => {
    // MALA PRACTICA PORQUE AL DESMONTAR Y CREAR EL COMPONETE, SE AGREGARÁ OTRO ADDEVENTLISTENER
    // window.addEventListener("mousemove", (e) => {
    //   console.log({ x: e.x, y: e.y });
    // });

    const coordenadas = (e) => {
      setCoords({ x: e.x, y: e.y });
    };

    window.addEventListener("mousemove", coordenadas);

    return () => {
      window.removeEventListener("mousemove", coordenadas);
    };
  }, []);

  return (
    <div>
      <h3>
        x:{x}, y:{y}
      </h3>
    </div>
  );
};
