import { NbAccessControl } from "@nebular/security";

export const accessControl: NbAccessControl = {
  guest: {},
  member: {
    view: ["events", "roster"],
  },
  eventorga: {
    parent: "member",
    view: "eo",
    manage: ["events", "roster", "participation"],
  },
  hr: { parent: "member", manage: ["users"], view: "hr" },
  squadlead: { parent: "member", manage: "roster" },
  officer: { parent: "member", manage: ["roster", "participation"] },
  clanrat: { view: "*", manage: "*" },
};
