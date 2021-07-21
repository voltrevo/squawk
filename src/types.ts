import { tb } from "../deps.ts";

export const Player = tb.Object({
  name: tb.string,
  id: tb.string,
});

export const Proposal = tb.Object({
  sendTime: tb.number,
  recvTime: tb.number,
  playerId: tb.string,
  value: tb.string,
});

export const ActiveRound = tb.Object({
  startTime: tb.number,
  proposals: tb.Array(Proposal),
});

export const CompletedRound = tb.Object({
  startTime: tb.number,
  endTime: tb.number,
  proposals: tb.Array(Proposal),
  consensus: tb.string,
});

export const Team = tb.Object({
  name: tb.string,
  captain: Player,
  members: tb.Array(Player),
  completedRounds: tb.Array(CompletedRound),
  activeRound: tb.Optional(ActiveRound),
});

export const Game = tb.Object({
  stateId: tb.number,
  players: tb.Array(Player),
  teams: tb.Array(Team),
});
