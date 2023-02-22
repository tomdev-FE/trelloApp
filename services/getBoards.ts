import { Dispatch, SetStateAction } from "react";
import { Boards } from "@/types/Board";

export default async function getBoards(
  setBoards: Dispatch<SetStateAction<Boards>>
) {
  const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/board`, {});
  const res = await req.json();

  setBoards(res);
}
