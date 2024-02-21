import type { GlobalConfig } from 'payload/types'

import { CallToAction } from '../blocks/CallToAction'
import link from '../fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [link()],
    },
  ],
}
