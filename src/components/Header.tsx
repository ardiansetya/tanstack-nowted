import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Link, useNavigate } from "@tanstack/react-router";
import { FileText, Home, LogIn, LogOut, Settings } from "lucide-react";
import { Separator } from "./ui/separator";

const Header = () => {
  const { data: session } = authClient.useSession();

  const navigate = useNavigate();
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/signin" });
        },
      },
    });
  };

  return (
    <header className="sticky top-0  z-50 w-full border-b bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo / Brand */}
        <div className="text-lg font-semibold tracking-tight">Nowted</div>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
              Home
            </Link>
          </Button>

          {/* <Button variant="ghost" className="gap-2" asChild>
            <Link to="/notes">
              <FileText className="h-4 w-4" />
              Notes
            </Link>
          </Button>

          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/settings">
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </Button> */}

          <Separator orientation="vertical" className="h-6 mx-2" />

          {session ? (
            <Button variant="default" onClick={handleLogout}>
              <LogOut />
              Logout
            </Button>
          ) : (
            <Button variant="default" asChild>
              <Link to="/signin">
                <LogIn />
                Login
              </Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
