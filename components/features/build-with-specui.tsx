import FeaturesContainer from "./features-container";
import NewNextApp from "./new-next-app";
import { Layers } from "lucide-react";

const BuildWithSpecUI = () => {
  return (
    <FeaturesContainer>
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium">
        <Layers className="h-4 w-4 text-white" />
        <p className="text-white">Build with Spec UI</p>
      </div>
      <p className="mb-6 text-balance text-white/70">
        Create beautiful, accessible UI components with Spec UI&apos;s powerful
        toolkit built on top of shadcn/ui foundation.
      </p>
      <NewNextApp />
    </FeaturesContainer>
  );
};

export default BuildWithSpecUI;
