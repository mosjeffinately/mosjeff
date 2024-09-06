import { Radio as ChakraRadio, type RadioProps } from '@chakra-ui/react';
import { RadioIcon } from './radio-icon';

export function Radio(props: RadioProps): React.ReactElement {
    return <ChakraRadio icon={<RadioIcon />} {...props} />;
}
