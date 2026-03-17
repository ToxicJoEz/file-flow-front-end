import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import phase0image from "../assets/search.svg";
import phase1image from "../assets/launch.svg";
import phase2image from "../assets/idea.svg";
import phase3image from "../assets/cloud.svg";
import phase4image from "../assets/document.svg";
import rightArrow from "../assets/right-arrow.svg";
import check from "../assets/check-white.svg";
import progressArrow from "../assets/progress-arrow.svg";

export default function RoadMap() {
  const [activePhase, setActivePhase] = useState(0);
  const detailsRef = useRef(null);

  const phaseIcons = [
    phase0image,
    phase1image,
    phase2image,
    phase3image,
    phase4image,
  ];

  // ✅ NEW: controlled scroll with offset
  const handlePhaseClick = (phase) => {
    setActivePhase(phase);

    setTimeout(() => {
      if (detailsRef.current) {
        const yOffset = -120;
        const y =
          detailsRef.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const phaseDetails = {
    0: {
      title: "Phase 0",
      subtitle: "Closed Beta — Core Search Foundation",
      text1: `Phase 0 focuses on building the core of FileFlow’s document search engine. In this stage, we are developing and refining the foundational features that
allow users to search across large collections of documents quickly and reliably. The goal is to make finding information inside files fast, accurate, and
easy.`,
      text2: `During this phase, our main focus is reliability, accuracy, and performance. We want FileFlow to handle real-world document collections smoothly, even
when files are messy, large, or inconsistent.
By building a strong search foundation first, we ensure that future features—such as advanced search, AI assistance, and integrations—are built on a
system users can trust.`,
      text3: `Phase 0 is currently running as part of our Closed Beta, where we are working closely with early users to refine the search experience. As the platform
matures, upcoming phases will introduce more powerful tools, automation features, and deeper document intelligence capabilities.`,
      features: [
        { name: "Multi-file Search", done: true },
        { name: "Keyword Search with Context", done: true },
        { name: "File Location References", done: true },
        { name: "Smart Indexing" },
        { name: "OCR Support for Scanned Files" },
        { name: "Organized Results" },
        { name: "Export Results to Excel" },
      ],
    },

    1: {
      title: "Phase 1",
      subtitle: "Public Launch",
      text1:
        "Phase 1 focuses on delivering a polished, stable, and user-ready desktop application. The goal is to ensure FileFlow is reliable for daily use while providing professional exports and a smooth user experience",
      text2:
        "We aim to give users a stable, trustworthy platform that feels polished and ready for real work. This phase is about hardening features, preventingcrashes, and ensuring professional outputs.",
      text3:
        "After the public launch, we will expand FileFlow with smarter search features, AI-powered discovery, and bulk document utilities in upcoming phases.",
      features: [
        { name: "Installer & Clean Packaging" },
        { name: "Professional Excel Exports" },
        { name: "Open-at-Location Behavior" },
        { name: "Performance Modes" },
        { name: "PDF editing" },
        { name: "Bulk file editing" },
      ],
    },

    2: {
      title: "Phase 2",
      subtitle: "Power Search & Smart Features",
      text1:
        "Phase 2 introduces advanced search capabilities and smarter tools for power users. The goal is to reduce missed matches, allow complex queries, and give users more control over how they find and manage information.",
      text2:
        "This phase is about making FileFlow a daily productivity tool. We’re prioritizing smarter search, flexibility, and bulk actions so users can get work done faster with fewer tools.",
      text3:
        "After Phase 2, FileFlow will expand beyond local files into cloud storage and email integrations in next phases.",
      features: [
        { name: "Fuzzy Search & Boolean Operators" },
        { name: "Semantic & Natural Language Search" },
        { name: "Bulk Tools Pack" },
      ],
    },

    3: {
      title: "Phase 3",
      subtitle: "Cloud & Email Integrations",
      text1:
        "Phase 3 expands FileFlow’s capabilities beyond local files. Users will be able to search cloud storage platforms and email attachments while maintaining privacy and permissions control.",
      text2:
        "The focus is expanding search reach while maintaining privacy, reliability, and speed. FileFlow will handle cloud and email files safely and efficiently, preparing the platform for enterprise use.",
      text3: "",
      features: [
        { name: "Google Drive Integration" },
        { name: "OneDrive Integration" },
        { name: "Dropbox Integration" },
        { name: "Email Attachment Search" },
      ],
    },

    4: {
      title: "Phase 4",
      subtitle: "Document Intelligence",
      text1:
        "Phase 4 moves FileFlow beyond keyword search into smart document understanding. Users will be able to extract, compare, and analyze structured information for professional workflows.",
      text2:
        "This phase is about unlocking deeper insights from documents, enabling advanced workflows, and supporting professional users in technical, legal, and audit-heavy industries.",
      text3:
        "After Phase 4, FileFlow will continue evolving with new document intelligence features, automation improvements, and advanced integrations based on user feedback.",
      features: [
        { name: "Document Data Extraction" },
        { name: "Smart Document Comparison" },
        { name: "Engineering Drawing Support" },
      ],
    },
  };

  const phase = phaseDetails[activePhase];

  return (
    <PageWrapper>
      <section className="roadmap-section">
        <div className="text-center roadmap-header">
          <h1 className="roadmap-title">
            The <span>FileFlow </span> Roadmap
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto">
            A transparent look at how FileFlow is evolving — from the first
            closed beta to powerful document intelligence features in the
            future.
          </p>
        </div>

        <div className="roadmap-cards-container">
          {[0, 1, 2, 3, 4].map((p) => {
            const titles = [
              "Closed Beta — Core Search Foundation",
              "Public Launch",
              "Power Search & Smart Features",
              "Cloud & Email Integrations",
              "Document Intelligence",
            ];

            const descriptions = [
              "Build a fast and reliable search engine for local documents with indexing, organized results, and OCR for scanned files.",
              "Launch a polished and stable desktop app focused on performance.",
              "Introduce advanced search features and AI powered search tools.",
              "Expand search beyond local files.",
              "Add intelligent document analysis tools.",
            ];

            return (
              <React.Fragment key={p}>
                <div
                  className={`roadmap-card p-6 ${
                    activePhase === p ? "active" : ""
                  }`}
                  onClick={() => handlePhaseClick(p)}
                >
                  {p === 0 && <p className="current-phase">Current Phase</p>}

                  <h1 className="text-2xl font-bold mb-2">Phase {p}</h1>

                  <h2>{titles[p]}</h2>

                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {descriptions[p]}
                  </p>

                  <div className="roadmap-icon-circle">
                    <img src={phaseIcons[p]} />
                  </div>
                </div>

                {p !== 4 && <img className="roadmap-arrow" src={rightArrow} />}
              </React.Fragment>
            );
          })}
        </div>

        {/* ✅ REF ADDED HERE */}
        <div className="roadmap-detail-card" ref={detailsRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.45 }}
            >
              <div className="roadmap-detail-header">
                <div className="roadmap-phase-badge">{phase.title}</div>

                <div className="roadmap-phase-icon">
                  <img src={phaseIcons[activePhase]} />
                </div>
              </div>

              <h2 className="roadmap-detail-title">{phase.subtitle}</h2>

              <div className="roadmap-accent-bar" />

              <p className="text-gray-600 leading-relaxed">{phase.text1}</p>

              <div className="roadmap-divider" />

              <p className="roadmap-subtitle">Features in This Phase</p>

              <div className="roadmap-features-grid">
                {phase.features.map((feature, i) => {
                  const done = feature.done;

                  return (
                    <div key={i} className="roadmap-details-point">
                      <div
                        className={`roadmap-details-icon-circle ${
                          done ? "" : "yellow"
                        }`}
                      >
                        <img src={done ? check : progressArrow} />
                      </div>

                      {feature.name}
                    </div>
                  );
                })}
              </div>

              <div className="roadmap-divider" />

              <p className="roadmap-subtitle">Our Focus</p>

              <p className="text-gray-600 leading-relaxed">{phase.text2}</p>

              <p className="text-gray-600 leading-relaxed mt-4">
                {phase.text3}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageWrapper>
  );
}