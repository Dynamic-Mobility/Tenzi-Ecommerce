import React from 'react'
import Layout from '@/Components/admin/layout'

const Admin = () => {
  return (
    <div>Admin</div>
  )
}

Admin.getLayout = (page) =>(
  <Layout>{page}</Layout>
)

export default Admin