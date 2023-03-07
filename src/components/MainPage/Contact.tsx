import { Button } from "@mui/material";
import Link from "next/link";
import { useState, useEffect, useCallback, useContext } from "react";
import { contactData } from "src/static/contactData";
import { ThemeContext } from "src/context/themeContext";
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  // Define state variables for form data and validation errors
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  // To make sure that errors only appear when the user has interacted with the inputs
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    message: false,
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  type ServerMessage = {
    type: "success" | "error";
    message: string;
  };
  const [serverMessage, setServerMessage] = useState<ServerMessage | null>(
    null
  );

  // Function for validating form data
  const validate = useCallback(
    (formData: ContactFormData) => {
      const errors: Partial<ContactFormData> = {};
      // Check if firstName field is valid
      if (touched.firstName) {
        if (!formData.firstName) {
          errors.firstName = "Pole imię jest wymagane";
        } else {
          if (!/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]+$/.test(formData.firstName)) {
            errors.firstName = "Imię może zawierać tylko litery oraz spacje";
          } else if (formData.firstName.length < 2) {
            errors.firstName = "Imię musi mieć przynajmniej 2 litery";
          } else if (formData.firstName.length > 50) {
            errors.firstName = "Imię nie może mieć więcej niż 50 liter";
          }
        }
      }
      // Check if lastName field is valid
      if (touched.lastName) {
        if (!formData.lastName) {
          errors.lastName = "Pole nazwisko jest wymagane";
        } else {
          if (!/^[a-zA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ\s]+$/.test(formData.lastName)) {
            errors.lastName = "Nazwisko może zawierać tylko litery oraz spacje";
          } else if (formData.lastName.length < 2) {
            errors.lastName = "Nazwisko musi mieć przynajmniej 2 litery";
          } else if (formData.lastName.length > 50) {
            errors.lastName = "Nazwisko nie może mieć więcej niż 50 liter";
          }
        }
      }
      // Check if email field is valid
      if (touched.email) {
        if (!formData.email) {
          errors.email = "Pole email jest wymagane";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors.email = "Niepoprawny adres email";
        }
      }
      // Check if phone field is valid
      if (touched.phone) {
        if (!formData.phone) {
          errors.phone = "Pole telefon jest wymagane";
        } else if (!/^\d{9}$/.test(formData.phone)) {
          errors.phone = "Numer telefonu musi składać się z 9 cyfr";
        }
      }
      // Check if message field is valid
      if (touched.message) {
        if (!formData.message) {
          errors.message = "Pole wiadomość jest wymagane";
        } else if (formData.message.length < 10) {
          errors.message = "Wiadomość musi mieć przynajmniej 10 znaków";
        } else if (formData.message.length > 1000) {
          errors.message = "Wiadomość nie może mieć więcej niż 1000 znaków";
        }
      }

      return errors;
    },
    [touched]
  );
  // Function for handling changes in input fields
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Creates a timer to validate form data after 800ms of inactivity
  // Clears the timer on cleanup
  // Triggers validation when form data changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const newErrors = validate(formData);
      setErrors(newErrors);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, [formData, validate]);

  // Prevents default form submission behavior
  // Validates form data
  // Sets errors if validation fails
  // Clears errors if validation succeeds
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !touched.email ||
      !touched.firstName ||
      !touched.lastName ||
      !touched.phone ||
      !touched.message
    ) {
      return setServerMessage({
        type: "error",
        message: "Formularz nie jest uzupełniony",
      });
    }

    const errors = validate(formData);
    console.log(errors);
    console.log(Object.keys(errors).length);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      // send form

      try {
        setServerMessage({
          type: "success",
          message: "Wiadomość została wysłana pomyślnie",
        });
      } catch (err) {
        console.log(err);
        setServerMessage({
          type: "error",
          message: "Coś poszło nie tak...",
        });
      }
    }
  };

  return (
    <>
      <div id="kontakt" className=" max-w-[1240px] m-auto h-[auto] mt-24 px-4">
        <h2 className="text-3xl border-b-2 border-gray-200 pb-2 font-normal">
          Kontakt
        </h2>
      </div>
      <div className="p-2 pt-8">
        <div className="flex justify-center items-center w-full bg-background-secondary">
          <div className="container mx-auto my-4 px-4 2xl:px-40">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className="flex">
                  <h2 className="font-bold uppercase text-2xl sm:text-5xl">
                    Wyślij do nas
                    <br /> wiadomość
                  </h2>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <div>
                    <input
                      className="w-full bg-background-tertiary text-text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline "
                      type="text"
                      name="firstName"
                      placeholder="Imię*"
                      onChange={(e) => {
                        setTouched((prevState) => ({
                          ...prevState,
                          firstName: true,
                        }));
                        handleInputChange(e);
                      }}
                    />
                    <p className="text-red-500 text-sm ml-2">
                      {errors.firstName}
                    </p>
                  </div>

                  <div>
                    <input
                      className="w-full bg-background-tertiary text-text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Nazwisko*"
                      name="lastName"
                      onChange={(e) => {
                        setTouched((prevState) => ({
                          ...prevState,
                          lastName: true,
                        }));
                        handleInputChange(e);
                      }}
                    />
                    <p className="text-red-500 text-sm ml-2">
                      {errors.lastName}
                    </p>
                  </div>
                  <div>
                    <input
                      className="w-full bg-background-tertiary text-text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Email*"
                      name="email"
                      onChange={(e) => {
                        setTouched((prevState) => ({
                          ...prevState,
                          email: true,
                        }));
                        handleInputChange(e);
                      }}
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.email}</p>
                  </div>
                  <div>
                    <input
                      className="w-full bg-background-tertiary text-text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      type="number"
                      placeholder="Telefon*"
                      name="phone"
                      onChange={(e) => {
                        setTouched((prevState) => ({
                          ...prevState,
                          phone: true,
                        }));
                        handleInputChange(e);
                      }}
                    />
                    <p className="text-red-500 text-sm ml-2"> {errors.phone}</p>
                  </div>
                </div>
                <div>
                  <div className="my-4">
                    <textarea
                      placeholder="Wiadomość*"
                      className="w-full h-32 bg-background-tertiary text-text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                      name="message"
                      onChange={(e) => {
                        setTouched((prevState) => ({
                          ...prevState,
                          message: true,
                        }));
                        handleInputChange(e);
                      }}
                    ></textarea>
                    <p className="text-red-500 text-sm ml-2">
                      {errors.message}
                    </p>
                  </div>
                </div>

                <div className="my-2 w-1/2 lg:w-1/3">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={`uppercase text-sm font-bold tracking-wide text-text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline ${
                      theme === "light"
                        ? "bg-primary hover:bg-btn-primary-hover"
                        : "bg-secondary hover:bg-[#3A3A3A]"
                    }`}
                  >
                    Wyślij wiadomość
                  </Button>
                </div>
              </form>
              <p
                className={`text-lg 
                  ${
                    serverMessage && serverMessage.type === "success"
                      ? "text-green-700"
                      : "text-red-500"
                  }`}
              >
                {serverMessage && serverMessage.message}
              </p>
            </div>

            <div
              className={`w-full lg:-mt-96 lg:w-2/6 sm:px-8 sm:py-12 px-4 py-4 ml-auto rounded-2xl ${
                theme === "light" ? "bg-primary" : "bg-secondary"
              }`}
            >
              <div className="flex flex-col text-white">
                <h1 className="font-bold uppercase text-4xl my-4 text-text-gray-200 break-words">
                  Skontaktuj się z nami
                </h1>
                <p className="text-text-gray-400">
                  Zadzwoń do nas lub napisz wiadomość poprzez formularz lub
                  e-mail
                </p>

                <div className="flex my-4 w-2/3 lg:w-1/2">
                  <div className="flex flex-col">
                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl text-text-gray-200">Nasze biuro</h2>
                    <p className="text-text-gray-400">
                      {contactData.location[0]}
                    </p>
                    <p className="text-text-gray-400">
                      {contactData.location[1]}
                    </p>
                  </div>
                </div>

                <div className="flex my-4 w-1/1 lg:w-2/3">
                  <div className="flex flex-col">
                    <i className="fas fa-phone-alt pt-2 pr-2" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-2xl text-text-gray-200">
                      Zadzwoń do nas
                    </h2>
                    <div className="flex">
                      <p className="mr-1 text-text-gray-300">Tel:</p>
                      <Link
                        href={`tel:${contactData.landLineNumbers[0]}`}
                        aria-label="Telefon komórkowy"
                        title="Telefon komórkowy"
                        className="text-text-gray-400"
                      >
                        {contactData.landLineNumbers[0]}
                      </Link>
                    </div>
                    <div className="flex">
                      <p className="mr-1 text-text-gray-300">Tel 2:</p>
                      <Link
                        href={`tel:${contactData.landLineNumbers[1]}`}
                        aria-label="Telefon komórkowy"
                        title="Telefon komórkowy"
                        className="text-text-gray-400"
                      >
                        {contactData.landLineNumbers[1]}
                      </Link>
                    </div>
                    <div className="flex">
                      <p className="mr-1 text-text-gray-300">Tel komórkowy:</p>
                      <Link
                        href={`tel:${contactData.phoneNumber}`}
                        aria-label="Telefon komórkowy"
                        title="Telefon komórkowy"
                        className="text-text-gray-400"
                      >
                        {contactData.phoneNumber}
                      </Link>
                    </div>
                    <div className="flex flex-wrap break-all">
                      <p className="mr-1 text-text-gray-300">Email:</p>
                      <Link
                        href={`mailto:${contactData.email}`}
                        aria-label="Our email"
                        title="Our email"
                        className="text-text-gray-400	"
                      >
                        {contactData.email}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
