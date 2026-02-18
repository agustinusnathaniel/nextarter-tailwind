/** biome-ignore-all lint/performance/noImgElement: - */

const repoName = 'agustinusnathaniel/nextarter-tailwind';

export const CTASection = () => {
  return (
    <div className="grid justify-items-center gap-2.5">
      <div className="flex items-center gap-2">
        <a
          className="flex items-center"
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="Vercel deploy button"
            className="h-8 w-full"
            src="https://vercel.com/button"
          />
        </a>

        <a
          className="flex items-center"
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          rel="noreferrer noopener"
          target="_blank"
        >
          <img
            alt="Netlify deploy button"
            className="h-8 w-full object-cover"
            src="https://www.netlify.com/img/deploy/button.svg"
          />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a
          className="rounded-lg bg-linear-to-br from-gray-100 to-green-200 p-2 font-semibold text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800"
          href={`https://github.com/${repoName}/generate`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Use This Template
        </a>
        <a
          className="rounded-3xl p-2 font-semibold text-xs"
          href={`https://github.com/${repoName}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Repository
        </a>
      </div>
    </div>
  );
};
