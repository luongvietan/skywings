import { cn } from "@/lib/utils"

export function Logo({ className, showText = true, size = "default" }) {
  const sizes = {
    small: { logo: 24, height: 32 },
    default: { logo: 32, height: 40 },
    large: { logo: 40, height: 48 },
  }

  const { logo, height } = sizes[size] || sizes.default

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex-shrink-0" style={{ width: logo, height: logo }}>
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-500 to-sky-400 shadow-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-1/2 w-1/2 rounded-full bg-white" />
        </div>
      </div>
      {showText && <div className="font-bold text-xl tracking-tight text-gray-900">SkyWings</div>}
    </div>
  )
}

// Also export as default for compatibility with default imports
export default Logo

