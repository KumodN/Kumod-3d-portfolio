import React from "react";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols gap-8">
        {abilities.map(({ imgPath, title, desc }) => (
          <div key={title} className="card-container perspective ">
            <div className="card-inner">
              {/* Front Side */}
              <div className="glassCard card-front card-border rounded-xl p-8 flex flex-col gap-4">
                <h3 className="text-white text-2xl font-semibold mt-2">
                  {title}
                </h3>
                <p className="text-white-50 text-lg">{desc}</p>
              </div>

              {/* Back Side */}
              <div className="card-back card-border rounded-xl p-8 flex items-center justify-center">
                <img
                  src={imgPath}
                  alt={title}
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
