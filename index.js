export default function cleanTelNumber(telNumber) {
  const re = /^\+?(\d*)\s?\(?(\d+)\)?\s?(\d+)-?\s?(\d+)-?\s?(\d+)/;
  let stateCode = `${telNumber.match(re)[1]}`;
  if (stateCode === '8') {
    stateCode = 7;
  }
  const result = `+${stateCode}${telNumber.match(re)[2]}${
    telNumber.match(re)[3]
  }${telNumber.match(re)[4]}${telNumber.match(re)[5]}`;
  return result;
}
