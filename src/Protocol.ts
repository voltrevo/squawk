import { rpc, tb } from "../deps.ts";

import * as types from "./types.ts";

const Response = tb.Optional(tb.string);

export default rpc.Protocol({
  nextState: rpc.Method(tb.Object({
    currentStateId: tb.number,
  }))(Response),

  addPlayer: rpc.Method(tb.Object({
    player: types.Player,
  }))(Response),

  addTeam: rpc.Method(tb.Object({
    name: tb.string,
    captain: types.Player,
  }))(Response),

  joinTeam: rpc.Method(tb.Object({
    playerId: tb.string,
    teamName: tb.string,
  }))(Response),

  startRound: rpc.Method(tb.Object({
    captainId: tb.string,
    teamName: tb.string,
  }))(Response),

  setConsensus: rpc.Method(tb.Object({
    captainId: tb.string,
    teamName: tb.string,
    consensus: tb.string,
  }))(Response),

  propose: rpc.Method(tb.Object({
    sendTime: tb.number,
    playerId: tb.string,
    value: tb.string,
  }))(Response),
});
