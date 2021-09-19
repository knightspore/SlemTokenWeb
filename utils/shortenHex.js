function shortenHex(hex) {
  const res = `${hex.slice(0, 4)}..${hex.slice(40, hex.length)}`;
  return res;
}

export default shortenHex;
