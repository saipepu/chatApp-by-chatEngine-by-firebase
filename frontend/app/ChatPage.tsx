'use client';

import { auth } from "@/firebase";
import { signOut, User } from "firebase/auth";
import { PrettyChatWindow } from "react-chat-engine-pretty";
interface ChatProps {
  user: User;
}

export default function Page(props: ChatProps) {
  console.log(props.user.email)
  return (
    <div style={{ height: "100vh" }}>
      <button
        style={{ position: "absolute", top: "0px", left: "0px", color: 'white' }}
        onClick={() => signOut(auth)}
      >
        Sign Out
      </button>
      <PrettyChatWindow
        projectId="6e1ff6a0-636a-442f-aeff-181cfcc87da8"
        username={props.user.email || ""}
        secret={props.user.uid}
        style={{ height: "100%" }}
      />
    </div>
  );
}