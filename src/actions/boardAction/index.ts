import { createSafeAction } from "@/lib/create-safe-action";

import { CreateBoard } from "./schema";
import { createBoardHandler } from "./_components/boardCreateHandler";

export const createBoard = createSafeAction(CreateBoard, createBoardHandler);