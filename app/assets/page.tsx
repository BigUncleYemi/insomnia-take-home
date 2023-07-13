import React from "react";
import Header from "./components/dashboard-header";
import AssetList from "./components/asset-list";

const Assets = () => {
  return (
    <main className=" bg-[#111314] w-[100vw] h-[100vh] overflow-hidden p-[10px] relative">
      <Header />
      <AssetList />
    </main>
  );
};

export default Assets;
