import { useEffect, useState } from "react";

export default function SpamClick(){
    if (document.fullscreenEnabled) {
        console.log("sa marche")
        // Le navigateur prend en charge l'API Fullscreen
      } else {
        console.log("sa marche pas")
        // Le navigateur ne prend pas en charge l'API Fullscreen
      }
      
}