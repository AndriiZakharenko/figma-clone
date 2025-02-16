import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Presence = {};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Storage = {};

export const {
  RoomProvider,
  useMyPresence,
  useStorage,
  useOthers,
  useEventListener,
} = createRoomContext<Presence, Storage>(client);
