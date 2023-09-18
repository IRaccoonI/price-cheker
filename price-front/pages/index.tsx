import { fetchSearch } from "@/src/fetchers/search";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    fetchSearch();
  }, []);

  return <div>index</div>;
}
