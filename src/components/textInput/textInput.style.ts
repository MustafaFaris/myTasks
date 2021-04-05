import styled from "@emotion/styled";

const StyledTextInput = styled.div`
  margin-bottom: 10px;

  .required {
    display: inline-block;
    margin-left: 3px;
    color: red;
  }

  &.has-error input {
    border-color: red;
  }

  label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #999;
    margin-bottom: 5px;
    text-transform: capitalize;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    border: solid 1px #ddd;
    transition: 0.2s ease;

    &::placeholder {
      color: #ddd;
    }

    &:focus {
      outline: none;
      border-color: #60e2dd;
    }
  }
`;
export default StyledTextInput;
