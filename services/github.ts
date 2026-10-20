export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionCalendar {
  year: number;
  total: number;
  days: ContributionDay[];
}

async function fetchJson(url: string, signal?: AbortSignal) {
  const response = await fetch(url, {
    cache: "no-store",
    signal,
  });
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
  return response.json();
}

export async function fetchFollowers(username: string, signal?: AbortSignal): Promise<number> {
  const profile = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}`, signal);
  return typeof profile.followers === "number" ? profile.followers : 0;
}

export async function fetchContributions(username: string, year: number, signal?: AbortSignal): Promise<ContributionCalendar> {
  const calendar = await fetchJson(
    `https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${year}`,
    signal,
  );

  const total = typeof calendar.total?.[year] === "number" ? calendar.total[year] : 0;
  const days: ContributionDay[] = Array.isArray(calendar.contributions) ? calendar.contributions : [];

  return {
    year,
    total,
    days: [...days].sort((a, b) => a.date.localeCompare(b.date)),
  };
}

