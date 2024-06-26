import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

// import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../services/opretions/userApi"
import useOnClickOutside from "../useOnClickOutside"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  console.log("User : ", user);

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <button className="relative" onClick={() => setOpen(!open)}>
      <div className="flex items-center gap-x-1">
        <img
          src={user?.Image}
          alt={`profile-${user?.FullName}`}
          className="aspect-square w-[40px] rounded-full object-cover"
        />
        <AiOutlineCaretDown className="text-sm text-gray-400" />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-[118%] right-0 z-[1000] divide-y-[1px] divide-gray-700 overflow-hidden rounded-md border-[1px] border-gray-700 bg-gray-800"
          ref={ref}
        >
          <Link to="/userProfile" onClick={() => setOpen(false)}>
            <div className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-100 hover:bg-gray-700 hover:text-gray-25">
              <VscDashboard className="text-lg" />
              MyProducts
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate, dispatch))
              setOpen(false)
            }}
            className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-gray-100 hover:bg-gray-700 hover:text-gray-25"
          >
            <VscSignOut className="text-lg" />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}
