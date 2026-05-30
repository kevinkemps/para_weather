type WindyEmbedProps = {
  spotId: string;
};

export function WindyEmbed({ spotId }: WindyEmbedProps) {
  const params = new URLSearchParams({
    spotId,
  });

  return (
    <iframe
      title={`Windy forecast for ${spotId}`}
      loading="lazy"
      src={`https://embed.windy.com/?${params.toString()}`}
    />
  );
}