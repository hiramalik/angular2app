export class NoteData {
  createDb() {
    let notes = [
    {
      'id': 11,
      'name': 'Test',
      'category':'General',
      'text': 'Software testing is an investigation conducted to provide stakeholders with information about the quality of the product or service under test. Software testing can also provide an objective, independent view of the software to allow the business to appreciate and understand the risks of software implementation.'
    },
    {
      'id': 12,
      'name': 'Advice',
      'category':'General',
      'text': 'advicing'
    },
    {
      'id': 13,
      'name': 'Inspiration',
      'category':'General',
      'text': 'The best preparation for tomorrow is doing your best today.'
      },
    {
      'id': 14,
      'name': 'Idea',
      'category':'General',
      'text': 'An idea! This was the best idea I have got in a while.'
    }
  ];
    return {notes};
  }
}
