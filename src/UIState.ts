import * as t from '../node_modules/my-own-validation';

const UIStateCodec = t.object({
    currentPage: t.number,
    currentCategory: t.string
})

export type UIState = ReturnType<typeof UIStateCodec>