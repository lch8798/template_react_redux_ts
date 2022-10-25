import React, { useEffect } from "react";
import type { Unsubscribe } from "@reduxjs/toolkit";
import { setupThemeListeners } from "@services/theme/listeners";
import { setupCounterListeners } from "@services/counter/listeners";
import configs from "@configs/index";
import { startAppListening } from "~/store";

// assets
import reactImg from "@assets/img/react.svg";

export default function About() {
  useEffect(() => {
    // component mount
    const subscriptions: Unsubscribe[] = [
      setupCounterListeners(startAppListening),
      setupThemeListeners(startAppListening),
    ];

    // component unmount
    return () => subscriptions.forEach((unsubscribe) => unsubscribe());
  }, []);

  return (
    <div>
      <header>
        <h1>About</h1>
        <p>{configs.common.title} project</p>
        <img src={reactImg} style={{ width: 100 }} />
      </header>
    </div>
  );
}
