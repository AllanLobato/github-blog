import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../componentes/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/AllanLobato.png" />

      <ProfileDetails>
        <header>
          <h1>Allan Lobato</h1>

          <ExternalLink text="Github" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <ul>
            <li>
                <FontAwesomeIcon icon={faGithub} />
                Allan Lobato
            </li>
            <li>
                <FontAwesomeIcon icon={faBuilding} />
                Mogi das Cruzes
            </li>
            <li>
                <FontAwesomeIcon icon={faUserGroup} />
                6 seguidores
            </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  );
}
