export function formatDate(value: string | Date): string {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return formatter.format(typeof value === 'string' ? new Date(value) : value);
}

export function formatDateISO(value: string | Date): string {
  return (typeof value === 'string' ? new Date(value) : value).toISOString();
}
