const exams = ["SSC CGL", "SSC CHSL", "SSC GD", "RRB", "SI & PC", "Free Test Series", "Free Course"];

export function ExamRibbon() {
  const items = [...exams, ...exams];

  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-[#ff8a1f] py-3.5 font-extrabold tracking-wide text-[#0b1530]">
      <div className="marquee-track" aria-hidden>
        {items.map((exam, i) => (
          <span key={`${exam}-${i}`} className="mx-5">
            {exam} <span className="ml-5">•</span>
          </span>
        ))}
      </div>
      <span className="sr-only">{exams.join(", ")}</span>
    </div>
  );
}
