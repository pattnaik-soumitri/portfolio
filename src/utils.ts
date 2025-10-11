export const camelCaseToTitleCase = (camelCaseString: String): String => {
  if (!camelCaseString) {
    return "";
  }

  // 1. Known Keyboards
  if (camelCaseString.toLowerCase() == 'devops') {
    return 'DevOps';
  }

  // 2. Wrap the text around quotes to presrve casing
  if (
    (camelCaseString.charAt(0) == "'" && camelCaseString.charAt(camelCaseString.length - 1) == "'")
    ||
    (camelCaseString.charAt(0) == '"' && camelCaseString.charAt(camelCaseString.length - 1) == '"')
  ) {
    return camelCaseString.replaceAll(camelCaseString.charAt(0), '');
  }

  // 1. Insert spaces before uppercase letters (except the first character)
  const spacedString = camelCaseString.replace(/([A-Z])/g, ' $1');

  // 2. Capitalize the first letter of each word and convert the rest to lowercase
  const titleCaseString = spacedString
    .split(' ') // Split into words
    .map(word => {
      if (word.length === 0) {
        return '';
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize first letter, lowercase rest
    })
    .join(' ') // Join words back with spaces
    .trim(); // Remove any leading/trailing spaces

  return titleCaseString;
}
