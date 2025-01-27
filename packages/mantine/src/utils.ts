import type { ComboboxData } from '@mantine/core';
import type { FullOption, FullOptionList } from 'react-querybuilder';
import { isOptionGroupArray, uniqOptList } from 'react-querybuilder';

export const optionListToComboboxData = (list: FullOptionList<FullOption>): ComboboxData => {
  const uniqList = uniqOptList(list);
  return isOptionGroupArray(uniqList)
    ? uniqList.map(og => ({ ...og, group: og.label, items: og.options }))
    : uniqList.map(opt => ({ name: opt.name, value: opt.name, label: opt.label }));
};

export const toNumberInputValue = (val: any) => {
  if (typeof val === 'number') return val;
  const valParseFloat = parseFloat(val);
  if (!isNaN(valParseFloat)) return valParseFloat;
  return '';
};
