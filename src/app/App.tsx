import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { MindfulnessPage } from "./components/MindfulnessPage";
import { OCDPage } from "./components/OCDPage";
import { MindfulnessSelfCare } from "./components/MindfulnessSelfCare";
import { OCDSelfCare } from "./components/OCDSelfCare";
import { HealthOCDPage } from "./components/HealthOCDPage";
import { HoardingOCDPage } from "./components/HoardingOCDPage";
import { CompulsiveHoardingArticle } from "./components/CompulsiveHoardingArticle";
import { HoardingDisorderArticle } from "./components/HoardingDisorderArticle";
import { OCDSymptomArticle } from "./components/OCDSymptomArticle";
import { HoardingPhenotypeArticle } from "./components/HoardingPhenotypeArticle";
import { HoardingControversiesArticle } from "./components/HoardingControversiesArticle";
import { LifeBeyondPilesStory } from "./components/LifeBeyondPilesStory";
import { JoanTeacherStory } from "./components/JoanTeacherStory";
import { JeanneLeierStory } from "./components/JeanneLeierStory";
import { ThatHoarderStory } from "./components/ThatHoarderStory";
import { BrainBehindHoardingStory } from "./components/BrainBehindHoardingStory";
import { TrichotillomaniaPage } from "./components/TrichotillomaniaPage";
import { TrichMyth1 } from "./components/TrichMyth1";
import { TrichMyth2 } from "./components/TrichMyth2";
import { TrichMyth3 } from "./components/TrichMyth3";
import { TrichMyth4 } from "./components/TrichMyth4";
import { TrichMyth5 } from "./components/TrichMyth5";
import { TrichArticle1 } from "./components/TrichArticle1";
import { TrichArticle2 } from "./components/TrichArticle2";
import { TrichArticle3 } from "./components/TrichArticle3";
import { TrichArticle4 } from "./components/TrichArticle4";
import { TrichArticle5 } from "./components/TrichArticle5";
import { ContaminationOCDPage } from "./components/ContaminationOCDPage";
import { ContaminationTip1 } from "./components/ContaminationTip1";
import { ContaminationTip2 } from "./components/ContaminationTip2";
import { ContaminationTip3 } from "./components/ContaminationTip3";
import { ContaminationTip4 } from "./components/ContaminationTip4";
import { ContaminationTip5 } from "./components/ContaminationTip5";
import { ContaminationArticle1 } from "./components/ContaminationArticle1";
import { ContaminationArticle2 } from "./components/ContaminationArticle2";
import { ContaminationArticle3 } from "./components/ContaminationArticle3";
import { ContaminationArticle4 } from "./components/ContaminationArticle4";
import { ContaminationArticle5 } from "./components/ContaminationArticle5";
import { PureOOCDPage } from "./components/PureOOCDPage";
import { PureOArticle1 } from "./components/PureOArticle1";
import { PureOArticle2 } from "./components/PureOArticle2";
import { PureOArticle3 } from "./components/PureOArticle3";
import { PureOArticle4 } from "./components/PureOArticle4";
import { PureOArticle5 } from "./components/PureOArticle5";
import { PureOStory1 } from "./components/PureOStory1";
import { PureOStory2 } from "./components/PureOStory2";
import { PureOStory3 } from "./components/PureOStory3";
import { PureOStory4 } from "./components/PureOStory4";
import { PureOStory5 } from "./components/PureOStory5";

function App() {
  return (
    <BrowserRouter basename="/ocd_new">
      <Routes>
        <Route path="/" element={<OCDSelfCare />} />
        <Route path="/ocd" element={<OCDPage />} />
        <Route path="/ocd-self-care" element={<OCDSelfCare />} />
        <Route path="/service/meditation" element={<MindfulnessPage />} />
        <Route path="/mindfulness-self-care" element={<MindfulnessSelfCare />} />
        
        {/* Health OCD */}
        <Route path="/health-ocd" element={<HealthOCDPage />} />
        
        {/* Hoarding OCD */}
        <Route path="/hoarding-ocd" element={<HoardingOCDPage />} />
        <Route path="/compulsive-hoarding-article" element={<CompulsiveHoardingArticle />} />
        <Route path="/hoarding-disorder-article" element={<HoardingDisorderArticle />} />
        <Route path="/ocd-symptom-article" element={<OCDSymptomArticle />} />
        <Route path="/hoarding-phenotype-article" element={<HoardingPhenotypeArticle />} />
        <Route path="/hoarding-controversies-article" element={<HoardingControversiesArticle />} />
        <Route path="/life-beyond-piles-story" element={<LifeBeyondPilesStory />} />
        <Route path="/joan-teacher-story" element={<JoanTeacherStory />} />
        <Route path="/jeanne-leier-story" element={<JeanneLeierStory />} />
        <Route path="/that-hoarder-story" element={<ThatHoarderStory />} />
        <Route path="/brain-behind-hoarding-story" element={<BrainBehindHoardingStory />} />
        
        {/* Trichotillomania */}
        <Route path="/trichotillomania" element={<TrichotillomaniaPage />} />
        <Route path="/trich-myth-1" element={<TrichMyth1 />} />
        <Route path="/trich-myth-2" element={<TrichMyth2 />} />
        <Route path="/trich-myth-3" element={<TrichMyth3 />} />
        <Route path="/trich-myth-4" element={<TrichMyth4 />} />
        <Route path="/trich-myth-5" element={<TrichMyth5 />} />
        <Route path="/trich-article-1" element={<TrichArticle1 />} />
        <Route path="/trich-article-2" element={<TrichArticle2 />} />
        <Route path="/trich-article-3" element={<TrichArticle3 />} />
        <Route path="/trich-article-4" element={<TrichArticle4 />} />
        <Route path="/trich-article-5" element={<TrichArticle5 />} />
        
        {/* Contamination OCD */}
        <Route path="/contamination-ocd" element={<ContaminationOCDPage />} />
        <Route path="/contamination-tip-1" element={<ContaminationTip1 />} />
        <Route path="/contamination-tip-2" element={<ContaminationTip2 />} />
        <Route path="/contamination-tip-3" element={<ContaminationTip3 />} />
        <Route path="/contamination-tip-4" element={<ContaminationTip4 />} />
        <Route path="/contamination-tip-5" element={<ContaminationTip5 />} />
        <Route path="/contamination-article-1" element={<ContaminationArticle1 />} />
        <Route path="/contamination-article-2" element={<ContaminationArticle2 />} />
        <Route path="/contamination-article-3" element={<ContaminationArticle3 />} />
        <Route path="/contamination-article-4" element={<ContaminationArticle4 />} />
        <Route path="/contamination-article-5" element={<ContaminationArticle5 />} />
        
        {/* Pure O OCD */}
        <Route path="/pure-o-ocd" element={<PureOOCDPage />} />
        <Route path="/pure-o-article-1" element={<PureOArticle1 />} />
        <Route path="/pure-o-article-2" element={<PureOArticle2 />} />
        <Route path="/pure-o-article-3" element={<PureOArticle3 />} />
        <Route path="/pure-o-article-4" element={<PureOArticle4 />} />
        <Route path="/pure-o-article-5" element={<PureOArticle5 />} />
        <Route path="/pure-o-story-1" element={<PureOStory1 />} />
        <Route path="/pure-o-story-2" element={<PureOStory2 />} />
        <Route path="/pure-o-story-3" element={<PureOStory3 />} />
        <Route path="/pure-o-story-4" element={<PureOStory4 />} />
        <Route path="/pure-o-story-5" element={<PureOStory5 />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;