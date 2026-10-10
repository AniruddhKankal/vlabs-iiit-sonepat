import { type MenuNavChild } from "./menu-nav-child";

export type MenuNavItem = {
  label: string;
  href?: string;
  children?: readonly MenuNavChild[];
};
