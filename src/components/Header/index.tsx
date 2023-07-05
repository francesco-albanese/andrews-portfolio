import { StyledHeader, IconsContainer } from "./styles";
import { ReactComponent as ExpandAll } from "assets/expand-all.svg";
import { useAppContext } from "context";
import { isPasswordSet } from "utils/readCookie";
import { InputPassword } from "./InputPassword";

/**
 * 
 * <div>how many elements do we need in here?</div>
      <div>we need the following:</div>
      <ul>
        <li>a padlock icon</li>
        <li>the icon should be clickable</li>
        <li>
          on click of the icon it expands and reveals an input type password and
          an arrow svg to submit
        </li>
        <li>
          on submit if the password is correct display an info box at the bottom
          of the screen and hide the padlock
        </li>
				<li>the padlock won't be shown if the cookie set in the browser is still valid</li>
				<li>set a document cookie in the browser with expiration of 2 hours</li>
				<li>display the ExpandAll svg if expandAll is pressed</li>
      </ul>
 */

export const Header = () => {
  const { expandAll } = useAppContext();
	const passwordIsSet = isPasswordSet();

  return (
    <StyledHeader>
      <div>Andrew Carter</div>
			<IconsContainer>
      {expandAll ? <ExpandAll /> : null}
			{ passwordIsSet ? null : <InputPassword /> }
			</IconsContainer>
    </StyledHeader>
  );
};
