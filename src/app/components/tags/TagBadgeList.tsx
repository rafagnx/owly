'use client';

interface Tag {
  id: string;
  tag: {
    id: string;
    name: string;
    color: string;
  };
}

interface TagBadgeListProps {
  tags: Tag[];
  mode?: "badge" | "tooltip";
  maxDisplay?: number;
}

export default function TagBadgeList({ tags, mode = "badge", maxDisplay = 3 }: TagBadgeListProps) {
  if (!tags || tags.length === 0) return null;

  if (mode === "badge") {
    const displayTags = tags.slice(0, maxDisplay);
    const remaining = tags.length - maxDisplay;

    return (
      <div className="flex flex-wrap gap-1">
        {displayTags.map((t) => (
          <span
            key={t.tag.id}
            className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
            style={{ backgroundColor: t.tag.color + "20", color: t.tag.color }}
          >
            {t.tag.name}
          </span>
        ))}
        {remaining > 0 && (
          <span className="text-xs text-muted-foreground">+{remaining}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((t) => (
        <span
          key={t.tag.id}
          className="cursor-help rounded-full px-2 py-0.5 text-xs font-medium"
          style={{ backgroundColor: t.tag.color + "20", color: t.tag.color }}
          title={t.tag.name}
        >
          {t.tag.name}
        </span>
      ))}
    </div>
  );
}