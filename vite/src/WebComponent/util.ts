export function register(prefix: string) {
  return (x: { tagName: string; WebComponent: any }) =>
    customElements.define(`${prefix}-${x.tagName}`, x.WebComponent);
}
