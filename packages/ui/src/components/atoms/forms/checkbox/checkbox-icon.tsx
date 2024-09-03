import { Icon, type IconProps } from '@chakra-ui/react';
import { PiCheckBold, PiMinusBold } from 'react-icons/pi';

type CheckboxIconProps = IconProps & {
    isChecked?: boolean;
    isIndeterminate?: boolean;
}

export function CheckboxIcon({ isChecked, isIndeterminate, ...rest}: CheckboxIconProps): React.ReactElement {
    return (
        <>
            {isChecked && isIndeterminate ? (
                <Icon as={PiMinusBold} {...rest} />
            ) : null}
            {isChecked && !isIndeterminate ? (
                <Icon as={PiCheckBold} {...rest} />
            ) : null}
        </>
    );
}