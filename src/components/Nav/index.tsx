import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "~/App";
import styles from "./nav.module.css";

export default function Nav() {
  return (
    <>
      {PAGES.map((p) => (
        <Link key={p.label} to={p.path}>
          <span className={styles.navItem}>{p.label}</span>
        </Link>
      ))}
    </>
  );
}
