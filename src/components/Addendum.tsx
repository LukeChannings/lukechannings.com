import React, { ReactNode } from "react"

import * as styles from "./Addendum.module.css"

export const Addendum = ({ children }: { children: ReactNode }) => (
  <div className={styles.addendum}>
    <p>{children}</p>
  </div>
)
