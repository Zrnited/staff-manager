import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context";
import { AiOutlineLogout } from "react-icons/ai";
import { navLinks } from "../../constants";
import { deleteCookie, removeStorage } from "../../utils";

interface Props {
  sidenav: boolean;
  setSidenav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ sidenav, setSidenav }: Props) {
  const { pathname } = useLocation();
  const { setEmployees, setGradeLevels, setUser } = useAppContext();
  const navigate = useNavigate();

  const logOut = () => {
    deleteCookie("sessionId");
    removeStorage("gradeLevels");
    removeStorage("employees");
    setEmployees([]);
    setGradeLevels([]);
    setUser(undefined);
    navigate("/", { replace: true });
  };

  return (
    <aside
      className={`bg-[#171D26] border-r border-[#E6E6E6] fixed top-0 h-full w-[70%] p-5 z-30 transition-all ease-in-out delay-100 overflow-y-scroll flex flex-col justify-between activity sm:w-[50%] md:w-[40%] lg:h-auto lg:static lg:z-20 lg:w-65 xl:w-72.5 ${
        sidenav ? "left-0" : "-left-full"
      }`}
    >
      <section>
        <div className="w-full flex flex-col text-white">
          <h2 className="font-semibold text-2xl font-grotesk">
            <span className="text-[#2A9290]">Staff</span> Manager
          </h2>
          <hr className="h-px border-none bg-[#2A313c] w-full mt-6" />
        </div>
        {/* navlinks */}
        <ul className="flex flex-col gap-y-2 w-full mt-5 text-[#0F172A]">
          {navLinks.map((link, idx) => {
            return (
              <Link
                key={idx}
                onClick={() => {
                  if (sidenav) setSidenav(false);
                }}
                className={`flex items-center gap-x-3 transition ease-in-out delay-100 w-full p-3 rounded-xl font-medium hover:bg-white/10 text-lg lg:text-base ${
                  pathname === link.path ? "text-[#2A9290]" : "text-white"
                }`}
                to={link.path}
              >
                <link.iconName />
                <p className="capitalize">{link.title}</p>
              </Link>
            );
          })}
        </ul>
      </section>
      <section className="space-y-3 mt-5">
        <hr className="h-px border-none bg-[#2A313c] w-full mt-6" />
        <button
          onClick={logOut}
          className="flex items-center gap-x-3 transition ease-in-out text-white delay-100 w-full p-3 rounded-xl font-semibold cursor-pointer hover:bg-[#FF383C] hover:text-white text-lg lg:text-base"
        >
          <AiOutlineLogout />
          <p className="capitalize">Logout</p>
        </button>
        <div className="flex items-center gap-x-2 text-white">
          <div className="w-12 h-12 rounded-full border-2 border-[#E2E8F0]">
            {/* <img
              className="w-full h-full"
              alt="img"
              decoding="async"
              draggable={false}
              loading="lazy"
              src={demoImg}
            /> */}
          </div>
          <div>
            <h2 className="lg:text-base capitalize">Head Supervisor</h2>
            <p className="text-sm lg:text-sm">admin@email.com</p>
          </div>
        </div>
      </section>
    </aside>
  );
}
