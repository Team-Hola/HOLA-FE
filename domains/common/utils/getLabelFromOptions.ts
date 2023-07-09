export const getLabelFromOptions = <T>(
  options: { label: string; value: T }[],
  value: T,
): string => {
  const option = options.find(opt => opt.value === value);
  if (!option) throw new Error("option이 없을 수 없습니다.");
  return option.label;
};
