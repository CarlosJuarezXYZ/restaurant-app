import type { FC } from "react";
import TabStyled from "./Tab.styled";

interface TabsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

const { TabsContainer, TabButton } = TabStyled;

export const FilterTabs: FC<TabsProps> = ({
  categories,
  selected,
  onSelect,
}) => (
  <TabsContainer>
    {categories.map((cat) => (
      <TabButton
        key={cat}
        active={selected === cat}
        onClick={() => onSelect(cat)}
      >
        {cat}
      </TabButton>
    ))}
  </TabsContainer>
);
