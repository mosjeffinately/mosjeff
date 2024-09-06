import { Icon, type IconProps } from '@chakra-ui/react';
import { PiCircleBold } from 'react-icons/pi';

export interface RadioIconProps extends IconProps {
    isChecked?: boolean;
}

export function RadioIcon({ isChecked, ...rest }: RadioIconProps): React.ReactNode {
    return isChecked ? (
        <Icon as={PiCircleBold} {...rest} />
    ) : null;
}
