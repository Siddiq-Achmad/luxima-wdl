import { Button, Tooltip, Link } from "@heroui/react";
import {
  ArrowBigLeft,
  ArrowBigLeftDashIcon,
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface NavigationProps {
  previous: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
}

export default function NavigationButtons({ previous, next }: NavigationProps) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center my-4 p-2">
      {previous ? (
        <Tooltip
          content={previous.title}
          placement="bottom"
          className="capitalize"
        >
          <Button
            className="capitalize text-white"
            variant="shadow"
            color="primary"
            radius="full"
            onPress={() => router.push(`/blog/${previous.slug}`)}
          >
            <ArrowBigLeftIcon /> Latest Post
          </Button>
        </Tooltip>
      ) : (
        <span />
      )}

      {next ? (
        <Tooltip content={next.title} placement="bottom" className="capitalize">
          <Button
            className="capitalize text-white"
            variant="shadow"
            color="primary"
            radius="full"
            onPress={() => router.push(`/blog/${next.slug}`)}
          >
            Next Post <ArrowBigRightIcon />
          </Button>
        </Tooltip>
      ) : (
        <span />
      )}
    </div>
  );
}
