import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'

export default function Index({ posts }) {
  return (
    <>
      <AuthenticatedLayout
        header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}
      >
        <Head title="Dashboard" />

        <div className="py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            {posts &&
              posts.map((item) => (
                <div key={item.id} className="py-3">
                  <h2 className="py-2 text-green-500 underline bg-slate-200">{item.title}</h2>
                  <p>{item.body}</p>
                </div>
              ))}
          </div>
        </div>
      </AuthenticatedLayout>
    </>
  )
}
