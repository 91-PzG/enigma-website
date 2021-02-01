import { NbMenuItem } from "@nebular/theme";

export class NbMenuItemWithPermissions extends NbMenuItem {
  access?: { permission: string; resource: string };
  children?: NbMenuItemWithPermissions[];
}

export const MENU_ITEMS: NbMenuItemWithPermissions[] = [
  { title: "Home", icon: "home-outline", link: "/home", home: true },
  {
    title: "Events",
    icon: "calendar-outline",
    link: "/events",
    access: { permission: "view", resource: "events" },
  },
  {
    title: "Human Resources",
    icon: "people-outline",
    children: [
      {
        title: "Dashboard",
        link: "/hr/dashboard",
      },
      {
        title: "Archive",
        link: "/hr/archive",
      },
    ],
    access: { permission: "view", resource: "hr" },
  },
  {
    title: "Event Organisation",
    icon: "edit-outline",
    children: [
      {
        title: "Create Event",
        link: "/eo/create",
      },
    ],
    access: { permission: "view", resource: "eo" },
  },
];
