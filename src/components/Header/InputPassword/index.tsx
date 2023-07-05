import { ReactComponent as Padlock } from "assets/padlock.svg";
import { ReactComponent as ArrowSubmit } from "assets/arrow-submit.svg";
import { Container, StyledInputPassword } from "./styles";
import { useState, useRef, useEffect } from "react";

export const InputPassword = () => {
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    try {
      const result = await fetch(
        "https://7i0hemdmw2.execute-api.eu-west-2.amazonaws.com/dev/password",
        {
          method: "POST",
          body: JSON.stringify({ password }),
        },
      );
      const response = await result.json();
      
      if (!result.ok) {
        throw new Error(response.message);
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e);
      }
    }
    setShowInput(false);
  };

  useEffect(() => {
    if (showInput) {
      inputRef?.current?.focus();
    }
  }, [showInput]);

  return (
    <Container $showInput={showInput}>
      <Padlock onClick={() => setShowInput(prevShow => !prevShow)} />
      <StyledInputPassword
        type="password"
        name="password"
        id="password"
        placeholder="password"
        ref={inputRef}
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <ArrowSubmit onClick={handleSubmit} />
    </Container>
  );
};
