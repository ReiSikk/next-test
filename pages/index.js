import Anchor from "../components/Anchor";

export default function Home() {
  return (
    <h1>
      <Anchor href="/dogs/henry">Say hi to the DOGGO</Anchor>
    </h1>
  );
}
///ther links will prefetch on every hover and when they enter the viewport which is not good of data usage
