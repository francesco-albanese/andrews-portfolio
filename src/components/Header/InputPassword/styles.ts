import styled, { css } from "styled-components";

export const Container = styled.div<{ $showInput: boolean }>(
  ({ $showInput }) => css`
    display: flex;
    align-items: center;
    position: relative;

    #padlock-icon {
      cursor: pointer;
    }

    input {
      padding: 0;
      border: 0;
      height: 30px;
      padding-left: 5px;
      margin-left: 5px;
      margin-right: 5px;
      display: ${$showInput ? "block" : "none"};
    }

    #arrow-submit-icon {
      cursor: pointer;
      display: ${$showInput ? "block" : "none"};
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 187px;
      height: 1px;
      border-bottom: 1px solid black;
      display: ${$showInput ? "block" : "none"};
    }
  `,
);

export const StyledInputPassword = styled.input``;
