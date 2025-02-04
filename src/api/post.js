// axios

const posts = [
  { id :1, title :'title1', content:'content1', createAt:'2025-01-01'},
  { id :2, title :'title2', content:'content2', createAt:'2025-02-01'},
  { id :3, title :'title3', content:'content3', createAt:'2025-03-01'},
  { id :4, title :'title4', content:'content4', createAt:'2025-04-01'},
  { id :5, title :'title5', content:'content5', createAt:'2025-05-01'},
]

export function getPosts(){
  return posts;
}
