"use client";

import Axios from "axios";

export function getDataTeams(qty: number) {
  return Axios.get(`https://randomuser.me/api/?results=${qty}`);
}
