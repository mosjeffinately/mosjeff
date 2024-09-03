import {
    Checkbox as ChakraCheckbox,
    type CheckboxProps
} from '@chakra-ui/react';
import { CheckboxIcon } from './checkbox-icon';

export function Checkbox(props: CheckboxProps): React.ReactElement {
    return <ChakraCheckbox icon={<CheckboxIcon />} {...props} />;
}
