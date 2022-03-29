const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const words = lorem.split(" ");
const totalLength = words.length;

export default function randomPhrase(wordsCount = 3) {
  const indexRandom = Math.round(0 + Math.random() * (totalLength - 1));

  const selected = words.slice(indexRandom, indexRandom + wordsCount);

  const phrase = selected.join(" ");

  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
}
