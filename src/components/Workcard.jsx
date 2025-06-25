export const Card = ({ work, iconMap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-6">
      {work.map(({ icon, title, para }, index) => {
        const IconComponent = iconMap[icon];

        return (
          <div className="flex flex-col items-center justify-center border w-full h-60 border-gray-200 hover:border-gray-400">
            <span className="text-8xl mb-6">
              <IconComponent />
            </span>
            <h2 className="text-xl font-semibold text-zinc-600">{title}</h2>
            <p className="text-xs text-center font-medium text-zinc-700">
              {para}
            </p>
          </div>
        );
      })}
    </div>
  );
};
