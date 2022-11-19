import { FormEvent } from "react";

import { Envelope, Lock } from "phosphor-react";

import { Button } from "../../../../components/Button";
import { Checkbox } from "../../../../components/Checkbox";
import { Text } from "../../../../components/Text";
import { TextInput } from "../../../../components/TextInput";

interface FormProps {
  handleSignIn: (event: FormEvent) => void;
  isUserSignedIn: boolean;
}

export function Form({ handleSignIn, isUserSignedIn }: FormProps) {
  return (
    <form
      onSubmit={handleSignIn}
      className="flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4"
    >
      {isUserSignedIn && <Text>Login realizado!</Text>}
      <label htmlFor="email" className="flex flex-col gap-3">
        <Text className="font-semibold">Endereço de e-mail</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>
          <TextInput.Input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
          />
        </TextInput.Root>
      </label>

      <label htmlFor="password" className="flex flex-col gap-3">
        <Text className="font-semibold">Sua senha</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>
          <TextInput.Input
            id="email"
            type="password"
            placeholder="************"
          />
        </TextInput.Root>
      </label>

      <label htmlFor="remember" className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Text size="sm" className="text-gray-200">
          Lembrar de mim por 30 dias
        </Text>
      </label>

      <Button type="submit" className="mt-4">
        Entrar na plataforma
      </Button>
    </form>
  );
}
