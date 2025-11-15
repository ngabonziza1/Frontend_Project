import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LogIn } from "lucide-react";

export function LoginDialog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!role) {
      alert("Please select your role!");
      return;
    }

    // Handle login logic here
    console.log("Login attempt with:", { email, password, role });
    setOpen(false);
  };

  const roleDescriptions: Record<string, string> = {
    "academic-student": "Access your academic courses and learning materials.",
    "tvet-student": "Continue your technical training and workshop sessions.",
    "instructor": "Manage your courses and interact with your students.",
    "administrator": "Access administrative dashboard and management tools.",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogIn className="w-4 h-4" />
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome Back</DialogTitle>
          <DialogDescription>
            Login to your account to access all features and programs.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input
              id="login-email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-password">Password</Label>
            <Input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-role">Login as</Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger id="login-role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic-student">Academic Student</SelectItem>
                <SelectItem value="tvet-student">TVET Student</SelectItem>
                <SelectItem value="instructor">Instructor/Teacher</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
              </SelectContent>
            </Select>
            {role && (
              <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
                {roleDescriptions[role]}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => setOpen(false)}
            >
              Register here
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}