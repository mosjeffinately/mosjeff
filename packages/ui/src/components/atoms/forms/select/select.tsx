import {
    Select as ChkSelect,
    type Props as ChkSelectProps,
    type GroupBase,
    type OptionBase
} from 'chakra-react-select';
import { getChakraStylesConfig, getComponentsConfig } from './select-config';

export type Option = OptionBase & {
    label: React.ReactNode;
    value: string;
};

export type SelectProps<
    T extends Option,
    IsMulti extends boolean
> = ChkSelectProps<T, IsMulti, GroupBase<T>> & {
    options: T[];
    placeholder: React.ReactNode;
};

export function Select<T extends Option, IsMulti extends boolean>({
    isMulti,
    onChange,
    options,
    placeholder,
    value,
    ...props
}: SelectProps<T, IsMulti>): React.ReactElement {
    return (
        <ChkSelect
            chakraStyles={getChakraStylesConfig<T, IsMulti>()}
            components={getComponentsConfig<T, IsMulti>()}
            isMulti={isMulti}
            menuPortalTarget={document.body}
            onChange={onChange}
            options={options}
            placeholder={placeholder}
            styles={{
                menuPortal: (base) => ({ ...base, zIndex: 9999 })
            }}
            value={value}
            {...props}
        />
    );
}
