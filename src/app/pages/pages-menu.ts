import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  { title: "Home", icon: "home-outline", link: "/home", home: true },
  { title: "Events", icon: "calendar-outline", link: "/events" },
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
  },
];
