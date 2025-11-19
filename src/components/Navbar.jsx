import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X, UserRound, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  // Menu Responsivo e Links
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const links = [
    { name: "Iníco", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Projetos", path: "/projects" },
    { name: "Contatos", path: "/contacts" },
    // link do login muda dinamicamente
    user
      ? user.type === "student"
        ? { name: "Área do Aluno", path: "/student" }
        : user.type === "teacher"
        ? { name: "Área do Professor", path: "/teacher" }
        : { name: "Área do Responsável", path: "/guardian" }
      : { name: "Login", path: "/login" },
    {
      name: "Mais",
      links: [
        { name: "Notícias", path: "/news" },
        { name: "Eventos", path: "/events" },
        { name: "Equipe", path: "/team" },
      ],
    },
  ];

  //Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Fecha dropdown quando clica p fora (desktop)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-mais")) {
        setDropdownOpen(false);
      }
    };
    if (window.innerWidth >= 768) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-orange-600 shadow-2xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link
            to="/"
            className={`text-2xl font-bold text-orange-500 transition-all duration-700 ${
              scrolled ? "text-white" : ""
            }`}
          >
            Escola de Referência
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden ${
              scrolled ? "text-white" : "text-orange-500"
            }`}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Links - desktop */}
          <nav className={`hidden md:flex gap-6 font-medium items-center`}>
            {links.map((link, index) => {
              const isActive = location.pathname === link.path;
              const isDropdown = !!link.links;

              //Dropdown "Mais"
              if (!isDropdown) {
                return (
                  <Link
                    key={index}
                    to={link.path}
                    className={`relative group transition-colors duration-300 ${
                      scrolled
                        ? isActive
                          ? "text-white font-semibold"
                          : "text-neutral-200 hover:text-white"
                        : isActive
                        ? "text-orange-600 font-semibold"
                        : "text-orange-400 hover:text-orange-600"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ${
                        scrolled
                          ? isActive
                            ? "bg-white w-full"
                            : "bg-white/50 w-0 group-hover:w-full"
                          : isActive
                          ? "bg-orange-600 w-full"
                          : "bg-orange-600 w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                );
              }

              // Item "Mais" - Desktop
              return (
                <div key={index} className="relative group dropdown-mais">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDropdownOpen((prev) => !prev);
                    }}
                    className={`flex items-center gap-1 transition-colors duration-300 ${
                      scrolled ? "text-white" : "text-orange-600"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>

                  {/* Dropdown flutuante */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, x: -10 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: -10, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 bg-white shadow-lg rounded-md py-2 w-40"
                      >
                        {link.links.map((sublink) => (
                          <Link
                            key={sublink.path}
                            to={sublink.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/*Botão menu responsivo */}

          {/* Ícone do usuário */}
          <div className="hidden md:flex items-center gap-3">
            {user && (
              <button
                onClick={logout}
                className="text-sm text-gray-200 hover:text-orange-200 transition"
              >
                Sair
              </button>
            )}
            <Link
              to={
                user
                  ? user.type === "student"
                    ? "/student"
                    : user.type === "teacher"
                    ? "/teacher"
                    : "/guardian"
                  : "/login"
              }
              className="p-2 bg-orange-100 hover:bg-orange-200 rounded-full transition-colors"
              title={user ? "Área do Usuário" : "Fazer Login"}
            >
              <UserRound className="text-orange-600" />
            </Link>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-orange-50 overflow-hidden"
            >
              <div className="flex flex-col items-center py-4 space-y-3 font-medium">
                {links.map((link, index) => {
                  const isDropdown = !!link.links;

                  return (
                    <div key={index} className="w-full text-center">
                      {isDropdown ? (
                        <>
                          <button
                            onClick={() =>
                              setMobileDropdownOpen((prev) => !prev)
                            }
                            className="flex justify-center items-center gap-2 w-full text-gray-800 font-medium"
                          >
                            {link.name}
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-300 ${
                                dropdownOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </button>

                          {mobileDropdownOpen && (
                            <div className="flex flex-col mt-2 space-y-2">
                              {link.links.map((sublink) => (
                                <Link
                                  key={sublink.path}
                                  to={sublink.path}
                                  onClick={() => setMenuOpen(false)}
                                  className="text-gray-600 hover:text-orange-600"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setMenuOpen(false)}
                          className={`text-gray-800 ${
                            location.pathname === link.path
                              ? "font-semibold text-orange-600"
                              : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      )}
                    </div>
                  );
                })}

                {user && (
                  <button
                    onClick={() => {
                      logout();
                      setMenuOpen(false);
                    }}
                    className="text-sm text-gray-600 hover:text-orange-600 transition"
                  >
                    Sair
                  </button>
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
