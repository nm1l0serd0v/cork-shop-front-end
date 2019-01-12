export const findLanguageById = (id, languages) => {
  return languages.filter((language) => (language.id === id))[0]
}
