import { Head } from '@inertiajs/inertia-react'
import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'

export default function Dashboard(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="border-b border-gray-200 bg-white p-6">
              You're logged in!
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
