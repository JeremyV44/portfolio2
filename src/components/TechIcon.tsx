export const TechIcon = ({ component }: { component: React.ElementType | string }) => {
  const Component = component;

  return (
    <>
      {/* Icône avec le dégradé */}
      <Component className="size-10" fill="url(#tech-icon-gradient)" />

      {/* Définition du gradient */}
      <svg className="size-0 absolute">
        <defs>
          <linearGradient id="tech-icon-gradient" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="rgb(110, 231, 183)" />
            <stop offset="100%" stopColor="rgb(56, 189, 248)" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};
