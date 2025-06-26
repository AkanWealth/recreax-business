import React from "react";

interface TabsProps {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
}

/**
 * Renders a pill-shaped tabs component for category selection.
 * @param categories - Array of category names.
 * @param active - Currently selected category.
 * @param onChange - Callback when a tab is selected.
 */
const Tabs: React.FC<TabsProps> = ({ categories, active, onChange }) => (
  <div
    className="
      flex flex-wrap items-center bg-[#12233d] rounded-2xl sm:rounded-full
      px-2 py-1 gap-1 w-full sm:w-fit mx-auto
    "
  >
    {categories.map((cat) => (
      <button
        key={cat}
        className={`
          px-3 py-1 sm:px-5 sm:py-2 rounded-full font-medium
          text-xs sm:text-sm transition-colors cursor-pointer
          ${
            active === cat
              ? "bg-[#7ee3f0] text-[#12233d]"
              : "bg-transparent text-white hover:bg-[#223a5e]"
          }
        `}
        onClick={() => onChange(cat)}
        type="button"
      >
        {cat}
      </button>
    ))}
  </div>
);

export default Tabs;
