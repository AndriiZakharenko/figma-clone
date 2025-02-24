import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const adjectives = [
  "Happy",
  "Creative",
  "Energetic",
  "Lively",
  "Dynamic",
  "Radiant",
  "Joyful",
  "Vibrant",
  "Cheerful",
  "Sunny",
  "Sparkling",
  "Bright",
  "Shining",
];

const animals = [
  "Dolphin",
  "Tiger",
  "Elephant",
  "Penguin",
  "Kangaroo",
  "Panther",
  "Lion",
  "Cheetah",
  "Giraffe",
  "Hippopotamus",
  "Monkey",
  "Panda",
  "Crocodile",
];

export function generateRandomName(): string {
  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return `${randomAdjective} ${randomAnimal}`;
}

export const getShapeInfo = (shapeType: string) => {
  switch (shapeType) {
    case "rect":
      return {
        icon: "rectangle.svg",
        name: "Rectangle",
      };

    case "circle":
      return {
        icon: "circle.svg",
        name: "Circle",
      };

    case "triangle":
      return {
        icon: "triangle.svg",
        name: "Triangle",
      };

    case "line":
      return {
        icon: "line.svg",
        name: "Line",
      };

    case "i-text":
      return {
        icon: "text.svg",
        name: "Text",
      };

    case "image":
      return {
        icon: "image.svg",
        name: "Image",
      };

    case "freeform":
      return {
        icon: "freeform.svg",
        name: "Free Drawing",
      };

    default:
      return {
        icon: "rectangle.svg",
        name: shapeType,
      };
  }
};
