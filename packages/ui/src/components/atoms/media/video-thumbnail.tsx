import { AspectRatio, Image, type ImageProps } from '@chakra-ui/react';
import { isNil } from 'lodash';
import { useState } from 'react';

export type VideoThumbnailProps = ImageProps & {
    placeholder: string;
    ratio?: number;
};

export function VideoThumbnail({
    h = 'auto',
    placeholder,
    ratio = 16 / 9,
    src,
    w = 'auto',
    ...rest
}: VideoThumbnailProps): React.ReactElement {
    const [imageSrc, setImageSrc] = useState<string>(isNil(src) ? '' : src);

    const onErrorHandler = (): void => {
        setImageSrc(placeholder);
    };

    return (
        <AspectRatio h={h} ratio={ratio} w={w}>
            <Image onError={onErrorHandler} src={imageSrc} {...rest} />
        </AspectRatio>
    );
}
