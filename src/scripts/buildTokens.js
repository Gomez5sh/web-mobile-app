const fs = require("fs");
const { choices, decisions } = require("../tokens");

const toKebabCase = (string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();

function transforTokens(parentKey, object) {
  const Objectkeys = Object.keys(object);

  return Objectkeys.reduce((TransformedTokens, Objectkey) => {
    const value = object[Objectkey];

    if (typeof value === "object") {
      const customProperty = parentKey
        ? `${parentKey}-${Objectkey}`
        : `${Objectkey}`;

      return `${TransformedTokens}\n\t${transforTokens(
        `${toKebabCase(customProperty)}`,
        value
      )}`;
    }

    return `${TransformedTokens}\n\t--${parentKey}-${toKebabCase(
      Objectkey
    )}: ${value};`;
  }, "");
}

const customProperties = `${transforTokens(null, choices)}${transforTokens(
  null,
  decisions
)}`;

function buildTokens() {
  const data = [":root {", `${customProperties}`, "}"].join("\n");

  fs.writeFile("./tokens.css", data, "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
  });
}

buildTokens();
