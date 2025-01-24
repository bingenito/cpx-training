export function getLanguage(docs, language) {
  return docs.filter((doc) => doc.fields.slug.includes(`/${language}/`));
}

export function getCurrentLanguage(slug, languages) {
  let language;
  const slugsAr = slug.split('/');
  languages.forEach((v) => {
    if (slugsAr.includes(v)) {
      language = v;
    }
  });
  return language;
}
