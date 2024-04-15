import Green from "../../public/images/pricing/green.svg";
import Red from "../../public/images/pricing/red.svg";

export const links = [
  {
    name: "Features",
    link: "#",
  },
  {
    name: "Pricing",
    link: "#",
  },
  {
    name: "Overview",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
];

interface DetailCard {
  id: string;
  mainTitle: string;
  mainParagraph: string;
  price: string;
  month: string;
  packageDetails: {
    image: string;
    data: string;
    altTag: string;
  }[];
}
export const detailCards: DetailCard[] = [
  {
    id: "1",
    mainTitle: "Start",
    mainParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni est fugiat! Incidunt consectetur obcaecati impedit exercitationem quis",
    price: "50$",
    month: "Month",
    packageDetails: [
      {
        data: "Video Of Lesson",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Homework check",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Additional Practical Tasks",
        image: Red,
        altTag: "red symbol",
      },
      {
        data: "Monthly conferences",
        image: Red,
        altTag: "red symbol",
      },
      {
        data: "Personal advice from teachers",
        image: Red,
        altTag: "red symbol",
      },
    ],
  },
  {
    id: "2",
    mainTitle: "Advance",
    mainParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni est fugiat! Incidunt consectetur obcaecati impedit exercitationem quis",
    price: "75$",
    month: "Month",
    packageDetails: [
      {
        data: "Video Of Lesson",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Homework check",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Additional Practical Tasks",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Monthly conferences",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Personal advice from teachers",
        image: Red,
        altTag: "red symbol",
      },
    ],
  },
  {
    id: "3",
    mainTitle: "Premium",
    mainParagraph:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit magni est fugiat! Incidunt consectetur obcaecati impedit exercitationem quis",
    price: "100$",
    month: "Month",
    packageDetails: [
      {
        data: "Video Of Lesson",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Homework check",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Additional Practical Tasks",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Monthly conferences",
        image: Green,
        altTag: "green symbol",
      },
      {
        data: "Personal advice from teachers",
        image: Green,
        altTag: "green symbol",
      },
    ],
  },
];
