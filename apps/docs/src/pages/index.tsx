import { Button } from "@unstyled/core";
import { useIsomorphicLayoutEffect } from "@unstyled/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("unstyled docs page");
  }, []);
  return (
    <div>
      <h1>unstyled Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
