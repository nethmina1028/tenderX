import React, { useState } from "react";
import Navbar from "../components/Navbar";

interface FormData {
  firstname: string;
  lastname: string;
  address: string;
  phoneNo: string;
  username: string;
  state: string;
  city: string;
  webUrl: string;
  company: string;
  email: string;
  password: string;
//   cpassword: string;
}

interface FormErrors {
  password?: string;
  cpassword?: string;
  general?: string;
}

function Registration() {
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    address: "",
    phoneNo: "",
    username: "",
    state: "",
    city: "",
    webUrl: "",
    company: "",
    email: "",
    password: "",
    // cpassword: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validatePasswords = (): boolean => {
    const newErrors: FormErrors = {};

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    // if (formData.password !== formData.cpassword) {
    //   newErrors.cpassword = "Passwords do not match";
    // }

    // if (formData.cpassword === "") {
    //   newErrors.cpassword = "Please confirm your password";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePasswords()) {
      return;
    }

    setIsSubmitting(true);
    console.log("Form submitted:", formData);
    try {
      // Here you would make your API call to register the user
      console.log("Form submitted:", formData);
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        console.log('Registration successful');
      } else {
        // Handle error
        const errorData = await response.json();
        setErrors({ general: errorData.message || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ general: "An error occurred. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col justify-center my-12">
        <div className="max-w-4xl w-full mx-auto border border-gray-300 rounded-2xl p-8">
          <div className="text-center mb-12">
            <a href="javascript:void(0)">
              <img
                src="https://via.placeholder.com/150"
                alt="placeholder logo"
                className="w-40 inline-block"
              />
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            {errors.general && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-700 text-sm">{errors.general}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  First Name
                </label>
                <input
                  name="firstname"
                  type="text"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter first name"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Last Name
                </label>
                <input
                  name="lastname"
                  type="text"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter last name"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter address"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Phone Number
                </label>
                <input
                  name="phoneNo"
                  type="text"
                  value={formData.phoneNo}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  State
                </label>
                <input
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter state"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  City
                </label>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter city"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Website URL (Optional)
                </label>
                <input
                  name="webUrl"
                  type="url"
                  value={formData.webUrl}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter website URL"
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Email Id
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="text-slate-900 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`text-slate-900 bg-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter password"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div>
                <label className="text-slate-900 text-sm font-medium mb-2 block">
                  Confirm Password
                </label>
                <input
                  name="cpassword"
                  type="password"
                //   value={formData.cpassword}
                  onChange={handleInputChange}
                  className={`text-slate-900 bg-white border w-full text-sm px-4 py-3 rounded-md outline-blue-500 ${
                    errors.cpassword ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter confirm password"
                  required
                />
                {errors.cpassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.cpassword}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center mt-6">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="text-slate-600 ml-3 block text-sm"
              >
                I accept the{" "}
                <a
                  href="javascript:void(0);"
                  className="text-blue-600 font-medium hover:underline ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div className="mt-12">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Registering...
                  </div>
                ) : (
                  "Create an account"
                )}
              </button>
            </div>
            <p className="text-slate-600 text-sm mt-6 text-center">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                className="text-blue-600 font-medium hover:underline ml-1"
              >
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
