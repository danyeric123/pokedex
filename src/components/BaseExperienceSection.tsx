import React from "react";

const BaseExperienceSection: React.FC<{ baseExperience: number }> = ({
  baseExperience,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold my-4">Base Experience</h2>
      <p>{baseExperience}</p>
    </div>
  );
};

export default BaseExperienceSection;
