import Link from "next/link";
import { HomeIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-light border-b border-gray-200 overflow-x-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center gap-1 py-3 text-sm whitespace-nowrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRightIcon className="w-3.5 h-3.5 text-slate flex-shrink-0" />
                )}
                {isLast ? (
                  <span className="text-dark font-medium truncate max-w-[200px] sm:max-w-none">
                    {index === 0 ? (
                      <HomeIcon className="w-4 h-4 inline-block" />
                    ) : (
                      item.name
                    )}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-slate hover:text-primary transition truncate max-w-[150px] sm:max-w-none"
                  >
                    {index === 0 ? (
                      <HomeIcon className="w-4 h-4 inline-block" />
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
