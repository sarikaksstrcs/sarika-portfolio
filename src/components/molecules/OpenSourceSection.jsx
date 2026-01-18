import { useState } from "react";
import { openSourceContributions } from "../../constants/openSource";
import { OpenSourceStats } from "../atoms/OpenSourseStats";
import { ContributionDetailModal } from "../atoms/ContributionDetailModal";
import { ContributionCard } from "../atoms/ContributionCard";

export const OpenSourceSection = ({ completedActions, addXP }) => {
  const [selectedContribution, setSelectedContribution] = useState(null);

  return (
    <>
      <section className="py-20 px-6 border-t-2 border-white/20">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-4 font-mono">
          // OPEN_SOURCE_CONTRIBUTIONS
        </h2>
        <p className="text-center text-gray-400 mb-4 font-mono">
          Contributing to the community, one PR at a time
        </p>
        <p className="text-center text-sm text-white mb-16 font-mono">
          +80 XP per contribution explored
        </p>
        
        <OpenSourceStats />
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openSourceContributions.map((contribution) => (
            <ContributionCard
              key={contribution.id}
              contribution={contribution}
              completedActions={completedActions}
              onClick={() => setSelectedContribution(contribution)}
            />
          ))}
        </div>
      </section>

      <ContributionDetailModal
        contribution={selectedContribution}
        onClose={() => setSelectedContribution(null)}
        completedActions={completedActions}
        addXP={addXP}
      />
    </>
  );
};
