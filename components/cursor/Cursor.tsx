import CursorSVG from "@/public/CursorSVG";

type Props = {
  color: string;
  x: number;
  y: number;
  message?: string;
};

const Cursor = ({ color, x, y }: Props) => (
  <div
    className="pointer-events-none absolute left-0 top-0"
    style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
  >
    <CursorSVG color={color} />
  </div>
);

export default Cursor;
