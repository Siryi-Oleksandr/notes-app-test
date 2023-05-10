const hashesProperties = {
  title: 'dcIHZdTmnawzhdKmopW6v6',
  description: 'ddRvJcIJPdUiotomofWR4Q',
  date: 'crWQtcOSnmW40Oh8oyW4j9',
};
const { title, description, date } = hashesProperties;

export function formatIncomingData(data) {
  if (!data) {
    return console.log('wrong incoming data');
  }
  const formatedNote = {
    id: data?.id ?? null,
    title: data.values.title ?? data.values[title],
    description: data.values.description ?? data.values[description],
    date: Number(data.values.date ?? data.values[date]),
  };
  return formatedNote;
}
