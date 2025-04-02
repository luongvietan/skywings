import { Logo } from "@/components/ui/logo"
import { PasswordResetForm } from "@/components/password-reset-form"
import Link from "next/link"

export default function ResetPasswordPage({ params }: { params: { token: string } }) {
  const { token } = params

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Logo className="h-12 w-auto mx-auto" />
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Reset Your Password</h2>
          <p className="mt-2 text-sm text-gray-600">Create a new password for your account</p>
        </div>

        <PasswordResetForm token={token} />
      </div>
    </main>
  )
}

