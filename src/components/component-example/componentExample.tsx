import { useEffect, useState } from "react";
import "./style.scss";

const ComponentExample = (args: any) => {
  const [colors, setColors] = useState<any>();

  useEffect(() => {
    setColors(args);
  }, [args]);

  return (
    <div className="container-box">
      <div
        className="box"
        style={{
          background: colors?.primary,
        }}
      >
        <p>primary</p>
      </div>

      <div
        className="box"
        style={{
          background: colors?.secondary,
        }}
      >
        <p>secondary</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.tertiary,
        }}
      >
        <p>tertiary</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.success,
        }}
      >
        <p>success</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.warning,
        }}
      >
        <p>warning</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.danger,
        }}
      >
        <p>danger</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.light,
        }}
      >
        <p>light</p>
      </div>
      <div
        className="box"
        style={{
          background: colors?.disabled,
        }}
      >
        <p>disabled</p>
      </div>
    </div>
  );
};

export default ComponentExample;
