import type { CollectionConfig, Access, FieldAccess } from 'payload'

const isAdmin: Access = ({ req }) => {
  const user = req.user as { role?: string } | null
  return user?.role === 'admin'
}

const isAdminField: FieldAccess = ({ req }) => {
  const user = req.user as { role?: string } | null
  return user?.role === 'admin'
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    hidden: ({ user }) => (user as { role?: string })?.role !== 'admin',
  },
  auth: true,
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      label: 'Rolle',
      required: true,
      defaultValue: 'editor',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      access: {
        update: isAdminField,
      },
    },
  ],
}
