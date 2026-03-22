import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/lottei/rabibit-loading.json";

const Loading = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  if (!mounted) return null; 

  return (
    <div className="flex justify-center items-center h-96">
      <div className="w-48 h-48">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;