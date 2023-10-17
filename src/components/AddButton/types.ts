import { ButtonHTMLAttributes } from "react";

export type OwnProps = {
  name?: string;
  "data-testid"?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;
