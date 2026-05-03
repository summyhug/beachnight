/**
 * When is Beachnight — edit when the date is finalized.
 * `dateTimeIso`: YYYY-MM-DD or full ISO datetime for <time>; keep null until the date is public.
 */
export const beachnightEvent = {
  dateTimeIso: null as string | null,
  dateLabel: "Date to be announced",
  timeLabel: "Right before sunset",
  timeNote:
    "Local sunset on your beach — arrive while it’s still light, then light up the shore as the sky fades.",
} as const;
