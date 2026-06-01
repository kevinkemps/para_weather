type WindyEmbedProps = {
  title: string;
  src: string;
  className?: string;
  loading?: 'eager' | 'lazy';
};

export function WindyEmbed({ title, src, className, loading = 'lazy' }: WindyEmbedProps) {
  return (
    <iframe title={title} className={className} loading={loading} src={src} frameBorder="0" />
  );
}