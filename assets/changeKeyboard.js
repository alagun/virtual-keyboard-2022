export default function changeKeyboard(mode, layout, row) {
// console.log(layout[mode][0])

  const res = layout[mode][0].split(' ');
  // console.log(res)
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < res.length; i++) {
    row.children[i].firstElementChild.setAttribute('data-content', res[i]);
  }
// return mode
// console.log(layout['caps'])
}
