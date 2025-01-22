import { Button, Tooltip } from "@heroui/react";
import Link from "next/link";

interface NavigationProps {
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export default function NavigationButtons({ previous, next }: NavigationProps) {
  return (
    <div className="flex justify-between items-center my-4 p-2">
      {previous ? (
        <Tooltip content={previous.title} placement="bottom">
          <Link href={`/blog/${previous.slug}`} className="font-semibold">
            <Button className="capitalize" variant="shadow">
              {`← Latest Post`}
            </Button>
          </Link>
        </Tooltip>
      ) : (
        <span />
      )}

      {next ? (
        <Tooltip content={next.title} placement="bottom">
          <Link href={`/blog/${next.slug}`} className="font-semibold">
            <Button className="capitalize" variant="shadow">
              {`Next Post →`}
            </Button>
          </Link>
        </Tooltip>
      ) : (
        <span />
      )}
    </div>
  );
}
