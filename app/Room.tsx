"use client";

import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";

const Room = ({ children }: { children: React.ReactNode }) => {
  return (
    <RoomProvider
      id="my-room"
      initialPresence={{}}
      initialStorage={() => ({
        canvasObjects: new LiveMap<string, never>(),
      })}
    >
      <ClientSideSuspense fallback={<div>Loading...</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
