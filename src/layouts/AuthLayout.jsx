import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="h-screen bg-gradient-to-r from-[#536DFE] to-[#F2F2F2] md:flex md:justify-evenly items-center">
        <div className="lg:w-1/3 max-md:p-8 max-md:flex max-md:justify-center max-md:items-center max-md:h-screen">
          <Outlet/>
        </div>
        <div className="lg:w-1/2 w-2/4 max-md:hidden">
          <img src="/img/imgLogin.svg" alt="imagen login"/>
        </div>
      </main>
    </>
  )
}

export default AuthLayout
