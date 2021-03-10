import * as t from '../node_modules/my-own-validation';

export const AvailabilityCodec = t.object({
    id: t.string,
    DATAPAYLOAD: t.string
})

export type Availability = ReturnType<typeof AvailabilityCodec>