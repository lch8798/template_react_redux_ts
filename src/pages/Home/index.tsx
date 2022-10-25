import React, { useEffect } from "react";
import type { Unsubscribe } from "@reduxjs/toolkit";
import { setupThemeListeners } from "@services/theme/listeners";
import { setupCounterListeners } from "@services/counter/listeners";
import ChangeThemeForm from "@components/ChangeThemeForm";
import CounterList from "@components/CounterList";
import CreateCounterForm from "@components/CreateCounterForm";
import { startAppListening } from "~/store";

export default function Home() {
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
        <h1>Counter example</h1>
      </header>
      <ChangeThemeForm />
      <CreateCounterForm />
      <CounterList />
    </div>
  );
}
