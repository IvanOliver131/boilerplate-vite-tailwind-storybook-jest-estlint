import axios from "axios";

import { FormEvent, useState } from "react";

import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await axios.post("/sessions", {
      email: "ivanoliver131@gmail.com",
      password: "123456789",
    });

    setIsUserSignedIn(true);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <Header />
      <Form handleSignIn={handleSignIn} isUserSignedIn={isUserSignedIn} />
      <Footer />
    </div>
  );
}
