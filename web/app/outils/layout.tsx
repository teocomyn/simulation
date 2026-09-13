import type { ReactNode } from "react";
import { InstrumentChrome } from "@/components/InstrumentChrome";

export default function OutilsLayout({ children }: { children: ReactNode }) {
  return <InstrumentChrome>{children}</InstrumentChrome>;
}
