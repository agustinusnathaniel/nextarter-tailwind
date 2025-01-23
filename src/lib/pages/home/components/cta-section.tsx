/* eslint-disable @next/next/no-img-element */

const repoName = 'agustinusnathaniel/nextarter-tailwind';

export const CTASection = () => {
  return (
    <div className="grid justify-items-center gap-2.5">
      <div className="flex items-center gap-2">
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="h-8 w-full"
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="h-8 w-full object-cover"
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div className="flex items-center gap-2">
        <a
          className="rounded-lg bg-linear-to-br from-gray-100 to-green-200 p-2 font-semibold text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800"
          href={`https://github.com/${repoName}/generate`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>
        <a
          className="rounded-3xl p-2 text-xs font-semibold"
          href={`https://github.com/${repoName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </div>
  );
};
