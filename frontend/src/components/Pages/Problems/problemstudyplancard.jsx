function ProblemStudyPlanCard({ title, subtitle, image }) {
  return (
    <div className="bg-[#ffffff1a] flex p-2 rounded-xl hover:bg-[#ffffff2a] transition">
      <img
        className="h-[4.5rem] w-[4.5rem] object-cover rounded-md"
        src={image}
        alt={title || "Study Plan"}
      />
      <div className="flex flex-col p-3">
        <div className="font-medium">{title}</div>
        <div className="text-gray-400 text-sm">{subtitle}</div>
      </div>
    </div>
  );
}

export default ProblemStudyPlanCard;
