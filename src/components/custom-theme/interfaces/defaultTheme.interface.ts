import { buttonPropertiesInterface } from "./buttonProperties.interface";
import { generalColorInterface } from "./generalColor.interface";
import { typesButtonInterface } from "./typesButton.interface";

export interface defaultThemeInterface {
  generalColors: generalColorInterface;
  components: {
    button: {
      types: typesButtonInterface;
      properties: buttonPropertiesInterface;
    };
  };
}
