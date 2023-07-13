"use client"

import { AppWrapper } from "../context/app"

const AppContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AppWrapper>{children}</AppWrapper>
}

export default AppContextWrapper