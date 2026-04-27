/**
 * When is Beachnight — edit when the date is finalized.
 * `dateTimeIso`: YYYY-MM-DD or full ISO datetime for <time>; keep null until the date is public.
 */
export const beachnightEvent = {
  dateTimeIso: null as string | null,
  dateLabel: "Date to be announced",
  timeLabel: "8:00 PM – 11:59 PM",
  timeNote:
    "Local time wherever you are — one shared calendar night, coast to coast.",
} as const;
