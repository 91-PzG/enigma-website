import { NbAccessControl } from "@nebular/security";

export const accessControl: NbAccessControl = {
  member: {
    view: ["events", "roster"],
  },
  eventOrga: {
    parent: "member",
    view: "eo",
    manage: ["events", "roster", "participation"],
  },
  hr: { parent: "member", manage: ["users"], view: "hr" },
  squadlead: { parent: "member", manage: "roster" },
  officer: { parent: "member", manage: ["roster", "participation"] },
  clanrat: { view: "*", manage: "*" },
};
