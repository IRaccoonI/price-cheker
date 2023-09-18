import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    fetch("/book");
  }, []);

  return <div>index</div>;
}
