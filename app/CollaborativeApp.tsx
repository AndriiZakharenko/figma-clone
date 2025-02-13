"use client";

import { useOthers } from "@liveblocks/react/suspense";

const CollaborativeApp = () => {
  const others = useOthers();
  const userCount = others.length;
  return <div>There are {userCount} other user(s) online</div>;
};

export default CollaborativeApp;
