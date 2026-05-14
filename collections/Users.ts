import type { CollectionConfig, Access, FieldAccess } from 'payload'

type UserWithRole = { id: string; role?: string } | null

const isAdmin: Access = ({ req }) => {
  const user = req.user as UserWithRole
  return user?.role === 'admin'
}

const isAdminOrSelf: Access = ({ req }) => {
  const user = req.user as UserWithRole
  if (!user) return false
  if (user.role === 'admin') return true
  return { id: { equals: user.id } }
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
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
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
