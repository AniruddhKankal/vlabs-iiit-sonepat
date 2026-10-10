import { type IconComponent } from "@/icons";

import { type MenuNavChildPreview } from "./menu-nav-child-preview";

export type MenuNavChild = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
  icon: IconComponent;
  preview: MenuNavChildPreview;
};
