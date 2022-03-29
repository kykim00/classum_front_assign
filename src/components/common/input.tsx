import styled from "styled-components";

interface TextInputStyledProps {
  width?: string;
  fontSize?: string;
  border?: string;
}

interface TextInputProps extends TextInputStyledProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const TextInput = ({
  onChange,
  value,
  width = "100%",
  fontSize = "16px",
  border,
  placeholder,
}: TextInputProps) => {
  return (
    <>
      <Input
        onChange={onChange}
        value={value}
        width={width}
        fontSize={fontSize}
        border={border}
        placeholder={placeholder}
      />
    </>
  );
};

const Input = styled.input<TextInputStyledProps>`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  border: none;
  box-sizing: border-box;
  line-height: 135%;
  &:hover {
    outline: 0;
  }
  &:focus {
    border: none;
    outline: none;
    transition: 0.1s ease;
    border-bottom: 2px solid ${({ theme }) => theme.colors.purple};
  }
`;
