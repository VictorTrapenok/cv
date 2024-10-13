export function linkedInConversionAndGo(e) {
  if (e) {
    e.preventDefault();
  }

  // @ts-ignore
  window.gtag_report_conversion("https://www.linkedin.com/in/victor-trapenok/");
}

// @ts-ignore
window.linkedInConversionAndGo = linkedInConversionAndGo;

export function calendlyConversionAndGo(e) {
  if (e) {
    e.preventDefault();
  }

  // @ts-ignore
  window.gtag_report_calendly("https://calendly.com/viktor-trapenok/");
}
