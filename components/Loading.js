import React from "react";
import "./loading.scss";

function Loading() {
  return (
    <div className="sk-container">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube" />
        <div class="sk-cube2 sk-cube" />
        <div class="sk-cube4 sk-cube" />
        <div class="sk-cube3 sk-cube" />
      </div>
    </div>
  );
}

export default Loading;
