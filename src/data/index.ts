
import { ContentBlock } from '../../types';
import { CH1_DATA } from './ch1';
import { CH2_DATA } from './ch2';
import { CH3_DATA } from './ch3';
import { CH4_DATA } from './ch4';
import { CH5_DATA } from './ch5';
import { CH6_DATA } from './ch6';
import { CH7_DATA } from './ch7';

export const CONTENT_REGISTRY: Record<string, ContentBlock> = {
    ...CH1_DATA,
    ...CH2_DATA,
    ...CH3_DATA,
    ...CH4_DATA,
    ...CH5_DATA,
    ...CH6_DATA,
    ...CH7_DATA,
};
