import { Route } from "./+types/thing";

export const meta = ({ params }: Route.MetaArgs) => {
  const thing = params.thing;

  return [
    { title: thing },
  ];
};

export default function R({ params }: Route.ComponentProps) {
  const thing = params.thing;

  return <div>{thing}</div>;
}
