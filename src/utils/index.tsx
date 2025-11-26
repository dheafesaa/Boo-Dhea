export function formatRelativeTime(dateString: string): string {
  const now = Date.now();
  const time = new Date(dateString).getTime();
  const diff = now - time;

  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diff < minute) return "baru";
  if (diff < hour) return `${Math.floor(diff / minute)}m`;
  if (diff < day) return `${Math.floor(diff / hour)}h`;

  return `${Math.floor(diff / day)}d`;
}
