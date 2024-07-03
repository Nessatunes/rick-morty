import { Container } from "./style";
import GithubImage from "../../assets/github.svg";
import LinkedinImage from "../../assets/linkedin.svg";
import CodeImage from "../../assets/code.svg";

export const SocialLinks = () => {
  const GITHUB_LINK = "https://github.com/Nessatunes";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/dev-vanessa-antunes/";

  return (
    <Container>
      <div>
        <a href={GITHUB_LINK} target="_blank">
          <img src={GithubImage} alt="Github" />
        </a>

        <a href={LINKEDIN_LINK} target="_blank">
          <img src={LinkedinImage} alt="Linkedin" />
        </a>
      </div>

      <div>
        <img src={CodeImage} alt="Code" />
        Vanessa Antunes
      </div>
    </Container>
  );
};
