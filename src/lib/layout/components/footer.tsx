export const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a
            href="https://agustinusnathaniel.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            agustinusnathaniel.com
          </a>
        </p>
      </div>
    </footer>
  );
};
