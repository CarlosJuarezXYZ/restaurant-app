import type { SectionConfig, SectionNameRestaurant } from "../../domain/restaurant";
import { SectionNameRestaurant as SectionKeys } from "../../domain/restaurant";
import { FaKitchenSet } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";

export const SectionConfigErrorData: Record<
  SectionNameRestaurant,
  SectionConfig
> = {
  [SectionKeys.Dishes]: {
    icon: <FaKitchenSet />,
    title: "Ups… la cocina está teniendo un pequeño problema",
    description: "Por favor, comunícate conmigo a través de mi portafolio para poderresolverlo lo antes posible.",
  },
  [SectionKeys.Comments]: {
    icon: <FaComments />,
    title: "Ups… parece que los comentarios se tomaron un descanso",
    description: "Estamos trabajando para que puedas ver cada opinión sin problemas. Mientras tanto, puedes contactarme desde mi portafolio y con gusto lo reviso.",
  },
};
