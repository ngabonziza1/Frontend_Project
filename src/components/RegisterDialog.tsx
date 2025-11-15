import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { UserPlus } from "lucide-react";

export function RegisterDialog() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
  const [open, setOpen] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!formData.role) {
      alert("Please select a role!");
      return;
    }
    
    // Handle registration logic here
    console.log("Registration attempt with:", formData);
    setOpen(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const roleDescriptions: Record<string, string> = {
    "academic-student": "Access academic courses, educational resources, and career preparation programs.",
    "tvet-student": "Enroll in technical and vocational training programs with hands-on workshops and certifications.",
    "instructor": "Teach courses, create learning materials, and mentor students in your field of expertise.",
    "administrator": "Manage institutional operations, oversee programs, and handle administrative tasks.",
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <UserPlus className="w-4 h-4" />
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogDescription>
            Join us today and start your educational journey.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleRegister} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="register-name">Full Name</Label>
            <Input
              id="register-name"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-email">Email</Label>
            <Input
              id="register-email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-role">I am a...</Label>
            <Select value={formData.role} onValueChange={(value) => handleChange("role", value)} required>
              <SelectTrigger id="register-role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="academic-student">Academic Student</SelectItem>
                <SelectItem value="tvet-student">TVET Student</SelectItem>
                <SelectItem value="instructor">Instructor/Teacher</SelectItem>
                <SelectItem value="administrator">Administrator</SelectItem>
              </SelectContent>
            </Select>
            {formData.role && (
              <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded-md">
                {roleDescriptions[formData.role]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-password">Password</Label>
            <Input
              id="register-password"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="register-confirm-password">Confirm Password</Label>
            <Input
              id="register-confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              className="text-blue-600 hover:underline"
              onClick={() => setOpen(false)}
            >
              Login here
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}