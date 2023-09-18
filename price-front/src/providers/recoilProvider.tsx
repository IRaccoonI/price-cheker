import { FC, ReactNode } from "react";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

export const RecoilProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
};
