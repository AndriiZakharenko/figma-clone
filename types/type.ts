import { BaseUserMeta, User } from "@liveblocks/client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Presence = any;

export type LiveCursorProps = {
  others: readonly User<Presence, BaseUserMeta>[];
};

export enum CursorMode {
  Hidden,
  Chat,
  ReactionSelector,
  Reaction,
}

export type CursorState =
  | {
      mode: CursorMode.Hidden;
    }
  | {
      mode: CursorMode.Chat;
      message: string;
      previousMessage: string | null;
    }
  | {
      mode: CursorMode.ReactionSelector;
    }
  | {
      mode: CursorMode.Reaction;
      reaction: string;
      isPressed: boolean;
    };

export type CursorChatProps = {
  cursor: { x: number; y: number };
  cursorState: CursorState;
  setCursorState: (cursorState: CursorState) => void;
  updateMyPresence: (
    presence: Partial<{
      cursor: { x: number; y: number };
      cursorColor: string;
      message: string;
    }>
  ) => void;
};

export type Reaction = {
  value: string;
  timestamp: number;
  point: { x: number; y: number };
};

export type ReactionEvent = {
  x: number;
  y: number;
  value: string;
};

export type ActiveElement = {
  name: string;
  value: string;
  icon: string;
} | null;

export type NavbarProps = {
  activeElement?: ActiveElement;
  imageInputRef?: React.MutableRefObject<HTMLInputElement | null>;
  handleImageUpload?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleActiveElement?: (element: ActiveElement) => void;
};
