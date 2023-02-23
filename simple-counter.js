import { html, define } from "hybrids";
  
export const text = "Hello World";


function increaseCount(host) {
  host.count += 1;
}

const simpleCounter = define({
  tag: "simple-counter",
  count: 0,
  render: ({ count }) => html`
    <button onclick="${increaseCount}">
      Count: ${count}
    </button>
  `,
});

export default  simpleCounter